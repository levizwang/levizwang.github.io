import { html as aiValidityEn } from '../posts/AI/eval-validity-failure-modes.md';
import { html as aiJudgeEn } from '../posts/AI/agent-as-judge-vs-metric.md';
import { html as aiPlumbingEn } from '../posts/AI/plumbing-of-llm-evaluation.md';
import { html as aiValidityZh } from '../posts/AI/zh/eval-validity-failure-modes.md';
import { html as aiJudgeZh } from '../posts/AI/zh/agent-as-judge-vs-metric.md';
import { html as aiPlumbingZh } from '../posts/AI/zh/plumbing-of-llm-evaluation.md';
import { html as mevGuide } from '../posts/MEV/Solana_MEV_Complete_Guide.md';
import { html as post9Content } from '../posts/Detailed_Explanation_of_Blockchain/Detailed_Explanation_of_Blockchain.md';
import agentImage from '../images/projects/Agent_eval.png';
import mev1Image from '../images/posts/MEV_img/MEV1.jpg';
import blockchainImage from '../images/posts/web3/web3.jpg';
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
    id: 'eval-validity',
    title: {
      en: 'Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data',
      zh: '你的基准在骗你：智能体评测数据的有效性失效模式',
    },
    excerpt: {
      en: 'Generation is easy; validity is hard. The three quiet failure modes — guessability, prompt↔rubric leakage, judge noise — and how to defend against each.',
      zh: '生成很容易，有效性才难。三类安静的失效——可蒙性、题面↔rubric 泄漏、judge 噪声——以及对每一类的防御。',
    },
    content: { en: aiValidityEn, zh: aiValidityZh },
    date: 'Jun 12, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Agents', 'Synthetic Data'],
    image: agentImage,
  },
  {
    id: 'agent-as-judge',
    title: {
      en: 'Agent-as-Judge vs. a Metric You Wrote by Hand',
      zh: 'Agent-as-Judge 还是你手写的 Metric？一次诚实的对比',
    },
    excerpt: {
      en: 'An honest, measured comparison: LLM judge vs. a deterministic metric on precision, recall, agreement, cost, and latency — and how to choose per task.',
      zh: '一次诚实、可量化的对比：LLM judge vs 确定性 metric，在准确率、召回、一致率、成本、时延上的较量——以及如何按任务选型。',
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
      zh: '评测是基础设施，不是脚本。文件输出缺口、只推理的回合、judge 幻觉、harness 多样性、成本核算——以及一次上游开源贡献。',
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
      zh: '区块链详解：概念、技术与应用。',
    },
    content: post9Content,
    date: 'Feb 04, 2026',
    category: 'Web3',
    tags: ['Web3', 'Blockchain'],
    image: blockchainImage,
  },
  {
    id: 'solana-mev-guide',
    title: {
      en: 'Building a Solana MEV Searcher: A Complete Technical Guide',
      zh: 'Solana MEV Searcher 完整技术指南',
    },
    excerpt: {
      en: 'An eight-part deep dive — Dark Forest rules, searcher architecture, the control plane, network-wide inventory, sub-millisecond scout, AMM pricing models, cross-DEX arbitrage, Jito bundles, and risk control.',
      zh: '8 个部分的深入拆解——暗黑森林法则、searcher 架构、control plane、全网 inventory、亚毫秒级 scout、AMM 定价、跨 DEX 套利、Jito bundle 与风控。',
    },
    content: mevGuide,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Solana', 'Rust'],
    image: mev1Image,
  },
];
