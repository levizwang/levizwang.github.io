# Agent-as-Judge 还是你手写的 Metric？一次诚实的对比

"用 LLM 当裁判就好了。" 如今碰到任何打分问题，这都是默认答案。可它真的比你自己写的确定性 metric 更好吗？代价又是多少？

我没有猜，而是直接做了实验。

## 实验设置

在一批 Office 文档智能体任务（Word 和 Excel）上，我用两种方式给同一批模型回答打分，对着同一份 rubric，并对齐人工标注的 GT，从五个维度衡量：**准确率、召回率、一致率、成本、时延。**

两个 grader 共享一个接口，这样比的是**方法**，不是管道：

```python
class Grader(Protocol):
    def score(self, response: Response, rubric: Rubric) -> Result: ...

class MetricGrader:      # 确定性：单元格精确匹配、结构化字段检查
    def score(self, response, rubric): ...

class JudgeGrader:       # Claude Code / Codex 驱动对齐过的裁判模型
    def score(self, response, rubric): ...
```

裁判模型是刻意**对齐**的（同模型族、同 rubric 契约），这样我才不是偷偷在测"某家模型更强"。

## 对比真正揭示的东西

最诚实的结论，恰恰是"用裁判就好了"这一派会跳过的：**看情况，而且你必须去测。**

- **确定性 metric** 几乎免费、即时、完全可复现——但很脆。它没法奖励一个用意外格式表达的正确答案，而且把它写出来本身就是昂贵的前期工程。
- **LLM 裁判** 能泛化各种表述、能处理 metric 编码不了的模糊标准——但它每道题都要花真金白银和时延，还自带**方差**。同一道题跑两遍，得两个分。这份方差，是你每条结论都要交的税。

跑出来大致是这个形状（具体数字完全取决于任务和 rubric，要测你自己的）：

| Grader | 准确率 | 召回 | 与人一致率 | 每 100 条成本 | p50 时延 |
|--------|--------|------|------------|---------------|----------|
| Metric（精确匹配） | 很高 | 中低 | 结构化任务上高 | ~$0 | 毫秒 |
| LLM 裁判（对齐） | 高 | 高 | 开放式任务上高 | $ | 秒级 |

对于紧结构的输出（一个单元格非对即错），metric 往往**又好又便宜**；对于格式多变的开放式输出，裁判才配得上它的成本。

## 我实际会用的决策框架

真正的问题不是"metric 还是 judge"，而是"rubric 的哪一部分应该交给哪个 grader"。同一个任务往往需要两者共存：

| Rubric criterion 类型 | 优先选择 | 原因 |
|-----------------------|----------|------|
| 精确值、单元格、字段、文件名 | Metric | 确定、便宜、可复现 |
| 可渲染检查的格式 | Metric + visual check | 截图比文字更容易抓布局退化 |
| 语义解释或商业推理 | Judge | 正确答案可能有很多表达方式 |
| 多步证据使用 | Agent judge | 它能打开文件、采证后再判 |
| 安全/拒答/资料不足 | 带严格 reason guard 的 judge | 需要解释，但不能幻觉证据 |
| 致命合规错误 | Metric 或显式 gate | 不应该依赖 judge 品味 |

这种混合路线避免两个常见错误。第一，不要因为"LLM 更聪明"就把一个好用的 exact-match metric 换成更慢、更有噪声的 judge。第二，也不要强迫确定性 metric 去判断它看不见的语义。正确系统会把每个 criterion 路由给最便宜且可靠的 evaluator。

## 如何设计这个对比实验

一个有用的 judge-vs-metric 实验，必须刻意无聊。如果两个 grader 看到的输入不同、rubric 表述不同、聚合方式不同，比较就失效了。我的最小实验设计是：

```yaml
cases:
  sampling: stratified
  include:
    - 简单结构化输出
    - 开放式推理输出
    - 空 / 损坏 / 跑题输出
rubric:
  criteria: atomic
  fatal_errors: explicit
graders:
  metric: 同一份 rubric，确定性实现
  judge: 同一份 rubric，固定模型，固定 prompt contract
ground_truth:
  source: 人工标签或仲裁后的 gold labels
metrics:
  - precision
  - recall
  - agreement
  - latency
  - cost
analysis:
  compare_disagreements: true
```

最有用的表不是排行榜，而是 disagreement table：

| Case | Metric | Judge | Human | Diagnosis |
|------|--------|-------|-------|-----------|
| A | pass | fail | fail | metric 漏掉了语义矛盾 |
| B | fail | pass | fail | judge 过度信任流畅 prose |
| C | pass | pass | fail | rubric criterion 写得不够明确 |

这张表告诉你该修什么。有时 judge 错了，有时 metric 瞎了，有时两者一起暴露出 rubric 本身含糊。

## 两个悄悄决定结果的细节

有几个细节，比"方法选哪个"这个大问题更关键。

**硬门槛 / 致命项。** 一个"致命错误直接清零总分"的 rubric，和一个"加权求和"的 rubric，行为天差地别。门控写错，两种方法都会和人打分不一致——而且是同一个原因：

```python
def aggregate(results, rubric):
    if any(r.hit and c.is_fatal for r, c in zip(results, rubric)):
        return 0.0                       # 单个致命错误清零
    earned = sum(c.weight for r, c in zip(results, rubric) if r.hit)
    total  = sum(c.weight for c in rubric if c.weight > 0)
    return max(0.0, earned / total)      # 归一化；负分 clamp 到 0
```

**裁判推理上闸。** 当证据缺失、或输入为空/不可读时，不上闸的裁判会幻觉出一个自信的 `reason` 和一个分数。约束它改报"证据不足"，直接消掉了一整类假信号——而且值得注意的是，它**缩小了**裁判和 metric 之间的差距，因为裁判看上去的"不靠谱"，很大一部分其实就是这一个失效模式。

## 实用建议

别因为时髦就上 LLM 裁判，也别因为"已经有了"就死守手写 metric。按任务类型来选：

- 结构化、可验证的输出 → **metric**（更便宜、可复现）。
- 开放式或格式多变的输出 → **裁判**（值这个钱），但要固定模型、给原子化标准、为方差留预算。
- 高风险 → 两个都跑，盯着它们**不一致**的地方。那正是你 benchmark 最薄弱之处，也是最便宜的学习场：

```python
disagreements = [
    (case, m, j) for case, m, j in zip(cases, metric_scores, judge_scores)
    if abs(m - j) > 0.2
]
# 手工分诊这些；每一条要么是 metric 的盲点，
# 要么是裁判的幻觉，两者都值得修。
```

## 生产环境 guardrails

如果要把 LLM judge 真正上线，我不会把它当黑盒。我会要求：

- **固定模型和 prompt 版本。** 升级 judge 是测量方式变化，不是普通依赖升级。
- **原子化 criteria。** 一条 criterion 只问一件事。多部分 criteria 会制造不一致的 partial credit。
- **证据要求。** judge 必须引用或记录它用到的证据，即使这些引用只在内部可见。
- **Reason guard。** 空、不可读、无证据、跑题输入应该返回"证据不足"，而不是编一个解释。
- **校准集。** 保留一小批冻结的人工标注样本，每次 judge release 前都跑。
- **Disagreement review。** 定期抽查 metric/judge/human 不一致的样本；静默漂移通常先在那里出现。
- **成本预算。** 关注每个 accepted decision 的成本，而不只是每次调用成本。一个便宜但触发大量人工复核的 judge 可能反而贵。

姿态和任何测量仪器一样：版本化、校准、监控，并且知道它在哪里会失效。

## 真正有用的产出

实验不应该止步于"judge 赢了"或"metric 赢了"。它应该产出一条 routing policy：

```python
def choose_grader(criterion):
    if criterion.is_fatal:
        return "gate"
    if criterion.exact_matchable:
        return "metric"
    if criterion.needs_artifact_inspection:
        return "agent_judge"
    if criterion.semantic:
        return "llm_judge"
    return "manual_review"
```

这条 policy 才是产品。它让你之后添加新任务时，不必每次重新争论哲学。更重要的是，它让评分系统能向依赖这些数字的人解释清楚。

LLM 裁判既不免费，也不天然更好。它是一个带成本曲线的工具。先把曲线测出来，再决定要不要押上去。
