import type { L } from '../i18n/lang';

export interface Stat {
  value: number;
  suffix?: string;
  label: L;
}

/** Headline counters animated on the home "At scale" section. */
export const stats: Stat[] = [
  { value: 134, label: { en: 'benchmark questions difficulty-calibrated into a target band', zh: '道基准题目经实验校准进难度验收带' } },
  { value: 51, label: { en: 'agents in one adversarial code review', zh: '个 agent 组成一次对抗式代码审查' } },
  { value: 18, label: { en: 'stages in the benchmark-synthesis pipeline', zh: '个阶段的基准合成流水线' } },
  { value: 6, label: { en: 'model families benchmarked on one harness', zh: '个模型族在同一 harness 上横向评测' } },
];

/** Scrolling marquee of the real tech / benchmark surface. */
export const marquee = [
  'Difficulty Calibration', 'Judge Reliability', 'DAG Rubrics', 'Evidence Ledger',
  'Adversarial QC', 'Verifier', 'Agent-as-Judge', 'Anti-Guessing Probes',
  'RL Data', 'Agent Harnesses', 'GDPval', 'WLE', 'Toolathlon', 'Apex',
  'MCP', 'RAGAS', 'Cloud Fan-out', 'OpenHands', 'Stirrup', 'Codex', 'OpenRouter',
  'Oracle Validation', 'Rubric Design',
];
