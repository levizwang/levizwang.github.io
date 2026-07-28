import type { L } from '../i18n/lang';

export interface Stat {
  value: number;
  suffix?: string;
  label: L;
}

/** Headline counters animated on the home "At scale" section. */
export const stats: Stat[] = [
  {
    value: 3000,
    suffix: '+',
    label: {
      en: 'expert data produced across finance × legal × medical domains',
      zh: '金融 × 法律 × 医疗领域高质量专家数据生产',
    },
  },
  {
    value: 10,
    suffix: '+',
    label: {
      en: 'top-tier AI labs that procured and accepted the data',
      zh: '顶级 AI Lab 采购并验收的数据',
    },
  },
  {
    value: 20,
    suffix: '+',
    label: {
      en: 'data production lines owned end-to-end to delivery gating',
      zh: '条数据产线端到端负责准出交付',
    },
  },
  {
    value: 10000,
    suffix: '+',
    label: {
      en: 'data points evaluated across harnesses × base models, with pattern analysis',
      zh: '条数据在不同 Harness 与基模上评测 + Pattern 分析',
    },
  },
];

/** Scrolling marquee of the real tech / benchmark surface. */
export const marquee = [
  'Difficulty Calibration', 'Judge Reliability', 'DAG Rubrics', 'Evidence Ledger',
  'Adversarial QC', 'Verifier', 'Agent-as-Judge', 'Anti-Guessing Probes',
  'RL Data', 'Agent Harnesses', 'GDPval', 'Toolathlon',
  'MCP', 'RAGAS', 'Cloud Fan-out', 'OpenHands', 'Stirrup', 'Codex', 'OpenRouter',
  'Oracle Validation', 'Rubric Design',
];
