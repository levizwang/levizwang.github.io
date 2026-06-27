# 证据账本：让 LLM 写出它无法编造的题目

大多数人担心 LLM 编造**答案**。但如果你做评测数据，更可怕的失效是 LLM 编造**题目**。

我的工作是给前沿模型生成高难度、以文档为依据的考题——把一堆真实的表格、财报、备忘录扔给模型，让它跨文件推理。整件事的前提就是：模型不真读文件就答不出来。可流水线有一种很安静的自我背叛：**出题的模型**编了一个"看起来像是来自文档"的数字。于是你的 benchmark 里出现了一道题，它锚定的事实根本不存在——这道题要么无解，要么只能靠和出题模型一样的幻觉去解。这种坏题不会让任何东西崩溃，它只是悄悄地烂掉你的测量。

你没法靠 prompt 绕过它。"不要编数字"是一种祈愿，不是一种约束。解法必须是**结构性的**，而我反复回到的那个结构，叫**证据账本（evidence ledger）**。

## 账本横在文档与题目之间

账本是一个中间产物。在写任何题目之前，流水线先读源文件，产出一份**事实清单**；而出题者**只被允许引用账本里的事实**。任何不在账本里的东西，对出题这件事来说就等于不存在。

具体地，每条事实是一行，带 value、locator、caveat：

```json
{
  "fact_id": "f_0142",
  "value": "EBITDA margin = 18.4%",
  "locator": { "file": "Model_v3.xlsx", "sheet": "Summary", "cell": "C27" },
  "unit": "percent",
  "caveat": "Model tab 以美元百万为单位；Deck（p.11）把它在协同前重述为 17.9%。",
  "verdict": "confirm"
}
```

**locator** 是最承重的字段。没有 locator 的值，只是模型的一面之词；有 locator 的值，可以被重新打开、重新读、被质疑——被另一个模型、被人工 reviewer、被之后必须核对参考答案的 grader。所有下游需要"可信"的东西，都挂在这一个字段上。而**caveat** 正是难度所在：某个数字在两个 tab 之间从"千"切到"百万"、deck 和底层 model 对不上、脚注里悄悄限定了这个数的口径。

## 出题者只能花它被发的那些事实

账本一旦存在，生成的性质就变了。出题者不再是"读文档、写题目"——那是一个有无限漂移空间的过程；它变成了**从一个固定预算里花事实**。如果一道题需要一个数字，这个数字必须是一条账本条目，也就意味着它有 locator，也就意味着它真的在文件里。

这一点可以机械地强制。一道题被接受之前，它引用的每个数字都要匹配回某个 `fact_id`：

```python
def validate_item(item, ledger):
    cited = extract_quantities(item.question + item.reference_answer)
    ledger_values = {normalize(f.value) for f in ledger.facts}
    orphans = [c for c in cited if normalize(c) not in ledger_values]
    if orphans:
        raise OverLedgerError(f"引用了账本外的事实: {orphans}")
```

幻觉不是被 prompt 劝退的，而是**从可达空间里被设计掉的**。这和"用类型系统去编译、而不是祈祷运行时字符串能对上"是同一个直觉。你把保证从"模型很小心"挪到了"模型根本没法不这样做"。

## 一个模型抽取，另一个**不同的**模型核验

接下来是大多数人会跳过的部分：账本本身也可能是幻觉。抽取器也是个 LLM，它完全可能自信地记下一条根本不存在的事实。所以账本不是一个模型一遍跑出来的。

第二个模型——刻意选**不同的厂商**——独立地对照源文件核验每条事实，返回一个带**它自己**观测到的 locator 的 verdict：

```python
VERDICTS = {"confirm", "refute", "uncertain"}

def cross_verify(fact, source_docs, verifier):
    """verifier 与抽取器是不同厂商。"""
    out = verifier.check(
        claim=fact.value,
        expected_at=fact.locator,
        documents=source_docs,
    )
    assert out.verdict in VERDICTS
    if out.verdict == "refute":
        ledger.drop(fact.fact_id)            # 永远到不了出题者手里
    elif out.verdict == "uncertain":
        ledger.flag_for_human(fact.fact_id)  # 升级人工，而不是平均掉
    else:
        fact.observed_locator = out.locator  # 第二个证人也指向同一处
    return out
```

关键在于：分歧不会被平均成一个 confidence 分然后放行。`refute` 直接删掉这条事实；`uncertain` 升级给人看。用不同厂商的理由，和"不让同一个模型既出题又判分"是一样的：一个模型挑另一个模型的错，远比挑自己的错在行。相比交付一个建立在"根本不在页面上的事实"之上的 benchmark，cross-vendor 核验便宜得多。

## 别名与脱敏：那个有三个名字的实体

真实文档会用很多种方式指代同一个东西——公司和它的股票代码、交易对手和它脱敏后的代号、第 2 页写全称、第 40 页只写缩写的子公司。如果账本把它们当成三个不同实体，两件坏事就会发生：你可能写出一道"正确答案依赖于文档从未真正建立的某个映射"的题（不可判定），或者你不小心**泄漏**了这个映射，把一道难题变成送分题。

所以有一个显式的 **alias-merge** 步骤，把实体归一化，并检查脱敏在文件之间一致：

```json
{
  "canonical": "Project Atlas (Target)",
  "surface_forms": ["Atlas", "the Target", "PA Holdings", "[REDACTED-A]"],
  "redaction_consistent": true
}
```

一个名字若在一处被遮蔽，就不该在另一处以明文躺着。这是不起眼的记账，却悄悄决定了一道多文档题公不公平。

## must-hit points，以及最难的那一类题

对每道题，账本会钉住 **3–5 个 must-hit points**——正确答案被要求用到的那几条具体事实：

```json
{
  "question_id": "q_07",
  "must_hit": ["f_0142", "f_0090", "f_0211"],
  "spans_files": ["Model_v3.xlsx", "CIM.pdf", "Credit_Agreement.pdf"]
}
```

这一手身兼两职。它是**难度杠杆**：逼一道题去触碰分散在三个文件里的事实，模型就再也没法靠扫一个文件蒙混过关。它也是**可评分的 spec**：之后 rubric 正好检查这几个 must-hit，于是"模型到底有没有真的去做这件事"就成了一个具体、可核验的属性，而不是凭感觉。

账本还记录它的反面——**uncertain boundaries**，也就是文档**不**让你得出的那些结论。这解锁了我觉得最能照出真本事的题型：正确答案是**"凭现有材料无法唯一确定"**的题。有能力的模型会识别出这个边界并明说；靠模式匹配硬凑出一个自信数字的模型则会翻车。

```json
{
  "question_id": "q_11",
  "type": "undecidable",
  "expected": "无法确定：协同效应的分年节奏只给了 3 年总额（Deck p.14），计算 Year-1 增厚所需的逐年拆分从未披露。",
  "trap_fact": "f_0233"
}
```

而你只有先把这个边界画出来，才能**安全地**写这种题——画边界，正是账本的 caveat 和 uncertain 字段在干的事。没有账本，一道"资料不足"题只是你可能给自己挖的坑。

## 一个有用的账本应该产出什么

证据账本不只是生成阶段的护栏。设计得足够好时，它会变成一份多人都能复用的审查包：

| 使用者 | 他需要账本提供什么 |
|--------|--------------------|
| 出题者 | 哪些事实可用，哪些事实冲突，哪些边界不能跨 |
| Rubric 作者 | 定义完整答案的 must-hit facts |
| Judge / verifier | 核验模型回答所需的证据位置 |
| 领域 reviewer | 从被质疑断言到源文件、页码、sheet/cell 的短路径 |
| 数据集 owner | 证明这道题可回答、有难度、不泄漏答案的审计记录 |

最后一行很重要。一个 benchmark item 不应该只带着题面和答案交付，它应该带着一条**审计链**交付。之后如果有人问"为什么这个答案正确"、"为什么这个近似回答要扣分"、"为什么这题不能靠蒙"，证据账本里应该已经写好了理由。

一份最小可用的产物大概长这样：

```json
{
  "item_id": "public_item_042",
  "source_files": ["deck.pdf", "model.xlsx", "memo.docx"],
  "facts": [
    {
      "fact_id": "f_001",
      "claim": "模型中使用的 margin 是 18.4%。",
      "locator": "model.xlsx::Summary!C27",
      "verified_by": "independent_reader",
      "status": "confirmed"
    }
  ],
  "must_hit": ["f_001", "f_009", "f_014"],
  "known_traps": [
    "deck 和 model 使用的单位不同",
    "memo 给的是范围，不是点估计"
  ],
  "undecidable_boundaries": [
    "分年节奏没有披露"
  ]
}
```

注意这份产物里**不该**出现什么：具体厂商 prompt、私有文件路径、内部阶段名、会让未来模型识别生成流水线的实现细节。公开层面有价值的是契约；私下实现可以继续演进。

## 落地检查清单

如果从零给一条生成流水线加证据账本，我会按这张清单做：

1. **先标准化文件，再抽取。** 把 PDF、表格、文档、图片转成稳定的文本/表格视图，但必须保留回到原文件的指针。没有回源能力的表格视图不是证据。
2. **抽 claim，不抽段落。** 账本的一行应该是能被 confirm/refute 的断言。"deck 讨论了收入增长"太软；"第 12 页显示 2025E revenue 为 $42.1m"才有用。
3. **写题前就要求 locator。** 不要先让作者引用数字，再事后找证据。先证据，后题面。
4. **分离 extractor 和 verifier。** verifier 不应该有动机同意 extractor。最好换模型族，至少也要换 role 和 prompt。
5. **显式记录矛盾。** 两个文件冲突不是噪声，往往正是题目的难点。把它写成 caveat，而不是平均掉。
6. **无证据断言 fail closed。** 追不到源的 claim 不该交付。不要因为"听起来对"就降级成 warning。
7. **保留负证据。** 文档没有披露某件事，本身也是证据，尤其对"资料不足"题型很关键。

账本成功的标志是：出题者能写难题但不编造，reviewer 能挑战题目但不靠猜，grader 能判分但不用每次重新做取证。

## 账本自身也会失效

我会优先审计这些失效模式：

- **Locator 漂移。** 抽取文本指向了正确句子，但文件转换后 locator 指到了错误页或单元格。解决办法是在核验时真实打开/渲染源文件，而不是信任中间文本。
- **事实粒度过粗。** 一行账本里塞了三个 claim，其中一个无证据。拆到每行都能独立判断。
- **别名泄漏。** 账本悄悄合并了候选模型本该自己推理出的两个实体名。alias 决策必须可见。
- **过度清洗。** 流水线把源材料里的冲突"修正"成一个整洁值。这会毁掉题目本来要测试的歧义。
- **Rubric 漂移。** 最终 rubric 奖励了不在 `must_hit` 里的事实，说明题目和账本已经分叉。

审查问题很简单：如果删掉作者模型写的 prose，只保留账本，一个懂行的人还能不能重建这道题为什么有效？如果不能，账本还没承担足够多的工作。

## 那个不起眼、却让一切站得住脚的产物

这一切都不炫。账本是一个塞满 value 和 locator 的 JSON，最终 benchmark 里没人会看到它。但它就是**"一个模型写了几道题"**和**"一个每个数字都能追溯到某一页、且被一个独立模型核验过的 benchmark"**之间的区别。当领域专家质疑某道题，你不用争——你打开 locator。当一道题的答案被挑战，从答案到证据的链条早就写好了。

无论是生成还是答题，危险的幻觉都是那个自信的幻觉。证据账本，就是让"自信"必须先挣得它的位置：在一条信息拿到源文件里的地址、并且有第二个模型真的去看过之前，它进不了任何一道题。
