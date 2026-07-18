import type { L } from '../i18n/lang';

export interface Stat {
  value: number;
  suffix?: string;
  label: L;
}

/** Headline counters animated on the home "At scale" section. */
export const stats: Stat[] = [
  { value: 134, label: { en: 'benchmark questions difficulty-calibrated into a target band', zh: '道基准题被校准进目标难度带' } },
  { value: 51, label: { en: 'agents in one adversarial code review', zh: '个 Agent 完成同一次代码审查' } },
  { value: 18, label: { en: 'stages in the benchmark-synthesis pipeline', zh: '个阶段的基准合成流水线' } },
  { value: 6, label: { en: 'model families benchmarked on one harness', zh: '个模型族在同一套 Harness 上横评' } },
];

/** Scrolling marquee of the real tech / benchmark surface. */
export const marquee = [
  'Difficulty Calibration', 'Judge Reliability', 'DAG Rubrics', 'Evidence Ledger',
  'Adversarial QC', 'Verifier', 'Agent-as-Judge', 'Anti-Guessing Probes',
  'RL Data', 'Agent Harnesses', 'GDPval', 'WLE', 'Toolathlon', 'Apex',
  'MCP', 'RAGAS', 'Cloud Fan-out', 'OpenHands', 'Stirrup', 'Codex', 'OpenRouter',
  'Oracle Validation', 'Rubric Design',
];
