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
    role: { en: 'AI Infra Engineer · Founding Engineer & Strategic Projects Lead', zh: 'AI Infra Engineer · 创始期工程师 & 战略项目负责人' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'Founding-stage engineer at a Sequoia China (HongShan) / Capital Today / BAI Capital-backed AI-data startup — in the mold of Surge AI and Mercor — building the foundational infrastructure for next-generation agentic intelligence and defining the standards for autonomous-system evaluation.',
      zh: '在一家 AI data 初创公司任创始期工程师——红杉中国、今日资本、BAI 投资，方向对标 Surge AI 与 Mercor。主要负责下一代 agent 的底层 infrastructure，以及自治系统 evaluation 的标准设计。',
    },
    highlights: [
      {
        en: 'Agentic infrastructure & RL environments: architected scalable RL environments and specialized agent harnesses for standardized model interaction, tool-use execution, and robust performance tracking across complex action spaces; operated and extended a containerized eval framework across 6 model families × 5 harnesses and contributed a Stirrup-agent integration upstream as a reviewed open-source PR.',
        zh: 'Agentic infrastructure & RL 环境：构建可扩展的 RL environment 与专用 agent harness，支持标准化的模型交互、tool-use 执行，以及复杂动作空间下的稳定性能追踪；将一套容器化 eval 框架跑通 6 个模型族 × 5 种 harness，并把自研的 Stirrup agent 集成以 PR 合入开源上游。',
      },
      {
        en: 'Strategic project leadership (0→1): led cross-functional teams of domain experts to build high-fidelity agent benchmarks and specialized SFT datasets — including a multi-agent pipeline that turns expert workspaces into hard, evidence-grounded agentic exam items (finance / consulting / law) with cross-vendor model independence and anti-leakage / anti-guessing validity safeguards, plus an Actor-Critic-Monitor adversarial QC loop for synthetic clinical data.',
        zh: '0→1 战略项目：带领领域专家团队构建高保真 agent benchmark 与 SFT 数据集——包括一条将专家 workspace 转化为高难度、可溯源到证据的 agentic 考题（金融 / 咨询 / 法律）的 multi-agent pipeline，跨厂商出题，兼顾防泄漏与防蒙；以及一套用于合成病历的 Actor-Critic-Monitor 对抗式 QC 闭环。',
      },
      {
        en: 'Evaluation methodology: defined the “source of truth” for agent reasoning via automated evaluation pipelines that assess trajectory alignment, planning efficiency, and multi-step tool-invocation accuracy; ran a controlled agent-as-judge vs. hand-written-metric study and shipped a rubric-based Verifier.',
        zh: 'Evaluation 方法：为 agent reasoning 定义 “source of truth”，用自动化 evaluation pipeline 衡量 trajectory 对齐、planning 效率与多步 tool 调用的准确率；做过一次 agent-as-judge 与人工 metric 的对照实验，并交付了基于 rubric 的 Verifier。',
      },
      {
        en: 'Expert data orchestration: curated gold-standard datasets for agent fine-tuning (alignment) in high-stakes professional domains (finance, engineering), and mocked MCP tool services so tool-using agents can train at scale on the Toolathlon benchmark.',
        zh: '专家数据编排：为金融、工程等高风险领域的 agent 微调（alignment）构建 gold-standard 数据集；并 mock MCP 工具服务，使 tool-use agent 能在 Toolathlon benchmark 上大规模训练。',
      },
    ],
    tags: ['Agentic Infra', 'RL Environments', 'Agent Harnesses', 'LLM-as-judge', 'Synthetic / SFT Data', 'Open Source'],
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
    role: { en: 'AI Infra Engineer · Doubao (VLM) Evaluation', zh: 'AI Infra Engineer · 豆包（VLM）Evaluation' },
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
      { en: 'LLM & agent evaluation (rule-based + LLM-as-a-judge)', zh: 'LLM & agent evaluation（rule-based + LLM-as-a-judge）' },
      { en: 'Agent systems, harnesses & MCP', zh: 'Agent 系统、harness 与 MCP' },
      { en: 'RL environments · synthetic / SFT data', zh: 'RL environments · 合成 / SFT 数据' },
      { en: 'RAG architecture & vector DBs', zh: 'RAG 架构与 vector DB' },
      { en: 'LLM fine-tuning & deployment', zh: 'LLM fine-tuning 与部署' },
    ],
  },
  {
    label: { en: 'Infrastructure', zh: 'Infrastructure' },
    items: [
      { en: 'Eval orchestration & cloud fan-out', zh: 'Eval orchestration 与云端 fan-out' },
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
