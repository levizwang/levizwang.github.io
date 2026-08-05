# Your Judge Is Part of the System Under Test

Every LLM-judged eval produces its scores with two models: the one being tested and the one doing the grading, plus the harness wiring them together. The number that comes out is a joint product of all three. Unless you actively separate them, judge defects are indistinguishable from model defects. A zero can mean the model failed or the judge misfired, and the score file looks the same in both cases.

I run LLM-judged evaluations for a living: a benchmark-synthesis pipeline with DAG-structured rubrics, a difficulty-calibration pass on a hundred-plus-question legal benchmark, and multi-model deliveries for enterprise clients at hundreds of tasks per run. Within a few weeks, four separate incidents that looked like model behavior turned out to be the judge or its harness. None of them crashed anything, and all of them produced plausible numbers. Here are the mechanisms and the fixes.

## Incident 1: false zeros from the leakage hurdle

Our rubrics are DAGs rather than flat lists: positive rows carry weight, negative rows deduct, and weight-0 **hurdle** rows act as a one-vote veto for disqualifying behavior. The canonical hurdle is answer leakage: a deliverable that reproduces the reference answer instead of doing the work gets zero, no matter what else it got right.

During the calibration pass, a batch of items came back at exactly zero. The row-level scorecards contradicted that: those items had 91–93% of their positive rubric rows hit. The judge had agreed, row by row, that the work was nearly complete, then fired the leakage hurdle and vetoed the whole item. Its stated reason was that the deliverable "reproduced reference content." What it was actually looking at was in-material citation: a legal memo quoting the statutes and case files it was handed, which is exactly what the genre requires.

Nothing crashed; the distribution was wrong. A cluster at exactly zero sitting under near-complete scorecards is a contradiction worth investigating. Re-running two of the zeroed items through an off-family judge model (Qwen, which I keep around for second opinions) settled it: the second judge read the same passages as citation that the first read as leakage.

The fix has two parts. First, an arbitration clause for fatal vetoes: a one-vote veto is not allowed to stand on its own when it contradicts the rest of the scorecard.

```python
def apply_hurdles(rows, hurdle_hits):
    positives = positive_hit_rate(rows)
    for h in hurdle_hits:
        # A veto that contradicts a near-complete scorecard
        # must pass arbitration before it can zero the item.
        if positives >= 0.85:
            verdict = arbitrate(
                claim=h.reason,
                required_evidence="verbatim quote of the leaked answer text",
                distinguish="citing provided source material is not leakage",
            )
            if verdict != "confirmed_leak":
                continue          # false kill: veto rejected, score stands
        return 0.0                # confirmed: the veto applies
    return weighted_score(rows)
```

Second, regression tests in both directions: a fixture with a genuine verbatim answer leak must still be zeroed, and a citation-heavy legitimate deliverable must survive. A patch that fixes false kills by quietly weakening the veto just trades one bug for another.

## Incident 2: silent schema loss

The rubric schema has a `depends_on` field: an outcome row only counts if the process rows it depends on were also hit. That field is what stops "guessed the final number" from scoring; it is the whole point of process/outcome typing.

The judge-side prompt assembly never rendered that field, and the gap went unnoticed for days. Nothing crashed, because `depends_on` is data, not code: the judge never saw it, scored every rubric as a flat list, and returned well-formed, plausible numbers. Silent schema loss has no visible failure signature at all.

What caught it was a self-verification checklist I run before adopting any judging path. One item on it reads: for every field in the rubric schema, prove with an observable output difference that the judge actually consumes it. "The code passes it in" does not count as proof. `depends_on` failed that check.

The durable fix is a **schema round-trip test**: a canary rubric in which the field under test deterministically flips the score.

```python
def test_depends_on_reaches_the_judge():
    # Canary: the outcome row is satisfied,
    # but the process row it depends on is not.
    rubric = make_rubric(
        process=[row("locate the controlling clause", satisfied=False)],
        outcome=[row("state the conclusion", satisfied=True,
                     depends_on=["locate the controlling clause"])],
    )
    scored = judge(canary_deliverable, rubric)
    # With dependency gating the outcome must not count.
    # If it counts, the judge never saw depends_on.
    assert scored.outcome_hits == 0, "judge is ignoring depends_on"
```

One canary per schema field belongs in CI. A prompt template is not a parser and it fails open by default, so any field the judge can silently ignore will eventually get ignored.

## Incident 3: hallucinated evidence

A judge scoring a rubric row is supposed to justify the score with evidence from the deliverable. During a large-scale, multi-model enterprise evaluation, spot checks found scored rows whose cited evidence did not exist in the deliverable. The judge quoted paragraphs the model never wrote. Sometimes that manufactured credit, sometimes deductions; either way the score had no basis in the artifact, with a confident-sounding justification attached.

The countermeasure was a dedicated line-by-line re-check pass whose only job was to take every scored row and re-verify the cited evidence against the actual artifact on disk. Rows that failed re-check went into a rejudge pipeline. One rule mattered as much as the machinery: rejudging is triggered by evidence failure, never by an unwelcome score. If low scores get retried and high scores don't, the re-check pass itself introduces a systematic bias.

The strongest form of this defense is a delivery invariant: **reference answers must score full marks.** If the gold answer can't max its own rubric, then the rubric, the answer, or the judge is wrong, and you want to know which before the client does. On a separate legal-data project, I oracle-judged every reference answer with production-equivalent judges, then ran a large-scale minimal-change repair pipeline, with every deduction classified into a four-way taxonomy before anyone touched anything:

| Deduction type | What it means | What gets repaired |
|---|---|---|
| Direct miss | the answer genuinely lacks required content | the reference answer |
| Dependency cascade | a satisfied outcome row was gated off by a missed process row | the upstream dependency, never the satisfied row |
| Negative hit | the answer tripped a penalty row | the specific offending passage |
| Hurdle | a weight-0 fatal veto fired | arbitration first; this is where false kills live |

"Minimal-change" is the important constraint. The failure mode it guards against is rewriting the answer until the judge is happy, which is Goodharting your own gold data. The last few holdouts resisted repair entirely, and the root cause was in neither the answers nor the judge: contradictory injected noise files, distractor documents planted for difficulty that flatly contradicted the gold answer. The fix was paragraph-level editing, removing the contradictory designations inside a long procedural document without disturbing its structure, so the difficulty was preserved and the contradiction was gone.

## Incident 4: harness coupling

A re-evaluation against a quantized build of a frontier model. Before spending any compute, an exhaustive audit of all ~300 packs, with no sampling, found more than a quarter of them unrunnable: Docker images that never install the judge CLI, so scoring fails silently, and a pinned dependency version that doesn't exist on the package index, so builds fail loudly. Plus one global judge-backend misconfiguration. Run naively, every one of those would have been booked as model failure.

Then the subtle one. The quantized model made zero tool calls on tasks the full-precision build handled fine. The obvious conclusion is that quantization broke tool calling. Before writing that down, I ran an isolated ablation matrix: one probe task, one variable per axis.

```python
MATRIX = itertools.product(
    ["full_precision", "quantized"],      # model build
    ["harness_A", "harness_B"],           # judge/driver harness
    ["json_schema", "plain_text"],        # response-format config
)
for build, harness, fmt in MATRIX:
    r = run_probe_task(build, harness, fmt)
    log(build, harness, fmt, tool_calls=r.tool_calls)

# Result: tool_calls == 0 only in the (quantized, json_schema) cells,
# under either harness label. This is an interaction effect. The
# variable we control is the harness config, not the model.
```

The quantized model stopped making tool calls whenever a `json_schema` response format was present in the request, and the judge harness was injecting that format. "The model is broken" and "the harness is broken" are both inaccurate; the defect is in the interaction. The ship decision followed from the ablation: reconfigure the judge harness to drop the `json_schema` response format, keep the model, and report the incompatibility as a finding instead of a score.

## Reading the symptoms

The four incidents share a structure: a score anomaly that has both a model explanation and a judge explanation, and nothing in the score file to tell them apart. What separates them is the same move each time: hold one component fixed and vary the other. Rejudge the same deliverable with an off-family judge; feed the same judge a canary rubric; check the same scored row against the raw artifact; run the same model under a different harness. Each is a one-variable experiment, and each is cheap compared to shipping the wrong conclusion.

| Symptom in the scores | Model explanation | Judge/harness explanation | Separator experiment |
|---|---|---|---|
| Spike at exactly zero under strong row-level hits | catastrophic failures | fatal veto misfiring | false-kill audit + off-family rejudge |
| Dependency-heavy and flat rubrics score alike | models ignore process | schema field silently dropped | round-trip canary |
| Evidence quotes you can't locate | model wrote it elsewhere | judge hallucination | line-by-line re-check vs. artifact |
| A capability vanishes on one build | quantization regression | request-format interaction | isolated ablation matrix |

All four judge-side defects fail open. A dropped schema field doesn't raise an error; it flattens the rubric. A hallucinated quote doesn't error out; it fills the evidence field. A misapplied veto doesn't warn; it writes a zero. A harness incompatibility doesn't crash; it produces a model that appears to have chosen not to use tools. The judge stack has no ground truth of its own, so nothing inside it can report that it is wrong. The separation has to come from outside.

## Treat judge changes like deployments

Every fix above added an edit to the judge: an arbitration clause, a re-rendered schema field, an evidence-verification pass, a harness reconfiguration. That creates the next problem. Judge prompts and configs now change as often as pipeline code, and every edit can quietly reintroduce any of the four defects. A judge edit that ships unversioned and untested will eventually cause another incident like the schema loss above.

So the judge needs a regression suite of its own, and a judge version bump should run it before touching production scores:

- a genuine-leak fixture that must still score zero, so the veto keeps catching real leaks;
- a citation-heavy legitimate fixture that must survive, so the veto doesn't over-fire;
- one round-trip canary per schema field, so a dropped field fails a test instead of failing silently;
- a frozen set of (deliverable, rubric, expected scorecard) triples, so judge drift shows up as a concrete diff;
- and the standing oracle: reference answers re-judged at full marks on every judge version.

That last one is the cheapest continuous judge monitor I know of. The reference answers never change; the judge does. If a judge version moves their scores, that movement is a judge finding by construction, because there is no model in the loop to argue about.

## The judge-reliability checklist

Four incidents, four standing checks. I no longer sign off on an LLM-judged eval without them:

1. **False-kill audit.** Pull every fatal-zeroed item and cross it against its positive hit rate. High positives plus a fatal veto goes to arbitration, and the veto only survives with verbatim evidence.
2. **Schema round-trip test.** One canary per rubric schema field, where the field deterministically flips the score. In CI, not in a doc.
3. **Hallucination re-check.** Re-verify scored rows' cited evidence against the actual artifact, sampled continuously and exhaustively before delivery. Oracle-judge every reference answer: full marks, or a root cause.
4. **Harness ablation.** Before attributing any behavior change to the model, hold the model fixed and vary the harness. Without that matrix, "the model regressed" is a guess.

## Takeaway

A benchmark score is a measurement, and in an LLM-judged eval the instrument is itself a model, wrapped in a harness, reading a schema. All four defects above returned well-formed, plausible numbers, and none of them crashed. If you only test the model, every judge bug you have will eventually get published as a model finding, so the judge needs to be in the test scope along with the model.
