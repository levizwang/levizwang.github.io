import { Reveal } from './Reveal';
import { experience } from '../data/resume';
import { useT, ui } from '../i18n/lang';

export function Experience() {
  const t = useT();
  return (
    <section id="experience" className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <p className="eyebrow">{t(ui.expEyebrow)}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t(ui.experience)}</h2>
        <p className="mt-3 text-muted-foreground">{t(ui.experienceSub)}</p>
      </Reveal>

      <div className="mt-12 space-y-5">
        {experience.map((job, idx) => (
          <Reveal key={`${job.company}-${job.period}`} delay={Math.min(idx, 3) * 60}>
            <article className="surface lift p-7 md:p-9">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl tracking-tight">
                  <span className="font-semibold">{job.company}</span>
                  <span className="text-muted-foreground"> · {t(job.role)}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                  {job.period} · {t(job.location)}
                </p>
              </div>

              {job.summary && (
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{t(job.summary)}</p>
              )}

              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="relative max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand/70"
                  >
                    {t(h)}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
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
