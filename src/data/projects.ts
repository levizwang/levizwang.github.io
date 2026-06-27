import {
  agentAsJudge as agentImage,
  evalPipeline as pipelineImage,
  harbor as harborImage,
  ragEval as ragImage,
  nvwa as nvwaImage,
  solanaMev as mevImage,
} from '../images/projects';
import type { L } from '../i18n/lang';

export interface Project {
  id: string;
  name: L;
  description: L;
  image?: string;
  link?: string;
  tag?: L;
}

export const projects: Project[] = [
  {
    id: 'eval-platform',
    name: { en: 'Verifier System & Agent-as-Judge Research', zh: 'Verifier 系统与 Agent-as-Judge 研究' },
    description: {
      en: 'Rubric-based grading infrastructure for office-document agent tasks. Combined deterministic metrics, visual evidence collection, and LLM/agent judges; ran a controlled judge-vs-metric study on precision, recall, agreement, cost, and latency before product delivery.',
      zh: '面向 Office 文档智能体任务的 rubric 评分基础设施，结合确定性 metric、视觉证据采集与 LLM/agent judge；在产品交付前做了 judge-vs-metric 对照实验，比较准确率、召回率、一致率、成本与时延。',
    },
    image: agentImage,
    link: '/Agentkit.html',
    tag: { en: 'Verifier · Evaluation', zh: 'Verifier · 评测' },
  },
  {
    id: 'syndata-pipeline',
    name: { en: 'Synthetic Eval-Data Pipeline', zh: '合成评测数据流水线' },
    description: {
      en: 'Multi-agent synthesis pipeline that converts expert workspaces into hard, evidence-grounded agentic exam items across finance, consulting, and legal domains. Public version highlights evidence ledgers, cross-model separation, anti-leakage review, and delivery gates while omitting internal node recipes.',
      zh: '多智能体合成流水线，将专家 workspace 转化为金融、咨询、法律领域的高难度、以证据为依据的 agentic 考题。公开版本强调证据账本、跨模型隔离、防泄漏审查与交付门控，不暴露内部节点配方。',
    },
    image: pipelineImage,
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'harbor-eval',
    name: { en: 'Harbor — Eval Execution Framework', zh: 'Harbor — 评测执行框架' },
    description: {
      en: 'Operated and extended a containerized eval framework across six model families and five agent harnesses, with cloud fan-out, smoke-test gates, rerun-in-place handling, cost/latency accounting, and a reusable agent-harness adapter isolated on a clean public fork.',
      zh: '操作并扩展容器化评测框架，覆盖六个模型族与五种 agent harness，包含云端 fan-out、冒烟门控、失败原地重跑、成本/时延核算，以及在干净公开 fork 上隔离出的可复用 agent-harness adapter。',
    },
    image: harborImage,
    link: 'https://github.com/levizwang/harbor',
    tag: { en: 'Open Source', zh: '开源' },
  },
  {
    id: 'medical-acm',
    name: { en: 'Adversarial QC for Synthetic Clinical Data', zh: '合成临床数据的对抗式质检' },
    description: {
      en: 'Designed an Actor-Critic-Monitor loop for synthetic medical-record cases: generator, adversarial reviewer, and arbiter. The public framing focuses on defect taxonomy: derived-value drift, cross-file conflict, timeline impossibility, template contamination, metadata leakage, and rubric answerability.',
      zh: '为合成病历病例设计 Actor-Critic-Monitor 闭环：生成、对抗式审查、仲裁。公开表述聚焦缺陷分类学：派生值漂移、跨文件冲突、不可能时间线、模板污染、元数据泄漏与 rubric 可回答性。',
    },
    image: nvwaImage,
    tag: { en: 'Adversarial QC', zh: '对抗式质检' },
  },
  {
    id: 'office-harnesses',
    name: { en: 'Multi-modal Office Evaluation Harnesses', zh: '多模态 Office 评测 Harness' },
    description: {
      en: 'Built per-modality evaluation paths for Excel, Word, PPT, and PDF tasks with multi-vendor judge backends, screenshot/evidence collection, output reconstruction for models without native files-out, and reason guards for missing or unreadable evidence.',
      zh: '为 Excel、Word、PPT、PDF 任务搭建按模态拆分的评测路径，支持多厂商裁判后端、截图/证据采集、无原生 files-out 模型的输出重建，以及证据缺失/不可读时的 reason guard。',
    },
    image: agentImage,
    tag: { en: 'Office Agents', zh: 'Office 智能体' },
  },
  {
    id: 'toolathlon-mcp',
    name: { en: 'MCP Tool Mocking for RL Agents', zh: '面向 RL Agent 的 MCP 工具 Mock' },
    description: {
      en: 'Adapted a tool-use benchmark for large-scale RL by replacing credential-heavy live MCP services with realistic mocks. The design goal was trajectory-level parity: enough behavioral fidelity for training and evaluation without exposing accounts or live systems.',
      zh: '将一个 tool-use benchmark 改造成适合大规模 RL 的版本：用逼真的 mock 替代需要真实账号与密钥的在线 MCP 服务。设计目标是轨迹级一致性，既支撑训练/评测，又不暴露账号或线上系统。',
    },
    image: pipelineImage,
    tag: { en: 'RL Infrastructure', zh: 'RL 基础设施' },
  },
  {
    id: 'rag-eval',
    name: { en: 'RAG Evaluation (RAGAS)', zh: 'RAG 评测（RAGAS）' },
    description: {
      en: 'Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production. Visualization report of the evaluation project.',
      zh: '跨境 RAG 系统，配 RAGAS 自动评测闭环，保障线上的忠实度与检索精度。附评测项目的可视化报告。',
    },
    image: ragImage,
    link: '/ragas.html',
    tag: { en: 'RAG', zh: 'RAG' },
  },
  {
    id: 'nvwa',
    name: { en: 'nvwa — Synthesis Framework', zh: 'nvwa（女娲）— 合成框架' },
    description: {
      en: 'A layered “1 seed → N tasks” office-document synthesis framework with automated checkers, LLM QC/repair, and seed-provenance tracing, built to beat the low-diversity failure mode of single-shot generation.',
      zh: '分层的“1 种子 → N 题”办公文档合成框架，含自动 checker、LLM 质检/修复与种子溯源，专为克服单轮生成的“低多样性”失效而建。',
    },
    image: nvwaImage,
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'data-contracts',
    name: { en: 'Evaluation Data Contracts & Automation', zh: '评测数据契约与自动化' },
    description: {
      en: 'Audited a messy multi-version jobdata schema, grouped root causes with concrete examples, and proposed cleaner ownership boundaries for nested rubric/model fields. Also wired cross-repo automation so downstream eval packages receive structured update signals.',
      zh: '审计多版本混杂的 jobdata schema，用具体样例归类根因，并提出 rubric/model 字段的嵌套归属边界；同时接入跨仓库自动化，让下游评测包收到结构化更新信号。',
    },
    image: harborImage,
    tag: { en: 'Data Contracts', zh: '数据契约' },
  },
  {
    id: 'solana-mev',
    name: { en: 'Solana MEV Bot', zh: 'Solana MEV 机器人' },
    description: {
      en: 'A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.',
      zh: '个人 Web3 副项目：Solana MEV 搜索器（监听 → 定价 → 跨 DEX 套利 → Jito bundle）。整理为 8 篇技术系列——见文章。',
    },
    image: mevImage,
    link: 'https://github.com/levizwang/Solana-MEV',
    tag: { en: 'Web3 · interest', zh: 'Web3 · 兴趣' },
  },
];
