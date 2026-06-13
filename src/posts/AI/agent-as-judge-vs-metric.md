# Agent-as-Judge vs. a Metric You Wrote by Hand

"Just use an LLM as the judge." It's the default answer now for any grading problem. But is an LLM judge actually *better* than a deterministic metric you wrote yourself — and at what cost?

I stopped guessing and ran the experiment.

## The setup

On a set of office-document agent tasks (Word and Excel), I graded the same model responses two ways:

1. **A hand-written metric** — deterministic rubric scoring, including exact-match cell comparison for spreadsheets and structured field checks for documents.
2. **An agent / LLM judge** — Claude Code and Codex driving aligned judge models, reading the same rubric and the same model output.

Both were measured against human-labeled ground truth on five axes: **precision, recall, agreement, cost, and latency.** The judge models were deliberately aligned (same family, same rubric contract) so the comparison was about *method*, not about one vendor's model being stronger.

## What the comparison actually shows

The honest result is the one most "just use a judge" takes skip: **it depends, and you have to measure it.**

- The **deterministic metric** is nearly free, instant, and perfectly reproducible — but it's brittle. It can't reward a correct answer expressed in an unexpected format, and writing it is expensive engineering up front.
- The **LLM judge** generalizes across phrasing and handles fuzzy criteria the metric can't encode — but it costs real money and latency per item, and it carries *variance*. Run it twice, get two scores. That variance is a tax on every conclusion you draw.

Whether the judge "wins" depends on the task, the rubric, and how much cost and variance you can tolerate. For tight, structured outputs (a spreadsheet cell is right or wrong), the metric is often better *and* cheaper. For open-ended outputs where format varies, the judge earns its cost.

## Two things that quietly decide the outcome

A couple of details mattered more than the headline method choice:

- **Hurdle / fatal criteria.** A rubric where a fatal error zeroes the whole score behaves very differently from a flat weighted sum. Get the gating logic wrong and both methods disagree with humans — for the same reason.
- **Judge reason-gating.** When the evidence is missing or the input is empty/unreadable, an ungated judge will hallucinate a confident "reason" and a score. Constraining the judge to flag "insufficient evidence" instead removed a whole class of false signal.

## The practical guidance

Don't adopt an LLM judge because it's fashionable, and don't cling to a hand-written metric because you already have it. Pick per task type:

- Structured, verifiable output → **metric** (cheaper, reproducible).
- Open-ended or format-variable output → **judge** (worth the cost), but pin the model, give it atomic criteria, and budget for variance.
- High-stakes → run both and look at the *disagreements*. They're where your benchmark is weakest.

An LLM judge isn't free and isn't automatically better. It's a tool with a cost curve. Measure the curve before you commit to it.
