# Rubrics as DAGs: Scoring Process, Not Just Outcomes

I build benchmark-synthesis pipelines that turn a domain expert's real files into agentic exam items, scored row-by-row by an LLM judge against a rubric. Most of the review effort tends to go into the judge: which model, what prompt, how well it aligns with human graders. The rubric gets treated as a text field. In practice the rubric deserves at least as much scrutiny, because it behaves like a program that the judge interprets, and a program with no types, no control flow, and no tests fails silently.

This post describes the rubric schema our pipeline converged on after shipping flat rubrics and paying for it, along with a judge bug we shipped anyway, the tests that would have caught it, and the repair rules that keep the system consistent.

## Where flat rubrics fail

A flat rubric is a weighted checklist: "concludes X, 4 points; mentions Y, 2 points." Every row is scored independently, and that independence produces two failure modes.

The first is guessed conclusions. An item asks for a damages figure, a filing deadline, or a compliance verdict. A model can land on the right conclusion without doing the work, from a good prior, a lucky rounding, or leakage in the prompt. A flat rubric pays full outcome credit either way, because it has no way to check how the number was reached. The score then measures how guessable the answer key is, not whether the reasoning was grounded in the evidence.

The second is partial credit for hallucinated steps. A model writes confident intermediate analysis, citing clauses that don't exist or a timeline it invented, gets the conclusion wrong, and still collects a respectable partial score, because each plausible-sounding step matches some row's wording. The rubric pays for writing that looks like the work, without checking that the work happened.

Both defects have the same root: the rubric knows nothing about the structure of the reasoning it scores. Rows are independent by construction, but the steps in real work are not.

## The schema: typed rows and dependency edges

Our fix is to type every row and to wire outcome rows to the process rows that must precede them:

```yaml
item: breach_notice_review_017
rows:
  - id: P3
    type: process
    weight: 2
    text: "Locates the 45-day cure period in §8.2 of the supply agreement and quotes it."
  - id: P4
    type: process
    weight: 2
    text: "Establishes from the email thread that notice was received on March 3, not March 1."
  - id: O2
    type: outcome
    weight: 4
    depends_on: [P3, P4]
    text: "Concludes the cure window expired on April 17."
  - id: N1
    type: negative
    weight: -2      # bounded: negatives can erase credit, never take the item below zero
    text: "Cites a clause number that does not exist in any provided document."
  - id: H1
    type: hurdle
    weight: 0       # no points either way; a hit vetoes the whole item
    text: "Deliverable invents a settlement figure not present in any source file."
```

Four row kinds plus one mandatory field:

- **Process** rows score the steps: locate the evidence, establish the fact, reconcile the two sources that disagree. They make up most of the rubric by design.
- **Outcome** rows score conclusions, but an outcome row can only hit if all of its `depends_on` process rows hit. A correct April 17 with no located cure period and no established receipt date is scored as a guess. This one rule removes the guessed-conclusion problem.
- **Negative** rows deduct for specific, named misbehavior, not general "quality" penalties. They are bounded: a stack of negatives can zero the item but never drive it negative, so one bad habit can't dominate the measurement.
- **Hurdle** rows carry weight 0 and exist only to veto. Fabricating a figure, leaking the reference answer's phrasing, or ignoring a mandatory refusal: if a hurdle fires, the item scores zero regardless of everything else. They are deliberately worth no points, so there is nothing to gain by satisfying one.
- Per-row justification is mandatory: the judge must quote the place in the deliverable where each hit is satisfied. A hit without an evidence quote counts as an audit failure. Those quotes are also what later lets you catch a judge citing evidence that isn't in the deliverable at all.

## Enforcing coverage floors in code

There is a second, quieter way rubrics degrade: coverage collapse. Ask an LLM author for "a thorough rubric, mostly process rows" and you get 12 rows one day and 40 the next, with the process/outcome ratio drifting with the item's phrasing. Numeric instructions in prompts are not followed reliably, so we enforce floors in a validator:

```python
def validate(rubric):
    # coverage floors, enforced here rather than in the authoring prompt
    assert len(rubric.rows) >= 25
    assert n_rows(rubric, "process") >= 15 and n_rows(rubric, "outcome") >= 10
    for row in rubric.rows:
        # edges may only point at process rows, and must form a DAG
        assert all(rubric[d].type == "process" for d in row.depends_on)
    assert is_acyclic(rubric)

def score(rubric, verdicts):
    hit = {r.id: verdicts[r.id].hit for r in rubric.rows}
    if any(hit[r.id] for r in rubric.rows if r.type == "hurdle"):
        return 0.0                                   # one-vote veto
    total = 0.0
    for r in rubric.rows:
        if r.type == "outcome" and not all(hit[d] for d in r.depends_on):
            continue                                 # right answer, missing work: a guess
        if hit[r.id]:
            total += r.weight
    return max(total, 0.0) / max_positive(rubric)    # negatives are bounded
```

Our floors are at least 25 rows per item, with at least 15 process and 10 outcome rows. The exact numbers matter less than where they are enforced: a generation that misses a floor fails that stage before a judge ever sees it. The same validator checks the graph constraints, outcomes depend only on process rows and the graph is acyclic, so the scoring function never has to handle a malformed graph at judge time.

## We shipped a judge that dropped the edges

None of this helps if the judge ignores the schema, and for two days ours did: the production judge silently dropped the `depends_on` field. It parsed the rows, scored the rows, and wrote fluent per-row justifications, so nothing crashed and the score distributions looked plausible. Meanwhile every outcome row was effectively flat again, and guessed conclusions were earning full credit while the schema on disk said they couldn't.

No dashboard caught it. What caught it was an adoption checklist that required demonstrating, on a live item, that each schema field observably changes judge behavior. The `depends_on` demonstration failed, and following up on that one failure surfaced the whole class of bug. The same habit of manually running real items through the judge and reading the verdicts, rather than watching dashboards, later caught the judge fatal-zeroing items with 91-93% positive hits because it misread in-material citations as answer leakage.

Two tests would have caught the dropped edges on day one:

```python
def test_dependency_cascade_fires():
    item = load_reference_item()                     # scores full marks, by invariant
    sabotaged = delete_step(item.reference, "P4")    # remove exactly one grounded step
    v = judge(sabotaged, item.rubric)
    assert v["P4"].hit is False                      # the deleted step is missed
    assert v["O2"].hit is False                      # and the cascade must fire
    assert "P4" in v["O2"].justification             # the judge must say why

def test_judge_echoes_the_graph():
    v = judge(any_deliverable, item.rubric)
    # a judge that cannot repeat the edges back did not use them
    assert v.resolved_edges == item.rubric.edges
```

The round-trip test makes the judge echo the dependency graph it resolved, then diffs it against the rubric's. The sabotage test starts from a known full-marks answer, deletes exactly one depended-on step, and requires the cascade to fire with the right attribution. Neither test needs a second model or human labels. We just hadn't written them, because the judge appeared to be working.

## Repairing deductions on reference answers

DAG rubrics come with an invariant that makes them maintainable: **reference answers must score full marks.** If the gold answer can't max its own rubric, either the rubric or the answer is wrong. We enforce this by oracle-judging every reference answer with production-equivalent judges and repairing every deduction.

Under a flat rubric, "the reference lost points" is one undifferentiated problem. Under a DAG rubric, every deduction falls into one of four classes, and each class has a different correct repair:

| Deduction class | What the judge saw | Correct repair |
|---|---|---|
| Direct miss | a row genuinely unsatisfied by the reference | fix the answer (missing step) or the row (unsatisfiable ask) |
| `depends_on` cascade | outcome satisfied, but an upstream process row missed | repair upstream: the missed step or a wrong edge, never the satisfied outcome row |
| Negative hit | the reference did something a negative row forbids | one of the two is wrong; decide which, change exactly that one |
| Hurdle | a veto fired on the gold answer | almost always a rubric bug or contaminated source material; stop and root-cause |

The cascade class is the one that gets repaired incorrectly most often. When a reference answer loses an outcome through a dependency cascade, the outcome row itself was satisfied; the judge's verdict says so. The defect is upstream: either the answer really skipped a step (fix the answer), or the process row asks for something the materials can't support (fix the row), or the edge encodes a dependency that isn't real (fix the edge). Deleting or loosening the satisfied outcome row does recover the score, but it also removes the discrimination the schema was added to provide. Repairs are minimal-change by policy: change the diagnosed cause, re-judge blind, and confirm no other row moved. The most stubborn deductions in our last round were not rubric bugs at all; they traced back to internally contradictory injected noise files, and were fixed by editing specific paragraphs in the source materials rather than by weakening any row.

## Checking process rows against actual solving

One question remains: do the process rows correspond to steps a real solver has to perform, or are they a plausible-sounding decomposition the author wrote down after seeing the answer?

We check this empirically with a two-pass trial-solve stage. A solver model first attempts the item blind, in an isolated sandbox containing only the input files: no rubric, no reference, no tests. Then it re-solves hinted, with the reference answer available and its own blind attempt carried into context, roughly the situation of a student reading the reference answer right after the exam.

We then diff the two transcripts. A load-bearing process row shows up as a place where the blind attempt stalled and the hinted attempt got through. A process row that never appears in the diff is probably decorative, usually the outcome paraphrased into step-shaped language, and that is the row to rewrite or cut. The same pair of transcripts also checks the edges: if the blind solve hits an outcome without hitting its depended-on process rows, either the edge is wrong or the item is guessable, and both are things to know before delivery.

## Takeaway

Treat the rubric as the program the judge executes:

- Give rows types (process, outcome, negative, hurdle), because "4 points if X" carries no semantics on its own.
- Give the rubric control flow: outcomes gated on `depends_on`, bounded negatives, weight-0 vetoes, so a right answer without the work scores as a guess.
- Put static checks in code: row-count and type floors, edges only into process rows, acyclicity. Prompt instructions don't hold these on their own.
- Test the judge against the schema: round-trip the graph, sabotage a full-marks answer. A judge can drop fields without anything crashing.
- Follow the repair rules: fix the diagnosed cause, never the satisfied row, anchored on the invariant that reference answers score full marks.

A flat rubric gives the judge a list of independent booleans and hopes they add up to a measurement. The typed, tested version costs more to build, but every part of it can be checked before an item reaches production.
