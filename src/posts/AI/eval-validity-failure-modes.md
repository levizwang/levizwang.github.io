# Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data

Everyone is racing to *train* better agents. Far fewer people are building the thing that tells you whether your agent is actually any good: **hard, honest eval data.**

I build multi-agent pipelines that turn a domain expert's real files into agentic exam items — questions a model *cannot* answer correctly without genuinely reading the documents. The interesting engineering isn't the generation. Generation is easy. The interesting engineering is **validity** — and the bugs that destroy validity are quiet. They don't crash. They produce a benchmark that *looks* hard and discriminating while measuring almost nothing.

Here are the three failure modes I keep finding, and how the pipeline defends against each.

## 1. Guessability

The most dangerous question is the one that looks hard but can be guessed. A model scores well, you conclude it's capable, and you ship a benchmark that rewards a good prior instead of real work.

The fix is an **answer-removed "anti-guessing" probe**. I grade every item under three conditions:

```python
def probe(item, model, judge):
    # E1: files + reference answer  -> oracle upper bound
    e1 = judge(model.solve(item.files, answer=item.reference), item.rubric)
    # E2: files only                -> realistic ability
    e2 = judge(model.solve(item.files), item.rubric)
    # E3: NO files, prompt alone    -> pure guessing
    e3 = judge(model.solve(files=None), item.rubric)
    return e1, e2, e3

def is_valid(e1, e2, e3, floor=0.15):
    # A good item collapses when the files are taken away.
    return (e3 < floor) and (e2 < e1)
```

If E3 doesn't collapse toward zero, the item was leaking information into the prompt, or it was guessable from world knowledge. Either way it wasn't testing what you thought. And if E2 ever comes out *higher* than E1 — which is impossible if the answer helps — you've found judge noise, not ability. E3 is the cheapest, most ruthless validity check I know.

## 2. Prompt ↔ rubric leakage

The second failure mode is subtler: the *question* or the *rubric* quietly contains the answer. An over-specified prompt that says "pull the EBITDA from sheet `Model!C14`" has already done the hard part — locating the evidence — for the model. Real work doesn't come with a cell reference.

So the pipeline scrubs leakage as a first-class step. Some of it is boring and mechanical — internal tokens that should never reach a candidate:

```python
LEAK_PATTERNS = [
    r"/Users/\S+", r"[A-Za-z]:\\\\\S+",     # absolute paths
    r"\b[a-f0-9]{32,}\b",                     # cache hashes
    r"\b(D[1-8]|difficulty[_-]?\d)\b",       # internal difficulty knobs
    r"sheet=\w+![A-Z]\d+",                    # pre-located evidence anchors
    r"<answer>.*?</answer>",                   # the answer itself
]

def scrub(text):
    hits = [p for p in LEAK_PATTERNS if re.search(p, text, re.S)]
    if hits:
        raise LeakageError(f"prompt/rubric leaks: {hits}")
```

But the deeper test is semantic: *if a human grader could solve the item just by reading the rubric, the rubric is broken.* A separate reviewer reads only the rubric (never the files) and tries to answer; if they can, the rubric has handed the test away.

## 3. Judge noise

If you grade with an LLM judge, the judge is part of your measurement instrument — and a noisy instrument manufactures fake signal. The fixes are unglamorous: standardize and align the judge model, give it atomic rubric criteria instead of vibes, and — the highest-leverage one — **gate its reasoning** when there's nothing to reason about:

```python
def judge_one(criterion, response, evidence):
    # When the input is empty/unreadable/off-task, an ungated judge will
    # hallucinate a confident "reason" and a score. Refuse to let it.
    if not evidence or is_unreadable(response):
        return Score(hit=False, reason="insufficient evidence to judge")
    return llm_judge(criterion, response, evidence)
```

That one guard removed a whole class of false positives — cases where the model produced nothing usable but the judge, asked to fill in a `reason` field, obligingly invented a plausible justification and a passing score.

## The principle that ties it together: cross-vendor independence

Underneath all three fixes is one design rule: **the model that writes a question never verifies or grades it.** Generation, verification, and judging run on different model families. The moment the same model both authors and solves an item, you get "author-and-grade-yourself" hallucination — the model confidently agreeing with its own mistakes.

```python
assert author.vendor != verifier.vendor != judge.vendor
```

Making every node swappable across vendors — and *forcing* different vendors across stages — isn't an infra nicety. It's what keeps the eval honest.

## Reading the three numbers

Once you have E1/E2/E3 per item, the *shape* tells you more than any single score:

| E1 | E2 | E3 | Diagnosis |
|----|----|----|-----------|
| high | high | **high** | Guessable / leaking — **kill the item** |
| high | ~E1 | low | Reference answer isn't helping — judge noise or trivial item |
| high | mid | low | Healthy: discriminating, file-grounded |
| low | low | low | Too hard or mis-keyed — review the ledger |

## Takeaway

In evaluation, the bug that hurts you isn't the crash. It's the question that looks hard. Most benchmarks fail silently, and the only way to catch it is to attack your own data: remove the answer, scrub the leakage, distrust the judge, and never let one model close the loop on itself.
