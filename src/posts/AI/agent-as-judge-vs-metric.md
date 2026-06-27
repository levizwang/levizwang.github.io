# Agent-as-Judge vs. a Metric You Wrote by Hand

"Just use an LLM as the judge." It's the default answer now for any grading problem. But is an LLM judge actually *better* than a deterministic metric you wrote yourself — and at what cost?

I stopped guessing and ran the experiment.

## The setup

On a set of office-document agent tasks (Word and Excel), I graded the same model responses two ways, against the same rubric, and measured both against human-labeled ground truth on five axes: **precision, recall, agreement, cost, and latency.**

The two graders share an interface so the comparison is about *method*, not plumbing:

```python
class Grader(Protocol):
    def score(self, response: Response, rubric: Rubric) -> Result: ...

class MetricGrader:      # deterministic: exact-match cells, structured field checks
    def score(self, response, rubric): ...

class JudgeGrader:       # Claude Code / Codex driving an aligned judge model
    def score(self, response, rubric): ...
```

The judge models were deliberately *aligned* (same family, same rubric contract) so I wasn't secretly measuring "one vendor's model is stronger."

## What the comparison actually shows

The honest result is the one most "just use a judge" takes skip: **it depends, and you have to measure it.**

- The **deterministic metric** is nearly free, instant, and perfectly reproducible — but brittle. It can't reward a correct answer expressed in an unexpected format, and writing it is expensive engineering up front.
- The **LLM judge** generalizes across phrasing and handles fuzzy criteria the metric can't encode — but it costs real money and latency per item, and it carries *variance*. Run it twice, get two scores. That variance is a tax on every conclusion you draw.

Illustrative shape of what comes out (numbers depend entirely on task and rubric — measure your own):

| Grader | Precision | Recall | Agreement w/ human | Cost / 100 | p50 latency |
|--------|-----------|--------|--------------------|-----------|-------------|
| Metric (exact-match) | very high | low–mid | high *on structured* | ~$0 | ms |
| LLM judge (aligned) | high | high | high *on open-ended* | $ | seconds |

For tight, structured outputs (a spreadsheet cell is right or wrong) the metric is often better *and* cheaper. For open-ended outputs where format varies, the judge earns its cost.

## A decision framework I actually use

The choice is less "metric or judge" and more "which parts of the rubric belong to which grader." A single task often needs both:

| Rubric criterion type | Better first choice | Why |
|-----------------------|--------------------|-----|
| Exact value, cell, field, filename | Metric | Deterministic, cheap, reproducible |
| Formatting that can be rendered and inspected | Metric + visual check | Screenshots catch layout regressions better than prose |
| Semantic explanation or business reasoning | Judge | Correct answers can be phrased many ways |
| Multi-step evidence use | Agent judge | It can inspect files and gather support before scoring |
| Safety / refusal / insufficient information | Judge with strict reason guard | Needs interpretation, but must not hallucinate evidence |
| Fatal compliance failure | Metric or explicit gate | Should not depend on judge taste |

This hybrid approach avoids two common mistakes. The first is replacing a good exact-match metric with a slower, noisier judge because "LLMs are smarter." The second is forcing a deterministic metric to judge semantics it cannot see. The right system routes each criterion to the cheapest reliable evaluator.

## Designing the comparison

A useful judge-vs-metric experiment has to be deliberately boring. If the two graders see different inputs, use different rubric wording, or aggregate scores differently, the comparison becomes meaningless. My minimum experiment design:

```yaml
cases:
  sampling: stratified
  include:
    - easy structured outputs
    - open-ended reasoning outputs
    - empty / corrupt / off-task outputs
rubric:
  criteria: atomic
  fatal_errors: explicit
graders:
  metric: same rubric, deterministic implementation
  judge: same rubric, pinned model, fixed prompt contract
ground_truth:
  source: human labels or adjudicated gold labels
metrics:
  - precision
  - recall
  - agreement
  - latency
  - cost
analysis:
  compare_disagreements: true
```

The most useful table is not the leaderboard. It is the disagreement table:

| Case | Metric | Judge | Human | Diagnosis |
|------|--------|-------|-------|-----------|
| A | pass | fail | fail | metric missed semantic contradiction |
| B | fail | pass | fail | judge over-trusted fluent prose |
| C | pass | pass | fail | rubric criterion is under-specified |

That table tells you what to fix. Sometimes the judge is wrong. Sometimes the metric is blind. Sometimes both reveal that the rubric itself is ambiguous.

## Two things that quietly decide the outcome

A couple of details mattered more than the headline method choice.

**Hurdle / fatal criteria.** A rubric where a fatal error zeroes the whole score behaves very differently from a flat weighted sum. Get the gating wrong and *both* methods disagree with humans for the same reason:

```python
def aggregate(results, rubric):
    if any(r.hit and c.is_fatal for r, c in zip(results, rubric)):
        return 0.0                       # a single fatal error voids the score
    earned = sum(c.weight for r, c in zip(results, rubric) if r.hit)
    total  = sum(c.weight for c in rubric if c.weight > 0)
    return max(0.0, earned / total)      # normalize; clamp negatives at 0
```

**Judge reason-gating.** When the evidence is missing or the input is empty/unreadable, an ungated judge hallucinates a confident `reason` and a score. Constraining it to flag "insufficient evidence" instead removed a whole class of false signal — and, notably, *narrowed the gap* between judge and metric, because a lot of the judge's apparent unreliability was actually this one failure mode.

## The practical guidance

Don't adopt an LLM judge because it's fashionable, and don't cling to a hand-written metric because you already have it. Pick per task type:

- Structured, verifiable output → **metric** (cheaper, reproducible).
- Open-ended or format-variable output → **judge** (worth the cost), but pin the model, give it atomic criteria, and budget for variance.
- High-stakes → run both and look at the *disagreements*. They are where your benchmark is weakest, and the cheapest place to learn something:

```python
disagreements = [
    (case, m, j) for case, m, j in zip(cases, metric_scores, judge_scores)
    if abs(m - j) > 0.2
]
# triage these by hand; each one is either a metric blind spot
# or a judge hallucination, and both are worth fixing.
```

## Production guardrails

If I were shipping an LLM judge in production, I would not treat it as a black box. I would require:

- **Pinned model and prompt version.** A judge upgrade is a measurement change, not a harmless dependency bump.
- **Atomic criteria.** One criterion should ask one thing. Multi-part criteria invite inconsistent partial credit.
- **Evidence requirement.** The judge must cite or reference the evidence it used, even if that reference is internal and not shown to end users.
- **Reason guard.** Empty, unreadable, unsupported, or off-task inputs should return "insufficient evidence" rather than a creative explanation.
- **Calibration set.** Keep a small frozen set of human-labeled cases and run it before every judge release.
- **Disagreement review.** Sample metric/judge/human disagreements routinely; that is where silent drift shows up first.
- **Cost budget.** Track judge cost per accepted decision, not only cost per call. A cheap judge that triggers many manual reviews may be expensive.

The operational posture is the same as any measurement instrument: version it, calibrate it, monitor it, and know where it fails.

## The useful output

The experiment should not end with "judge wins" or "metric wins." It should end with a routing policy:

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

That policy is the product. It lets you add new tasks without re-litigating the philosophy every time. More importantly, it makes the grading system explainable to the people who will depend on its numbers.

An LLM judge isn't free and isn't automatically better. It's a tool with a cost curve. Measure the curve before you commit to it.
