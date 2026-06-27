# 大模型评测的「管道工程」：在一个 harness 上跑六个模型族

"把基准跑一下就行。" 这句话藏了大量基础设施工作。

过去几个月，我在一个会扇出到云沙箱的容器化评测框架上，把 Office 文档智能体任务跑遍了**六个模型族**——Claude、GPT、Gemini、Qwen、Kimi、GLM——和**五种 agent harness**——Claude Code、OpenHands、Codex、Stirrup、OpenRouter。下面是"跑一下就行"这个说法漏掉的东西。

## 一个接口，多个后端

要在这么多模型和 harness 之间保持理智，唯一的办法是一层薄薄的适配契约，然后在它背后做大量小心的、按后端来的实现：

```python
class Harness(Protocol):
    def run(self, task: Task, model: str) -> Trajectory: ...

@dataclass
class Trajectory:
    response: str
    files_out: list[Path]
    steps: int
    usage: Usage          # input / output / cached tokens
    error: str | None
```

这个 `Trajectory` 看着很干净。下面几乎所有内容，都是关于真实后端如何拒绝把它干净地填上。

## bug 就住在"模型与模型之间的缝隙"里

**有的模型根本不支持文件*输出*。** Kimi、GLM、Qwen 吐不出真正的 `.xlsx`。于是你只能用提示约束它返回结构化文本，再在下游把文件重建出来——而且你最好验证重建是忠实的，否则你已经悄悄改了这道题：

```python
def materialize(traj, task):
    if task.expects_file and not traj.files_out:
        payload = parse_fenced_block(traj.response, lang="json")
        path = build_xlsx(payload)          # 从约束文本重建
        if not opens_cleanly(path):
            raise OutputError("重建出来的文件损坏了")
        traj.files_out = [path]
    return traj
```

**一个"只推理"的回合会静默地结束任务。** 有些推理模型会发出一个不带工具调用的回合。一个朴素的 driver 会把它当成"做完了"，跑完一轮外循环就结束。对策是 *idle nudge*——而且你得把它扩展到所有有这种行为的模型族，而不只是你最先发现的那个：

```python
def drive(agent, task, max_steps=40):
    for step in range(max_steps):
        turn = agent.step()
        if turn.done:
            return turn
        if not turn.tool_calls and not turn.final_answer:
            agent.inject("你既没调工具也没给答案，继续。")  # nudge
    return agent.force_finish()
```

**一个会幻觉理由的裁判，比没有裁判更糟。** 当证据其实缺失时，不上闸的裁判会编出一个听起来合理的理由和一个分数；对"输入为空/不可读/明显跑题"的情况给推理上闸，消掉了一个真实的假信号来源。

## 规模与成本也是"正确性"的一部分

要把它跑到量，就意味着在云沙箱上做容器化执行、多 key 并发、用快照预装 harness，以及"批量前先冒烟"的纪律，免得一个坏配置烧掉上千次运行。还意味着**算账**——一个你跑不起第二遍的 benchmark，不是你能信任的 benchmark：

```python
PRICES = {  # 每 1M token 的美元价 (input, output)
    "opus":  (15.0, 75.0),
    "gpt":   (...),
    "qwen":  (...),
}

def cost(usage, model):
    pin, pout = PRICES[model]
    billable_in = usage.input - usage.cached          # 命中缓存的别按全价付
    return (billable_in * pin + usage.output * pout) / 1_000_000

# 每次运行我们都记：agent_time vs eval_time、token 进/出/缓存、$——这样
# "哪个模型每道通过题最便宜"就是一个数字，而不是一句猜测。
```

大部分工程都在错误路径上：评测器卡死、缺失的 prompt/参考路径、最大步数截断、模型返回的非闭合 JSON 把 runner 搞崩。为了让失败不拖垮整批，你只**原地重跑失败的任务**：

```python
def rerun_failed(batch):
    failed = [t for t in batch if t.result.error or t.result.score is None]
    log.info(f"原地重跑 {len(failed)}/{len(batch)}")
    for t in failed:
        t.result = run_one(t)
```

## 运维 runbook

一个 eval harness 真正的工作，是把混乱的一次运行变成可重复的一次运行。我信任的 runbook 是：

1. **把每个任务归一成同一个 job contract。** Prompt、文件、期望输出、timeout、评分配置、artifact 路径，在模型看到任务前就应该明确。
2. **批量前每个 harness 先冒烟一题。** 一个完整 batch 不应该是某个 model/harness 第一次见到任务格式。
3. **记录完整轨迹。** 只有最终答案不够。需要 tool calls、创建的文件、时间戳、token 用量、错误，以及能拿到的 stdout/stderr。
4. **区分运行失败和得分失败。** "模型得了 0 分"和"runner 崩了"是两件事，绝不能共用一个字段。
5. **窄范围重跑。** 失败任务应该能被复现，并且能在不碰通过任务的前提下重跑。
6. **为 review 打包。** 下游 reviewer 打开一个文件夹，就应该能看到 prompt、response、files-out、logs、score 和 judge rationale。
7. **让成本可见。** 成本不是财务附属项；它决定 benchmark 能不能被重复、debug 和信任。

这套 runbook 的产出不只是一个 CSV 分数表，而是每个 model/harness pair 的证据包。

## 好的 run artifact 应该长这样

我希望每个完成任务都留下大致这样的目录：

```text
run/
  task.json                 # 归一后的任务契约
  input_files/
  trajectory.json            # steps, tool calls, timestamps
  response.md
  files_out/
  usage.json                 # input/output/cache tokens, wall time
  score.json                 # rubric scores and aggregate
  judge_evidence/
  logs/
  error.json                 # 只有运行失败时存在
```

这套结构第一次有人问"为什么这个模型输了"时就会回本。没有 trajectory 和 artifacts，你只能说"分数比较低"。有了它们，你可以说"模型找到了正确 sheet、写了正确公式，但没有保存 workbook"，或者"这个 harness 在 reasoning-only turn 后提前结束了任务"。这对应完全不同的产品决策。

## 抽象边界

adapter contract 应该向 benchmark 隐藏 provider 差异，但不应该向 operator 隐藏。benchmark 想要统一的 `Trajectory`；operator 需要原始失败原因。所以 adapter 应该返回归一字段，同时保留 raw diagnostics：

```python
@dataclass
class RunResult:
    status: Literal["passed", "scored_zero", "runner_error", "timeout"]
    trajectory: Trajectory | None
    normalized_error: str | None
    raw_error: dict | None
    artifacts: list[Path]
```

这个区分能避免一个常见反模式：把所有失败都拍平成 0 分。timeout、缺文件、provider API 失败、真正答错，对团队意味着完全不同的工作。

## 内部报告应该发布什么

一个有用的 benchmark report 不该只回答"谁赢了"。我会发布：

- 按任务类型拆分的分数分布，而不只是均值。
- 排除 runner error 后的通过率，以及单独的 runner-error rate。
- 中位数与尾部时延。
- 每个完成任务成本，以及每个通过任务成本。
- 文件输出成功率。
- judge disagreement 或人工复核率。
- 最高频 failure modes 和样例。

这会改变模型选型。最好的模型不一定是均分最高的模型；它可能是那个少过几道题，但文件输出有效、成本低一半、失败方式更容易 debug 的模型。

## 回馈社区

在集成 **Stirrup** agent 时，我把它清理得足够干净，做成了**面向开源 Harbor 框架、可直接上游**的集成——把可复用的 agent 适配器从所有环境相关的胶水代码里剥离出来，放在一个干净的 fork 上。这恰恰是检验一个集成好不好的真正标准：你能不能把"对所有人都有用的部分"和"只对你有用的部分"分开？

## 结语

评测不是一个脚本，而是基础设施——bug 住在模型之间的缝隙里、住在 harness 之间的错误路径里、也住在你忘了加总的那一列成本里。把它当成 infra 来对待，数字才开始有意义。
