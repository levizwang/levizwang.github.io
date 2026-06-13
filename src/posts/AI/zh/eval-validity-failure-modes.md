# 你的基准在骗你：智能体评测数据的有效性失效模式

所有人都在卷怎么把智能体**训**得更强。但真正稀缺的是另一件事：能告诉你智能体到底强不强的——**高难度、不掺水的评测数据。**

我搭多智能体流水线，把领域专家的真实文件变成智能体考题——模型不真读文档就答不出来的题。有意思的工程不在"生成"，生成很容易。有意思的工程在**有效性**——而毁掉有效性的 bug 往往很安静。它们不崩溃，只是产出一个**看着难、其实几乎什么都没测到**的 benchmark。

下面是我反复遇到的三类失效，以及流水线对每一类的防御。

## 一、可蒙性（Guessability）

最危险的题，是那种看着难、其实能蒙的题。模型拿了高分，你以为它有能力，于是发布了一个奖励"好先验"而非"真功夫"的 benchmark。

对策是一个**去答案的"防蒙"探针**。我在三种条件下评每道题：

```python
def probe(item, model, judge):
    # E1: 文件 + 参考答案  -> 理论上限
    e1 = judge(model.solve(item.files, answer=item.reference), item.rubric)
    # E2: 只给文件          -> 真实能力
    e2 = judge(model.solve(item.files), item.rubric)
    # E3: 不给文件，只有题面 -> 纯蒙
    e3 = judge(model.solve(files=None), item.rubric)
    return e1, e2, e3

def is_valid(e1, e2, e3, floor=0.15):
    # 一道好题，在文件被抽走后会坍塌。
    return (e3 < floor) and (e2 < e1)
```

如果 E3 不向 0 坍塌，说明题面在泄漏信息，或者题目靠常识就能蒙。无论哪种，它都没在测你以为的东西。而如果 E2 居然比 E1 还高——这在"答案有用"的前提下是不可能的——那你抓到的是 judge 噪声，不是能力。E3 是我知道的最便宜、也最无情的有效性检查。

## 二、题面 ↔ rubric 泄漏

第二类更隐蔽：**题目**或 **rubric** 里悄悄藏了答案。一个过度具体的题面，写着"从 `Model!C14` 取 EBITDA"，其实已经替模型做完了最难的部分——定位证据。真实工作可不会附上单元格坐标。

所以流水线把"去泄漏"当成一等公民。一部分是无聊、机械的——那些永远不该到达候选者手里的内部 token：

```python
LEAK_PATTERNS = [
    r"/Users/\S+", r"[A-Za-z]:\\\\\S+",     # 绝对路径
    r"\b[a-f0-9]{32,}\b",                     # cache hash
    r"\b(D[1-8]|difficulty[_-]?\d)\b",       # 内部难度旋钮
    r"sheet=\w+![A-Z]\d+",                    # 预先定位证据的锚点
    r"<answer>.*?</answer>",                   # 答案本身
]

def scrub(text):
    hits = [p for p in LEAK_PATTERNS if re.search(p, text, re.S)]
    if hits:
        raise LeakageError(f"题面/rubric 泄漏: {hits}")
```

但更深的检验是语义层面的：**如果一个人光读 rubric 就能把题做出来，那这条 rubric 就是坏的。** 一个独立 reviewer 只读 rubric（绝不看文件）去尝试作答；如果他能答出来，rubric 就把考试拱手送人了。

## 三、judge 噪声

如果你用 LLM 当裁判，那 judge 就是你测量仪器的一部分——而一个有噪声的仪器会制造假信号。对策都不性感：固定并对齐裁判模型；给它**原子化**的 rubric 条目而不是"凭感觉"；以及收益最高的一招——在"根本没东西可推理"时，**给它的推理上闸**：

```python
def judge_one(criterion, response, evidence):
    # 当输入为空/不可读/跑题时，不上闸的 judge 会幻觉出一个
    # 自信的 "reason" 和一个分数。拒绝让它这么干。
    if not evidence or is_unreadable(response):
        return Score(hit=False, reason="证据不足，无法判定")
    return llm_judge(criterion, response, evidence)
```

这一个 guard 消掉了一整类假阳性——模型其实什么可用的东西都没产出，但 judge 被要求填一个 `reason` 字段，就顺从地编出一个听起来合理的理由和一个及格分。

## 把三者串起来的原则：跨厂商独立性

三个对策底下是同一条设计铁律：**出题的模型，绝不去核验或评判它自己出的题。** 生成、核验、判分跑在不同的模型族上。一旦同一个模型既出题又解题，你就会得到"自己出题自己判"的幻觉——模型自信地认可自己的错误。

```python
assert author.vendor != verifier.vendor != judge.vendor
```

让每个节点都能在厂商间替换（并**强制**各阶段使用不同厂商），不是基础设施上的小讲究，而是让评测保持诚实的关键。

## 读这三个数字

一旦你有了每道题的 E1/E2/E3，它们的**形状**比任何单一分数都说明问题：

| E1 | E2 | E3 | 诊断 |
|----|----|----|------|
| 高 | 高 | **高** | 能蒙 / 泄漏——**删掉这道题** |
| 高 | ~E1 | 低 | 参考答案没起作用——judge 噪声或题太水 |
| 高 | 中 | 低 | 健康：有区分度、依赖文件 |
| 低 | 低 | 低 | 太难或 key 错了——回去查账本 |

## 结语

在评测里，真正伤到你的 bug 不是崩溃，而是那道"看着难"的题。大多数 benchmark 都在静默失效，唯一的破解之道是去攻击你自己的数据：抽掉答案、洗掉泄漏、怀疑 judge，并且永远不要让一个模型把环闭合在自己身上。
