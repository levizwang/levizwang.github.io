import type { L } from '../i18n/lang';

export interface Stat {
  value: number;
  suffix?: string;
  label: L;
}

/** Headline counters animated on the home "At scale" section. */
export const stats: Stat[] = [
  { value: 6, label: { en: 'model families benchmarked', zh: '个模型族横向评测' } },
  { value: 19, label: { en: 'stage synthesis architecture', zh: '节点合成架构' } },
  { value: 11, label: { en: 'automated quality checkers', zh: '个自动质量 checker' } },
  { value: 5, label: { en: 'agent harnesses integrated', zh: '种 agent harness 集成' } },
];

/** Scrolling marquee of the real tech / benchmark surface. */
export const marquee = [
  'Evidence Ledger', 'Actor–Critic–Monitor', 'Cross-vendor Independence', 'LLM-as-Judge',
  'RL Environments', 'Agent Harnesses', 'GDPval', 'WLE', 'Toolathlon', 'Apex',
  'MCP', 'RAGAS', 'Daytona', 'OpenHands', 'Stirrup', 'Claude Code', 'Codex', 'OpenRouter',
];
