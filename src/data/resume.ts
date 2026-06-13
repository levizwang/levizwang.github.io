export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Fintopia',
    role: 'AI Research & Development Engineer',
    location: 'Beijing, China',
    period: 'Nov 2025 – Present',
    summary:
      'Building agent systems, evaluation infrastructure, and synthetic-data pipelines for a cross-border fintech operating across China, Indonesia, the Philippines, and Mexico.',
    highlights: [
      'Enterprise agent systems: architected an autonomous AgentKit on top of MCP, wiring Skills and tool-use into corporate data warehouses; built OTel → Kafka → ClickHouse pipelines for fine-grained behavioral observability and trace diagnostics.',
      'Unified evaluation platform: engineered a company-wide AI-eval platform supporting both rule-based and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents across every product line.',
      'Scalable RAG infrastructure: designed cross-border retrieval systems (Haystack + Elasticsearch) and an automated RAGAS evaluation loop to keep faithfulness and retrieval precision honest in production.',
      'Voice AI & global risk: fine-tuned Whisper for automated voice bots — correlating dialogue features with recovery rates — and deployed small language models for risk-feature mining in the Mexican and Philippine markets.',
    ],
    tags: ['Agents', 'MCP', 'LLM-as-judge', 'RAG / RAGAS', 'Observability', 'Python'],
  },
  {
    company: 'ByteDance',
    role: 'VLM Evaluation Strategy Expert',
    location: 'Beijing, China',
    period: 'Mar 2025 – Aug 2025',
    summary:
      'Owned evaluation strategy and tooling for vision-language models — from benchmark frameworks to hard-problem datasets.',
    highlights: [
      'Framework architecture: built the “evals” framework with five modular components (Datacard → Insight), enabling one-click benchmarking and visualization for proprietary and open-source models.',
      'Metric engineering: designed a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics, and integrated 20+ public benchmarks for high-precision performance alignment.',
      'Hard-eval data: led a 30-person team to construct a “Visual Hard Problems” dataset of document-grounded, hard-to-guess tasks — earning a SPOT Bonus (top-1% departmental honor) and an M+ performance rating (top-10%).',
      'Productivity tooling: automated large-scale evaluation runs via platform APIs and MCP tools, and shipped custom Lark productivity suites that meaningfully raised team throughput.',
    ],
    tags: ['VLM Evaluation', 'Benchmarks', 'LLM-as-judge', 'Synthetic Data', 'Team Lead'],
  },
  {
    company: 'PwC (PricewaterhouseCoopers)',
    role: 'Risk Assurance Associate',
    location: 'Beijing, China',
    period: 'Oct 2024 – Mar 2025',
    summary: 'IT audit and AI-assisted assurance for TMT clients.',
    highlights: [
      'AI-driven audit: built a RAG assistant on Baidu ERNIE to automate insight extraction and retrieval from large financial reports.',
      'IT general controls (ITGC): led ITGC audits across operating systems and databases (MySQL, TiDB, HBase) and cybersecurity to assure foundational system reliability.',
      'IT application controls (ITAC): executed ITAC and end-to-end security testing over complex capital flows, verifying data integrity and transaction security.',
      'Digital & AI consulting: advised large enterprises on AI-transformation roadmaps, IT cost optimization, and infrastructure scaling.',
    ],
    tags: ['ITGC / ITAC', 'RAG', 'Security Testing', 'AI Consulting'],
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    school: 'Ocean University of China',
    degree: 'B.S. in Computer Science (GPA 3.2/4.0)',
    location: 'Qingdao, China',
    period: 'Sep 2020 – Jul 2024',
    details: [
      'Selected coursework: Machine Learning, Computer Vision, Parallel & Distributed Computing, Data Mining.',
      'Honors: Academic Excellence Scholarship (Top 5%), Excellent Graduation Thesis (Top 1%), Innovation & Entrepreneurship Scholarship.',
      'Thesis: Blockchain-based Encrypted Cross-modal Retrieval Framework (Solidity & PyTorch).',
      'Completed a competitive Winter Machine-Learning Research Program at the National University of Singapore (NUS), evaluated with “Distinction” (Nov 2021 – Mar 2022).',
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'AI / ML',
    items: [
      'LLM evaluation (rule-based + LLM-as-a-judge)',
      'Agent systems & MCP',
      'Synthetic / RL training-data',
      'RAG architecture & vector DBs',
      'LLM fine-tuning & deployment',
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      'Eval orchestration & cloud fan-out',
      'OpenTelemetry · Kafka · ClickHouse',
      'Elasticsearch · Haystack',
      'Docker · Linux · Git',
      'Alibaba Cloud Certified Professional (LLM)',
    ],
  },
  {
    label: 'Languages',
    items: ['Python (PCAP)', 'Rust', 'C / C++', 'TypeScript / React'],
  },
  {
    label: 'Spoken',
    items: ['Mandarin (native)', 'English (professional)', 'Japanese (JLPT N2)', 'German (B1, learning)'],
  },
];

export const interests: string[] = [
  'Web3 security & MEV research (see Writing)',
  'ZK-ML research',
  'High-altitude trekking (5000 m+)',
  'Alpine skiing',
  'Landscape photography (see Optics)',
];
