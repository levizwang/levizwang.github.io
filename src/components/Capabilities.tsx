import { Workflow, Gauge, FlaskConical, Layers, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { TagPill } from './ui/TagPill';
import { Ornament } from './ui/ornaments';
import { useT, ui } from '../i18n/lang';
import { pillars, type PillarIcon } from '../data/capabilities';

const ICONS: Record<PillarIcon, LucideIcon> = {
  workflow: Workflow,
  gauge: Gauge,
  flask: FlaskConical,
  layers: Layers,
};

export function Capabilities() {
  const t = useT();
  return (
    <section className="relative mx-auto mt-12 max-w-content px-6 md:mt-16">
      <Ornament kind="gears" className="absolute -left-44 top-2 hidden w-36 text-foreground/30 min-[1450px]:block" />
      <Reveal>
        <SectionHeader eyebrow={ui.buildEyebrow} title={ui.buildTitle} narrow />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
          <Reveal key={i} delay={i * 70}>
            <article className="surface lift group h-full p-7 md:p-8">
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-line bg-background text-foreground transition-colors group-hover:border-brand/60">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{t(p.title)}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{t(p.body)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </article>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
