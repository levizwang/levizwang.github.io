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
    role: { en: 'AI Algorithm Engineer (Evaluation & Data) · Founding Engineer', zh: 'AI 算法工程师 · 创始期工程师' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'Founding-stage engineer owning the algorithm side of agentic evaluation and synthetic data for frontier-model teams — benchmark design and difficulty calibration, judge reliability, rubric systems — plus the multi-agent pipelines and eval infrastructure that run them. Public-facing descriptions intentionally abstract away client names, internal repositories, and exact implementation recipes.',
      zh: '创始工程师之一，负责前沿模型的 agentic 评测和 HIL 高质量合成数据算法设计以及交付，包括 benchmark 设计、Metric 设计、Rubrics 体系设计等，同时搭建 Multi-Agent Pipeline 和评测 Infra。',
    },
    highlights: [
      {
        en: 'Benchmark-synthesis pipeline (flagship): solo-architected a greenfield 18-stage system — dual-model evidence extraction with intersection confirmation and a deterministic quote gate, an embedding-routed 76-pack/5-domain skill corpus, DAG rubrics, a blind-then-hinted trial-solver stage, human review windows, and QA-gated export — end-to-end closed ~27 hours after git init, with 362 passing unit tests.',
        zh: '数据合成算法设计：通过从 Raw Data 使用算法抽取 Facts，再使用 Multi-Agent 系统基于 Facts 多轮交互，进行高质量 Agentic Post Train 数据合成.',
      },
      {
        en: 'Judge reliability: debugged the LLM judge itself — caught it fatal-zeroing items with 91–93% positive rubric hits (mistaking in-material citations for leakage) and silently dropping rubric DAG dependency fields, both fixed with regression tests; ran line-by-line judge-hallucination re-checks and enforced a "reference answers must score full marks" oracle invariant via a 207-worker minimal-change repair pipeline.',
        zh: 'Judge 可靠性：Debug 裁判模型本身，修复两类缺陷（Rubric 正向命中 91–93% 的题被误判为泄漏并归零、DAG 依赖字段被静默丢弃）并补回归测试；落地判分逐行复核机制，通过 207-worker 最小改动修复 Pipeline 守住「参考答案必须满分」的 Oracle 不变量。',
      },
      {
        en: 'Adversarial verification at scale: ran a 51-agent code review of a teammate’s fork of my pipeline — 6 independent finders, 45 candidates, execution-backed verification (40 confirmed) — producing per-defect introducing-commit attribution and a tiered fix plan; the finder/verifier pattern became a reusable QC product.',
        zh: 'Multi-Agent 对抗验证：设计 finder/verifier 分工的代码审查流程，用 51 个 Agent（6 个独立 finder）审查同事 fork 的 17 个 commit，45 个候选缺陷经执行复现确认 40 个，并通过 git log -S 逐个定位引入 commit；该模式后续固化为可复用的 QC 流程。',
      },
      {
        en: 'Eval operations & delivery: delivered a 257-task × 3-model agentic benchmark evaluation to an enterprise client in 2 days (~70 concurrent cloud sandboxes, semantic-audit and judge-hallucination re-check fleets, 710 validity-guaranteed results with per-model capability findings); audited a 300-pack benchmark exhaustively before spending compute, finding 86 unrunnable packs and a global judge misconfiguration.',
        zh: '评测交付：两天内交付 257 题 × 3 模型的 Agentic Benchmark 评测（约 70 个云沙箱并发，语义抽查与裁判幻觉复核两条 fleet，产出 710 个带有效性保证的结果及分模型结论）；交付前对 300 个题包做穷举预检，发现 86 个不可运行包与一处全局 Judge 配置错误。',
      },
      {
        en: 'Adversarial synthetic-data QC: designed an Actor-Critic-Monitor loop for synthetic clinical cases, turning reviewer findings into remediation decisions and reusable bad-pattern detectors for derived-value drift, cross-file conflict, timeline incoherence, template contamination, and metadata leakage.',
        zh: '合成数据对抗 QC：设计 Actor-Critic-Monitor 闭环用于合成临床病例，将审查 findings 转为整改决策，并把高频缺陷固化为可复用检测器（派生值漂移、跨文件冲突、时间线矛盾、模板污染、元数据泄漏）。',
      },
      {
        en: 'Infrastructure depth (supporting): containerized eval across six model families and five agent harnesses with cloud fan-out and cost governance; an open-source agent integration re-landed cleanly on upstream v0.17.0 (766 insertions, 12 tests, 2 registry lines); MCP tool mocking for RL at trajectory-level parity; per-modality Office evaluation harnesses with multi-vendor judges.',
        zh: '评测 Infra：落地六个模型族 × 五种 Agent Harness 的容器化评测执行，支持云端 fan-out 与成本管控；将开源 Agent 集成重落于上游 v0.17.0（单 commit 766 行插入、12 个单测、仅改 2 行注册代码）；实现轨迹级一致的 MCP 工具 Mock 用于 RL；搭建按模态拆分、多厂商 Judge 的 Office 评测 Harness。',
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
      zh: '负责跨境借贷业务（中国、印尼、墨西哥、菲律宾）AI 基础设施的端到端开发、可观测性与评测。',
    },
    highlights: [
      {
        en: 'Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.',
        zh: '企业级 Agent 生态：基于火山引擎 AgentKit 搭建可扩展 Agent 体系，集成 Anthropic Agent Skills、MCP 与 Tool-use 能力，并打通企业数仓，支撑实时数据驱动决策。',
      },
      {
        en: 'Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA for all internal AI products.',
        zh: '统一评测平台：搭建同时支持 Rule-based（代码）与 LLM-as-a-Judge 的评分平台，针对回归、分类、RAG、Agent 分别设计 Metric 套件（Trajectory 质量、工具调用准确率等），承载公司内部 AI 产品的 QA。',
      },
      {
        en: 'Full-stack observability: implemented OpenTelemetry spans with Kafka and ClickHouse for trace aggregation and real-time behavioral diagnostics.',
        zh: '全栈可观测：基于 OpenTelemetry 接入 Span 埋点，通过 Kafka + ClickHouse 实现 Trace 聚合与实时行为诊断。',
      },
      {
        en: 'Advanced RAG & speech/risk AI: deployed cross-border RAG (Haystack + Elasticsearch) with a RAGAS evaluation closed-loop; fine-tuned Whisper for voice agents and deployed SLMs for risk feature engineering and fraud-pattern detection.',
        zh: 'RAG 与语音/风控：部署跨境 RAG（Haystack + Elasticsearch）并接入 RAGAS 评测闭环；微调 Whisper 用于语音 Agent；部署 SLM 进行风控特征工程与欺诈模式识别。',
      },
    ],
    tags: ['Agents · AgentKit', 'MCP', 'RAG / RAGAS', 'OTel · Kafka · ClickHouse', 'Whisper / SLM', 'FinTech'],
  },
  {
    company: 'ByteDance',
    role: { en: 'Algorithm Engineer · Doubao (VLM) Evaluation', zh: '算法工程师 · 豆包（VLM）评测' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Nov 2025',
    summary: {
      en: 'Owned the overarching evaluation framework and model-performance strategy for the Doubao vision-language model.',
      zh: '负责豆包（VLM）整体评测框架与模型性能策略。',
    },
    highlights: [
      {
        en: 'Framework architecture: standardized the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '评测框架：将 Evals 流程标准化为 5 个模块（Datacard、Exercise、PE Template、Arena、Insight），支持自研与开源模型一键执行 Benchmark 并输出可视化。',
      },
      {
        en: 'Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated/aligned 20+ public benchmarks for high-precision performance tracking.',
        zh: 'Metric 体系：设计 Rule-based（RegEx）+ LLM-as-a-Judge 混合判分体系，接入并对齐 20+ 公开 Benchmark，提升模型性能跟踪精度。',
      },
      {
        en: 'Engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.',
        zh: '工程效率：通过平台 API 与 MCP 工具实现大规模评测自动化，并自研多款飞书效率工具，提升团队吞吐。',
      },
      {
        en: 'Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset surfacing critical multimodal failure cases for frontier models. Awarded a SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).',
        zh: '团队与荣誉：带领 30 人跨职能团队构建「Visual Hard Problems」数据集，定位前沿模型的多模态 Failure Case；获 SPOT Bonus（部门前 1%）与 M+ 绩效（前 10%）。',
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
      zh: '面向 TMT 与 pre-IPO 客户，结合专业审计标准与 AI 技术，负责 IT 治理与 AI 驱动的内部自动化。',
    },
    highlights: [
      {
        en: 'AI-driven audit: developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets.',
        zh: 'AI 审计：基于百度文心（ERNIE）开发 RAG 财务审计助手，实现海量财务数据的自动检索与洞察抽取。',
      },
      {
        en: 'IT general & application controls: led ITGC audits across OS/databases (MySQL, TiDB, HBase) and cybersecurity, and executed end-to-end ITAC security testing over complex capital flows for financial institutions.',
        zh: 'ITGC / ITAC：负责操作系统、数据库（MySQL、TiDB、HBase）与网络安全方向的 ITGC 审计，并对金融机构复杂资金流执行端到端 ITAC 安全测试。',
      },
      {
        en: 'Digital & AI consulting: advised large traditional enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
        zh: '数字化与 AI 咨询：为大型传统企业提供 AI 转型路线图、IT 成本优化与基础设施扩容方案。',
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
        zh: '企业服务：维护全所基础设施（服务器、VPN、内网协议），按企业安全与扩展性标准管理 IT 资产全生命周期。',
      },
      {
        en: 'Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.',
        zh: '流程自动化：将员工离职流程自动化，规范数据备份与迁移，提升数据安全与运营效率。',
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
        zh: '通过选拔进入 ML 学术交流项目；系统学习传统 ML（回归、SVM、决策树、聚类），并端到端实现 LSTM 气温时间序列预测模型（气候数据清洗、特征工程、训练与评估），结题项目获 Distinction。',
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
        zh: '主要课程：机器学习、计算机视觉、并行与分布式计算、数据挖掘。',
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
      { en: 'LLM-as-judge / agent-as-judge · judge reliability', zh: 'LLM-as-Judge / Agent-as-Judge · Judge 可靠性' },
      { en: 'Rubric systems (DAG dependencies, process vs outcome, hurdle gating)', zh: 'Rubric 体系（DAG 依赖、过程 vs 结果、Hurdle 门控）' },
      { en: 'Synthetic / RL / SFT data generation & adversarial QC', zh: '合成 / RL / SFT 数据生成与对抗 QC' },
      { en: 'Agent systems, harnesses & MCP', zh: 'Agent 系统、Harness 与 MCP' },
      { en: 'RAG architecture · LLM fine-tuning & deployment', zh: 'RAG 架构 · LLM 微调与部署' },
    ],
  },
  {
    label: { en: 'Infrastructure', zh: '基础设施' },
    items: [
      { en: 'Eval orchestration & cloud fan-out', zh: '评测编排与云端 fan-out' },
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
      { en: 'English (professional)', zh: 'English（工作语言）' },
      { en: 'Japanese (JLPT N2)', zh: '日语（JLPT N2）' },
      { en: 'German (B1, learning)', zh: '德语（B1，在学）' },
    ],
  },
];

export const interests: L[] = [
  { en: 'Web3 security & MEV research (see Writing)', zh: 'Web3 安全与 MEV 研究（见文章）' },
  { en: 'ZK-ML research', zh: 'ZK-ML 研究' },
  { en: 'High-altitude trekking (5000 m+)', zh: '高海拔徒步（5000 米+）' },
  { en: 'Alpine skiing', zh: '高山滑雪' },
  { en: 'Landscape photography (see Optics)', zh: '风光摄影（见光影）' },
];
