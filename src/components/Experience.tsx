import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { PlateStrip } from './ui/Plate';
import { TagPill } from './ui/TagPill';
import { experience } from '../data/resume';
import { useT, ui } from '../i18n/lang';

export function Experience() {
  const t = useT();
  return (
    <section id="experience" className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <SectionHeader eyebrow={ui.expEyebrow} title={ui.experience} sub={ui.experienceSub} />
      </Reveal>

      <div className="mt-12 space-y-5">
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

                <ul className="mt-4 space-y-2.5 md:columns-2 md:gap-10 md:space-y-0">
                  {job.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="relative mb-2.5 max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/85 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-brand/80 md:break-inside-avoid"
                    >
                      {t(h)}
                    </li>
                  ))}
                </ul>

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
