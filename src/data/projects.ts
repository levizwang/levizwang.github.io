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
    id: 'benchmark-synthesis',
    name: { en: 'Benchmark-Synthesis Pipeline (18 Stages)', zh: '基准合成流水线（18 阶段）' },
    description: {
      en: 'Solo-architected, greenfield 18-stage pipeline that turns expert workspaces into hard agentic benchmark items: dual-model evidence extraction with intersection confirmation and a deterministic quote gate, an embedding-routed 76-pack/5-domain skill corpus, DAG rubrics, a blind-then-hinted trial-solver stage, human review windows, and QA-gated export — end-to-end closed ~27 hours after git init, 362 passing unit tests.',
      zh: '独立从零架构的 18 阶段流水线，把专家 workspace 变成高难度 agentic 基准题：双模型证据抽取取交集＋确定性引用门、按 embedding 路由的 76 包/5 领域技能语料、DAG 结构 rubric、"先盲解后带提示重解"试做节点、人工复核窗口与 QA 门控导出——git init 后约 27 小时端到端跑通，362 个单测全绿。',
    },
    image: pipelineImage,
    tag: { en: 'Flagship · Synthesis', zh: '旗舰 · 合成' },
  },
  {
    id: 'difficulty-calibration',
    name: { en: 'Benchmark Difficulty Calibration', zh: '基准难度校准' },
    description: {
      en: 'A closed calibration loop for benchmark difficulty: a leak-proof isolated eval harness, a 0.5–0.7 acceptance band, and controlled experiments (solver-effort confound +0.159 on a control group; rework effect −0.139 per round) steered a 134-question legal benchmark from a mean of 0.821 to 0.648. Two judge bugs were found and fixed during the campaign.',
      zh: '一条难度校准闭环：隔离防泄漏评测 harness、0.5–0.7 验收带、对照实验（对照组上解题档位混淆因子 +0.159、每轮返修净效应 −0.139），把 134 题法律基准的均分从 0.821 校准到 0.648。校准过程中还发现并修复了两个裁判缺陷。',
    },
    image: ragImage,
    tag: { en: 'Evaluation Science', zh: '评测科学' },
  },
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
    id: 'adversarial-verification',
    name: { en: 'Adversarial Verification at Scale', zh: '规模化对抗式验证' },
    description: {
      en: 'Reusable multi-agent verification workflows: a 51-agent code review (6 independent finders, 45 candidates, execution-backed verification, 40 confirmed defects with introducing-commit attribution), and a 207-worker repair pipeline that checks reference answers score full marks against their own rubrics.',
      zh: '可复用的多智能体验证工作流：51-agent 代码审查（6 个独立 finder、45 个候选、可执行复现验证、40 个确认缺陷并定位引入 commit），以及检查"参考答案必须在自己的 rubric 上拿满分"的 207-worker 修复流水线。',
    },
    image: agentImage,
    tag: { en: 'Multi-Agent Systems', zh: '多智能体系统' },
  },
  {
    id: 'syndata-pipeline',
    name: { en: 'Synthetic Eval-Data Pipeline (Gen 1)', zh: '合成评测数据流水线（第一代）' },
    description: {
      en: 'The first-generation multi-agent synthesis system that converts expert workspaces into hard, evidence-grounded agentic exam items across finance, consulting, and legal domains — evidence ledgers, cross-model separation, anti-leakage review, and delivery gates. Later superseded by the 18-stage rewrite above.',
      zh: '第一代多智能体合成系统，将专家 workspace 转化为金融、咨询、法律领域的高难度、以证据为依据的 agentic 考题——证据账本、跨模型隔离、防泄漏审查与交付门控。后被上面的 18 阶段重写版取代。',
    },
    image: pipelineImage,
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'harbor-eval',
    name: { en: 'Harbor — Eval Execution Framework', zh: 'Harbor — 评测执行框架' },
    description: {
      en: 'Operated and extended a containerized eval framework across six model families and five agent harnesses, with cloud fan-out, smoke-test gates, rerun-in-place handling, and cost/latency accounting. A reusable agent integration was re-landed cleanly on upstream v0.17.0 — one 766-insertion commit, 12 unit tests, touching upstream code in exactly 2 registry lines.',
      zh: '操作并扩展容器化评测框架，覆盖六个模型族与五种 agent harness，包含云端 fan-out、冒烟门控、失败原地重跑与成本/时延核算。可复用的 agent 集成干净地重落在上游 v0.17.0 上——单个 766 行插入的 commit、12 个单测、只碰上游 2 行注册代码。',
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
