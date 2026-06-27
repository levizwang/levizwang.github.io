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
      en: 'Agent harnesses, tool-use environments, and trajectory capture for comparing model behavior across complex, file-heavy tasks.',
      zh: '构建 agent harness、tool-use environment 与轨迹采集层，用于在复杂、文件密集任务上横向比较模型行为。',
    },
    tags: ['Agent harnesses', 'Trajectory capture', 'MCP parity'],
  },
  {
    icon: 'gauge',
    title: { en: 'Evaluation science', zh: '评测科学' },
    body: {
      en: 'LLM-as-judge, rubric metrics, reason guards, anti-guessing probes, and leakage control so a benchmark measures ability, not noise.',
      zh: 'LLM-as-judge、rubric metric、reason guard、防蒙探针与泄漏控制，让 benchmark 测的是能力，而不是噪声。',
    },
    tags: ['Verifier systems', 'Anti-guessing gates', 'Rubric design'],
  },
  {
    icon: 'flask',
    title: { en: 'Synthetic data', zh: '合成数据' },
    body: {
      en: 'Evidence-grounded generation with adversarial QC, turning expert files into traceable eval and training data without exposing private implementation recipes.',
      zh: '以证据为依据的生成，配对抗式 QC，把专家文件变成可溯源的评测与训练数据，同时避免暴露内部实现配方。',
    },
    tags: ['Evidence ledger', 'Adversarial QC', 'Synthetic/RL data'],
  },
  {
    icon: 'layers',
    title: { en: 'Multi-model harnessing', zh: '多模型驾驭' },
    body: {
      en: 'Containerized eval execution across model families and harnesses, with cloud fan-out, cost/latency accounting, and delivery-grade packaging.',
      zh: '跨模型族与 harness 的容器化评测执行，配云端 fan-out、成本/时延核算与交付级打包。',
    },
    tags: ['Model×harness matrices', 'Cloud fan-out', 'Open source'],
  },
];
