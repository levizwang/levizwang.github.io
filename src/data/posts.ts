import { html as aiDifficultyEn } from '../posts/AI/benchmark-difficulty.md';
import { html as aiDifficultyZh } from '../posts/AI/zh/benchmark-difficulty.md';
import { html as aiJudgeRelEn } from '../posts/AI/judge-reliability.md';
import { html as aiJudgeRelZh } from '../posts/AI/zh/judge-reliability.md';
import { html as aiReviewEn } from '../posts/AI/adversarial-code-review.md';
import { html as aiReviewZh } from '../posts/AI/zh/adversarial-code-review.md';
import { html as aiRubricEn } from '../posts/AI/rubric-dags.md';
import { html as aiRubricZh } from '../posts/AI/zh/rubric-dags.md';
import { html as aiLedgerEn } from '../posts/AI/evidence-ledger.md';
import { html as aiLedgerZh } from '../posts/AI/zh/evidence-ledger.md';
import { html as aiAdvqcEn } from '../posts/AI/adversarial-qc.md';
import { html as aiAdvqcZh } from '../posts/AI/zh/adversarial-qc.md';
import { html as aiValidityEn } from '../posts/AI/eval-validity-failure-modes.md';
import { html as aiJudgeEn } from '../posts/AI/agent-as-judge-vs-metric.md';
import { html as aiPlumbingEn } from '../posts/AI/plumbing-of-llm-evaluation.md';
import { html as aiValidityZh } from '../posts/AI/zh/eval-validity-failure-modes.md';
import { html as aiJudgeZh } from '../posts/AI/zh/agent-as-judge-vs-metric.md';
import { html as aiPlumbingZh } from '../posts/AI/zh/plumbing-of-llm-evaluation.md';
import { html as mevGuide } from '../posts/MEV/Solana_MEV_Complete_Guide.md';
import { html as post9Content } from '../posts/Detailed_Explanation_of_Blockchain/Detailed_Explanation_of_Blockchain.md';
import type { L } from '../i18n/lang';

export interface BlogPost {
  id: string;
  title: L;
  excerpt: L;
  content?: L;
  date: string;
  category: string;
  tags?: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'benchmark-difficulty',
    title: {
      en: 'Benchmark Difficulty Is a Measurable Property',
      zh: '基准难度是可以测出来的',
    },
    excerpt: {
      en: 'How we calibrated a legal benchmark into a 0.5–0.7 acceptance band: an isolated leak-proof eval harness, control-group experiments that separate rework effects from solver-effort confounds, and the judge bugs found on the way.',
      zh: '把一个 134 题的法律基准校准进 0.5–0.7 的验收带，靠的是隔离防泄漏的评测 harness 和对照实验：把返修效应和解题档位混淆分开算。路上还抓到了两个 judge bug。',
    },
    content: { en: aiDifficultyEn, zh: aiDifficultyZh },
    date: 'Jul 10, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Evaluation Science', 'Benchmarks'],
  },
  {
    id: 'judge-reliability',
    title: {
      en: 'Your Judge Is Part of the System Under Test',
      zh: '裁判也是被测系统的一部分',
    },
    excerpt: {
      en: 'Four judge failures from production: fatal false-kills on legitimate citations, silently dropped rubric fields, scores citing evidence that does not exist, and a harness configuration that changed model behavior. Plus the checks we now run for each.',
      zh: '线上真实踩过的四类 judge 失效：合法引用被误杀成零分、rubric 字段被悄悄丢掉、打分引用的证据根本不存在、一处 harness 配置改了模型行为。每一类我们现在都有对应的检查。',
    },
    content: { en: aiJudgeRelEn, zh: aiJudgeRelZh },
    date: 'Jul 06, 2026',
    category: 'AI Evaluation',
    tags: ['LLM-as-judge', 'LLM Eval', 'Reliability'],
  },
  {
    id: 'adversarial-code-review',
    title: {
      en: 'The 51-Agent Code Review',
      zh: '51 个 Agent 的代码审查',
    },
    excerpt: {
      en: 'How I reviewed a teammate\'s 17-commit series with a 51-agent workflow: six finders proposed 45 candidate defects, independent verifiers reproduced each one by execution, and 40 were confirmed with introducing-commit attribution.',
      zh: '用 51 个 agent 审同事的 17 个 commit：6 个 finder 提出 45 个候选缺陷，独立 verifier 一个个执行复现，最后坐实 40 个，每个都能指到引入它的那个 commit。',
    },
    content: { en: aiReviewEn, zh: aiReviewZh },
    date: 'Jul 02, 2026',
    category: 'AI Evaluation',
    tags: ['Multi-Agent', 'Code Review', 'Verification'],
  },
  {
    id: 'rubric-dags',
    title: {
      en: 'Rubrics as DAGs: Scoring Process, Not Just Outcomes',
      zh: '把 Rubric 做成 DAG：给过程打分，而不只是结果',
    },
    excerpt: {
      en: 'Flat rubrics give points to guessed numbers and hallucinated steps. A schema with process/outcome typing, dependency gating, hurdle rows, and code-enforced floors fixes most of that. This post walks through the design and the repair semantics.',
      zh: '平铺的 rubric 会给蒙对的数字发分，也会给幻觉出来的步骤发分。过程分和结果分分开、加依赖门、加 hurdle 行、再用代码强制下限，大部分问题就没了。这篇讲这套 schema 怎么设计、怎么修。',
    },
    content: { en: aiRubricEn, zh: aiRubricZh },
    date: 'Jun 30, 2026',
    category: 'AI Evaluation',
    tags: ['Rubric Design', 'LLM Eval', 'LLM-as-judge'],
  },
  {
    id: 'evidence-ledger',
    title: {
      en: "The Evidence Ledger: Making an LLM Write Questions It Can't Fabricate",
      zh: '证据账本：让 LLM 写出它编不了的题目',
    },
    excerpt: {
      en: 'Hallucinating answers is bad; hallucinating questions silently rots your benchmark. How a locator-bound, cross-vendor-verified evidence ledger makes anti-hallucination structural instead of hopeful.',
      zh: '答案编错了能查出来，题目编错了 benchmark 就悄悄烂掉了。证据账本把每条证据绑死在 locator 上，再跨厂商核验，把防幻觉从「希望如此」变成结构上的保证。',
    },
    content: { en: aiLedgerEn, zh: aiLedgerZh },
    date: 'Jun 13, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Synthetic Data', 'Anti-Hallucination'],
  },
  {
    id: 'eval-validity',
    title: {
      en: 'Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data',
      zh: '你的基准在骗你：智能体评测数据的有效性失效模式',
    },
    excerpt: {
      en: 'Generation is easy; validity is hard. The three quiet failure modes — guessability, prompt↔rubric leakage, judge noise — and how to defend against each.',
      zh: '生成数据容易，保证有效难。三种不声不响的失效模式：能蒙对、题面和 rubric 互相泄漏、judge 噪声。每一种怎么防。',
    },
    content: { en: aiValidityEn, zh: aiValidityZh },
    date: 'Jun 12, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Agents', 'Synthetic Data'],
  },
  {
    id: 'adversarial-qc',
    title: {
      en: "Don't Trust Data You Generated Yourself: Adversarial QC for Synthetic Data",
      zh: '别信你自己生成的数据：合成数据的对抗式质检',
    },
    excerpt: {
      en: 'Synthetic data is plausible by construction — which is exactly the failure. The Actor-Critic-Monitor loop, and the concrete taxonomy of lies self-generated data tells: derived-value drift, cross-file conflicts, impossible timelines, template contamination, provenance leakage.',
      zh: '合成数据的问题在于它看起来总是很合理。这篇讲 Actor-Critic-Monitor 闭环，以及自己生成的数据会撒哪些谎：派生值漂移、跨文件冲突、不可能的时间线、模板污染、来源泄漏。',
    },
    content: { en: aiAdvqcEn, zh: aiAdvqcZh },
    date: 'Jun 09, 2026',
    category: 'AI Evaluation',
    tags: ['Synthetic Data', 'Adversarial QC', 'Agents'],
  },
  {
    id: 'agent-as-judge',
    title: {
      en: 'Agent-as-Judge vs. a Metric You Wrote by Hand',
      zh: 'Agent-as-Judge 还是手写的 Metric？一次摆数据的对比',
    },
    excerpt: {
      en: 'An honest, measured comparison: LLM judge vs. a deterministic metric on precision, recall, agreement, cost, and latency — and how to choose per task.',
      zh: '一次摆数据的对比：LLM judge 对手写的确定性 metric，比准确率、召回、一致率、成本和时延。结论是按任务选型，不是非此即彼。',
    },
    content: { en: aiJudgeEn, zh: aiJudgeZh },
    date: 'Jun 06, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'LLM-as-judge'],
  },
  {
    id: 'eval-plumbing',
    title: {
      en: 'The Plumbing of LLM Evaluation: Six Model Families on One Harness',
      zh: '大模型评测的「管道工程」：在一个 harness 上跑六个模型族',
    },
    excerpt: {
      en: 'Eval is infrastructure, not a script. File-output gaps, reasoning-only turns, judge hallucination, harness diversity, cost accounting — and an upstream OSS contribution.',
      zh: '评测是基础设施，不是一次性脚本。文件输出对不上、只有推理没有输出的回合、judge 幻觉、harness 五花八门、成本核算，外加一次上游开源贡献。',
    },
    content: { en: aiPlumbingEn, zh: aiPlumbingZh },
    date: 'May 28, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Infrastructure', 'Open Source'],
  },
  {
    id: '9',
    title: { en: 'Detailed Explanation of Blockchain', zh: '区块链详解' },
    excerpt: {
      en: 'Detailed explanation of blockchain, including its concepts, technology, and applications',
      zh: '区块链的概念、技术和应用，一篇讲透。',
    },
    content: post9Content,
    date: 'Feb 04, 2026',
    category: 'Web3',
    tags: ['Web3', 'Blockchain'],
  },
  {
    id: 'solana-mev-guide',
    title: {
      en: 'Building a Solana MEV Searcher: A Complete Technical Guide',
      zh: 'Solana MEV Searcher 完整技术指南',
    },
    excerpt: {
      en: 'An eight-part deep dive — Dark Forest rules, searcher architecture, the control plane, network-wide inventory, sub-millisecond scout, AMM pricing models, cross-DEX arbitrage, Jito bundles, and risk control.',
      zh: '一共八篇，拆得很细：暗黑森林的生存法则、searcher 架构、control plane、全网 inventory、亚毫秒级 scout、AMM 定价模型、跨 DEX 套利、Jito bundle 和风控。',
    },
    content: mevGuide,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Solana', 'Rust'],
  },
];

/** Union of valid post ids — lets cross-references (e.g. case studies) be type-checked. */
export type PostId = (typeof blogPosts)[number]['id'];
