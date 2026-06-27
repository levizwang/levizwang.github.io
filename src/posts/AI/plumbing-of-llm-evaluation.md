# The Plumbing of LLM Evaluation: Running Six Model Families on One Harness

"Just run the benchmark." That sentence hides a surprising amount of infrastructure.

Over the past few months I've run office-document agent tasks across **six model families** — Claude, GPT, Gemini, Qwen, Kimi, GLM — and **five agent harnesses** — Claude Code, OpenHands, Codex, Stirrup, and OpenRouter — on a containerized eval framework that fans out onto cloud sandboxes. Here's what the "just run it" framing leaves out.

## One interface, many backends

The only way to stay sane across this many models and harnesses is a thin adapter contract, and then a lot of careful per-backend implementation behind it:

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

That `Trajectory` looks clean. Almost everything below is about the ways real backends refuse to fill it in cleanly.

## The bugs live in the gaps between models

**Some models don't support file *output* at all.** Kimi, GLM, and Qwen wouldn't emit a real `.xlsx`. So you constrain them by prompt to return structured text, then reconstruct the file downstream — and you'd better verify the reconstruction is faithful, or you've silently changed the task:

```python
def materialize(traj, task):
    if task.expects_file and not traj.files_out:
        payload = parse_fenced_block(traj.response, lang="json")
        path = build_xlsx(payload)          # rebuild from constrained text
        if not opens_cleanly(path):
            raise OutputError("reconstructed file is corrupt")
        traj.files_out = [path]
    return traj
```

**A "reasoning-only" turn can silently end a task.** Some reasoning models emit a turn with no tool call. A naive driver treats that as "done" and ends the run after one outer loop. The fix is an *idle nudge* — and you have to extend it to every family that exhibits the behavior, not just the one you first noticed:

```python
def drive(agent, task, max_steps=40):
    for step in range(max_steps):
        turn = agent.step()
        if turn.done:
            return turn
        if not turn.tool_calls and not turn.final_answer:
            agent.inject("You haven't called a tool or answered. Continue.")  # nudge
    return agent.force_finish()
```

**A judge that hallucinates a reason is worse than no judge.** When the evidence is actually missing, an ungated judge invents a plausible justification and a score; gating the reasoning on empty/unreadable/off-task inputs removed a real source of fake signal.

## Scale and cost are part of correctness

Running this at volume means containerized execution on cloud sandboxes with multi-key concurrency, snapshots to pre-install harnesses, and a smoke-test-before-batch discipline so a bad config doesn't burn a thousand runs. And it means *accounting* — a benchmark you can't afford to run twice isn't a benchmark you can trust:

```python
PRICES = {  # $ per 1M tokens (input, output)
    "opus":  (15.0, 75.0),
    "gpt":   (...),
    "qwen":  (...),
}

def cost(usage, model):
    pin, pout = PRICES[model]
    billable_in = usage.input - usage.cached          # don't pay full for cache hits
    return (billable_in * pin + usage.output * pout) / 1_000_000

# per-run we log: agent_time vs eval_time, tokens in/out/cached, $ — so
# "which model is cheapest per passing task" is a number, not a guess.
```

Most of the engineering is in the error paths: evaluator hangs, missing prompt/reference paths, max-step cutoffs, non-closed JSON from a model crashing the runner. So failures don't tank a whole batch, you rerun *only* the failed tasks in place:

```python
def rerun_failed(batch):
    failed = [t for t in batch if t.result.error or t.result.score is None]
    log.info(f"rerunning {len(failed)}/{len(batch)} in place")
    for t in failed:
        t.result = run_one(t)
```

## The operational runbook

The real work of an eval harness is turning a messy run into a repeatable run. The runbook I trust is:

1. **Normalize every task into one job contract.** Prompt, files, expected outputs, timeout, scoring config, and artifact paths should be explicit before a model sees anything.
2. **Smoke one task per harness before batching.** A full batch should never be the first time a model/harness pair sees the task format.
3. **Record the full trajectory.** Final answers are not enough. You need tool calls, files created, timestamps, token usage, errors, and stdout/stderr when available.
4. **Separate run failure from score failure.** "The model got zero" and "the runner crashed" are different events and should never share the same field.
5. **Rerun narrowly.** Failed tasks should be reproducible and rerunnable without touching passed tasks.
6. **Package for review.** A downstream reviewer should be able to open one folder and see prompt, response, files-out, logs, score, and judge rationale.
7. **Keep cost visible.** Cost is not a finance afterthought; it decides whether the benchmark can be repeated, debugged, and trusted.

The output of this runbook is not just a CSV score table. It is an evidence bundle for each model/harness pair.

## What good run artifacts look like

I want every completed task to leave behind a folder shaped roughly like this:

```text
run/
  task.json                 # normalized task contract
  input_files/
  trajectory.json            # steps, tool calls, timestamps
  response.md
  files_out/
  usage.json                 # input/output/cache tokens, wall time
  score.json                 # rubric scores and aggregate
  judge_evidence/
  logs/
  error.json                 # present only if the run failed
```

That structure pays for itself the first time someone asks, "why did this model lose?" Without trajectory and artifacts, all you can say is "the score was lower." With them, you can say "the model found the right sheet, wrote the right formula, but failed to save the workbook," or "the harness ended after a reasoning-only turn." Those are very different product decisions.

## The abstraction boundary

The adapter contract should hide provider weirdness from the benchmark, but it should not hide it from the operator. The benchmark wants a common `Trajectory`; the operator needs the raw failure reason. That means adapter code should return normalized fields while preserving raw diagnostics:

```python
@dataclass
class RunResult:
    status: Literal["passed", "scored_zero", "runner_error", "timeout"]
    trajectory: Trajectory | None
    normalized_error: str | None
    raw_error: dict | None
    artifacts: list[Path]
```

This distinction prevents a common anti-pattern: flattening all failures into a score of zero. A timeout, a missing file, a provider API failure, and a genuine wrong answer all create different work for the team.

## What to publish internally

A useful benchmark report should answer more than "who won." I would publish:

- Score distribution by task type, not only a mean.
- Pass rate after excluding runner errors, plus runner-error rate separately.
- Median and tail latency.
- Cost per completed task and cost per passing task.
- File-output success rate.
- Judge disagreement or manual-review rate.
- Top recurring failure modes with examples.

That report changes model selection. The best model is not always the one with the highest mean score; it may be the one that passes slightly fewer tasks but produces valid files, costs half as much, and fails in ways you can debug.

## Giving back

While integrating the **Stirrup** agent I cleaned it up enough to make it **upstream-ready for the open-source Harbor framework** — isolating the reusable agent adapter from all the environment-specific glue, on a clean fork. That's the real test of whether an integration is any good: can you separate the part that helps everyone from the part that only helps you?

## Takeaway

Evaluation isn't a script. It's infrastructure — and the bugs live in the gaps between models, in the error paths between harnesses, and in the cost column you forgot to add up. Treat it like infra and the numbers start meaning something.
