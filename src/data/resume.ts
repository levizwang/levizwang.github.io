import type { L } from '../i18n/lang';

export interface DetailedExperienceHighlight {
  title: L;
  items: L[];
}

export interface ExperienceItem {
  company: string;
  role: L;
  location: L;
  period: string;
  summary?: L;
  highlights: Array<L | DetailedExperienceHighlight>;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'HUMANLAYA AI',
    role: { en: 'AI Algorithm Engineer · Infra Engineer · Project Manager', zh: 'AI 算法工程师 · Infra 工程师 · 项目经理' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Apr 2026 – Present',
    summary: {
      en: 'One of the founding engineers — owning capability evaluation and benchmark design for leading US and Chinese models, leading HIL data-synthesis and Agent-as-a-Judge evaluation algorithms as algorithm lead, and building the company\'s evaluation, synthesis, and delivery platforms.',
      zh: '作为创始工程师之一，负责中美前沿模型能力评测与高质量 Benchmark 设计；作为算法负责人，设计 HIL 数据合成与 Agent-as-Judger 评测算法；并搭建评测、合成、交付三大 AI Infra 平台。',
    },
    highlights: [
      {
        title: { en: 'High-quality benchmark design & expert training-data construction', zh: '高质量 Benchmark 设计与专家训练数据构造' },
        items: [
          {
            en: 'Foundation-model evaluation: run reproducible benchmarks for the leading US and Chinese models on a unified containerized harness — spanning public benchmarks such as GDPval and office-productivity tasks — reporting score, cost, and latency to map each model’s capability gaps, including full-precision vs. quantized comparisons.',
            zh: '基模能力评测：在统一容器化 harness 上对中美领先模型执行可复现的基准评测，覆盖 GDPval 等公开基准与 Office 生产力任务，从分数、成本、时延三个维度绘制各家模型的能力缺口图谱，并延伸到全精度 vs 量化等部署变量的对比。',
          },
          {
            en: 'Agentic capability evaluation: drive models through long-horizon real-world tasks under harnesses including Claude Code, Codex, OpenHands, Stirrup, OpenCode, and Gemini CLI, with per-rubric-row grading; diagnose LLM–harness compatibility defects (e.g., reasoning models silently ending tasks early) and deliver per-model capability findings to enterprise clients.',
            zh: 'Agentic 能力评测：以 Claude Code、Codex、Openhands、Stirrup、Opencode、Gemini Cli 等 harness 驱动被测模型完成长程真实任务并逐条 rubric 判分；诊断 llm 与 harness 之间的兼容性缺陷（如推理模型静默提前结束任务），向企业客户输出分模型能力结论。',
          },
          {
            en: 'VLM capability evaluation: build evaluation paths for multimodal document tasks — charts, scanned files, screenshots — and audit vendors’ real visual capability side by side.',
            zh: 'VLM 能力评测：面向 Chart、扫描件、截图等多模态文档任务构建评测路径，横向审计各厂商模型的真实视觉能力。',
          },
          {
            en: 'Professional post-train / SFT data: construct high-quality post-training and SFT data in expert domains — finance, law, medicine, and industry — targeting the capability gaps surfaced by evaluation to precisely strengthen each model’s weaknesses; ranked No. 1 in China for GDPval-style productivity tasks and long-horizon agentic training / eval data.',
            zh: '专业 Post-train / SFT 数据构造：针对评测暴露的能力缺口，构造金融、法律、医疗、工业等专家领域的高质量 Post-train 与 SFT 数据，精确补强各家模型的短板能力；在 GDPval 类生产力任务与 Long-Horizon Agentic 训练/ eval 数据方向做到国内第一。',
          },
          {
            en: 'Data commercialization: datasets procured and accepted as high-quality SFT data by multiple top AI labs, supporting stronger next-generation model development.',
            zh: '数据商业化：数据被多家 Top AI Labs 采购并验收为高质量 SFT 数据，助力新一代模型的能力提升与迭代。',
          },
        ],
      },
      {
        title: { en: 'Algorithm design', zh: '算法设计' },
        items: [
          {
            en: 'HIL high-quality data synthesis: design expert-in-the-loop multi-agent synthesis algorithms that turn experts’ real workspaces into hard, evidence-grounded agentic training data across investment banking (primary and secondary markets), management consulting, corporate law, clinical medicine, and bioinformatics — with validity enforced by cross-vendor model independence, locator-bound evidence ledgers, Actor-Critic-Monitor adversarial QC, and expert review panels.',
            zh: 'HIL 高质量数据合成算法：设计 Expert-in-Loop 的 Multi-Agent 合成算法，将专家真实 Workspace 转化为投行金融（一级市场、二级市场等）、管理咨询、公司法、临床医学、生物信息学等领域中以证据为依据的高难度 Agent 训练数据；以跨厂商模型独立性、带定位符的证据账本与 Actor-Critic-Monitor 对抗式质检、专家评审团等手段保证数据有效性。',
          },
          {
            en: 'DAG rubrics: design DAG-structured rubric systems that restructure traditional “flat” rubrics into three row types — Process, Result, and Hurdle — enabling narrative grading of each task item that precisely measures the correctness of a model’s checkpoints and intermediate steps, improving RL effectiveness.',
            zh: 'DAG Rubric：设计 DAG 结构的 rubric 体系，将传统“平铺”式 Rubrics 重构为 Process-Result-Hurdle 三类型 Rubrics ，实现题目“叙事性”判分，能精确衡量模型完成任务的 ckp、steps 的正确性，提高 RL 效果',
          },
          {
            en: 'LLM/Agent-as-a-Judge evaluation algorithms: design fine-grained LLM judging metrics for stable, efficient grading of model responses, output files, and trajectories; abstract the core metric methods into function calls / skills, leveraging Agent-as-a-Judge flexibility to deliver a large lift in accuracy, recall, and precision on complex agentic-task evaluation.',
            zh: 'LLM/Agent-as-Judger 评测算法：设计精细化 llm 评测 metric，实现稳定且高效模型 response/output_files/trajectory 评判，同时将 llm metric 中核心方法抽象为 function-call/skills，借助 Agent-as-Judge 的灵活性，实现复杂 Agentic Task 评估 Acc/Recall/Precision 大幅上升。',
          },
        ],
      },
      {
        title: { en: 'AI infrastructure', zh: 'AI Infra' },
        items: [
          {
            en: 'Evaluation platform: adopted the open-source Harbor framework as the unified data format and built batch-evaluation orchestration on Daytona cloud sandboxes — normalizing heterogeneous tasks into a standard eval format with high-concurrency fan-out, smoke-test gating, and in-place failure reruns — supporting free combination of model families (Anthropic, OpenAI, Gemini, Qwen, HY, Seed, GLM, Kimi, etc.) × agent harnesses (Claude Code, Codex, Stirrup, etc.).',
            zh: '评测平台搭建：基于开源 Harbor 框架作为统一数据格式，并通过 Daytona 云沙箱搭建批量评测编排系统，将异构任务统一为标准评测格式，支持高并发扇出、冒烟门控与失败原地重跑，覆盖 Anthropic、OpenAI、Gemini、Qwen、HY、seed、GLM、KIMI 等多个模型族 × Claude Code、Codex、Stirrup 等多种 agent harness 的自由组合评测。',
          },
          {
            en: 'Data-synthesis platform: productionized the multi-agent synthesis pipeline — per-node cross-vendor model swapping, gate monitoring, resumable runs, and human-review windows — plus MCP operations tooling and a visual console, covering the full path from seed data to finished items.',
            zh: '数据合成平台搭建：将多智能体合成 pipeline 产品化，提供每个 Agents 节点跨厂商替换、门控监控、断点续跑、人工复核窗口等能力，同时配套 MCP 运维工具与可视化控制台，支撑从种子数据到成题的全链路生产。',
          },
          {
            en: 'Data-delivery platform: manage delivered data as versioned assets — SKUs and version lineage across the full delivery chain — with pre-delivery audits of data structure and per-component QA over prompts, rubrics, reference answers, and judge prompts, emitting agent-readable issue codes for automated repair to guarantee the correctness and consistency of every delivery.',
            zh: '数据交付平台搭建：把交付数据资产化，利用 SKU、版本血缘等方式全链路管理数据交付，并在交付前自动审计数据结构、对Prompt、Rubrics、Ref、judge prompt 等组件分别进行 qa，输出 Agent 可读的问题码供自动修复，保证交付数据正确性、一致性。',
          },
        ],
      },
      {
        title: { en: 'Data delivery', zh: '数据交付' },
        items: [
          {
            en: 'Delivery gating: harden constraints such as “oracle runs must score full marks” and conflict-free prompt–rubrics–reference alignment into delivery invariants; run full pre-delivery checks with production-identical judges and block any batch that misses the red lines; refine failures under a minimal-change rule and re-judge until every delivery requirement is met, retaining full meta information so each delivery is reproducible and auditable.',
            zh: '交付准出：把 Oracle 实验必须满分、prompt & rubrics & reference 无冲突等约束固化为交付不变量，交付前以生产同配置的裁判做全量预检，未过红线的批次一律不出库；失败项按最小改动原则 Refine 后重判，直至满足所有交付要求，同时会保留所有相关 meta 信息，保证每次交付可复现、可审计。',
          },
          {
            en: 'Feedback loop: own the enterprise-client feedback loop — reproduce every reported issue, triage it P0–P3, separate real defects from version drift and spec-alignment gaps, and close each one with a fix and a client-facing response.',
            zh: '反馈闭环：负责企业客户反馈闭环，对上报问题逐条复现并按 P0–P3 分级，区分真实缺陷、版本漂移与口径对齐三类问题，逐一完成修复与对客回复。',
          },
          {
            en: 'Client relationships & institutionalization: serve as the R&D-side technical interface to enterprise clients and maintain long-term relationships; distill client feedback into delivery red lines and SOPs that teammates and automated agents alike execute against, feeding back into data quality and platform iteration.',
            zh: '客户关系与沉淀：作为研发侧对客技术接口，长期维护企业客户关系；将客户反馈沉淀为交付红线与 SOP，让团队成员与自动化 Agent 都按同一套标准执行交付检查，反哺数据质量与平台迭代。',
          },
        ],
      },
    ],
    tags: ['Evaluation Science', 'Benchmark Design', 'Expert SFT / RL Data', 'Agent-as-a-Judge', 'DAG Rubrics', 'Multi-Agent Systems', 'Data Delivery'],
  },
  {
    company: 'Fintopia',
    role: { en: 'Machine Learning Engineer (AI R&D)', zh: 'Machine Learning Engineer（AI 研发）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2025 – Apr 2026',
    summary: {
      en: 'Led end-to-end development, observability, and evaluation of AI infrastructure for the cross-border lending business across China, Indonesia, Mexico, and the Philippines.',
      zh: '负责跨境借贷业务（中国、印尼、墨西哥、菲律宾）AI 基础设施的端到端开发、可观测性与评测。',
    },
    highlights: [
      {
        en: 'Enterprise agentic ecosystem: architected a scalable agent ecosystem on Volcengine AgentKit and VeADK, integrating Anthropic Agent Skills, MCP, and advanced tool-use; achieved deep binding between agents and corporate data warehouses for real-time, data-driven decisions.',
        zh: '企业级 Agent 生态：基于火山引擎 AgentKit、VeADK 搭建可扩展 Agent 体系，集成 Anthropic Agent Skills、MCP 与 Tool-use 能力，并打通企业数仓，支撑实时数据驱动决策。',
      },
      {
        en: 'Unified AI evaluation infrastructure: built a platform supporting rule-based (code) and LLM-as-a-judge scoring, with specialized metric suites for regression, classification, RAG, and agents (e.g., trajectory quality, tool precision) — powering QA and release gating for all internal AI products.',
        zh: '统一评测平台：搭建同时支持 Rule-based（代码）与 LLM-as-a-Judge 的评分平台，针对回归、分类、RAG、Agent 分别设计 Metric 套件（Trajectory 质量、工具调用准确率等），承载公司内部 AI 产品的 QA 与准出。',
      },
      {
        en: 'Agent observability: instrumented OpenTelemetry spans with Kafka and ClickHouse for near-real-time aggregation of enterprise agent traces and real-time behavioral diagnostics.',
        zh: 'Agent 可观测：基于 OpenTelemetry 接入 Span 埋点，通过 Kafka + ClickHouse 实现企业 Agent Trace 准实时聚合与实时行为诊断。',
      },
      {
        en: 'Enterprise RAG system: built a highly available internal RAG system on the open-source Haystack framework, ingesting Lark sheets and offline PDF/DOCX/XLSX/PPTX files into the knowledge base with high-quality reranking over recalled passages; wired in RAGAS for fine-grained quality evaluation, serving as the release-gate baseline before every launch.',
        zh: '企业级 RAG 系统：基于 Haystack 开源框架搭建企业内部高可用 RAG 系统，打通飞书表格与线下 PDF/DOCX/XLSX/PPTX 等多种数据格式上传为知识库，并对召回结果做高质量精排；接入 RAGAS 对 RAG 效果做精细化评测，作为每次上线前的准出基准。',
      },
      {
        en: 'Multilingual voice bots: fine-tuned Whisper into an ASR model on precisely labeled data in business-market languages such as Indonesian and Spanish, fine-tuned Qwen-14B for semantic understanding, and sourced premium third-party TTS voices — assembling the full ASR + NLU + TTS voice-bot stack, deployed across pre-loan customer acquisition, post-loan customer service, and collections scenarios.',
        zh: '多语种语音机器人：基于印尼语、西班牙语等业务国家的精标数据微调 Whisper 得到 ASR 模型，微调 Qwen 14B 承担语义识别，并外采高质量音色厂商的 TTS，组装出 ASR + 语义识别 + TTS 的完整语音机器人链路，用于贷前引流、贷后客服、贷后催收等场景。',
      },
      {
        en: 'Risk AI: deployed SLMs in the Mexican and Philippine markets for risk-feature mining and fraud-pattern detection, distilling model-ready risk features from unstructured data such as call dialogues; collected features at the face-recognition step to build customer profiles on fully de-identified data; and correlated voice-bot dialogue features with recovery rates to quantify the business impact of speech strategies.',
        zh: 'AI 风控：面向墨西哥、菲律宾等市场部署 SLM 做风控特征挖掘与欺诈模式识别，从通话对话等非结构化数据中提炼可入模的风险特征；在人脸识别环节采集相关特征，在脱敏前提下构建客户画像；并将语音机器人的对话特征与回收率做关联分析，量化语音策略对业务指标的影响。',
      },
    ],
    tags: ['Agents · AgentKit', 'MCP', 'RAG / RAGAS', 'OTel · Kafka · ClickHouse', 'Voice AI · Whisper', 'Risk AI / SLM', 'FinTech'],
  },
  {
    company: 'ByteDance',
    role: { en: 'Algorithm Engineer · Doubao (VLM) Evaluation', zh: '算法工程师 · 豆包（VLM）评测' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Mar 2025 – Nov 2025',
    summary: {
      en: 'Owned evaluation-algorithm design and evaluation-platform infrastructure for the Doubao vision-language model.',
      zh: '负责豆包 VLM 评测算法设计及模型评测平台 Infra 工作',
    },
    highlights: [
      {
        en: 'Framework architecture: contributed to an internal evaluation platform, modularizing the eval workflow to enable one-click benchmarking and visualization for proprietary and open-source models.',
        zh: '评测框架：参与内部评测平台建设，将 Evals 流程模块化，支持自研与开源模型一键执行 Benchmark 并输出可视化。',
      },
      {
        en: 'Metric system: built a hybrid scoring system combining rule-based (RegEx) and LLM-as-a-judge metrics — spanning CoT-pattern analysis, grounding, and complex-instruction evaluation — and integrated/aligned 20+ public VLM benchmarks (ChartQA, HRBench, SciAssess, FinMME, etc.) via automated pipelines that cut evaluation deployment time by 95%.',
        zh: 'Metric 体系：设计 Rule-based（RegEx）+ LLM-as-a-Judge 混合判分体系，覆盖 CoT 模式分析、Grounding、复杂指令等评估类型；接入并对齐 ChartQA、HRBench、SciAssess、FinMME 等 20+ 公开VLM Benchmark，自动化流水线将评测部署时间缩短 95%。',
      },
      {
        en: 'Eval-set construction: led LLM-to-VLM evaluation sets that convert long-document benchmarks into images to probe models in many-image, multi-turn scenarios, unifying understanding and generation in a single pipeline; produced multilingual versions of the eval suite to measure cross-lingual performance drift.',
        zh: '评测集建设：主导 LLM 转 VLM 专项评测集，通过长文 benchmark 转图片考察模型超多图、多轮交互场景下的综合能力，将理解与生成统一进同一条评测流程；并完成评测集多语种化，度量模型跨语种的性能波动。',
      },
      {
        en: 'Team engineering efficiency: automated large-scale evaluation via platform APIs and MCP tools, and built custom Lark productivity suites that significantly raised team throughput.',
        zh: '团队工程提效：通过平台 API 与 MCP 工具实现大规模评测自动化，并自研多款飞书效率工具，提升团队吞吐。',
      },
      {
        en: 'Leadership & honors: led a cross-functional team to curate a large-scale “Visual Hard Problems” dataset across expert domains such as art history, medical anatomy, and geology, surfacing multimodal failure cases and benchmarking multiple frontier models with strong scoring consistency. Received a quarterly individual award and a high performance rating.',
        zh: '团队与荣誉：带领跨职能团队构建大规模「Visual Hard Problems」数据集，覆盖艺术史、医学解剖、地质学等专家领域，定位前沿模型的多模态 Failure Case，完成多模型基准测试并保持较高评分一致性；获季度个人奖项与高绩效评级。',
      },
    ],
    tags: ['VLM Eval', 'Benchmark Design', 'LLM-as-a-Judge', 'Eval Platform Infra', 'MCP', 'Team Lead'],
  },
  {
    company: 'PwC China',
    role: { en: 'Risk Assurance Associate', zh: 'Risk Assurance Associate（风险与鉴证服务）' },
    location: { en: 'Beijing, China', zh: '中国 · 北京' },
    period: 'Nov 2024 – Mar 2025',
    summary: {
      en: 'Served TMT and pre-IPO clients at the intersection of professional audit standards and AI, delivering IT audit, IT consulting, IT due diligence, and business-risk-analysis services.',
      zh: '面向 TMT 与 pre-IPO 客户，结合专业审计标准与 AI 技术，负责给客户提供专业 IT Audit、IT Consulting、IT Due Diligence、Business Risk Analysis等服务。',
    },
    highlights: [
      {
        en: 'AI-driven audit: as tech lead of the PwC–Baidu AICA program, developed a RAG-based financial-audit assistant on Baidu ERNIE to automate retrieval and insight extraction from massive financial datasets, earning the Baidu Chief AI Architect certification.',
        zh: 'AI 审计：作为普华永道-百度 AICA 技术负责人，基于百度文心（ERNIE）开发 RAG 财务审计助手，实现海量财务数据的自动检索与洞察抽取，获得百度首席 AI 架构师认证。',
      },
      {
        en: 'Audit-standards agent: built an agent assistant for the engagement partner grounded in PwC internal and ISA auditing standards — DeepSeek R1 as the base model, with document vectorization and retrieval tuning — targeted for deployment inside the PwC network.',
        zh: '审计准则 Agent：对接主管合伙人需求，以 DeepSeek R1 为基座构建基于普华永道内部审计准则与 ISA 准则的 Agent 智能助手，完成文档向量化嵌入与检索调优，面向普华永道网络内部署。',
      },
      {
        en: 'IT general controls (ITGC): led ITGC audits for multiple US- and HK-listed internet companies across six control domains — control environment, access management, computer operations, program changes, program development, and cybersecurity — running interviews, walkthroughs, and control testing through to full workpapers; reviewed operating-system, database, data-warehouse, and distributed-component layers.',
        zh: 'ITGC 审计：负责多家美股、港股上市互联网公司的 IT 一般控制审计，覆盖控制环境、访问管理、计算机运行、程序变更、程序开发与网络安全六大控制域，完成访谈、穿行测试、控制测试到底稿编写的全流程；并执行操作系统、数据库、数据仓库与分布式组件层审查。',
      },
      {
        en: 'IT application controls (ITAC): owned ITAC across multiple TMT business lines — mapping business processes and data flows, identifying key automated-control points, drafting PBC lists, and executing walkthroughs and control tests to verify system integrity — including end-to-end security testing over complex capital flows for financial institutions.',
        zh: 'ITAC 审计：负责多家 TMT 公司多条业务线的 IT 应用控制，包括绘制业务流程图与数据流转图、识别关键自动化控制点、起草 PBC 清单、执行穿行测试与控制测试以验证系统完整性；含对金融机构复杂资金流的端到端安全测试。',
      },
      {
        en: 'Risk analytics & due diligence: ran business-risk analysis (BRA) and IT due diligence (ITDD) for TMT and pre-IPO clients, applying machine-learning, deep-learning, and econometric methods (Python, Power BI, Stata) to anti-fraud data and anomaly detection for risk insights.',
        zh: '风险分析与尽调：为 TMT 与拟 IPO 企业执行业务风险分析（BRA）与 IT 尽职调查（ITDD），应用机器学习、深度学习与计量经济学方法（Python、Power BI、Stata）分析反欺诈数据与异常情况，输出业务风险洞察。',
      },
      {
        en: 'Digital & AI consulting: advised enterprises across construction, environmental, and internet sectors on AI-transformation roadmaps — designing digitalization scenario cards from real business needs and delivering end-to-end implementation plans with IT cost optimization and infrastructure scaling.',
        zh: '数字化与 AI 咨询：为建筑、环保、互联网等行业企业提供 AI 转型咨询——根据实际业务需求设计数字化场景卡片，制定端到端落地方案，并覆盖 IT 成本优化与基础设施扩容。',
      },
    ],
    tags: ['ITGC / ITAC', 'ITDD / BRA', 'RAG · Agent', 'CyberSecurity', 'IT/AI Consulting'],
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
      {
        en: 'Security operations: took part in employee-device security reviews and firmwide anti-phishing drills, helping enforce endpoint-compliance baselines and raise security awareness across the firm.',
        zh: '安全运营：参与公司员工设备安全审查与防钓鱼演练等安全治理工作，协助落实终端安全合规基线，提升全员安全意识。',
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
        en: 'Selected through competitive admission into the NUS machine-learning academic-exchange program; studied classical ML algorithms in depth — regression, SVM, decision trees, ensemble methods, clustering, and dimensionality reduction — down to their mathematical foundations.',
        zh: '入选 NUS 机器学习学术交流项目，系统深入学习回归、SVM、决策树、集成学习、聚类、降维等经典机器学习算法及其数学原理。',
      },
      {
        en: 'Completed algorithm experiments by hand-writing implementations from scratch rather than calling libraries, validating each against real datasets — building a rigorous foundation in algorithm engineering.',
        zh: '以“不调库 + 手写实现”的方式完成各类机器学习算法实验，从零实现核心算法并在真实数据集上验证效果，打下扎实的算法工程基本功。',
      },
      {
        en: 'Built an LSTM time-series temperature-prediction model end-to-end — from preprocessing and feature engineering of climate data through training and evaluation — completed independently.',
        zh: '端到端独立实现 LSTM 气温时间序列预测模型，覆盖气候数据清洗、特征工程、模型训练与评估全流程。',
      },
      {
        en: 'Final research project graded with Distinction; ranked first in GPA among program participants.',
        zh: '结题项目获 Distinction 荣誉结项，个人 GPA 位列项目第一。',
      },
    ],
    tags: ['Classical ML', 'From-scratch Implementations', 'LSTM · Deep Learning'],
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
        en: 'Selected coursework: Machine Learning, Computer Vision, Data Analysis & Data Mining, Parallel & Distributed Computing, Scientific Computing in Python, Numerical Analysis, Linear Algebra, Operating Systems, Data Visualization, and Big Data Technologies.',
        zh: '主修课程：机器学习、计算机视觉、数据分析与数据挖掘、并行与分布式计算、Python 科学计算、数值分析、线性代数、操作系统、可视化技术、大数据技术原理与应用等。',
      },
      {
        en: 'Honors: Academic Excellence Scholarship (Top 5%), Innovation & Entrepreneurship Scholarship, Excellent Graduation Thesis (Top 1%).',
        zh: '荣誉：学业优秀奖学金（前 5%）、创新创业奖学金、优秀毕业论文（前 1%）。',
      },
      {
        en: 'Leadership: served four consecutive years as class monitor, organizing academic and extracurricular activities; named “Outstanding Student” and “Outstanding Student Leader”.',
        zh: '领导力：连续四年担任班长，组织学术与课外活动增强班级凝聚力；获「优秀学生」「优秀干部」称号。',
      },
      {
        en: 'Thesis: “Blockchain-based Encrypted Cross-modal Retrieval Framework” — built a cross-modal neural network mapping text and image features into a shared hash space; implemented triple-hash encryption combining image/text MD5 digests with hybrid hashing; and enabled encrypted storage with privacy-preserving retrieval via Solidity smart contracts (PyTorch + Solidity).',
        zh: '毕业论文：《基于区块链的加密跨模态检索框架》——构建跨模态神经网络，将文本与图像特征映射至共享哈希空间；实现三重哈希加密，将图像/文本的 MD5 摘要与混合哈希结合；基于 Solidity 智能合约实现加密存储与隐私保护检索（PyTorch + Solidity）。',
      },
    ],
  },
];

export interface SkillGroup {
  label: L;
  items: L[];
  /** Render items in this many columns inside the card (default 1). */
  columns?: number;
}

export const skills: SkillGroup[] = [
  {
    label: { en: 'AI / ML', zh: 'AI / ML' },
    items: [
      { en: 'Benchmark design · model capability-gap mapping (foundation / agentic / VLM)', zh: 'Benchmark 设计 · 模型能力缺口图谱（基模 / Agentic / VLM）' },
      { en: 'Expert SFT / post-train / RL data construction · evidence-grounded multi-agent synthesis', zh: '专家 SFT / Post-train / RL 数据构造 · 证据依据的多智能体合成' },
      { en: 'LLM / Agent-as-a-Judge · fine-grained judging metrics (response / files / trajectory)', zh: 'LLM / Agent-as-a-Judge · 精细化判分 Metric（response / files / trajectory）' },
      { en: 'DAG rubrics (Process / Result / Hurdle · narrative grading)', zh: 'DAG Rubric（Process / Result / Hurdle · 叙事性判分）' },
      { en: 'Adversarial QC (Actor-Critic-Monitor) · expert review loops', zh: '对抗式质检（Actor-Critic-Monitor）· 专家评审闭环' },
      { en: 'Agent systems & harnesses (Claude Code, Codex, OpenHands…) · MCP', zh: 'Agent 系统与 Harness（Claude Code、Codex、OpenHands 等）· MCP' },
      { en: 'RAG architecture · model fine-tuning & deployment (Whisper, Qwen)', zh: 'RAG 架构 · 模型微调与部署（Whisper、Qwen）' },
    ],
  },
  {
    label: { en: 'Infrastructure', zh: '基础设施' },
    items: [
      { en: 'Eval orchestration & cloud-sandbox fan-out (Harbor · Daytona)', zh: '评测编排与云沙箱扇出（Harbor · Daytona）' },
      { en: 'Data-delivery engineering: SKU / version lineage · QA gating & automated repair', zh: '数据交付工程：SKU / 版本血缘 · QA 门控与自动修复' },
      'OpenTelemetry · Kafka · ClickHouse',
      'Elasticsearch · Haystack',
      'Docker · Linux · Git',
    ],
  },
  {
    label: { en: 'Languages', zh: '编程语言' },
    items: ['Python', 'Rust', 'C / C++', 'TypeScript / React'],
    columns: 2,
  },
  {
    label: { en: 'Certifications', zh: '证书' },
    items: [
      { en: 'PCAP — Certified Associate Python Programmer (Python Institute)', zh: 'PCAP — Python Institute 认证 Python 工程师' },
      { en: 'Alibaba Cloud Certified Professional — LLM (ACP)', zh: '阿里云 ACP 认证专业工程师 — 大模型（LLM）' },
    ],
  },
  {
    label: { en: 'Spoken', zh: '语言' },
    items: [
      { en: 'Mandarin (native)', zh: '中文（母语）' },
      { en: 'English (CEFR B2)', zh: 'English（CEFR B2）' },
      { en: 'Japanese (JLPT N2 · CEFR B2)', zh: '日语（JLPT N2 · CEFR B2）' },
      { en: 'German (B1, learning)', zh: '德语（B1，在学）' },
    ],
    columns: 2,
  },
];

export const interests: L[] = [
  { en: 'Web3 security & MEV research (see Writing)', zh: 'Web3 安全与 MEV 研究（见文章）' },
  { en: 'ZK-ML research', zh: 'ZK-ML 研究' },
  { en: 'High-altitude trekking (5000 m+)', zh: '高海拔徒步（5000 米+）' },
  { en: 'Alpine skiing', zh: '高山滑雪' },
  { en: 'Cycling', zh: '骑行' },
  { en: 'Landscape photography (see Optics)', zh: '风光摄影（见光影）' },
];
