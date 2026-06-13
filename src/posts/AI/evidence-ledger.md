# The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate

Most people worry about LLMs hallucinating *answers*. If you build evaluation data, the scarier failure is an LLM hallucinating *questions*.

I generate hard, document-grounded exam items for frontier models — tasks where a model is handed a folder of real spreadsheets, filings, and memos and asked to reason across them. The whole point is that a model can't score without genuinely reading the files. But there's a quiet way the pipeline betrays itself: the *author* model invents a number that merely *looks* like it came from the documents. Now your benchmark has a question keyed to a fact that doesn't exist. It's unanswerable — or worse, answerable only by hallucinating the same way the author did. One bad item like this doesn't crash anything. It silently rots your measurement.

You cannot prompt your way out of this. "Don't make up numbers" is a wish, not a constraint. The fix has to be **structural**, and the structure I keep coming back to is an *evidence ledger*.

## A ledger sits between the documents and the question

The ledger is an intermediate artifact. Before any question is written, the pipeline reads the source files and produces a list of **facts**, and the author is allowed to reference *only* facts in the ledger. Anything not in the ledger does not exist for the purpose of writing a question.

Concretely, every fact is a row with a value, a locator, and a caveat:

```json
{
  "fact_id": "f_0142",
  "value": "EBITDA margin = 18.4%",
  "locator": { "file": "Model_v3.xlsx", "sheet": "Summary", "cell": "C27" },
  "unit": "percent",
  "caveat": "Model tab is in USD millions; the Deck (p.11) restates this at 17.9% pre-synergy.",
  "verdict": "confirm"
}
```

The **locator** is the load-bearing field. A value without a locator is just the model's word for it. A value with a locator can be re-opened, re-read, and disputed — by another model, by a human reviewer, by the grader who later has to verify the reference answer. Everything downstream that needs to be trustworthy hangs off that one field. The **caveat** is where the difficulty lives: a unit that switches between thousands and millions across two tabs, a figure that conflicts between a deck and the underlying model, a footnote that quietly restricts the number's scope.

## The author can only spend facts it's been given

Once the ledger exists, generation changes character. The author isn't "reading documents and writing a question" — a process with infinite room to drift. It's *spending facts from a fixed budget*. If a question needs a number, that number has to be a ledger entry, which means it has a locator, which means it was really in the file.

You can enforce this mechanically. Before an item is accepted, every number it cites is matched back to a `fact_id`:

```python
def validate_item(item, ledger):
    cited = extract_quantities(item.question + item.reference_answer)
    ledger_values = {normalize(f.value) for f in ledger.facts}
    orphans = [c for c in cited if normalize(c) not in ledger_values]
    if orphans:
        raise OverLedgerError(f"cites facts not in ledger: {orphans}")
```

Hallucination doesn't get prompted away; it gets **designed out of the reachable space**. This is the same instinct as compiling against a type system instead of hoping your strings line up at runtime. You move the guarantee from "the model was careful" to "the model couldn't have done otherwise."

## One model extracts; a *different* model verifies

Here's the part people skip: the ledger itself can be hallucinated. The extractor is also an LLM, and it can confidently log a fact that isn't there. So the ledger is not built by one model in one pass.

A second model — a *different* family, deliberately — independently verifies each fact against the source and returns a verdict with *its own* observed locator:

```python
VERDICTS = {"confirm", "refute", "uncertain"}

def cross_verify(fact, source_docs, verifier):
    """Verifier is a different vendor than the extractor."""
    out = verifier.check(
        claim=fact.value,
        expected_at=fact.locator,
        documents=source_docs,
    )
    assert out.verdict in VERDICTS
    if out.verdict == "refute":
        ledger.drop(fact.fact_id)            # never reaches an author
    elif out.verdict == "uncertain":
        ledger.flag_for_human(fact.fact_id)  # escalate, don't average
    else:
        fact.observed_locator = out.locator  # second witness agrees
    return out
```

Crucially, disagreements are not averaged into a confidence score and waved through. A `refute` removes the fact; an `uncertain` escalates to a human. The point of using a different vendor is the same reason you don't let one model both write and grade an exam: a model is far better at catching another model's mistakes than its own. Cross-vendor verification is cheap relative to shipping a benchmark built on a fact that was never on the page.

## Aliases and redactions: the entity that wears three names

Real documents refer to the same thing many ways — a company and its ticker, a counterparty and its redacted codename, a subsidiary named in full on page 2 and by initials on page 40. If the ledger treats those as three different entities, two bad things happen. You can write a question whose "correct" answer depends on a mapping the documents never actually establish (undecidable), or you can accidentally *leak* the mapping and make a hard question trivial.

So there's an explicit **alias-merge** step that canonicalizes entities and checks redactions are consistent across files:

```json
{
  "canonical": "Project Atlas (Target)",
  "surface_forms": ["Atlas", "the Target", "PA Holdings", "[REDACTED-A]"],
  "redaction_consistent": true
}
```

If a name is masked in one document, it must not sit in plaintext in another. This is unglamorous bookkeeping that quietly determines whether a multi-document question is fair.

## Must-hit points, and the hardest question type of all

For each question, the ledger pins **3–5 must-hit points** — the specific facts a correct answer is required to use:

```json
{
  "question_id": "q_07",
  "must_hit": ["f_0142", "f_0090", "f_0211"],
  "spans_files": ["Model_v3.xlsx", "CIM.pdf", "Credit_Agreement.pdf"]
}
```

This does double duty. It's a *difficulty lever*: force a question to touch facts that live in three different files and the model can no longer succeed by skimming one. And it's a *gradeable spec*: the rubric later checks for exactly those must-hits, so "did the model actually do the work" becomes a concrete, checkable property rather than a vibe.

The ledger also records the inverse — **uncertain boundaries**, the things the documents do *not* let you conclude. That unlocks the question type I find most revealing: items whose correct answer is **"this cannot be uniquely determined from the materials."** A capable model recognizes the boundary and says so; a model that pattern-matches its way to a confident number fails.

```json
{
  "question_id": "q_11",
  "type": "undecidable",
  "expected": "Cannot be determined: the synergy phasing is only given as a 3-year total (Deck p.14); the annual split required to compute Year-1 accretion is never disclosed.",
  "trap_fact": "f_0233"
}
```

You can only write these *safely* if you've mapped the boundary first — and mapping the boundary is exactly what the ledger's caveats and uncertain-fields are for. Without a ledger, an "insufficient information" question is just a trap you might have set on yourself.

## The unsexy artifact that makes everything else defensible

None of this is flashy. The ledger is a JSON file full of values and locators that no one will ever see in the final benchmark. But it's the difference between *"a model wrote some questions"* and *"a benchmark where every number is traceable to a page and was verified by an independent model."* When a domain expert disputes an item, you don't argue — you open the locator. When a question's answer is challenged, the chain from answer to evidence is already written down.

In generation, as in answering, the dangerous hallucination is the confident one. The evidence ledger is how you make confidence earn its place: nothing enters a question until it has an address in the source and a second model has gone and looked.
