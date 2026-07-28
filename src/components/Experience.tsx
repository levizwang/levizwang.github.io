import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { PlateStrip } from './ui/Plate';
import { TagPill } from './ui/TagPill';
import { DimensionChain } from './ui/DimensionChain';
import { Ornament } from './ui/ornaments';
import { experience } from '../data/resume';
import { useT, ui } from '../i18n/lang';

const CHAIN_LABELS = ['HUMANLAYA', 'FINTOPIA', 'BYTEDANCE', 'PWC', 'PWC INT.', 'NUS'];

export function Experience() {
  const t = useT();
  return (
    <section id="experience" className="relative mx-auto mt-12 max-w-content px-6 md:mt-16">
      <Ornament kind="staircase" className="absolute -left-40 top-12 hidden w-32 text-foreground/30 min-[1450px]:block" />
      <Reveal>
        <SectionHeader eyebrow={ui.expEyebrow} title={ui.experience} sub={ui.experienceSub} />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8">
          <DimensionChain
            items={experience
              .map((job, i) => ({
                label: CHAIN_LABELS[i] ?? job.company.toUpperCase(),
                period: job.period,
              }))
              .reverse()}
          />
        </div>
      </Reveal>

      <div className="mt-10 space-y-5">
        {experience.map((job, idx) => (
          <Reveal key={`${job.company}-${job.period}`} delay={Math.min(idx, 3) * 60}>
            <article className="surface lift">
              <PlateStrip
                left={`File: EXP-${String(idx + 1).padStart(2, '0')}`}
                right={`${job.period} · ${t(job.location)}`}
              />
              <div className="p-7 md:p-9">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl tracking-tight">
                    <span className="font-semibold">{job.company}</span>
                    <span className="text-muted-foreground"> · {t(job.role)}</span>
                  </h3>
                  <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-brand sm:text-right">
                    Rev A1
                  </p>
                </div>

                {job.summary && (
                  <p className="mt-4 leading-relaxed text-muted-foreground [text-wrap:pretty]">{t(job.summary)}</p>
                )}

                <div className="mt-4 md:columns-2 md:gap-10">
                  {job.highlights.map((h, i) =>
                    typeof h === 'object' && 'items' in h ? (
                      <section key={i} className="mb-5 break-inside-avoid">
                        <h4 className="font-mono text-xs font-semibold tracking-[0.08em] text-brand">
                          <span className="mr-1.5 opacity-60">//</span>{t(h.title)}
                        </h4>
                        <ul className="mt-2.5 space-y-2.5">
                          {h.items.map((it, j) => (
                            <li
                              key={j}
                              className="relative pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80"
                            >
                              {t(it)}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : (
                      <div
                        key={i}
                        className="relative mb-2.5 max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80"
                      >
                        {t(h)}
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
