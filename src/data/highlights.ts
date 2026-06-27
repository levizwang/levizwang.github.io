import type { L } from '../i18n/lang';

export interface Stat {
  value: number;
  suffix?: string;
  label: L;
}

/** Headline counters animated on the home "At scale" section. */
export const stats: Stat[] = [
  { value: 6, label: { en: 'model families benchmarked', zh: '个模型族横向评测' } },
  { value: 5, label: { en: 'agent harnesses integrated', zh: '种 agent harness 集成' } },
  { value: 4, label: { en: 'expert domains synthesized', zh: '类专家领域合成' } },
  { value: 3, label: { en: 'validity layers before delivery', zh: '层交付前有效性门控' } },
];

/** Scrolling marquee of the real tech / benchmark surface. */
export const marquee = [
  'Evidence Ledger', 'Adversarial QC', 'Verifier', 'Agent-as-Judge',
  'RL Data', 'Agent Harnesses', 'GDPval', 'WLE', 'Toolathlon', 'Apex',
  'MCP Mocking', 'RAGAS', 'Cloud Fan-out', 'OpenHands', 'Stirrup', 'Codex', 'OpenRouter',
  'Office Tasks', 'Rubric Design', 'Data Contracts',
];
