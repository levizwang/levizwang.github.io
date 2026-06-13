# The Plumbing of LLM Evaluation: Running Six Model Families on One Harness

"Just run the benchmark." That sentence hides a surprising amount of infrastructure.

Over the past few months I've run office-document agent tasks across **six model families** — Claude, GPT, Gemini, Qwen, Kimi, GLM — and **five agent harnesses** — Claude Code, OpenHands, Codex, Stirrup, and OpenRouter — on a containerized eval framework that fans out onto cloud sandboxes. Here's what the "just run it" framing leaves out.

## The bugs live in the gaps between models

Every model is a little different, and evaluation infrastructure is mostly the work of papering over those differences without changing what you're measuring.

- **Some models don't support file *output* at all.** Kimi, GLM, and Qwen wouldn't emit a real `.xlsx`. So you constrain them by prompt to return structured text, then reconstruct the file downstream — and you'd better verify the reconstruction is faithful, or you've changed the task.
- **A "reasoning-only" turn can silently end a task.** Some reasoning models emit a turn with no tool call. A naive driver treats that as "done" and ends the run after one outer loop. The fix is an *idle nudge* — detect the stall and re-prompt — and you have to extend it to every family that exhibits the behavior, not just the one you first noticed.
- **A judge that hallucinates a reason is worse than no judge.** When the evidence is actually missing, an ungated judge invents a plausible justification and a score. Gating the reasoning on empty/unreadable/off-task inputs removed a real source of fake signal.

## Harness diversity is not free

Claude Code, OpenHands, Codex, Stirrup, OpenRouter — they differ in how they expose tools, how they stream, how they report usage, and how they fail. Supporting more than one means an adapter layer and a lot of failure triage: evaluator hangs, missing prompt/reference paths, max-step cutoffs, non-closed JSON from a model crashing the runner. Most of the engineering is in the error paths.

## Scale and cost are part of correctness

Running this at volume means containerized execution on cloud sandboxes with multi-key concurrency, snapshots to pre-install harnesses, and a smoke-test-before-batch discipline so a bad config doesn't burn a thousand runs. And it means *accounting*: per-case agent time vs. eval time, input/output/cache token breakdowns, and a real dollar figure per run. A benchmark you can't afford to run twice isn't a benchmark you can trust.

## Giving back

While integrating the **Stirrup** agent I cleaned the integration up enough to send it **upstream to the open-source Harbor framework** as a reviewed pull request — isolating the reusable agent adapter from all the environment-specific glue. That's the real test of whether an integration is any good: can you separate the part that helps everyone from the part that only helps you?

## Takeaway

Evaluation isn't a script. It's infrastructure — and the bugs live in the gaps between models, in the error paths between harnesses, and in the cost column you forgot to add up. Treat it like infra and the numbers start meaning something.
