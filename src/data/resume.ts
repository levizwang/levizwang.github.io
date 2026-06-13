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
    company: 'Fintopia',
    role: { en: 'AI Research & Development Engineer', zh: 'AI 研发工程师（RD）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2025 – Present',
    summary: {
      en: 'Building agent systems, evaluation infrastructure, and synthetic-data pipelines for a cross-border fintech operating across China, Indonesia, the Philippines, and Mexico.',
      zh: '为一家横跨中国、印尼、菲律宾、墨西哥的跨境金融科技公司，构建智能体系统、评测基础设施与合成数据流水线。',
    },
    highlights: [
      {
        en: 'Enterprise agent systems: architected an autonomous AgentKit on top of MCP, wiring Skills and tool-use into corporate data warehouses; built OTel → Kafka → ClickHouse pipelines for fine-grained behavioral observability and trace diagnostics.',
        zh: '企业级智能体系统：基于 MCP 设计自治 AgentKit，将 Skills 与工具调用接入公司数据仓库；搭建 OTel → Kafka → ClickHouse 链路，实现细粒度行为可观测与轨迹诊断。',
      },
      {
        en: 'Unified evaluation platform: engineered a company-wide AI-eval platform supporting both rule-based and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents across every product line.',
        zh: '统一评测平台：搭建公司级 AI 评测平台，同时支持规则判分与 LLM-as-a-judge，为回归、分类、RAG、智能体等各产品线提供专用指标套件。',
      },
      {
        en: 'Scalable RAG infrastructure: designed cross-border retrieval systems (Haystack + Elasticsearch) and an automated RAGAS evaluation loop to keep faithfulness and retrieval precision honest in production.',
        zh: '可扩展 RAG 基础设施：设计跨境检索系统（Haystack + Elasticsearch），并用 RAGAS 建立自动评测闭环，保障线上的忠实度与检索精度。',
      },
      {
        en: 'Voice AI & global risk: fine-tuned Whisper for automated voice bots — correlating dialogue features with recovery rates — and deployed small language models for risk-feature mining in the Mexican and Philippine markets.',
        zh: '语音 AI 与全球风控：微调 Whisper 用于自动语音外呼（关联对话特征与回收率），并在墨西哥、菲律宾市场部署小模型挖掘风控特征。',
      },
    ],
    tags: ['Agents', 'MCP', 'LLM-as-judge', 'RAG / RAGAS', 'Observability', 'Python'],
  },
  {
    company: 'ByteDance',
    role: { en: 'VLM Evaluation Strategy Expert', zh: 'VLM 评测策略专家' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Aug 2025',
    summary: {
      en: 'Owned evaluation strategy and tooling for vision-language models — from benchmark frameworks to hard-problem datasets.',
      zh: '负责视觉语言模型（VLM）的评测策略与工具——从基准框架到高难度数据集。',
    },
    highlights: [
      {
        en: 'Framework architecture: built the “evals” framework with five modular components (Datacard → Insight), enabling one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '框架架构：搭建“evals”评测框架，含五个模块化组件（Datacard → Insight），实现自研与开源模型的一键基准测试与可视化。',
      },
      {
        en: 'Metric engineering: designed a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated 20+ public benchmarks for high-precision performance alignment.',
        zh: '指标工程：设计规则（RegEx）+ LLM-as-a-judge 的混合判分体系，集成 20+ 公开基准，实现高精度性能对齐。',
      },
      {
        en: 'Hard-eval data: led a 30-person team to construct a “Visual Hard Problems” dataset of document-grounded, hard-to-guess tasks — earning a SPOT Bonus (top-1% departmental honor) and an M+ performance rating (top-10%).',
        zh: '高难度评测数据：带领 30 人团队构建“视觉硬骨头”数据集（以文档为依据、难以蒙对的任务），获 SPOT Bonus（部门前 1%）与 M+ 绩效（前 10%）。',
      },
      {
        en: 'Productivity tooling: automated large-scale evaluation runs via platform APIs and MCP tools, and shipped custom Lark productivity suites that meaningfully raised team throughput.',
        zh: '效率工具：用平台 API 与 MCP 工具自动化大规模评测，并开发飞书（Lark）效率套件，显著提升团队吞吐。',
      },
    ],
    tags: ['VLM Evaluation', 'Benchmarks', 'LLM-as-judge', 'Synthetic Data', 'Team Lead'],
  },
  {
    company: 'PwC (PricewaterhouseCoopers)',
    role: { en: 'Risk Assurance Associate', zh: '风险与控制咨询顾问' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Oct 2024 – Mar 2025',
    summary: { en: 'IT audit and AI-assisted assurance for TMT clients.', zh: '面向 TMT 客户的 IT 审计与 AI 辅助鉴证。' },
    highlights: [
      {
        en: 'AI-driven audit: built a RAG assistant on Baidu ERNIE to automate insight extraction and retrieval from large financial reports.',
        zh: 'AI 驱动审计：基于百度文心（ERNIE）构建 RAG 助手，自动从大型财报中抽取洞察与检索信息。',
      },
      {
        en: 'IT general controls (ITGC): led ITGC audits across operating systems and databases (MySQL, TiDB, HBase) and cybersecurity to assure foundational system reliability.',
        zh: 'IT 一般控制（ITGC）：主导覆盖操作系统、数据库（MySQL、TiDB、HBase）与网络安全的 ITGC 审计，保障底层系统可靠性。',
      },
      {
        en: 'IT application controls (ITAC): executed ITAC and end-to-end security testing over complex capital flows, verifying data integrity and transaction security.',
        zh: 'IT 应用控制（ITAC）：对复杂资金流执行 ITAC 与端到端安全测试，校验数据完整性与交易安全。',
      },
      {
        en: 'Digital & AI consulting: advised large enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
        zh: '数字化与 AI 咨询：为大型企业提供 AI 转型路线图、IT 成本优化与基础设施扩展建议。',
      },
    ],
    tags: ['ITGC / ITAC', 'RAG', 'Security Testing', 'AI Consulting'],
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
      {
        en: 'Completed a competitive Winter Machine-Learning Research Program at the National University of Singapore (NUS), evaluated with “Distinction” (Nov 2021 – Mar 2022).',
        zh: '完成新加坡国立大学（NUS）冬季机器学习科研项目，结业评定为“Distinction”（2021.11 – 2022.03）。',
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
      { en: 'LLM evaluation (rule-based + LLM-as-a-judge)', zh: '大模型评测（规则 + LLM-as-a-judge）' },
      { en: 'Agent systems & MCP', zh: '智能体系统与 MCP' },
      { en: 'Synthetic / RL training-data', zh: '合成 / 强化学习训练数据' },
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
