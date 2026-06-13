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
    role: { en: 'AI Infra Engineer · Founding Engineer & Strategic Projects Lead', zh: 'AI Infra 工程师 · 创始期工程师 & 战略项目负责人' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'Founding-stage engineer at a Sequoia China (HongShan) / Capital Today / BAI Capital-backed AI-data startup — in the mold of Surge AI and Mercor — building the foundational infrastructure for next-generation agentic intelligence and defining the standards for autonomous-system evaluation.',
      zh: '在一家做 AI 数据的初创公司当创始期工程师——红杉中国、今日资本、BAI 投的，路子有点像 Surge 和 Mercor。主要在搭下一代智能体的底层基础设施，顺便琢磨“一个自治智能体到底好不好”这件事该怎么评。',
    },
    highlights: [
      {
        en: 'Agentic infrastructure & RL environments: architected scalable RL environments and specialized agent harnesses for standardized model interaction, tool-use execution, and robust performance tracking across complex action spaces; operated and extended a containerized eval framework across 6 model families × 5 harnesses and contributed a Stirrup-agent integration upstream as a reviewed open-source PR.',
        zh: '智能体基础设施 & RL 环境：搭可扩展的强化学习环境和专门的 agent harness，让模型能标准化地交互、调工具，在复杂动作空间里被稳定地评。还把一套容器化评测框架跑遍了 6 个模型族 × 5 种 harness，并把自己写的 Stirrup agent 集成以 PR 合进了开源上游。',
      },
      {
        en: 'Strategic project leadership (0→1): led cross-functional teams of domain experts to build high-fidelity agent benchmarks and specialized SFT datasets — including a multi-agent pipeline that turns expert workspaces into hard, evidence-grounded agentic exam items (finance / consulting / law) with cross-vendor model independence and anti-leakage / anti-guessing validity safeguards, plus an Actor-Critic-Monitor adversarial QC loop for synthetic clinical data.',
        zh: '0→1 的战略项目：带一帮领域专家做高保真的智能体基准和 SFT 数据集——比如一条把专家工作区变成高难度、能溯源到证据的智能体考题（金融 / 咨询 / 法律）的多智能体流水线，跨厂商出题、既防泄漏又防蒙；还有一套给合成病历做对抗式质检的 Actor-Critic-Monitor 闭环。',
      },
      {
        en: 'Evaluation methodology: defined the “source of truth” for agent reasoning via automated evaluation pipelines that assess trajectory alignment, planning efficiency, and multi-step tool-invocation accuracy; ran a controlled agent-as-judge vs. hand-written-metric study and shipped a rubric-based Verifier.',
        zh: '评测方法：给智能体的推理定一个“真值基准”，用自动评测流水线去看轨迹对不对齐、规划够不够高效、多步调工具准不准。做过一次 agent-as-judge 和人写 metric 的正面 PK，也交付了一个基于 rubric 的 Verifier。',
      },
      {
        en: 'Expert data orchestration: curated gold-standard datasets for agent fine-tuning (alignment) in high-stakes professional domains (finance, engineering), and mocked MCP tool services so tool-using agents can train at scale on the Toolathlon benchmark.',
        zh: '专家数据：给金融、工程这些高风险领域的智能体微调（对齐）攒“金标准”数据；还把 MCP 工具 mock 掉，让工具型智能体能在 Toolathlon 上大规模训练。',
      },
    ],
    tags: ['Agentic Infra', 'RL Environments', 'Agent Harnesses', 'LLM-as-judge', 'Synthetic / SFT Data', 'Open Source'],
  },
  {
    company: 'Fintopia',
    role: { en: 'Machine Learning Engineer (AI R&D)', zh: '机器学习工程师（AI 研发）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2025 – Apr 2026',
    summary: {
      en: 'Led end-to-end development, observability, and evaluation of AI-driven financial infrastructure for global markets — China, Indonesia, Mexico, and the Philippines.',
      zh: '给跨境借贷（中国、印尼、墨西哥、菲律宾）的 AI 基础设施做开发、可观测和评测，基本端到端都在我手上。',
    },
    highlights: [
      {
        en: 'Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.',
        zh: '企业级智能体生态：基于火山引擎 AgentKit 搭了一套能扩展的智能体生态，接进 Anthropic Agent Skills、MCP 和工具调用，把智能体和公司数仓深度绑在一起，让它能实时看数据做决策。',
      },
      {
        en: 'Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA for all internal AI products.',
        zh: '统一评测平台：做了个既能跑规则判分、也能 LLM-as-a-judge 的平台，给回归、分类、RAG、智能体都配了专门的指标（像轨迹质量、工具精度），公司内部所有 AI 产品的质量都靠它兜底。',
      },
      {
        en: 'Full-stack observability: implemented OpenTelemetry spans with Kafka and ClickHouse for trace aggregation and real-time behavioral diagnostics.',
        zh: '全栈可观测：用 OpenTelemetry 打 span，配上 Kafka 和 ClickHouse 做轨迹聚合和实时行为诊断。',
      },
      {
        en: 'Advanced RAG & speech/risk AI: deployed cross-border RAG (Haystack + Elasticsearch) with a RAGAS evaluation closed-loop; fine-tuned Whisper for voice agents and deployed SLMs for risk feature engineering and fraud-pattern detection.',
        zh: 'RAG 和语音 / 风控：上了跨境 RAG（Haystack + Elasticsearch），用 RAGAS 做评测闭环；微调 Whisper 做语音外呼，还用小模型（SLM）挖风控特征、抓欺诈模式。',
      },
    ],
    tags: ['Agents · AgentKit', 'MCP', 'RAG / RAGAS', 'OTel · Kafka · ClickHouse', 'Whisper / SLM', 'FinTech'],
  },
  {
    company: 'ByteDance',
    role: { en: 'AI Infra Engineer · Doubao (VLM) Evaluation', zh: 'AI Infra 工程师 · 豆包（VLM）评测' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Nov 2025',
    summary: {
      en: 'Owned the overarching evaluation framework and model-performance strategy for the Doubao vision-language model.',
      zh: '在豆包（VLM）团队，负责整个评测框架和模型性能策略。',
    },
    highlights: [
      {
        en: 'Framework architecture: standardized the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '框架架构：把“evals”这套流程拆成 5 个模块——Datacard、Exercise、PE Template、Arena、Insight，自研和开源模型都能一键跑分、出可视化。',
      },
      {
        en: 'Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated/aligned 20+ public benchmarks for high-precision performance tracking.',
        zh: '指标系统：搭了规则（RegEx）+ LLM-as-a-judge 的混合判分，接进并对齐了 20+ 个公开基准，性能追踪做得比较准。',
      },
      {
        en: 'Engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.',
        zh: '工程效率：用平台 API 和 MCP 工具把大规模评测自动化了，还顺手写了几个飞书插件，团队效率提了不少。',
      },
      {
        en: 'Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset surfacing critical multimodal failure cases for frontier models. Awarded a SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).',
        zh: '带队 & 荣誉：带 30 人的跨职能团队做了个“视觉硬骨头”数据集，专挑前沿模型在多模态上会翻车的用例。拿了 SPOT Bonus（部门前 1%）和 M+ 绩效（前 10%）。',
      },
    ],
    tags: ['VLM & Agent Eval', 'Benchmark Design', 'LLM-as-judge', 'MCP', 'Team Lead'],
  },
  {
    company: 'PwC China',
    role: { en: 'Risk Assurance Associate', zh: '风险与控制鉴证顾问' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2024 – Mar 2025',
    summary: {
      en: 'Bridged AI technology and professional audit standards, focusing on IT governance and AI-driven internal automation for TMT and pre-IPO clients.',
      zh: '把 AI 和审计标准接起来，主要做 TMT 和 pre-IPO 客户的 IT 治理，以及用 AI 做内部自动化。',
    },
    highlights: [
      {
        en: 'AI-driven audit: developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets.',
        zh: 'AI 审计：基于百度文心（ERNIE）做了个 RAG 财务审计助手，自动从一堆财务数据里检索、抽洞察。',
      },
      {
        en: 'IT general & application controls: led ITGC audits across OS/databases (MySQL, TiDB, HBase) and cybersecurity, and executed end-to-end ITAC security testing over complex capital flows for financial institutions.',
        zh: 'IT 一般 / 应用控制：带着做覆盖操作系统、数据库（MySQL、TiDB、HBase）和网络安全的 ITGC 审计，也给金融机构的复杂资金流做了端到端的 ITAC 安全测试。',
      },
      {
        en: 'Digital & AI consulting: advised large traditional enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
        zh: '数字化 & AI 咨询：给大型传统企业出 AI 转型路线图，帮他们抠 IT 成本、做基础设施扩容。',
      },
    ],
    tags: ['ITGC / ITAC', 'RAG', 'Security Testing', 'AI Consulting'],
  },
  {
    company: 'PwC China',
    role: { en: 'Global Technology Support Engineer (Internship)', zh: '全球技术支持工程师（实习）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Jul 2023 – Oct 2023',
    highlights: [
      {
        en: 'Firmwide Corporate Services: provided infrastructure support (server maintenance, VPN, internal network protocols) and managed enterprise IT asset lifecycle to corporate security and scalability standards.',
        zh: '全所企业服务：管基础设施（服务器、VPN、内网协议），按公司的安全和扩展标准管 IT 资产的全生命周期。',
      },
      {
        en: 'Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.',
        zh: '流程自动化：给员工离职做了套自动化流程，把数据备份和迁移理顺，省事也更安全。',
      },
    ],
    tags: ['IT Infrastructure', 'Automation', 'Enterprise Security'],
  },
  {
    company: 'National University of Singapore',
    role: { en: 'Machine Learning Intern (Academic Exchange)', zh: '机器学习实习生（学术交流）' },
    location: { en: 'Singapore', zh: '新加坡' },
    period: 'Nov 2021 – Mar 2022',
    highlights: [
      {
        en: 'Selected for a competitive ML academic-exchange program; deepened traditional ML (regression, SVM, decision trees, clustering) and built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data to training and evaluation. Final research project graded with Distinction.',
        zh: '入选了一个挺卷的机器学习交流项目；把传统 ML（回归、SVM、决策树、聚类）过了一遍，还端到端做了个 LSTM 时间序列温度预测——从气候数据清洗、特征工程一直到训练和评估。结题拿了 Distinction。',
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
        zh: '上过的课：机器学习、计算机视觉、并行与分布式计算、数据挖掘。',
      },
      {
        en: 'Honors: Academic Excellence Scholarship (Top 5%), Excellent Graduation Thesis (Top 1%), Innovation & Entrepreneurship Scholarship.',
        zh: '拿过：学业优秀奖学金（前 5%）、优秀毕业论文（前 1%）、创新创业奖学金。',
      },
      {
        en: 'Thesis: Blockchain-based Encrypted Cross-modal Retrieval Framework (Solidity & PyTorch).',
        zh: '毕设：基于区块链的加密跨模态检索框架（Solidity + PyTorch）。',
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
    label: { en: 'AI / ML', zh: 'AI / 机器学习' },
    items: [
      { en: 'LLM & agent evaluation (rule-based + LLM-as-a-judge)', zh: '大模型与智能体评测（规则 + LLM-as-a-judge）' },
      { en: 'Agent systems, harnesses & MCP', zh: '智能体系统、harness 与 MCP' },
      { en: 'RL environments · synthetic / SFT data', zh: '强化学习环境 · 合成 / SFT 数据' },
      { en: 'RAG architecture & vector DBs', zh: 'RAG 架构与向量数据库' },
      { en: 'LLM fine-tuning & deployment', zh: '大模型微调与部署' },
    ],
  },
  {
    label: { en: 'Infrastructure', zh: '基础设施' },
    items: [
      { en: 'Eval orchestration & cloud fan-out', zh: '评测编排与云端扇出' },
      'OpenTelemetry · Kafka · ClickHouse',
      'Elasticsearch · Haystack',
      'Docker · Linux · Git',
      { en: 'Alibaba Cloud Certified Professional (LLM)', zh: '阿里云认证专业工程师（大模型）' },
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
      { en: 'English (professional)', zh: '英语（专业级）' },
      { en: 'Japanese (JLPT N2)', zh: '日语（JLPT N2）' },
      { en: 'German (B1, learning)', zh: '德语（B1，在学）' },
    ],
  },
];

export const interests: L[] = [
  { en: 'Web3 security & MEV research (see Writing)', zh: 'Web3 安全 & MEV 研究（见文章）' },
  { en: 'ZK-ML research', zh: 'ZK-ML 研究' },
  { en: 'High-altitude trekking (5000 m+)', zh: '高海拔徒步（5000 m+）' },
  { en: 'Alpine skiing', zh: '高山滑雪' },
  { en: 'Landscape photography (see Optics)', zh: '风光摄影（见光影）' },
];
