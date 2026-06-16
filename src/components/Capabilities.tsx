import { Workflow, Gauge, FlaskConical, Layers, type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';
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
    <section className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <p className="eyebrow">{t(ui.buildEyebrow)}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(ui.buildTitle)}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
          <Reveal key={i} delay={i * 70}>
            <article className="surface lift group h-full p-7 md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-hairline bg-background text-foreground transition-colors group-hover:border-brand/50">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
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
          );
        })}
      </div>
    </section>
  );
}
