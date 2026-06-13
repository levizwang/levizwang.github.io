# Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data

Everyone is racing to *train* better agents. Far fewer people are building the thing that tells you whether your agent is actually any good: **hard, honest evaluation data.**

I spend most of my time on the second problem — building multi-agent pipelines that turn a domain expert's real files into agentic exam items in fields like investment banking, management consulting, and corporate law. Questions a model *cannot* answer correctly without genuinely reading the documents.

The interesting engineering isn't the generation. Generation is easy. The interesting engineering is **validity** — and the bugs that destroy validity are quiet. They don't crash. They produce a benchmark that *looks* hard and discriminating while measuring almost nothing.

Here are the three failure modes I keep finding, and how the pipeline defends against each.

## 1. Guessability

The most dangerous question is the one that looks hard but can be guessed. A model scores well, you conclude it's capable, and you ship a benchmark that rewards a good prior instead of real work.

The fix is an **answer-removed "anti-guessing" probe**. I grade every item three ways:

- **E1** — files *and* a reference answer are present (the oracle upper bound).
- **E2** — files only, no answer (realistic ability).
- **E3** — files *removed*; the model must answer from the prompt alone.

If E3 doesn't collapse toward zero, the item was leaking information into the prompt, or it was guessable from world knowledge. Either way it wasn't testing what you thought. E3 is the cheapest, most ruthless validity check I know.

## 2. Prompt ↔ rubric leakage

The second failure mode is subtler: the *question* or the *rubric* quietly contains the answer. An over-specified prompt that says "pull the EBITDA from sheet `Model!C14`" has already done the hard part — locating the evidence — for the model. Real work doesn't come with a cell reference.

So the pipeline scrubs leakage as a first-class step: no absolute paths, no internal difficulty knobs, no anchors that pre-locate evidence, and reference answers are isolated from the task surface entirely. If a human grader could solve the item just by reading the rubric, the rubric is broken.

## 3. Judge noise

If you grade with an LLM judge, the judge is part of your measurement instrument — and a noisy instrument manufactures fake signal. I've watched E2 scores come out *higher* than E1 (which is impossible if the answer helps) purely because of judge variance.

The fixes are unglamorous: standardize and align the judge model, give it atomic rubric criteria instead of vibes, and **gate its reasoning** — when the evidence is genuinely missing or the input is empty/unreadable, constrain the judge to say so rather than letting it hallucinate a plausible "reason."

## The principle that ties it together: cross-vendor independence

Underneath all three fixes is one design rule: **the model that writes a question never verifies or grades it.** Generation, verification, and judging run on different model families. The moment the same model both authors and solves an item, you get "author-and-grade-yourself" hallucination — the model confidently agreeing with its own mistakes.

Making every node swappable across vendors (and *forcing* different vendors across stages) isn't an infra nicety. It's what keeps the eval honest.

## Takeaway

In evaluation, the bug that hurts you isn't the crash. It's the question that looks hard. Most benchmarks fail silently, and the only way to catch it is to attack your own data: remove the answer, scrub the leakage, distrust the judge, and never let one model close the loop on itself.
