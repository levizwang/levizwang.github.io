import type { L } from '../i18n/lang';

export type PillarIcon = 'workflow' | 'gauge' | 'flask' | 'layers';

export interface Pillar {
  icon: PillarIcon;
  title: L;
  body: L;
  tags: string[];
}

/** The four problem areas surfaced on the home "What I build" section. */
export const pillars: Pillar[] = [
  {
    icon: 'workflow',
    title: { en: 'Agentic infrastructure', zh: '智能体基础设施' },
    body: {
      en: 'Scalable RL environments and agent harnesses for standardized tool-use execution and robust performance tracking across complex action spaces.',
      zh: '可扩展的 RL environment 与 agent harness，支持标准化的 tool-use 执行，以及复杂动作空间下的稳定性能追踪。',
    },
    tags: ['RL environments', 'Agent harnesses', 'MCP'],
  },
  {
    icon: 'gauge',
    title: { en: 'Evaluation science', zh: '评测科学' },
    body: {
      en: 'LLM-as-judge and validity engineering — anti-guessing probes, leakage control, rubric design — so a benchmark measures ability, not noise.',
      zh: 'LLM-as-judge 与有效性工程——防蒙探针、泄漏控制、rubric 设计——让 benchmark 测的是能力，而不是噪声。',
    },
    tags: ['LLM-as-judge', 'Anti-guessing gates', 'Rubric DAGs'],
  },
  {
    icon: 'flask',
    title: { en: 'Synthetic data', zh: '合成数据' },
    body: {
      en: 'Evidence-grounded generation with an adversarial Actor–Critic–Monitor QC loop, turning expert workspaces into hard, traceable training & eval data.',
      zh: '以证据为依据的生成，配 Actor–Critic–Monitor 对抗式 QC 闭环，把专家 workspace 变成高难度、可溯源的训练与评测数据。',
    },
    tags: ['Evidence ledger', 'Adversarial QC', 'SFT data'],
  },
  {
    icon: 'layers',
    title: { en: 'Multi-model harnessing', zh: '多模型驾驭' },
    body: {
      en: 'Running six model families on one containerized framework with cloud fan-out, cost accounting, and an upstream open-source agent contribution.',
      zh: '在一个容器化框架上驾驭六个模型族，配云端 fan-out、成本核算，以及一次上游开源 agent 贡献。',
    },
    tags: ['6 model families', 'Daytona', 'Open source'],
  },
];
