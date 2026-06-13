# Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data

Here's the uncomfortable thing about synthetic data: it is *plausible by construction*. The model that generated it is the same kind of model that will later be fooled by it. Plausibility isn't a sign of quality — it's the exact shape of the failure.

I've built pipelines that fabricate realistic, document-grounded cases — including synthetic medical records, each shipped as a bundle of `.docx` and `.xlsx` files with a grading rubric. A generated patient record can read perfectly: right disease, right tone, sensible labs. And it can still contain a hemoglobin that quietly contradicts its own hematocrit. A human skimming it nods. A model skimming it nods. The error survives precisely *because* everything looks right.

So the rule I work by: **don't review your own data. Attack it.**

## Three roles, deliberately separated

The architecture I keep returning to is Actor → Critic → Monitor (ACM), and the separation is the whole point.

- **Actor** generates the case — the documents and the rubric.
- **Critic** is an adversary whose only job is to find what's *wrong*. It does not write prose praise. It emits **structured findings**: severity, category, the file, the location. Structure matters — findings you can count, sort, and route are findings you can act on; a paragraph of "looks mostly good" is not.
- **Monitor** is the arbiter. It reads the findings and decides: revise, rework, re-synthesize, or ship — and it enforces hard quality constraints rather than negotiating with the Actor.

The reason the generator must not grade itself is the same reason you don't let a student mark their own exam. A model is unreservedly good at justifying what it just produced. You need a role whose incentive is to *disbelieve*.

## The payoff isn't the loop — it's the taxonomy

Anyone can wire up a generate-then-check loop. What you actually get from running one at scale is something more valuable: a **taxonomy of the specific ways self-generated data lies.** Single-pass generators produce these defects relentlessly, and a human reviewer almost never catches them all by hand. Naming them is what lets QC become systematic.

The recurring offenders, roughly in order of how often they bite:

- **Derived-value inconsistency.** Dependent quantities that don't reconcile. A computed ratio that contradicts the components it's built from; a lab value that doesn't fit the diagnosis it's supposed to support. The generator emits each number locally and never checks the arithmetic that ties them together. This is the number-one defect, and it's invisible to anyone reading casually.
- **Cross-file consistency locks.** The same fact has to agree *everywhere it appears*. A date in the `.docx` and the `.xlsx`. A patient ID across three files. A total on a summary page versus the rows it sums. Generators write each file in its own little context and drift; the fix is to treat shared facts as a lock that every file must satisfy.
- **Timeline coherence.** Events, report dates, and even file-modified timestamps that can't physically co-exist — a result dated before the test that produced it, a discharge before an admission, or the tell-tale sign of synthesis: *everything* dated today.
- **Template / cross-category contamination.** A case wearing the wrong document's skeleton — an oncology workup built from a cardiology template, lab results sitting in a prose document instead of the spreadsheet they belong in. It's the structural fingerprint of "generated, not lived."
- **Provenance & watermark leakage.** Authorship metadata, generator fingerprints, absolute file paths, internal benchmark markers — anything that lets a *trained* model recognize "this is synthetic" or "this came from dataset X" and pattern-match instead of reasoning. Leakage doesn't fail the case; it fails the entire benchmark by making it gameable.
- **File integrity.** The boring, fatal one: files that won't even open because of write-library residue, or tables that overflow the page. An unopenable `.xlsx` is a zero no matter how good the content is.

If your QC isn't explicitly hunting each of these, it's not doing QC — it's doing a vibe check.

## Make the QC compound

The trick that turns this from expensive into *valuable* is simple: every defect the Critic catches becomes a reusable, named **bad-pattern detector**. The derived-value check, the cross-file lock, the timeline rule — each starts as a one-off finding and graduates into a permanent thing the Critic is required to look for on every future case.

That changes the economics. A model's freelance judgment doesn't accumulate; a growing library of named failure modes does. Your QC gets measurably smarter every week, and — just as important — you can *tell a new team member exactly what "good" means*, because it's a checklist, not a feeling.

## Spend your expensive model where judgment lives

Not every role needs your best model. Finding a corrupted spreadsheet or a leaked path is cheap, mechanical work — a small, fast model does it fine. Adjudicating whether a borderline clinical presentation is realistic enough to ship is genuine judgment — that's where the expensive arbiter earns its cost. Matching model strength to the difficulty of the call is most of how you keep an adversarial loop affordable at scale.

## The same pressure belongs on the rubric

One more place the adversary has to look: the rubric itself. A rubric that any reader could satisfy isn't testing anything. So the same loop rebalances it — enough positive checks to be discriminating, negative checks that are capped so a single penalty can't dominate, and *no leakage in the rubric text* (a rubric that names the file path or restates the answer has handed the test away). A case is only as good as the rubric that grades it, and rubrics drift toward "easy to pass" unless something actively pushes back.

## The lesson generalizes

Generation is easy now; it's commoditized. **Adversarial verification at scale is the moat.** And the lesson isn't about medical data — it's about any dataset you generated yourself. It will lie to you in plausible-looking ways, and no amount of careful prompting fixes that, because the thing producing the data and the thing reviewing it share the same blind spots. The only durable defense is to build something whose entire job is to disbelieve — and then to remember everything it catches.
