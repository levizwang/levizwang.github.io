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

## 回馈社区

在集成 **Stirrup** agent 时，我把这个集成清理得足够干净，以一个经 review 的 PR 形式**提交到了开源的 Harbor 框架上游**——把可复用的 agent 适配器从所有环境相关的胶水代码里剥离出来。这恰恰是检验一个集成好不好的真正标准：你能不能把"对所有人都有用的部分"和"只对你有用的部分"分开？

## 结语

评测不是一个脚本，而是基础设施——bug 住在模型之间的缝隙里、住在 harness 之间的错误路径里、也住在你忘了加总的那一列成本里。把它当成 infra 来对待，数字才开始有意义。
