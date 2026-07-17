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
      zh: '一个人从零搭的 18 阶段流水线，把专家 workspace 变成高难度的 agentic 考题。双模型抽证据取交集，确定性引用门把关；76 包、5 个领域的技能语料按 embedding 路由；rubric 用 DAG 组织；先盲解再给提示重解；留人工复核窗口，QA 过了门才导出。git init 之后约 27 小时端到端跑通，362 个单测全绿。',
    },
    tag: { en: 'Flagship · Synthesis', zh: '旗舰 · 合成' },
  },
  {
    id: 'difficulty-calibration',
    name: { en: 'Benchmark Difficulty Calibration', zh: '基准难度校准' },
    description: {
      en: 'A closed calibration loop for benchmark difficulty: a leak-proof isolated eval harness, a 0.5–0.7 acceptance band, and controlled experiments (solver-effort confound +0.159 on a control group; rework effect −0.139 per round) steered a 134-question legal benchmark from a mean of 0.821 to 0.648. Two judge bugs were found and fixed during the campaign.',
      zh: '难度校准的完整闭环：隔离防泄漏的评测 harness、0.5–0.7 的验收带、对照实验（在对照组上分离出解题档位混淆 +0.159，返修每轮净效应 −0.139）。134 题法律基准的均分从 0.821 压到 0.648。过程中顺手抓到并修掉了两个 judge bug。',
    },
    tag: { en: 'Evaluation Science', zh: '评测科学' },
  },
  {
    id: 'eval-platform',
    name: { en: 'Verifier System & Agent-as-Judge Research', zh: 'Verifier 系统与 Agent-as-Judge 研究' },
    description: {
      en: 'Rubric-based grading infrastructure for office-document agent tasks. Combined deterministic metrics, visual evidence collection, and LLM/agent judges; ran a controlled judge-vs-metric study on precision, recall, agreement, cost, and latency before product delivery.',
      zh: '给 Office 文档智能体任务做的 rubric 评分基础设施：确定性 metric、视觉证据采集、LLM/agent judge 组合着用。交付前做了一组 judge 对 metric 的对照实验，比了准确率、召回率、一致率、成本和时延。',
    },
    link: '/Agentkit.html',
    tag: { en: 'Verifier · Evaluation', zh: 'Verifier · 评测' },
  },
  {
    id: 'adversarial-verification',
    name: { en: 'Adversarial Verification at Scale', zh: '规模化对抗式验证' },
    description: {
      en: 'Reusable multi-agent verification workflows: a 51-agent code review (6 independent finders, 45 candidates, execution-backed verification, 40 confirmed defects with introducing-commit attribution), and a 207-worker repair pipeline that checks reference answers score full marks against their own rubrics.',
      zh: '一套能复用的多智能体验证流程。一个是 51 个 agent 的代码审查：6 个独立 finder 提出 45 个候选缺陷，执行复现后坐实 40 个，每个都能指到引入它的那个 commit。另一个是 207 个 worker 的修复流水线，专门卡一条不变量：参考答案必须在自己的 rubric 上拿满分。',
    },
    tag: { en: 'Multi-Agent Systems', zh: '多智能体系统' },
  },
  {
    id: 'syndata-pipeline',
    name: { en: 'Synthetic Eval-Data Pipeline (Gen 1)', zh: '合成评测数据流水线（第一代）' },
    description: {
      en: 'The first-generation multi-agent synthesis system that converts expert workspaces into hard, evidence-grounded agentic exam items across finance, consulting, and legal domains — evidence ledgers, cross-model separation, anti-leakage review, and delivery gates. Later superseded by the 18-stage rewrite above.',
      zh: '第一代多智能体合成系统，把专家 workspace 转成金融、咨询、法律领域的高难度考题，每道题都有证据撑着。带证据账本、跨模型隔离、防泄漏审查和交付门。后来被上面那个 18 阶段的重写版取代。',
    },
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'harbor-eval',
    name: { en: 'Harbor — Eval Execution Framework', zh: 'Harbor — 评测执行框架' },
    description: {
      en: 'Operated and extended a containerized eval framework across six model families and five agent harnesses, with cloud fan-out, smoke-test gates, rerun-in-place handling, and cost/latency accounting. A reusable agent integration was re-landed cleanly on upstream v0.17.0 — one 766-insertion commit, 12 unit tests, touching upstream code in exactly 2 registry lines.',
      zh: '维护并扩展容器化的评测框架：六个模型族、五种 agent harness，云端 fan-out、冒烟门、失败原地重跑、成本和时延核算。一个可复用的 agent 集成干净地落回上游 v0.17.0：一个 commit，766 行新增，12 个单测，只改了上游 2 行注册代码。',
    },
    link: 'https://github.com/levizwang/harbor',
    tag: { en: 'Open Source', zh: '开源' },
  },
  {
    id: 'medical-acm',
    name: { en: 'Adversarial QC for Synthetic Clinical Data', zh: '合成临床数据的对抗式质检' },
    description: {
      en: 'Designed an Actor-Critic-Monitor loop for synthetic medical-record cases: generator, adversarial reviewer, and arbiter. The public framing focuses on defect taxonomy: derived-value drift, cross-file conflict, timeline impossibility, template contamination, metadata leakage, and rubric answerability.',
      zh: '给合成病历设计的 Actor-Critic-Monitor 闭环：一个生成，一个挑刺，一个仲裁。对外能说的主要是缺陷分类：派生值漂移、跨文件冲突、不可能的时间线、模板污染、元数据泄漏、rubric 答不上来。',
    },
    tag: { en: 'Adversarial QC', zh: '对抗式质检' },
  },
  {
    id: 'office-harnesses',
    name: { en: 'Multi-modal Office Evaluation Harnesses', zh: '多模态 Office 评测 Harness' },
    description: {
      en: 'Built per-modality evaluation paths for Excel, Word, PPT, and PDF tasks with multi-vendor judge backends, screenshot/evidence collection, output reconstruction for models without native files-out, and reason guards for missing or unreadable evidence.',
      zh: '给 Excel、Word、PPT、PDF 四类任务各搭了一条评测路径：多厂商 judge 后端、截图和证据采集、给没有原生文件输出能力的模型做输出重建，证据缺失或读不出来时有 reason guard 兜底。',
    },
    tag: { en: 'Office Agents', zh: 'Office 智能体' },
  },
  {
    id: 'toolathlon-mcp',
    name: { en: 'MCP Tool Mocking for RL Agents', zh: '面向 RL Agent 的 MCP 工具 Mock' },
    description: {
      en: 'Adapted a tool-use benchmark for large-scale RL by replacing credential-heavy live MCP services with realistic mocks. The design goal was trajectory-level parity: enough behavioral fidelity for training and evaluation without exposing accounts or live systems.',
      zh: '把一个 tool-use benchmark 改造成能跑大规模 RL 的版本：需要真实账号密钥的在线 MCP 服务，全部换成以假乱真的 mock。目标是轨迹级一致——训练和评测照跑，账号和线上系统一点不碰。',
    },
    tag: { en: 'RL Infrastructure', zh: 'RL 基础设施' },
  },
  {
    id: 'rag-eval',
    name: { en: 'RAG Evaluation (RAGAS)', zh: 'RAG 评测（RAGAS）' },
    description: {
      en: 'Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production. Visualization report of the evaluation project.',
      zh: '跨境业务的 RAG 系统，配了一套 RAGAS 自动评测闭环，盯着线上的忠实度和检索精度。附评测项目的可视化报告。',
    },
    link: '/ragas.html',
    tag: { en: 'RAG', zh: 'RAG' },
  },
  {
    id: 'nvwa',
    name: { en: 'nvwa — Synthesis Framework', zh: 'nvwa（女娲）— 合成框架' },
    description: {
      en: 'A layered “1 seed → N tasks” office-document synthesis framework with automated checkers, LLM QC/repair, and seed-provenance tracing, built to beat the low-diversity failure mode of single-shot generation.',
      zh: '分层的「1 颗种子 → N 道题」办公文档合成框架：自动 checker、LLM 质检和修复、种子来源可追。专治单轮生成的低多样性。',
    },
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'solana-mev',
    name: { en: 'Solana MEV Bot', zh: 'Solana MEV 机器人' },
    description: {
      en: 'A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.',
      zh: '业余 Web3 项目：一个 Solana MEV searcher（监听 → 定价 → 跨 DEX 套利 → Jito bundle）。写成了 8 篇技术系列，见文章区。',
    },
    link: 'https://github.com/levizwang/Solana-MEV',
    tag: { en: 'Web3 · interest', zh: 'Web3 · 兴趣' },
  },
];
