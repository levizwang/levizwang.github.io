# The 51-Agent Code Review

A teammate forked my benchmark-synthesis pipeline to specialize it for a new domain, and landed a 17-commit series on the fork. The commits were themed as hardening: fail-closed guards, stricter validation, defensive error handling. The merged diff touched 216 files. Some of that work was going to flow toward a client delivery, so I needed to know what was actually in it, not just what the commit messages said.

To be clear, I trusted my teammate's intent. The question was whether the code did what the commit messages claimed.

The honest problem with a 216-file diff is that no human reviews all of it. You read the first thirty files carefully, skim the next fifty, and then start pattern-matching on shapes. Past a certain size, the review degrades into an approval step. So I did what I now do for any merge with a high failure cost: adversarial verification at scale. I ran 51 agents over the diff, which took about 59 minutes of wall-clock time and produced one report.

## The architecture: finders propose, verifiers execute

The design has two roles, and it only works if they stay strictly separated.

Six independent finders each review the same diff through a different lens. For an eval pipeline the lenses were roughly: error handling and fail-open paths; shared state and concurrency; eval-integrity surfaces (can any answer artifact reach the solver?); schema and contract drift between stages; silent behavior changes hiding in refactors; input handling at the trust boundary. Each finder reads the full diff through its one lens and emits candidate defects with a file, a line, and a claimed failure scenario. No finder sees another finder's output.

The six lenses produced a pool of 45 candidates. That's what the fan-out buys: no single reviewer holds six different failure framings in mind at once across 216 files.

The rule that makes the output trustworthy: every deduplicated candidate gets its own independent verifier (42 verifiers over the 45-candidate pool), each in a fresh context, given the claim and the location but none of the finder's reasoning. The verifier's job is not to judge whether the finding sounds right. It has to reproduce the defect by actually running something: a failing pytest, a real traceback, an observed wrong value. If it can't, the finding doesn't make the report.

```python
# a representative lens set for this kind of pipeline
LENSES = [
    "error handling / fail-open paths",
    "shared state & concurrency",
    "eval-integrity: answer artifacts reaching the solver",
    "schema & contract drift",
    "silent behavior changes in refactors",
    "trust-boundary input handling",
]

candidates = merge(finder(diff, lens) for lens in LENSES)   # 45 candidates

for c in dedupe(candidates):   # 42 verifiers over the 45-candidate pool
    v = fresh_verifier(c.claim, c.file, c.line)   # no finder reasoning shared
    repro = v.attempt_execution()                  # write a test, run the code
    if repro.executed and repro.demonstrates(c.claim):
        c.verdict = "CONFIRMED"                    # report includes the repro command
    elif repro.blocked_by_environment:
        c.verdict = "PLAUSIBLE"                    # repro blocked by the environment
    else:
        c.verdict = "REFUTED"                      # dropped from the report
```

The pool resolved to **40 confirmed, 2 plausible, 3 refuted**. The two plausibles needed conditions the review environment couldn't stage, so they were reported as plausible rather than promoted to confirmed. The whole run took about 59 minutes.

## Why the separation matters

If the same agent finds and confirms, confirmation is a formality. A model asked to check a finding it just produced will mostly agree with itself. The verifier has to be a fresh context with no investment in the claim.

The three refuted candidates show why this is worth the cost. All three were convincing on paper: a code path that looked reachable, a value that looked unguarded. Running the code showed otherwise. Without independent verification, those three would have gone into the report next to the forty real ones, indistinguishable from them, and if the first finding the fork's author checks turns out to be wrong, they stop trusting the rest. A plausible-but-wrong finding costs more than no finding: it wastes the author's time and undermines the credibility of every other entry.

There is a second payoff. Because every confirmed finding was established by execution, the report ships with its repro, which means each defect has a ready-made regression test before anyone starts fixing it.

## Report engineering: attribution, distribution, triage

Forty confirmed defects is raw material, not a deliverable. Three processing steps turned it into one.

**Introducing-commit attribution.** For each defect, the verifier located the commit that introduced the defective line:

```bash
# which commit first introduced this exact string?
git log -S 'layer = "process" if x else "process"' \
    --reverse --format='%h %s' -- pipeline/rubric_loader.py | head -1
```

This changes the tone of the conversation. "Your fork has bugs" is vague and reads as an accusation; "defect 7 was introduced by commit `abc123`, here is the failing test" is a work item someone can schedule.

**Per-commit defect distribution.** Rolling the attribution up gives a table of which commits in the 17-commit series were clean and which carried most of the defects. Most were fine. A handful were not, so the rework scope became those few commits instead of all seventeen. That settles the discussion in favor of a fix plan rather than an argument about rewriting.

**A 5-tier fix plan triaged by delivery impact**, not abstract severity. The table below compresses the triage logic (it is not the report's tiers verbatim). The principle: in an eval pipeline, a quiet defect is more dangerous than a loud one.

| Tier | Class | Why this order |
|------|-------|----------------|
| 1 | Answer/rubric leakage into exported task packs | Contaminates every downstream measurement |
| 2 | Silent misgrading (fail-open gates, defaulted fields) | Wrong scores that look like real scores |
| 3 | Crashes on common inputs | Noisy, so at least it gets noticed |
| 4 | Concurrency races destroying another run's work | Real, intermittent, schedulable |
| 5 | Dead lints, hygiene | After everything above |

Crashes get noticed and fixed quickly. Leakage and misgrading produce plausible-looking numbers that end up in a delivery.

## The meta-finding: hardening commits that introduced fail-open bugs

This was the most useful result of the run. The series' theme was fail-closed hardening, and the confirmed defects included fail-open regressions and eval-answer leakage. The commits introduced the same defect classes they were written to eliminate.

The concrete cases:

- A rubric-layer field assigned through a dead ternary (both branches produced the same default), so every rubric row was typed as "process" and the outcome-gating logic never fired. Result: solvers that guess the final number without doing the work can score again, which reopened an old, known hole in the rubric design.
- Rubric dependency metadata that the loader fabricated instead of failing closed: when it couldn't parse the dependency field, it invented a value and continued. That is exactly the behavior fail-closed handling exists to prevent, and it arrived in a commit about failing closed.
- Reference answers and rubrics leaking into exported task packs, so the solver's sandbox could read the reference answers. For an eval pipeline this is the worst defect class; every score downstream of it is meaningless.
- A leak-detection lint whose regex quantifier was swallowed by an f-string:

  ```python
  # intended: a bounded-window regex for detecting answer text near markers
  pattern = f"reference.{{0,160}}answer"    # what the author meant
  pattern = f"reference.{0,160}answer"      # what shipped: the f-string
                                            # evaluates {0,160} as a tuple ->
                                            # "reference.(0, 160)answer"
                                            # -> matches nothing, lint disabled
  ```

  The lint still existed, ran, and passed. It just no longer checked anything.
- A `NameError` that crashed the ingest stage on any `.msg` or `.zip` input, both common input types for this pipeline.
- A race in which one run deletes a concurrent run's freshly installed work.

I don't think this inversion is bad luck. Hardening changes tend to get written in a defensive mode: wrap it in try/except, add a default, keep the pipeline moving. Broad exception handling plus permissive defaults is precisely how you get fail-open behavior. Meanwhile the commit message says "harden", and reviewers give the diff the trust the label suggests. My conclusion is that hardening-themed diffs need more adversarial review than feature diffs, not less.

One control is needed before believing any of this: maybe the review only rediscovered bugs the author had already found and fixed. Nine days after the review, I re-verified against the fork's HEAD, and two of the headline defects still reproduced. The review was finding live bugs, not stale ones.

## Where the pattern pays, and where it wastes tokens

This setup is not a default. It pays when:

- The merge is high-stakes: a large diff entering a delivery path, where one silent defect ends up in a client artifact.
- The code is unfamiliar: you didn't write it, so you have no mental model to review against. Six finders build six partial models in parallel, faster than you build one.
- The surface is eval integrity: leakage and misgrading defects are silent by construction. Reading rarely finds them; execution does.
- A missed defect costs more than the run: 51 agents for an hour is cheap compared to one contaminated benchmark delivery.

It wastes tokens when:

- The diff is small: a 40-line change doesn't need six lenses. Read it yourself.
- The findings would be matters of taste: style, naming, architecture preferences. You can't write a failing test for an aesthetic disagreement, so the confirm/refute step has nothing to check.
- There is no harness to execute against: if the verifiers can't run anything, you get 45 unverified opinions and zero verdicts. Fix the test harness first; it's the better investment anyway.
- Nobody will act on the report: a review that nobody triages isn't worth running at any scale.

## Operating notes

Details that decided whether the run produced signal or noise:

1. Review the merged diff, attribute per commit afterwards. Defects span commits (for example, a variable renamed in commit 4 breaks a guard added in commit 11), so finders read the merged 216-file diff, and `git log -S` reconstructed per-commit responsibility after confirmation. Reviewing commit-by-commit would have missed the interactions.
2. Keep the lens list short. I could state each of the six lenses in one line. A seventh vague lens like "general quality" produces candidates no verifier can execute against.
3. Dedupe before verifying. Independent finders converge on the most obvious defects. Merge candidates by file, line, and failure class first, or you pay for the same reproduction several times.
4. Give the verifier a claim, not an argument. The verifier receives the file, the line, and the claimed failure scenario, never the finder's reasoning. Shared reasoning is shared bias.
5. Make PLAUSIBLE a first-class verdict. Some real defects need conditions a review sandbox can't stage, such as a live concurrent run or a production credential path. Forcing those to CONFIRMED weakens the standard; forcing them to REFUTED discards real risk. Two of my forty-five landed there and were labeled as such.
6. Drop refuted findings entirely. They don't appear in the report at all. The report's credibility comes from every entry being executable, and one speculative entry makes readers doubt the other forty.

Before running something like this on your own diff, four questions decide whether it's worth it:

- Is there a test harness the verifiers can actually run?
- Can you state each finder's lens in one sentence?
- Is the failure cost of this merge higher than an hour of agent time?
- Will someone triage the report within a day?

If all four answers are yes, run it. If any answer is no, fix that first; the review only amplifies whatever process discipline already exists.

## Takeaway

The number in the title matters less than the rule: the agent that proposes a defect never confirms it, and confirmation means execution. Fan out cheap adversarial readers, require every claim to survive a fresh-context reproduction (a failing test, a real traceback) before it goes in the report, and attribute each confirmed defect to its introducing commit so the output is a set of schedulable work items. And apply the most scrutiny to the diffs whose commit messages promise safety, because that label is where reviewers tend to relax.
