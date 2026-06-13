# Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data

Here's the uncomfortable thing about synthetic data: it is *plausible by construction*. The model that generated it is the same kind of model that will later be fooled by it. Plausibility isn't a sign of quality — it's the exact shape of the failure.

I've built pipelines that fabricate realistic, document-grounded cases — including synthetic medical records, each shipped as a bundle of `.docx` and `.xlsx` files with a grading rubric. A generated patient record can read perfectly: right disease, right tone, sensible labs. And it can still contain a hemoglobin that quietly contradicts its own hematocrit. A human skimming it nods. A model skimming it nods. The error survives precisely *because* everything looks right.

So the rule I work by: **don't review your own data. Attack it.**

## Three roles, deliberately separated

The architecture I keep returning to is Actor → Critic → Monitor (ACM), and the separation is the whole point.

- **Actor** generates the case — the documents and the rubric.
- **Critic** is an adversary whose only job is to find what's *wrong*. It does not write prose praise. It emits **structured findings**.
- **Monitor** is the arbiter. It reads the findings and decides the next action, enforcing hard constraints rather than negotiating with the Actor.

The Critic's output is structured on purpose — findings you can count, sort, and route are findings you can act on; a paragraph of "looks mostly good" is not:

```json
{
  "case_id": "onc_4471",
  "severity_counts": { "critical": 1, "major": 2, "minor": 3 },
  "findings": [
    {
      "id": "F1",
      "severity": "critical",
      "category": "derived_value_inconsistency",
      "file": "labs.xlsx",
      "location": "CBC!D8",
      "detail": "MCV 102 fL is inconsistent with HCT 0.31 / RBC 4.6 (implies ~67 fL)."
    }
  ]
}
```

The Monitor consumes that and arbitrates — and notice it can only *revise*, *rework*, *resynthesize*, or *ship*; it cannot rationalize a critical away:

```python
def monitor(findings):
    sev = findings["severity_counts"]
    if sev["critical"] > 0:
        return "rework"            # must be fixed and re-reviewed
    if sev["major"] >= 3:
        return "resynthesize"      # too broken to patch; regenerate
    if sev["major"] > 0:
        return "revise"            # targeted edits, then re-review
    return "ship"
```

The reason the generator must not grade itself is the same reason you don't let a student mark their own exam. A model is unreservedly good at justifying what it just produced. You need a role whose incentive is to *disbelieve*.

## The payoff isn't the loop — it's the taxonomy

Anyone can wire up a generate-then-check loop. What you actually get from running one at scale is something more valuable: a **taxonomy of the specific ways self-generated data lies.** Single-pass generators produce these defects relentlessly, and a human reviewer almost never catches them all by hand. Naming them is what lets QC become systematic.

The recurring offenders, roughly in order of how often they bite:

- **Derived-value inconsistency.** Dependent quantities that don't reconcile. A computed ratio that contradicts the components it's built from; a lab value that doesn't fit the diagnosis it's supposed to support. The generator emits each number locally and never checks the arithmetic that ties them together. This is the number-one defect, and it's invisible to anyone reading casually. The good news: once you've named it, it's often *deterministically checkable*:

```python
def check_cbc(row):
    # MCV (fL) ≈ HCT / RBC × 1000, with RBC in 10^12/L
    implied_mcv = (row.hct / row.rbc) * 1000
    if abs(implied_mcv - row.mcv) > 5:
        yield Finding("critical", "derived_value_inconsistency",
                      f"MCV {row.mcv} vs implied {implied_mcv:.0f}")
```

- **Cross-file consistency locks.** The same fact has to agree *everywhere it appears* — a date in the `.docx` and the `.xlsx`, a patient ID across three files, a total versus the rows it sums. Generators write each file in its own little context and drift; treat shared facts as a lock every file must satisfy:

```python
def check_locks(files, locked_fields=("patient_id", "admit_date", "dob")):
    for field in locked_fields:
        values = {f.name: f.get(field) for f in files if f.has(field)}
        if len(set(values.values())) > 1:
            yield Finding("critical", "cross_file_conflict",
                          f"{field} disagrees across files: {values}")
```

- **Timeline coherence.** Events, report dates, and even file-modified timestamps that can't physically co-exist — a result dated before the test that produced it, a discharge before an admission, or the tell-tale sign of synthesis: *everything* dated today.
- **Template / cross-category contamination.** A case wearing the wrong document's skeleton — an oncology workup built from a cardiology template, lab results sitting in a prose document instead of the spreadsheet they belong in. It's the structural fingerprint of "generated, not lived."
- **Provenance & watermark leakage.** Authorship metadata, generator fingerprints, absolute file paths, internal benchmark markers — anything that lets a *trained* model recognize "this is synthetic" or "this came from dataset X" and pattern-match instead of reasoning. Leakage doesn't fail the case; it fails the entire benchmark by making it gameable.
- **File integrity.** The boring, fatal one: files that won't even open because of write-library residue, or tables that overflow the page. An unopenable `.xlsx` is a zero no matter how good the content is.

If your QC isn't explicitly hunting each of these, it's not doing QC — it's doing a vibe check.

## Make the QC compound

The trick that turns this from expensive into *valuable* is simple: every defect the Critic catches becomes a reusable, named **bad-pattern detector**. The cheap, deterministic ones run as code before you ever spend a token on a model; the judgment calls go to the Critic with the named pattern attached.

```python
BAD_PATTERNS = []

def detector(category, severity):
    def register(fn):
        BAD_PATTERNS.append((category, severity, fn))
        return fn
    return register

@detector("file_integrity", "critical")
def opens_cleanly(case):
    for f in case.office_files:
        if not can_open(f):           # openpyxl / python-docx round-trip
            yield f"{f.name} fails to open"

def run_cheap_checks(case):
    return [(cat, sev, msg)
            for cat, sev, fn in BAD_PATTERNS
            for msg in fn(case)]
```

That changes the economics. A model's freelance judgment doesn't accumulate; a growing library of named failure modes does. Your QC gets measurably smarter every week, and — just as important — you can *tell a new team member exactly what "good" means*, because it's a checklist, not a feeling.

## Spend your expensive model where judgment lives

Not every role needs your best model. Finding a corrupted spreadsheet or a leaked path is cheap, mechanical work — run it as code, or use a small, fast model. Adjudicating whether a borderline clinical presentation is realistic enough to ship is genuine judgment — that's where the expensive arbiter earns its cost. Matching model strength to the difficulty of the call is most of how you keep an adversarial loop affordable at scale.

## The same pressure belongs on the rubric

One more place the adversary has to look: the rubric itself. A rubric that any reader could satisfy isn't testing anything. So the same loop rebalances it — enough positive checks to discriminate, negative checks that are capped so a single penalty can't dominate, and *no leakage in the rubric text*:

```python
def rubric_is_healthy(rubric):
    pos = [c for c in rubric if c.weight > 0]
    neg = [c for c in rubric if c.weight < 0]
    assert len(pos) >= 2 * len(neg), "not enough positive signal"
    assert all(abs(c.weight) <= 0.5 * sum(p.weight for p in pos) for c in neg), \
        "a single penalty can dominate the score"
    assert not any(leaks_path_or_answer(c.text) for c in rubric), \
        "rubric text leaks the answer"
```

A case is only as good as the rubric that grades it, and rubrics drift toward "easy to pass" unless something actively pushes back.

## The lesson generalizes

Generation is easy now; it's commoditized. **Adversarial verification at scale is the moat.** And the lesson isn't about medical data — it's about any dataset you generated yourself. It will lie to you in plausible-looking ways, and no amount of careful prompting fixes that, because the thing producing the data and the thing reviewing it share the same blind spots. The only durable defense is to build something whose entire job is to disbelieve — and then to remember everything it catches.
