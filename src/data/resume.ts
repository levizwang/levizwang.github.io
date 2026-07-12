import type { L } from '../i18n/lang';

export interface ExperienceItem {
  company: string;
  role: L;
  location: L;
  period: string;
  summary?: L;
  highlights: L[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'HUMANLAYA AI',
    role: { en: 'AI Algorithm Engineer (Evaluation & Data) · Founding Engineer', zh: 'AI 算法工程师（评测与数据）· 创始期工程师' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'Founding-stage engineer owning the algorithm side of agentic evaluation and synthetic data for frontier-model teams — benchmark design and difficulty calibration, judge reliability, rubric systems — plus the multi-agent pipelines and eval infrastructure that run them. Public-facing descriptions intentionally abstract away client names, internal repositories, and exact implementation recipes.',
      zh: '创始期工程师，负责面向前沿模型团队的 agentic 评测与合成数据的算法侧——基准设计与难度校准、裁判可靠性、rubric 体系——以及运行它们的多智能体流水线与评测基础设施。公开表述刻意抽象客户名、内部仓库名与具体实现配方。',
    },
    highlights: [
      {
        en: 'Benchmark-synthesis pipeline (flagship): solo-architected a greenfield 18-stage system — dual-model evidence extraction with intersection confirmation and a deterministic quote gate, an embedding-routed 76-pack/5-domain skill corpus, DAG rubrics, a blind-then-hinted trial-solver stage, human review windows, and QA-gated export — end-to-end closed ~27 hours after git init, with 362 passing unit tests.',
        zh: '基准合成流水线（旗舰）：独立从零架构 18 阶段系统——双模型证据抽取取交集＋确定性引用门、按 embedding 路由的 76 包/5 领域技能语料、DAG 结构 rubric、"先盲解后带提示重解"试做节点、人工复核窗口与 QA 门控导出——git init 后约 27 小时端到端跑通，362 个单测全绿。',
      },
      {
        en: 'Benchmark difficulty calibration: steered a 134-question legal benchmark from a mean of 0.821 into a 0.5–0.7 acceptance band (final 0.648) using a leak-proof isolated eval harness and controlled experiments, isolating a +0.159 solver-effort confound on a control group from a −0.139-per-round rework effect across two rework rounds.',
        zh: '基准难度校准：用隔离防泄漏评测 harness 与对照实验，把 134 题法律基准的均分从 0.821 校准进 0.5–0.7 验收带（终值 0.648）；在对照组上把 +0.159 的解题档位混淆因子与每轮 −0.139 的返修净效应分离开，共两轮返修。',
      },
      {
        en: 'Judge reliability: debugged the LLM judge itself — caught it fatal-zeroing items with 91–93% positive rubric hits (mistaking in-material citations for leakage) and silently dropping rubric DAG dependency fields, both fixed with regression tests; ran line-by-line judge-hallucination re-checks and enforced a "reference answers must score full marks" oracle invariant via a 207-worker minimal-change repair pipeline.',
        zh: '裁判可靠性：直接调试裁判模型本身——抓到 judge 把正向命中 91–93% 的题误判为泄漏而一票归零、以及静默丢弃 rubric DAG 依赖字段两处缺陷，均修复并带回归测试；运行裁判幻觉逐行复核，并用 207-worker 最小改动修复流水线强制"参考答案必须拿满分"的 oracle 不变量。',
      },
      {
        en: 'Adversarial verification at scale: ran a 51-agent code review of a teammate’s fork of my pipeline — 6 independent finders, 45 candidates, execution-backed verification (40 confirmed) — producing per-defect introducing-commit attribution and a tiered fix plan; the finder/verifier pattern became a reusable QC product.',
        zh: '规模化对抗式验证：对同事 fork 的自研流水线跑 51-agent 代码审查——6 个独立 finder、45 个候选、可执行复现验证（40 个确认）——报告含每个缺陷的引入 commit 定位与分级修复计划；finder/verifier 模式沉淀为可复用的质检产品。',
      },
      {
        en: 'Eval operations & delivery: delivered a 257-task × 3-model agentic benchmark evaluation to an enterprise client in 2 days (~70 concurrent cloud sandboxes, semantic-audit and judge-hallucination re-check fleets, 710 validity-guaranteed results with per-model capability findings); audited a 300-pack benchmark exhaustively before spending compute, finding 86 unrunnable packs and a global judge misconfiguration.',
        zh: '评测运营与交付：2 天内向企业客户交付 257 题 × 3 模型的智能体基准评测（约 70 个云沙箱并发、语义质检与裁判幻觉复核舰队、710 个有效性有保证的结果并附分模型能力结论）；在消耗算力前对 300 包基准做穷举审计，发现 86 个不可运行的包与一处全局裁判错配。',
      },
      {
        en: 'Adversarial synthetic-data QC: designed an Actor-Critic-Monitor loop for synthetic clinical cases, turning reviewer findings into remediation decisions and reusable bad-pattern detectors for derived-value drift, cross-file conflict, timeline incoherence, template contamination, and metadata leakage.',
        zh: '合成数据对抗式 QC：为合成临床病例设计 Actor-Critic-Monitor 闭环，将审查 findings 转化为整改决策，并沉淀可复用坏样式检测器，覆盖派生值漂移、跨文件冲突、时间线不一致、模板污染与元数据泄漏。',
      },
      {
        en: 'Infrastructure depth (supporting): containerized eval across six model families and five agent harnesses with cloud fan-out and cost governance; an open-source agent integration re-landed cleanly on upstream v0.17.0 (766 insertions, 12 tests, 2 registry lines); MCP tool mocking for RL at trajectory-level parity; per-modality Office evaluation harnesses with multi-vendor judges.',
        zh: '基础设施纵深（支撑）：跨六个模型族与五种 agent harness 的容器化评测，配云端 fan-out 与成本治理；开源 agent 集成干净重落上游 v0.17.0（766 行插入、12 个单测、仅碰 2 行注册代码）；面向 RL 的 MCP 工具 mock（轨迹级一致）；按模态拆分、多厂商裁判的 Office 评测 harness。',
      },
    ],
    tags: ['Evaluation Science', 'Difficulty Calibration', 'Judge Reliability', 'DAG Rubrics', 'Synthetic / RL Data', 'Multi-Agent Systems'],
  },
  {
    company: 'Fintopia',
    role: { en: 'Machine Learning Engineer (AI R&D)', zh: 'Machine Learning Engineer（AI 研发）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2025 – Apr 2026',
    summary: {
      en: 'Led end-to-end development, observability, and evaluation of AI-driven financial infrastructure for global markets — China, Indonesia, Mexico, and the Philippines.',
      zh: '负责跨境借贷业务（中国、印尼、墨西哥、菲律宾）AI infrastructure 的端到端开发、observability 与 evaluation。',
    },
    highlights: [
      {
        en: 'Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.',
        zh: '企业级 agentic 生态：基于火山引擎 AgentKit 构建可扩展的 agent 生态，集成 Anthropic Agent Skills、MCP 与 tool-use，将 agent 与公司数仓深度打通，支撑实时、数据驱动的决策。',
      },
      {
        en: 'Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA for all internal AI products.',
        zh: '统一 evaluation 平台：支持 rule-based 与 LLM-as-a-judge 两种判分，为 regression、classification、RAG、agent 提供专门的 metric（如 trajectory quality、tool precision），覆盖公司全部内部 AI 产品的质量保障。',
      },
      {
        en: 'Full-stack observability: implemented OpenTelemetry spans with Kafka and ClickHouse for trace aggregation and real-time behavioral diagnostics.',
        zh: '全栈 observability：用 OpenTelemetry 采集 span，结合 Kafka 与 ClickHouse 做 trace 聚合与实时行为诊断。',
      },
      {
        en: 'Advanced RAG & speech/risk AI: deployed cross-border RAG (Haystack + Elasticsearch) with a RAGAS evaluation closed-loop; fine-tuned Whisper for voice agents and deployed SLMs for risk feature engineering and fraud-pattern detection.',
        zh: 'RAG 与语音 / 风控：部署跨境 RAG（Haystack + Elasticsearch）并用 RAGAS 建立 evaluation 闭环；微调 Whisper 用于语音 agent，部署 SLM 做风控特征工程与欺诈识别。',
      },
    ],
    tags: ['Agents · AgentKit', 'MCP', 'RAG / RAGAS', 'OTel · Kafka · ClickHouse', 'Whisper / SLM', 'FinTech'],
  },
  {
    company: 'ByteDance',
    role: { en: 'Algorithm Engineer · Doubao (VLM) Evaluation', zh: '算法工程师 · 豆包（VLM）Evaluation' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Nov 2025',
    summary: {
      en: 'Owned the overarching evaluation framework and model-performance strategy for the Doubao vision-language model.',
      zh: '在豆包（VLM）团队，负责整体 evaluation 框架与模型性能策略。',
    },
    highlights: [
      {
        en: 'Framework architecture: standardized the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '框架架构：将 “evals” 工作流标准化为 5 个模块——Datacard、Exercise、PE Template、Arena、Insight，自研与开源模型均可一键 benchmark 并可视化。',
      },
      {
        en: 'Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated/aligned 20+ public benchmarks for high-precision performance tracking.',
        zh: 'Metric 系统：构建 rule-based（RegEx）+ LLM-as-a-judge 的混合判分，集成并对齐 20+ 个公开 benchmark，实现高精度的性能追踪。',
      },
      {
        en: 'Engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.',
        zh: '工程效率：基于平台 API 与 MCP 工具自动化大规模评测，并开发了若干飞书（Lark）效率工具，显著提升团队吞吐。',
      },
      {
        en: 'Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset surfacing critical multimodal failure cases for frontier models. Awarded a SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).',
        zh: '团队与荣誉：带领 30 人跨职能团队构建 “Visual Hard Problems” 数据集，定位前沿模型在多模态上的关键 failure case。获 SPOT Bonus（部门前 1%）与 M+ 绩效（前 10%）。',
      },
    ],
    tags: ['VLM & Agent Eval', 'Benchmark Design', 'LLM-as-judge', 'MCP', 'Team Lead'],
  },
  {
    company: 'PwC China',
    role: { en: 'Risk Assurance Associate', zh: 'Risk Assurance Associate（风险与控制鉴证）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2024 – Mar 2025',
    summary: {
      en: 'Bridged AI technology and professional audit standards, focusing on IT governance and AI-driven internal automation for TMT and pre-IPO clients.',
      zh: '连接 AI 技术与专业审计标准，面向 TMT 与 pre-IPO 客户做 IT 治理与 AI 驱动的内部自动化。',
    },
    highlights: [
      {
        en: 'AI-driven audit: developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets.',
        zh: 'AI 审计：基于百度文心（ERNIE）构建 RAG 财务审计助手，自动从海量财务数据中检索与抽取洞察。',
      },
      {
        en: 'IT general & application controls: led ITGC audits across OS/databases (MySQL, TiDB, HBase) and cybersecurity, and executed end-to-end ITAC security testing over complex capital flows for financial institutions.',
        zh: 'ITGC / ITAC：负责覆盖操作系统、数据库（MySQL、TiDB、HBase）与网络安全的 ITGC 审计，并对金融机构复杂资金流执行端到端 ITAC 安全测试。',
      },
      {
        en: 'Digital & AI consulting: advised large traditional enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
        zh: '数字化与 AI 咨询：为大型传统企业提供 AI 转型路线图，以及 IT 成本优化与基础设施扩容方案。',
      },
    ],
    tags: ['ITGC / ITAC', 'RAG', 'Security Testing', 'AI Consulting'],
  },
  {
    company: 'PwC China',
    role: { en: 'Global Technology Support Engineer (Internship)', zh: 'Global Technology Support Engineer（实习）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Jul 2023 – Oct 2023',
    highlights: [
      {
        en: 'Firmwide Corporate Services: provided infrastructure support (server maintenance, VPN, internal network protocols) and managed enterprise IT asset lifecycle to corporate security and scalability standards.',
        zh: '全所企业服务：负责基础设施支持（服务器、VPN、内网协议），并按企业安全与扩展标准管理 IT 资产的全生命周期。',
      },
      {
        en: 'Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.',
        zh: '流程自动化：为员工离职构建自动化流程，优化数据备份与迁移，提升数据安全与运营效率。',
      },
    ],
    tags: ['IT Infrastructure', 'Automation', 'Enterprise Security'],
  },
  {
    company: 'National University of Singapore',
    role: { en: 'Machine Learning Intern (Academic Exchange)', zh: 'Machine Learning Intern（学术交流）' },
    location: { en: 'Singapore', zh: '新加坡' },
    period: 'Nov 2021 – Mar 2022',
    highlights: [
      {
        en: 'Selected for a competitive ML academic-exchange program; deepened traditional ML (regression, SVM, decision trees, clustering) and built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data to training and evaluation. Final research project graded with Distinction.',
        zh: '入选竞争性的机器学习交流项目；系统学习传统 ML（回归、SVM、决策树、聚类），并端到端实现了一个 LSTM 时间序列温度预测模型——从气候数据预处理、特征工程到训练与评估。结题研究获 Distinction 评定。',
      },
    ],
    tags: ['Machine Learning', 'LSTM', 'Deep Learning'],
  },
];

export interface EducationItem {
  school: L;
  degree: L;
  location: L;
  period: string;
  details: L[];
}

export const education: EducationItem[] = [
  {
    school: { en: 'Ocean University of China', zh: '中国海洋大学' },
    degree: { en: 'B.S. in Computer Science (GPA 3.2/4.0)', zh: '计算机科学与技术 学士（GPA 3.2/4.0）' },
    location: { en: 'Qingdao, China', zh: '中国 · 青岛' },
    period: 'Sep 2020 – Jul 2024',
    details: [
      {
        en: 'Selected coursework: Machine Learning, Computer Vision, Parallel & Distributed Computing, Data Mining.',
        zh: '主要课程：Machine Learning、Computer Vision、并行与分布式计算、数据挖掘。',
      },
      {
        en: 'Honors: Academic Excellence Scholarship (Top 5%), Excellent Graduation Thesis (Top 1%), Innovation & Entrepreneurship Scholarship.',
        zh: '荣誉：学业优秀奖学金（前 5%）、优秀毕业论文（前 1%）、创新创业奖学金。',
      },
      {
        en: 'Thesis: Blockchain-based Encrypted Cross-modal Retrieval Framework (Solidity & PyTorch).',
        zh: '毕业论文：基于区块链的加密跨模态检索框架（Solidity + PyTorch）。',
      },
    ],
  },
];

export interface SkillGroup {
  label: L;
  items: L[];
}

export const skills: SkillGroup[] = [
  {
    label: { en: 'AI / ML', zh: 'AI / ML' },
    items: [
      { en: 'Benchmark design · difficulty calibration · validity probes', zh: 'Benchmark 设计 · 难度校准 · 有效性探针' },
      { en: 'LLM-as-judge / agent-as-judge · judge reliability', zh: 'LLM-as-judge / agent-as-judge · 裁判可靠性' },
      { en: 'Rubric systems (DAG dependencies, process vs outcome, hurdle gating)', zh: 'Rubric 体系（DAG 依赖、过程 vs 结果、hurdle 门控）' },
      { en: 'Synthetic / RL / SFT data generation & adversarial QC', zh: '合成 / RL / SFT 数据生成与对抗式 QC' },
      { en: 'Agent systems, harnesses & MCP', zh: 'Agent 系统、harness 与 MCP' },
      { en: 'RAG architecture · LLM fine-tuning & deployment', zh: 'RAG 架构 · LLM fine-tuning 与部署' },
    ],
  },
  {
    label: { en: 'Infrastructure', zh: 'Infrastructure' },
    items: [
      { en: 'Eval orchestration & cloud fan-out', zh: 'Eval orchestration 与云端 fan-out' },
      { en: 'Office-document extraction, generation & files-out reconstruction', zh: 'Office 文档抽取、生成与 files-out 重建' },
      'OpenTelemetry · Kafka · ClickHouse',
      'Elasticsearch · Haystack',
      'Docker · Linux · Git',
      { en: 'Alibaba Cloud Certified Professional (LLM)', zh: '阿里云认证专业工程师（LLM）' },
    ],
  },
  {
    label: { en: 'Languages', zh: '编程语言' },
    items: ['Python (PCAP)', 'Rust', 'C / C++', 'TypeScript / React'],
  },
  {
    label: { en: 'Spoken', zh: '语言' },
    items: [
      { en: 'Mandarin (native)', zh: '中文（母语）' },
      { en: 'English (professional)', zh: 'English（专业级）' },
      { en: 'Japanese (JLPT N2)', zh: '日语（JLPT N2）' },
      { en: 'German (B1, learning)', zh: '德语（B1，学习中）' },
    ],
  },
];

export const interests: L[] = [
  { en: 'Web3 security & MEV research (see Writing)', zh: 'Web3 security & MEV 研究（见文章）' },
  { en: 'ZK-ML research', zh: 'ZK-ML 研究' },
  { en: 'High-altitude trekking (5000 m+)', zh: '高海拔徒步（5000 m+）' },
  { en: 'Alpine skiing', zh: '高山滑雪' },
  { en: 'Landscape photography (see Optics)', zh: '风光摄影（见光影）' },
];
