# Benchmark Difficulty Is a Measurable Property

I build pipelines that synthesize document-grounded exam items for frontier models. Every team doing this work eventually gets the same two pieces of review feedback: the benchmark is too easy, and it is too templated. In my experience both complaints are usually accurate. The problem is what teams do about them.

## Why "make it harder" doesn't work

The default response is to tell the authoring stage to "be more difficult and less formulaic," regenerate, and ask the reviewer whether the new version feels better. This fails for three reasons.

First, authors respond to "harder" with surface complexity: longer prompts, more files, more jargon. That changes how a question looks to the reviewer who complained, while the solvable core stays the same. The reviewer signs off and the score doesn't move.

Second, the claim is unfalsifiable. If difficulty was never measured before the rework, "we made it harder" is just an assertion, and the next reviewer is free to feel otherwise.

Third, and this is the one almost nobody controls for: difficulty is always measured through a solver and a judge, and both of them drift. If anything about the measurement setup changes between the before and the after, the comparison is contaminated. On our calibration campaign, the contamination turned out to be larger than the treatment effect.

So we stopped arguing about feel and treated difficulty as a measurable property of the benchmark, with a target, an instrument, and error bars.

## An acceptance band and a closed loop

The target: a fixed reference solver should land a mean score between **0.5 and 0.7**. Above 0.7 the benchmark stops discriminating at the frontier; capable models saturate it and score differences are mostly noise. Below 0.5 you are usually measuring mis-keyed items and impossible questions rather than ability. The exact band is debatable. The point is that the target is a number at all.

With a band, difficulty engineering becomes a closed loop:

1. **Eval**: score every pack with the fixed solver in an isolated harness.
2. **Diagnose**: bucket packs by score; read the high scorers' transcripts to see why they were easy.
3. **Rework**: apply named difficulty recipes (below) to the packs above the band.
4. **Re-eval**: same solver, same harness, same judge. Repeat until the mean lands in the band.

No step in the loop depends on anyone's impression of difficulty.

## Keeping the harness leak-proof

The loop is only as good as its measurement, and the most common way the measurement goes wrong is leakage. A synthesis pipeline is full of answer-adjacent artifacts: the rubric, the reference answer, verification tests, provenance metadata. If any of them can reach the solver, you are measuring leakage instead of difficulty, and rework will chase numbers that were never real.

Instead of trying to scrub leaks out of an existing environment, we built the sandbox so that leaks have no path in:

```python
def build_sandbox(pack):
    sb = fresh_dir()                       # new empty directory, every run
    for f in pack.input_files:             # only what a real candidate would get
        copy(f, sb / "input" / f.name)
    (sb / "output").mkdir()                # an empty output dir, nothing else
    # rubric, reference answer, tests, provenance: never copied in
    assert inventory(sb) == expected_inventory(pack)
    return sb

def measure(pack, solver, judge):
    sb = build_sandbox(pack)
    solver.run(prompt=pack.instruction, cwd=sb)
    answer = read_dir(sb / "output")
    return judge.score(answer, pack.rubric)   # same reward math as production
```

Two properties matter here. The sandbox is built by inclusion rather than exclusion, so there is no denylist to keep current and nothing to forget. And the harness re-implements the exact production reward math, so a calibration score and a delivery score mean the same thing: the number the campaign reports is the number the delivery-time eval will report.

## The control group

Mid-campaign, the solver's effort setting changed. To find out what that change alone was worth, we kept a small control group of packs that were never reworked and scored them under both settings. The effort setting alone moved the control group's mean by **+0.159**.

That is larger than the effect of most rework. A team that reworks questions while also upgrading the solver, the harness, or the judge, and then reports that the rework made the benchmark harder, is most likely reporting the confound.

```python
# A held-out set of untouched packs, scored under both effort settings.
control = load_packs(CONTROL_IDS)              # never reworked
effort_effect = mean(
    measure(p, solver_high, judge) - measure(p, solver_low, judge)
    for p in control
)                                              # measured: +0.159

# A difficulty claim has to subtract this out:
net_rework_effect = observed_delta - effort_effect
# Our round 1: net -0.139. The confound (+0.159) was larger
# than the treatment (-0.139) and pointed the other way.
```

With the confound isolated, round-one rework had a net effect of **−0.139**. Having both numbers on the table changed how the team talked about difficulty: nobody claimed "harder" anymore without saying relative to which solver configuration.

## The trajectory

The benchmark under calibration was roughly 130 legal questions synthesized from real multi-document workspaces.

- First full measurement: mean **0.783**. Too easy.
- Re-baselined under a stronger solver configuration: **0.821**. The questions hadn't changed; the solver configuration had.
- After two rework rounds covering most of the benchmark: final mean **0.648**, median 0.693, std 0.226. Inside the band, so we closed the campaign.

One thing in these numbers doesn't line up: the re-baseline moved the full set by far less than the control group's +0.159. We noticed, and we can't fully reconcile it. The full-set runs were operational snapshots from different points in a live campaign, and a small control group estimates drift with wide error bars. For the subtraction we still trust the controlled number, because it is the only measurement where a single variable changed. But the disagreement is worth stating rather than smoothing over; two measurements that disagree are at least something you can go and investigate.

The standard deviation is part of the result, not a caveat. A useful benchmark has a spread of difficulty, with a few packs near saturation, a few very hard, and most in between; a flat benchmark measures a single threshold instead of a curve. We shipped the score distribution alongside the mean, bucketed by band, so expert reviewers could spend their attention on the tails.

## What actually made questions harder (and what didn't)

Reworked packs were tagged with the names of the recipes applied to them, so after re-eval we could compare recipes by measured effect instead of by how plausible they sounded.

| Recipe | Measured effect | Notes |
|---|---|---|
| Exhaustive regulatory-element coverage + precise consequence boundaries + restrained conclusions | Strongest | Discussed below |
| Deep cross-document chains with dependency cascades | Strong on rich-material packs (≥8 files) | Needs enough cross-document material to build on |
| Restraint traps alone | ~None on careful models | Discussed below |

The strongest recipe makes three demands at once. Coverage: enumerate every applicable regulatory element, not just the obvious ones. Precision: state consequences with exact boundaries, including thresholds, scopes, and effective dates. Restraint: don't conclude past what the material supports. A model has to satisfy all three at the same time, and most models manage at most two.

The failure case was restraint traps alone: questions whose only trick is that some conclusions can't be confirmed from the material. On careful models they didn't discriminate at all. Our reading is that a careful model can escape by hedging everything; if it marks every conclusion as unconfirmable, the trap never triggers, and hedging costs nothing unless the rubric also pays for exhaustive, precise positive findings. Restraint only discriminates when it is in tension with coverage, which is why the strongest recipe bundles the two.

Structure also interacts with material: rich-material packs (≥8 files) respond best to deep-chain integration. A dependency cascade needs enough cross-document surface to build on; on thin packs the same recipe has nothing to work with.

## Two judge bugs the campaign surfaced

A calibration campaign re-scores the same items again and again, which makes it an ongoing stress test of the judge. Two real bugs surfaced during ours, neither as a crash. One showed up as impossible numbers in the score data; the other was found by a deliberate adversarial audit.

**Fatal-zeroing legitimate citations.** Items with 91–93% positive rubric hits were coming out at zero total. The judge's anti-leakage check saw the solver quoting the provided materials, which is what the assignment asks for, and classified the quotes as reference-answer leakage, triggering the fatal one-vote-veto rule. A near-perfect row-level profile plus a zero total is a contradiction, but you only see it if you look at row-level hits instead of totals. We confirmed the bug by re-running the suspect items through a model family not otherwise in the loop (Qwen) as a cross-check judge.

**Silently dropping the rubric DAG.** Our rubrics are dependency graphs: an outcome row only counts if the process rows it depends on were hit, so a model can't score by guessing the final number. The judge harness had been silently dropping the `depends_on` field during parsing, so the gating never executed. Nothing crashed, and nothing looked impossible either; flat-rubric scores are plausible scores, and re-scoring alone would never have flagged them. This one came out of a separate adversarial self-verification pass, an audit in which every behavior we claimed for the system had to be demonstrated against the running code rather than assumed. "Outcome rows are gated on process rows" was one of the claims, and the attempt to demonstrate it produced the bug report.

Both fixes landed with regression tests, since bugs like these are easy to reintroduce later:

```python
def test_citing_provided_material_is_not_leakage():
    # Quoting the input files is the assignment, not a leak.
    answer = answer_quoting(pack.input_files)
    assert judge.leak_verdict(answer, pack) == "clean"

def test_high_positive_profile_cannot_silently_fatal_zero():
    # 90%+ positive hits plus a fatal zero is contradictory:
    # require arbitration with a written justification.
    verdict = judge.score(strong_answer, pack.rubric)
    if verdict.positive_hit_rate > 0.9:
        assert verdict.fatal_zeroed is False or verdict.arbitration_note

def test_depends_on_survives_the_round_trip():
    rubric = rubric_with(process=["p1"], outcome=[row("o1", depends_on=["p1"])])
    parsed = judge.load_rubric(serialize(rubric))
    assert parsed["o1"].depends_on == ["p1"]   # this field was dropped once

def test_outcome_row_gated_by_missed_dependency():
    verdict = judge.score(right_number_wrong_reasoning, rubric)
    assert not verdict["p1"].hit and not verdict["o1"].hit
```

The general lesson: in an LLM-judged eval, the judge is part of the system under test. A difficulty campaign that doesn't audit its judge is measuring with an instrument nobody has calibrated.

## Treat difficulty like latency

No engineering team would accept "the service feels slow" answered by "we made it feel faster." Latency gets a target (a p99 threshold), a load harness, a control for environmental drift, and regression tests. Benchmark difficulty deserves the same machinery:

- a **target band**: solver mean 0.5–0.7, agreed before rework starts;
- a **leak-proof harness**: trustworthy by construction, not by cleanup;
- a **control group**: because the measurement setup drifts, in our case by +0.159, sometimes more than the rework itself (−0.139);
- **regression tests on the judge**: because instrument bugs don't crash, they mismeasure.

"Harder" is a claim about a measurement. Without a control group, there is no way to separate the rework effect from drift, and the claim doesn't hold up.
