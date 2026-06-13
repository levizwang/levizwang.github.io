# 别信你自己生成的数据：合成数据的对抗式质检

合成数据有一件让人不安的事：它**天生就显得合理**。生成它的那个模型，和之后会被它骗到的那个模型，是同一类模型。"显得合理"不是质量的信号——它恰恰就是失效的形状。

我搭过一些流水线，专门生成逼真、以文档为依据的 case——包括合成病历，每份都打包成一组 `.docx` 和 `.xlsx`，配一份评分 rubric。一份生成的病历可以读起来天衣无缝：病种对、语气对、化验值也合理。但它仍然可能藏着一个和自己 hematocrit 悄悄矛盾的 hemoglobin。人扫一眼，点头；模型扫一眼，也点头。这个错误能活下来，**正是因为**一切都看起来对。

所以我奉行的规则是：**不要 review 你自己的数据，去攻击它。**

## 三个角色，刻意分开

我反复回到的架构是 Actor → Critic → Monitor（ACM），而"分开"本身就是重点。

- **Actor** 生成 case——文档和 rubric。
- **Critic** 是个对手，唯一的工作就是找出哪里**错了**。它不写赞美的散文，它产出**结构化的 findings**。
- **Monitor** 是仲裁者。它读 findings，裁决下一步动作，强制硬性约束，而不是和 Actor 讨价还价。

Critic 的输出刻意做成结构化——能数、能排序、能路由的 finding 才是能行动的 finding；一段"整体看着还行"什么都不是：

```json
{
  "case_id": "onc_4471",
  "severity_counts": { "critical": 1, "major": 2, "minor": 3 },
  "findings": [
    {
      "id": "F1",
      "severity": "critical",
      "category": "derived_value_inconsistency",
      "file": "labs.xlsx",
      "location": "CBC!D8",
      "detail": "MCV 102 fL 与 HCT 0.31 / RBC 4.6 矛盾（推得约 67 fL）。"
    }
  ]
}
```

Monitor 消费它并仲裁——注意它只能 *revise / rework / resynthesize / ship*，没法把一个 critical 辩解掉：

```python
def monitor(findings):
    sev = findings["severity_counts"]
    if sev["critical"] > 0:
        return "rework"            # 必须修复并重新 review
    if sev["major"] >= 3:
        return "resynthesize"      # 烂到没法补，重新生成
    if sev["major"] > 0:
        return "revise"            # 定点修改后再 review
    return "ship"
```

生成者不能给自己判分，理由和"不让学生批自己的卷子"一样：一个模型为它刚产出的东西辩护起来毫无保留。你需要一个**激励是去怀疑**的角色。

## 真正的收获不是那个 loop，而是一张分类学

把"生成—检查" loop 接起来，谁都会。真正从大规模跑这个 loop 里拿到的，是更值钱的东西：一张**关于"自生成数据会以哪些具体方式撒谎"的分类学**。单轮生成器会不知疲倦地制造这些缺陷，而人工 reviewer 几乎永远没法靠手全抓住。给它们命名，才是让 QC 变得系统化的关键。

那些反复出现的惯犯，大致按咬人频率排序：

- **派生值不一致（Derived-value inconsistency）。** 相互依赖的量对不上。一个算出来的比率和它所基于的分量矛盾；一个化验值撑不起它本该支持的诊断。生成器局部地吐出每个数字，从不检查把它们绑在一起的那套算术。这是头号缺陷，对随便看看的人完全隐形。好消息是：一旦命名，它往往是**确定性可检查的**：

```python
def check_cbc(row):
    # MCV (fL) ≈ HCT / RBC × 1000，RBC 单位 10^12/L
    implied_mcv = (row.hct / row.rbc) * 1000
    if abs(implied_mcv - row.mcv) > 5:
        yield Finding("critical", "derived_value_inconsistency",
                      f"MCV {row.mcv} vs 推得 {implied_mcv:.0f}")
```

- **跨文件一致性锁（Cross-file consistency locks）。** 同一个事实，在它出现的**每一处**都必须一致——`.docx` 和 `.xlsx` 里的日期、三个文件里的患者 ID、汇总和它求和的那些行。生成器在各自的小上下文里写每个文件，于是漂移；把共享事实当成一把每个文件都必须满足的锁：

```python
def check_locks(files, locked_fields=("patient_id", "admit_date", "dob")):
    for field in locked_fields:
        values = {f.name: f.get(field) for f in files if f.has(field)}
        if len(set(values.values())) > 1:
            yield Finding("critical", "cross_file_conflict",
                          f"{field} 在文件间不一致: {values}")
```

- **时间线自洽（Timeline coherence）。** 事件、报告日期、甚至文件修改时间戳，物理上不可能共存——结果的日期早于产生它的那次检查、出院早于入院，或者那个最典型的合成痕迹：**所有东西**都是今天的日期。
- **模板 / 跨类污染（Template / cross-category contamination）。** 一份 case 套着错误文档的骨架——拿心内科模板搭出来的肿瘤 workup、化验结果躺在散文文档里而不是它本该在的表格里。这是"被生成、而非被经历"的结构性指纹。
- **来源 / 水印泄漏（Provenance & watermark leakage）。** 作者元数据、生成器指纹、绝对路径、内部 benchmark 标记——任何能让一个**被训练过的**模型认出"这是合成的"或"这来自数据集 X"、从而去模式匹配而不是推理的东西。泄漏不会让单个 case 失败，它会让**整个 benchmark** 失败，因为它变得可以被刷。
- **文件完整性（File integrity）。** 那个无聊却致命的：因为写库残留而根本打不开的文件，或撑爆页面的表格。一个打不开的 `.xlsx`，内容再好也是零分。

如果你的 QC 没有在显式地猎杀上面每一项，它就不是在做 QC，而是在凭感觉点头。

## 让 QC 会复利

把这件事从"昂贵"变成"**值钱**"的诀窍很简单：Critic 抓到的每一个缺陷，都变成一个可复用、有名字的 **bad-pattern detector**。廉价、确定性的那些直接作为代码跑，在你给模型花任何一个 token 之前就跑掉；需要判断的那些，则带着具名 pattern 交给 Critic。

```python
BAD_PATTERNS = []

def detector(category, severity):
    def register(fn):
        BAD_PATTERNS.append((category, severity, fn))
        return fn
    return register

@detector("file_integrity", "critical")
def opens_cleanly(case):
    for f in case.office_files:
        if not can_open(f):           # openpyxl / python-docx 往返
            yield f"{f.name} 打不开"

def run_cheap_checks(case):
    return [(cat, sev, msg)
            for cat, sev, fn in BAD_PATTERNS
            for msg in fn(case)]
```

这改变了经济账。模型的临场判断不会累积，一个不断变长的"具名失效模式"库会累积。你的 QC 每周都肉眼可见地变聪明；而且同样重要的是，你能**准确地告诉一个新同事"好"到底是什么意思**——因为那是一张清单，不是一种感觉。

## 把你昂贵的模型用在判断真正发生的地方

不是每个角色都需要你最强的模型。找出一个损坏的表格、一条泄漏的路径，是廉价、机械的活——直接用代码跑，或用一个又小又快的模型。裁决一个临界的临床表现"是否真实到可以交付"，才是真正的判断——那才是昂贵的仲裁者挣回它成本的地方。把模型强度匹配到这次裁决的难度，基本上就是你如何让一个对抗式 loop 在规模上还付得起钱。

## 同样的压力也该压在 rubric 上

对手还有一个必须看的地方：rubric 本身。一份任何读者都能满足的 rubric，什么都没测到。所以同一个 loop 也会去重新平衡它——足够多的正向检查以保证区分度、被 cap 住的负向检查以免单个惩罚一手遮天、以及 rubric 文本里不能有泄漏：

```python
def rubric_is_healthy(rubric):
    pos = [c for c in rubric if c.weight > 0]
    neg = [c for c in rubric if c.weight < 0]
    assert len(pos) >= 2 * len(neg), "正向信号不足"
    assert all(abs(c.weight) <= 0.5 * sum(p.weight for p in pos) for c in neg), \
        "单个惩罚能一手遮天"
    assert not any(leaks_path_or_answer(c.text) for c in rubric), \
        "rubric 文本泄漏了答案"
```

一份 case 的上限，就是给它判分的那份 rubric；而 rubric 会朝着"容易通过"漂移，除非有东西在主动顶回去。

## 这个教训会泛化

如今生成很容易，已经被商品化了。**规模化的对抗式核验，才是护城河。** 而这个教训和医疗数据无关——它关于任何你自己生成的数据集。它会以"看起来很合理"的方式对你撒谎，再多小心翼翼的 prompt 也修不好，因为产生数据的东西和审查数据的东西共享同一套盲点。唯一持久的防御，是去造一个**整个工作就是怀疑**的东西——然后，把它抓到的一切都记下来。
