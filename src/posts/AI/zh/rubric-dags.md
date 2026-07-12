# 把 Rubric 做成 DAG：给过程打分，而不只是结果

我做评测题目合成流水线：把领域专家的真实文件变成智能体考题，由 LLM judge 按 rubric 逐条判分。审查精力大多花在 judge 上，比如用哪个模型、prompt 怎么写、和人工判分对不对得上，rubric 则被当成一个普通的文本字段。实际上 rubric 至少同样值得审查，因为它的行为更像一段由 judge 解释执行的程序，而一段没有类型、没有控制流、没有测试的程序，出了问题不会报错，只会静默给出错误的结果。

本文写的是我们在平铺 rubric 上吃过亏之后收敛出来的 schema，以及一个照样上了线的 judge bug、本可以第一天就抓住它的测试，和保持系统自洽的修复规则。

## 平铺 rubric 在哪里失效

平铺 rubric 就是一张加权检查表："得出结论 X，4 分；提到 Y，2 分。"每一行独立判分，这个独立性带来两类失效。

第一类是蒙对结论。一道题问赔偿金额、申报截止日或合规结论，模型完全可能没做任何分析就落在正确答案上：先验合适、取整凑巧，或者题面里有泄漏。平铺 rubric 无从检查这个数字是怎么得出的，两种情况都照给全额结论分。这样测出来的其实是答案有多好蒙，而不是推理有没有证据支撑。

第二类是给幻觉步骤发部分分。模型写出一段自信的中间分析，引用不存在的条款、编造一条时间线，结论错了，仍然能拿到不低的部分分，因为每一步看起来像样的分析都能对上某一行的措辞。rubric 奖励的是看起来像做了工作的文字，却不核对工作有没有真的发生。

两个缺陷的根源相同：rubric 不了解它所评判的推理的结构。行与行天生独立，但真实工作里的步骤并不独立。

## Schema：带类型的行和依赖边

我们的做法是给每一行标类型，并把结论行接到它必须依赖的过程行上：

```yaml
item: breach_notice_review_017
rows:
  - id: P3
    type: process
    weight: 2
    text: "定位到供货协议 §8.2 中的 45 天补救期条款并原文引用。"
  - id: P4
    type: process
    weight: 2
    text: "从邮件往来中确认通知的送达日是 3 月 3 日而非 3 月 1 日。"
  - id: O2
    type: outcome
    weight: 4
    depends_on: [P3, P4]
    text: "得出补救窗口于 4 月 17 日届满的结论。"
  - id: N1
    type: negative
    weight: -2      # 有界：负分可以清零得分，但不会把整题扣成负数
    text: "引用了任何给定文档中都不存在的条款编号。"
  - id: H1
    type: hurdle
    weight: 0       # 不加分也不减分；一旦命中，整题记零分
    text: "交付物凭空捏造了源文件中不存在的和解金额。"
```

四种行类型加一个强制字段：

- **process** 行给步骤打分：定位证据、确认事实、调和两个互相矛盾的来源。按设计它们占 rubric 的大部分。
- **outcome** 行给结论打分，但只有它 `depends_on` 的全部 process 行都命中时才能命中。没有定位补救期、也没有确认送达日的"4 月 17 日"，按蒙对处理。这一条规则就消除了蒙对结论的得分。
- **negative** 行只为具体、点名的错误行为扣分，而不是笼统的"质量"罚分。它有界：多条负分可以把整题清零，但不会扣成负数，避免单一坏习惯主导整个测量。
- **hurdle** 行权重为 0，只用于否决。捏造数字、泄漏参考答案的措辞、无视强制拒答要求，只要命中一条 hurdle，整题记零分。它刻意不带分值，所以满足它得不到任何好处。
- 逐行判分理由是强制的：judge 必须引用交付物中满足该行的原文位置。命中却给不出证据引用，按审计失败处理。后来能发现 judge 引用了交付物里根本不存在的证据，靠的也是这些引用。

## 覆盖度下限写在代码里

rubric 还有一种更不显眼的退化方式：覆盖度坍塌。在 prompt 里要求 LLM 作者写"一份详尽的、以过程行为主的 rubric"，今天可能拿到 12 行，明天拿到 40 行，process 和 outcome 的比例也随题面措辞漂移。prompt 里的数字要求执行得并不可靠，所以我们把下限放进校验器：

```python
def validate(rubric):
    # 覆盖度下限，在这里强制执行，而不是写进出题 prompt
    assert len(rubric.rows) >= 25
    assert n_rows(rubric, "process") >= 15 and n_rows(rubric, "outcome") >= 10
    for row in rubric.rows:
        # 依赖边只允许指向 process 行，且整体必须构成 DAG
        assert all(rubric[d].type == "process" for d in row.depends_on)
    assert is_acyclic(rubric)

def score(rubric, verdicts):
    hit = {r.id: verdicts[r.id].hit for r in rubric.rows}
    if any(hit[r.id] for r in rubric.rows if r.type == "hurdle"):
        return 0.0                                   # 一票否决
    total = 0.0
    for r in rubric.rows:
        if r.type == "outcome" and not all(hit[d] for d in r.depends_on):
            continue                                 # 答案对但过程缺失，按蒙对计
        if hit[r.id]:
            total += r.weight
    return max(total, 0.0) / max_positive(rubric)    # 负分有界
```

我们的下限是每题至少 25 行，其中 process 至少 15 行、outcome 至少 10 行。具体数字不如执行位置重要：没达到下限的生成会在这个阶段直接失败，走不到 judge 面前。同一个校验器也检查图的约束，即 outcome 只能依赖 process 行、整体无环，所以计分函数在判分时不需要处理畸形的图。

## 我们上线了一个丢掉依赖边的 judge

如果 judge 不理会 schema，前面这些都没有用。我们就遇到过：有两天时间，生产 judge 一直在静默丢弃 `depends_on` 字段。它照常解析每一行、照常判分、照常写出流畅的逐行理由，没有任何报错，分数分布看起来也正常。但每一条 outcome 行实际上退化回了平铺，蒙对的结论在拿满分，而磁盘上的 schema 写着这不可能。

看板没有抓到这个问题。抓到它的是一份采纳清单：对每个 schema 字段，都要在一道真实题目上演示这个字段确实改变了 judge 的行为。`depends_on` 的演示失败了，顺着这一次失败查下去，整类 bug 都暴露了出来。同样的习惯，也就是手动拿真实题目过一遍 judge、逐条读判词而不是只看看板，后来还发现 judge 把正向命中率 91-93% 的题目一票判零，原因是它把材料内引用误判成了答案泄漏。

有两个测试本可以在第一天就抓住丢边问题：

```python
def test_dependency_cascade_fires():
    item = load_reference_item()                     # 按不变量，参考答案应拿满分
    sabotaged = delete_step(item.reference, "P4")    # 只删掉一个有依据的步骤
    v = judge(sabotaged, item.rubric)
    assert v["P4"].hit is False                      # 被删的步骤应判未命中
    assert v["O2"].hit is False                      # 级联应当触发
    assert "P4" in v["O2"].justification             # judge 需要说明扣分原因

def test_judge_echoes_the_graph():
    v = judge(any_deliverable, item.rubric)
    # 复述不出依赖边，说明 judge 没有用到它们
    assert v.resolved_edges == item.rubric.edges
```

往返测试要求 judge 回显它实际解析出的依赖图，再与 rubric 里的图做 diff。破坏测试从一份已知满分的答案出发，只删掉一个被依赖的步骤，然后要求级联触发且归因正确。两个测试都不需要第二个模型，也不需要人工标注。我们只是没写，因为 judge 看起来一直正常。

## 参考答案扣分的修复规则

DAG rubric 自带一条让它可维护的不变量：**参考答案必须拿满分。** 如果标准答案在自己的 rubric 上都拿不到满分，那么 rubric 和答案至少有一个是错的。我们的做法是用与生产等价的 judge 对每份参考答案做 oracle 判分，并修复每一处扣分。

在平铺 rubric 下，"参考答案丢分"是一个无差别的问题。在 DAG rubric 下，每处扣分都能归入四类之一，每类对应不同的修法：

| 扣分类型 | judge 看到了什么 | 正确修法 |
|---|---|---|
| 直接未命中 | 参考答案确实没满足某一行 | 修答案（缺了一步）或修该行（要求本身不可满足） |
| `depends_on` 级联 | outcome 本身满足，但上游某条 process 行未命中 | 修上游：缺失的步骤或错误的边，不动已满足的 outcome 行 |
| negative 命中 | 参考答案做了某条负分行禁止的事 | 两者必有一错；判定是哪个，只改那一个 |
| hurdle | 否决行在标准答案上触发 | 几乎都是 rubric bug 或被污染的源材料，需要停下来查根因 |

级联这一类最容易修错。参考答案因为依赖级联丢掉一条 outcome 时，这条 outcome 行本身是满足的，judge 的判词里写得很清楚。缺陷在上游：要么答案确实跳了一步（修答案），要么这条 process 行要求了材料支撑不了的东西（修该行），要么这条边描述的依赖并不真实存在（修边）。删掉或放宽那条已满足的 outcome 行确实能把分数修回来，但也去掉了这套 schema 本来要提供的区分度。修复按规定必须最小改动：只改诊断出的原因，然后盲重判，确认其他行的判定没有变化。上一轮交付里最难修的几处扣分根本不是 rubric 的问题，根因是注入的噪声文件内部自相矛盾，最后靠修改材料里的具体段落解决，没有弱化任何一行。

## 用盲解和带提示重解检验 process 行

还剩一个问题：这些 process 行对应的是真实解题者必须执行的步骤，还是作者看过答案之后倒推出来的一套像样的分解？

我们用一个两遍的试做阶段来做经验检验。先让一个解题模型盲解：隔离沙箱里只有输入文件，没有 rubric、没有参考答案、没有测试。然后带提示重解：给它参考答案，并把它自己的盲解尝试带进上下文，大致相当于学生考完试马上读参考答案。

然后对两份 transcript 做 diff。真正承重的 process 行，会表现为盲解在该处卡住、带提示后在该处通过。从不出现在 diff 里的 process 行多半是装饰，通常只是把结论改写成了步骤的形式，需要重写或删掉的正是这类行。同一对 transcript 也可以用来检查依赖边：如果盲解没有命中依赖的 process 行就命中了某条 outcome，要么这条边是错的，要么这道题可以蒙对，两种情况都需要在交付前弄清楚。

## 结语

把 rubric 当作 judge 要执行的程序来对待：

- 给行加类型（process、outcome、negative、hurdle），因为"满足 X 得 4 分"本身没有语义。
- 给 rubric 加控制流：outcome 由 `depends_on` 门控、负分有界、权重为 0 的否决行，让没有过程的正确答案按蒙对计分。
- 静态检查写在代码里：行数和类型下限、依赖边只指向 process 行、无环。只靠 prompt 约束不住这些。
- 针对 judge 写测试：回显依赖图、破坏一份满分答案。judge 可能丢掉字段而不产生任何报错。
- 遵守修复规则：修诊断出的原因，不动已满足的行，基准是"参考答案必须拿满分"这条不变量。

平铺 rubric 交给 judge 的是一串互相独立的布尔值，指望它们加起来就是一次测量。带类型、带测试的版本成本更高，但每一部分都可以在题目进入生产之前检查到。
