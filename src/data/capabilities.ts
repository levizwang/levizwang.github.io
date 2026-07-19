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
    icon: 'gauge',
    title: { en: 'Evaluation science', zh: '评测科学' },
    body: {
      en: 'Difficulty calibration with control-group experiments, anti-guessing probes, leakage control, and systematic testing of the LLM judge itself.',
      zh: '带对照组的难度校准、防蒙探针、泄漏控制，以及对 LLM Judge 本身的系统性测试。',
    },
    tags: ['Difficulty calibration', 'Judge reliability', 'Anti-guessing gates'],
  },
  {
    icon: 'flask',
    title: { en: 'Synthetic & RL data', zh: '合成与 RL 数据' },
    body: {
      en: 'Evidence-grounded task synthesis in expert domains: dual-model fact confirmation, adversarial QC, and DAG rubrics that score the reasoning process as well as the outcome.',
      zh: '专家领域的证据约束任务合成：双模型事实互证、对抗式 QC，以及过程与结果都打分的 DAG Rubric。',
    },
    tags: ['Evidence ledger', 'DAG rubrics', 'Adversarial QC'],
  },
  {
    icon: 'workflow',
    title: { en: 'Agentic systems', zh: '智能体系统' },
    body: {
      en: 'Multi-agent pipelines built and operated as production software: role-isolated model routing, blind-then-hinted solver protocols, and verification agents that reproduce findings by execution.',
      zh: '按生产软件标准搭建并维护 Multi-Agent Pipeline：角色隔离的模型路由、先盲解后提示的试做协议、必须执行复现才算数的验证 Agent。',
    },
    tags: ['Multi-agent pipelines', 'Verification fleets', 'MCP'],
  },
  {
    icon: 'layers',
    title: { en: 'Eval infrastructure', zh: '评测基础设施' },
    body: {
      en: 'Containerized eval execution across model families and harnesses, with cloud fan-out, cost governance, and delivery-grade QA gates.',
      zh: '跨模型族、跨 Harness 的容器化评测执行，含云端 fan-out、成本治理与交付级 QA 门控。',
    },
    tags: ['Model×harness matrices', 'Cloud fan-out', 'Delivery QA'],
  },
];
