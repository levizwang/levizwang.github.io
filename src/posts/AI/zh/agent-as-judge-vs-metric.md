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

LLM 裁判既不免费，也不天然更好。它是一个带成本曲线的工具。先把曲线测出来，再决定要不要押上去。
