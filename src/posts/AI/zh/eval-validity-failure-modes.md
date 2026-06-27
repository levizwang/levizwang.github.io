# 你的基准在骗你：智能体评测数据的有效性失效模式

所有人都在卷怎么把智能体**训**得更强。但真正稀缺的是另一件事：能告诉你智能体到底强不强的——**高难度、不掺水的评测数据。**

我搭多智能体流水线，把领域专家的真实文件变成智能体考题——模型不真读文档就答不出来的题。有意思的工程不在"生成"，生成很容易。有意思的工程在**有效性**——而毁掉有效性的 bug 往往很安静。它们不崩溃，只是产出一个**看着难、其实几乎什么都没测到**的 benchmark。

下面是我反复遇到的三类失效，以及流水线对每一类的防御。

## 一、可蒙性（Guessability）

最危险的题，是那种看着难、其实能蒙的题。模型拿了高分，你以为它有能力，于是发布了一个奖励"好先验"而非"真功夫"的 benchmark。

对策是一个**去答案的"防蒙"探针**。我在三种条件下评每道题：

```python
def probe(item, model, judge):
    # E1: 文件 + 参考答案  -> 理论上限
    e1 = judge(model.solve(item.files, answer=item.reference), item.rubric)
    # E2: 只给文件          -> 真实能力
    e2 = judge(model.solve(item.files), item.rubric)
    # E3: 不给文件，只有题面 -> 纯蒙
    e3 = judge(model.solve(files=None), item.rubric)
    return e1, e2, e3

def is_valid(e1, e2, e3, floor=0.15):
    # 一道好题，在文件被抽走后会坍塌。
    return (e3 < floor) and (e2 < e1)
```

如果 E3 不向 0 坍塌，说明题面在泄漏信息，或者题目靠常识就能蒙。无论哪种，它都没在测你以为的东西。而如果 E2 居然比 E1 还高——这在"答案有用"的前提下是不可能的——那你抓到的是 judge 噪声，不是能力。E3 是我知道的最便宜、也最无情的有效性检查。

## 二、题面 ↔ rubric 泄漏

第二类更隐蔽：**题目**或 **rubric** 里悄悄藏了答案。一个过度具体的题面，写着"从 `Model!C14` 取 EBITDA"，其实已经替模型做完了最难的部分——定位证据。真实工作可不会附上单元格坐标。

所以流水线把"去泄漏"当成一等公民。一部分是无聊、机械的——那些永远不该到达候选者手里的内部 token：

```python
LEAK_PATTERNS = [
    r"/Users/\S+", r"[A-Za-z]:\\\\\S+",     # 绝对路径
    r"\b[a-f0-9]{32,}\b",                     # cache hash
    r"\b(D[1-8]|difficulty[_-]?\d)\b",       # 内部难度旋钮
    r"sheet=\w+![A-Z]\d+",                    # 预先定位证据的锚点
    r"<answer>.*?</answer>",                   # 答案本身
]

def scrub(text):
    hits = [p for p in LEAK_PATTERNS if re.search(p, text, re.S)]
    if hits:
        raise LeakageError(f"题面/rubric 泄漏: {hits}")
```

但更深的检验是语义层面的：**如果一个人光读 rubric 就能把题做出来，那这条 rubric 就是坏的。** 一个独立 reviewer 只读 rubric（绝不看文件）去尝试作答；如果他能答出来，rubric 就把考试拱手送人了。

## 三、judge 噪声

如果你用 LLM 当裁判，那 judge 就是你测量仪器的一部分——而一个有噪声的仪器会制造假信号。对策都不性感：固定并对齐裁判模型；给它**原子化**的 rubric 条目而不是"凭感觉"；以及收益最高的一招——在"根本没东西可推理"时，**给它的推理上闸**：

```python
def judge_one(criterion, response, evidence):
    # 当输入为空/不可读/跑题时，不上闸的 judge 会幻觉出一个
    # 自信的 "reason" 和一个分数。拒绝让它这么干。
    if not evidence or is_unreadable(response):
        return Score(hit=False, reason="证据不足，无法判定")
    return llm_judge(criterion, response, evidence)
```

这一个 guard 消掉了一整类假阳性——模型其实什么可用的东西都没产出，但 judge 被要求填一个 `reason` 字段，就顺从地编出一个听起来合理的理由和一个及格分。

## 把三者串起来的原则：跨厂商独立性

三个对策底下是同一条设计铁律：**出题的模型，绝不去核验或评判它自己出的题。** 生成、核验、判分跑在不同的模型族上。一旦同一个模型既出题又解题，你就会得到"自己出题自己判"的幻觉——模型自信地认可自己的错误。

```python
assert author.vendor != verifier.vendor != judge.vendor
```

让每个节点都能在厂商间替换（并**强制**各阶段使用不同厂商），不是基础设施上的小讲究，而是让评测保持诚实的关键。

## 读这三个数字

一旦你有了每道题的 E1/E2/E3，它们的**形状**比任何单一分数都说明问题：

| E1 | E2 | E3 | 诊断 |
|----|----|----|------|
| 高 | 高 | **高** | 能蒙 / 泄漏——**删掉这道题** |
| 高 | ~E1 | 低 | 参考答案没起作用——judge 噪声或题太水 |
| 高 | 中 | 低 | 健康：有区分度、依赖文件 |
| 低 | 低 | 低 | 太难或 key 错了——回去查账本 |

## 交付的应该是 validity report，而不只是题目

最常见的错误，是把有效性当成一种内部感觉。"这题看着挺难"不是产物。"出题者觉得它有证据"也不是产物。一个可用的 eval item 应该随附一份小的 validity report，解释它为什么配进入 benchmark。

这份 report 不需要暴露私有 prompt 或内部阶段名，只需要让题目可审计：

```yaml
item_id: office_reasoning_042
claim: "需要把模型假设与 memo、spreadsheet 交叉核对。"
files_required:
  - model.xlsx
  - memo.pdf
ability_target:
  - 定位相关证据
  - 核对冲突数值
  - 拒绝无证据推断
validity_checks:
  anti_guessing: pass
  leakage_scan: pass
  rubric_only_solver: fail_to_solve
  judge_reason_guard: pass
known_traps:
  - "不同文件单位不同"
  - "某个来源给的是范围，不是点估计"
review_decision: ship
```

这份 report 会改变讨论方式。如果之后某个模型异常高分，你知道先攻击哪条假设。如果 reviewer 说题不公平，你可以直接检查证据和 trap 设计。如果线上失败，你能判断问题出在题面、rubric、源文件，还是 judge。

## 真能抓问题的 review workflow

我更信任这样的流程：

1. **从证据写题，不从直觉写题。** 作者应该被 evidence ledger 或等价证据产物约束。
2. **跑三条件探针。** 文件+答案、只给文件、只给题面。抽走文件还高分的题不该放行。
3. **让 rubric-only reviewer 尝试作答。** 如果只读 rubric 就能答出来，题面或 rubric 泄漏太多。
4. **用已知坏回答测试 judge。** 包括空输出、跑题输出、看似合理的幻觉输出。能放过这些的 judge 还不能上线。
5. **人工看 disagreement。** metric、judge、人类 reviewer 不一致的地方，最有信息量。
6. **把诊断写下来。** 一道题通过 review 的理由，应该 durable 到下个月别人还能审计。

关键不在于每一步都自动化，而在于每一步都产出证据。一个 reviewer 说"看起来可以"不如一句短 note 有用："rubric-only 尝试失败，因为题面没有披露证据位置。"

## 失效题目怎么处理

validity check 失败不都等于重生成。把所有失败都当成 regenerate，会浪费很多有价值材料。我通常分四类：

| 失效 | 常见处理 |
|------|----------|
| 题太泛，靠常识能蒙 | 围绕更具体的跨文件依赖重写问题 |
| 题面泄漏答案 | 清洗题面/rubric 后重跑探针 |
| judge 放过空输出或跑题输出 | 先修 judge guardrail，不动题目 |
| 源证据缺失或冲突 | 改成资料不足题，或直接删除 |

第四类最有意思。有时一道"坏题"不是因为它不可做，而是因为原计划的答案不可得；如果改成识别边界的题，它反而很有价值。这类题最能照出模型能不能说"信息不足"，而不是硬编一个数字。

## 判断 benchmark claim 是否可信的清单

别人给我看一个 agent benchmark 结果时，我会先问：

- 抽走文件后模型表现怎样？
- reviewer 只读 rubric 能不能做出来？
- 每个 load-bearing fact 有没有源文件 locator？
- judge 有没有在已知坏输出上失败？
- 生成、核验、判分是否分离？
- 有没有"资料不足"题，还是每题都强迫给数值答案？
- 失败样本是被诊断和重跑，还是被静默丢掉？

如果这些问题很难回答，分数也许仍然有参考价值，但它还不是一个可信的测量仪器。

## 结语

在评测里，真正伤到你的 bug 不是崩溃，而是那道"看着难"的题。大多数 benchmark 都在静默失效，唯一的破解之道是去攻击你自己的数据：抽掉答案、洗掉泄漏、怀疑 judge，并且永远不要让一个模型把环闭合在自己身上。
