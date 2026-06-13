import { Workflow, Gauge, FlaskConical, Layers, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { useT, ui, type L } from '../i18n/lang';

interface Pillar {
  icon: LucideIcon;
  title: L;
  body: L;
  tags: string[];
}

const PILLARS: Pillar[] = [
  {
    icon: Workflow,
    title: { en: 'Agentic infrastructure', zh: '智能体基础设施' },
    body: {
      en: 'Scalable RL environments and agent harnesses for standardized tool-use execution and robust performance tracking across complex action spaces.',
      zh: '可扩展的 RL environment 与 agent harness，支持标准化的 tool-use 执行，以及复杂动作空间下的稳定性能追踪。',
    },
    tags: ['RL environments', 'Agent harnesses', 'MCP'],
  },
  {
    icon: Gauge,
    title: { en: 'Evaluation science', zh: '评测科学' },
    body: {
      en: 'LLM-as-judge and validity engineering — anti-guessing probes, leakage control, rubric design — so a benchmark measures ability, not noise.',
      zh: 'LLM-as-judge 与有效性工程——防蒙探针、泄漏控制、rubric 设计——让 benchmark 测的是能力，而不是噪声。',
    },
    tags: ['LLM-as-judge', 'E1 / E2 / E3', 'Rubric DAGs'],
  },
  {
    icon: FlaskConical,
    title: { en: 'Synthetic data', zh: '合成数据' },
    body: {
      en: 'Evidence-grounded generation with an adversarial Actor–Critic–Monitor QC loop, turning expert workspaces into hard, traceable training & eval data.',
      zh: '以证据为依据的生成，配 Actor–Critic–Monitor 对抗式 QC 闭环，把专家 workspace 变成高难度、可溯源的训练与评测数据。',
    },
    tags: ['Evidence ledger', 'Adversarial QC', 'SFT data'],
  },
  {
    icon: Layers,
    title: { en: 'Multi-model harnessing', zh: '多模型驾驭' },
    body: {
      en: 'Running six model families on one containerized framework with cloud fan-out, cost accounting, and an upstream open-source agent contribution.',
      zh: '在一个容器化框架上驾驭六个模型族，配云端 fan-out、成本核算，以及一次上游开源 agent 贡献。',
    },
    tags: ['6 model families', 'Daytona', 'Open source'],
  },
];

export function Capabilities() {
  const t = useT();
  return (
    <section className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <p className="eyebrow">{t(ui.buildEyebrow)}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(ui.buildTitle)}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {PILLARS.map((p, i) => (
          <Reveal key={i} delay={i * 70}>
            <article className="surface lift group h-full p-7 md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-hairline bg-background text-foreground transition-colors group-hover:border-brand/50">
                <p.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{t(p.title)}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{t(p.body)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
