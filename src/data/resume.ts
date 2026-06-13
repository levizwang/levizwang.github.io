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
    role: { en: 'AI Infra Engineer · Founding Engineer & Strategic Projects Lead', zh: 'AI Infra 工程师 · 创始期工程师与战略项目负责人' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'Founding-stage engineer at a Sequoia China (HongShan) / Capital Today / BAI Capital-backed AI-data startup — in the mold of Surge AI and Mercor — building the foundational infrastructure for next-generation agentic intelligence and defining the standards for autonomous-system evaluation.',
      zh: '在一家由红杉中国（HongShan）、今日资本（Capital Today）、BAI 资本投资的 AI 数据初创公司（对标 Surge AI 与 Mercor）担任创始期工程师，构建下一代智能体智能的底层基础设施，并定义自治系统评测的行业标准。',
    },
    highlights: [
      {
        en: 'Agentic infrastructure & RL environments: architected scalable RL environments and specialized agent harnesses for standardized model interaction, tool-use execution, and robust performance tracking across complex action spaces; operated and extended a containerized eval framework across 6 model families × 5 harnesses and contributed a Stirrup-agent integration upstream as a reviewed open-source PR.',
        zh: '智能体基础设施与 RL 环境：构建可扩展的强化学习环境与专用 agent harness，实现标准化的模型交互、工具调用执行与复杂动作空间下的稳健性能追踪；操作并扩展容器化评测框架，覆盖 6 个模型族 × 5 种 harness，并以经 review 的 PR 向上游开源贡献了 Stirrup agent 集成。',
      },
      {
        en: 'Strategic project leadership (0→1): led cross-functional teams of domain experts to build high-fidelity agent benchmarks and specialized SFT datasets — including a multi-agent pipeline that turns expert workspaces into hard, evidence-grounded agentic exam items (finance / consulting / law) with cross-vendor model independence and anti-leakage / anti-guessing validity safeguards, plus an Actor-Critic-Monitor adversarial QC loop for synthetic clinical data.',
        zh: '战略项目负责（0→1）：带领领域专家组成的跨职能团队构建高保真智能体基准与专用 SFT 数据集——包括一条将专家工作区转化为高难度、以证据为依据的智能体考题（金融 / 咨询 / 法律）的多智能体流水线（跨厂商模型独立、防泄漏 / 防蒙的有效性保障），以及用于合成临床数据的 Actor-Critic-Monitor 对抗式质检闭环。',
      },
      {
        en: 'Evaluation methodology: defined the “source of truth” for agent reasoning via automated evaluation pipelines that assess trajectory alignment, planning efficiency, and multi-step tool-invocation accuracy; ran a controlled agent-as-judge vs. hand-written-metric study and shipped a rubric-based Verifier.',
        zh: '评测方法论：通过自动评测流水线定义智能体推理的“真值基准”，从轨迹对齐、规划效率、多步工具调用准确率等维度评估；做过一次受控的 agent-as-judge 与人写 metric 对照实验，并交付了基于 rubric 的 Verifier。',
      },
      {
        en: 'Expert data orchestration: curated gold-standard datasets for agent fine-tuning (alignment) in high-stakes professional domains (finance, engineering), and mocked MCP tool services so tool-using agents can train at scale on the Toolathlon benchmark.',
        zh: '专家数据编排：为高风险专业领域（金融、工程）的智能体微调（对齐）打磨“金标准”数据集；并 mock MCP 工具服务，让工具型智能体能在 Toolathlon 基准上大规模训练。',
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
      zh: '主导面向全球市场（中国、印尼、墨西哥、菲律宾）的 AI 金融基础设施的端到端开发、可观测与评测。',
    },
    highlights: [
      {
        en: 'Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.',
        zh: '企业级智能体生态：基于火山引擎 AgentKit 构建可扩展的智能体生态，集成 Anthropic Agent Skills、MCP 与高级工具调用；实现智能体与公司数据仓库的深度绑定，支撑实时、数据驱动的决策。',
      },
      {
        en: 'Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA for all internal AI products.',
        zh: '统一 AI 评测基础设施：搭建同时支持规则（代码）与 LLM-as-a-judge 的平台，为回归、分类、RAG、智能体提供专用指标套件（如轨迹质量、工具精度），为所有内部 AI 产品提供质量保障。',
      },
      {
        en: 'Full-stack observability: implemented OpenTelemetry spans with Kafka and ClickHouse for trace aggregation and real-time behavioral diagnostics.',
        zh: '全栈可观测：用 OpenTelemetry span + Kafka + ClickHouse 实现轨迹聚合与实时行为诊断。',
      },
      {
        en: 'Advanced RAG & speech/risk AI: deployed cross-border RAG (Haystack + Elasticsearch) with a RAGAS evaluation closed-loop; fine-tuned Whisper for voice agents and deployed SLMs for risk feature engineering and fraud-pattern detection.',
        zh: '高级 RAG 与语音/风控 AI：部署跨境 RAG（Haystack + Elasticsearch）并用 RAGAS 建立评测闭环；微调 Whisper 用于语音外呼，部署小模型（SLM）做风控特征工程与欺诈模式识别。',
      },
    ],
    tags: ['Agents · AgentKit', 'MCP', 'RAG / RAGAS', 'OTel · Kafka · ClickHouse', 'Whisper / SLM', 'FinTech'],
  },
  {
    company: 'ByteDance',
    role: { en: 'AI Infra Engineer — Doubao (VLM) Team', zh: 'AI Infra 工程师 — 豆包（VLM）团队' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Nov 2025',
    summary: {
      en: 'Owned the overarching evaluation framework and model-performance strategy for vision-language models.',
      zh: '负责视觉语言模型（VLM）的整体评测框架与模型性能策略。',
    },
    highlights: [
      {
        en: 'Framework architecture: standardized the “evals” workflow into 5 modular components — Datacard, Exercise, PE Template, Arena, and Insight — enabling one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '框架架构：将“evals”工作流标准化为 5 个模块化组件——Datacard、Exercise、PE Template、Arena、Insight——实现自研与开源模型的一键基准测试与可视化。',
      },
      {
        en: 'Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated/aligned 20+ public benchmarks for high-precision performance tracking.',
        zh: '指标体系：构建规则（RegEx）+ LLM-as-a-judge 的混合判分系统，集成并对齐 20+ 公开基准，实现高精度性能追踪。',
      },
      {
        en: 'Engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.',
        zh: '工程效率：用平台 API 与 MCP 工具自动化大规模评测，并开发飞书（Lark）效率套件，显著提升团队吞吐。',
      },
      {
        en: 'Leadership & honors: led a 30-member cross-functional team to curate a “Visual Hard Problems” dataset surfacing critical multimodal failure cases for frontier models. Awarded a SPOT Bonus (Top 1% departmental honor) and an M+ performance rating (Top 10%).',
        zh: '领导与荣誉：带领 30 人跨职能团队构建“视觉硬骨头”数据集，挖掘前沿模型的关键多模态失败用例。获 SPOT Bonus（部门前 1%）与 M+ 绩效（前 10%）。',
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
      zh: '连接 AI 技术与专业审计标准，聚焦 TMT 与 pre-IPO 客户的 IT 治理与 AI 驱动的内部自动化。',
    },
    highlights: [
      {
        en: 'AI-driven audit: developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets.',
        zh: 'AI 驱动审计：基于百度文心（ERNIE）开发 RAG 财务审计助手，自动从海量财务数据中检索与抽取洞察。',
      },
      {
        en: 'IT general & application controls: led ITGC audits across OS/databases (MySQL, TiDB, HBase) and cybersecurity, and executed end-to-end ITAC security testing over complex capital flows for financial institutions.',
        zh: 'IT 一般与应用控制：主导覆盖操作系统/数据库（MySQL、TiDB、HBase）与网络安全的 ITGC 审计，并对金融机构的复杂资金流执行端到端 ITAC 安全测试。',
      },
      {
        en: 'Digital & AI consulting: advised large traditional enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
        zh: '数字化与 AI 咨询：为大型传统企业提供 AI 转型路线图、IT 成本优化与基础设施扩展建议。',
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
        zh: '全所企业服务：提供基础设施支持（服务器维护、VPN、内网协议），并按企业安全与可扩展标准管理 IT 资产生命周期。',
      },
      {
        en: 'Process automation: built automated workflows for employee offboarding, streamlining data backup and migration to improve data security and operational efficiency.',
        zh: '流程自动化：为员工离职搭建自动化流程，优化数据备份与迁移，提升数据安全与运营效率。',
      },
    ],
    tags: ['IT Infrastructure', 'Automation', 'Enterprise Security'],
  },
  {
    company: 'National University of Singapore',
    role: { en: 'Machine Learning Intern (Academic Exchange)', zh: '机器学习实习生（学术交流）' },
    location: { en: 'Singapore', zh: '新加坡' },
    period: 'Dec 2022 – Feb 2023',
    highlights: [
      {
        en: 'Selected for a competitive ML academic-exchange program; deepened traditional ML (regression, SVM, decision trees, clustering) and built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data to training and evaluation. Final research project graded with Distinction.',
        zh: '入选竞争性机器学习学术交流项目；夯实传统 ML（回归、SVM、决策树、聚类），并端到端构建 LSTM 时间序列温度预测模型——从气候数据预处理、特征工程到训练与评估。结题研究评定为 Distinction。',
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
        zh: '毕业论文：基于区块链的加密跨模态检索框架（Solidity 与 PyTorch）。',
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
      { en: 'German (B1, learning)', zh: '德语（B1，学习中）' },
    ],
  },
];

export const interests: L[] = [
  { en: 'Web3 security & MEV research (see Writing)', zh: 'Web3 安全与 MEV 研究（见文章）' },
  { en: 'ZK-ML research', zh: 'ZK-ML 研究' },
  { en: 'High-altitude trekking (5000 m+)', zh: '高海拔徒步（5000 m+）' },
  { en: 'Alpine skiing', zh: '高山滑雪' },
  { en: 'Landscape photography (see Optics)', zh: '风光摄影（见光影）' },
];
