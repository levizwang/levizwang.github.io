import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { education, skills, interests } from '../data/resume';
import { useT, ui } from '../i18n/lang';

export function Resume() {
  const t = useT();
  return (
    <section id="education" className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <SectionHeader eyebrow={ui.eduEyebrow} title={ui.education} />
      </Reveal>

      <div className="mt-12 space-y-5">
        {education.map((edu, ei) => (
          <Reveal key={ei}>
            <article className="surface p-7 md:p-9">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{t(edu.school)}</h3>
                <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                  {edu.period} · {t(edu.location)}
                </p>
              </div>
              <p className="mt-1.5 text-muted-foreground">{t(edu.degree)}</p>
              <ul className="mt-4 space-y-2.5">
                {edu.details.map((d, i) => (
                  <li
                    key={i}
                    className="relative max-w-3xl pl-5 text-[0.95rem] leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand/70"
                  >
                    {t(d)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="mt-16 text-3xl font-semibold tracking-tight sm:text-4xl">{t(ui.skillsInterests)}</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal key={gi} delay={(gi % 2) * 60}>
            <div className="surface h-full p-7">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand">{t(group.label)}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item, ii) => (
                  <li key={ii} className="text-[0.95rem] text-foreground/85">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="surface mt-5 p-7">
          <h3 className="font-mono text-xs uppercase tracking-widest text-brand">{t(ui.beyondWork)}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.map((interest, i) => (
              <span key={i} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-muted-foreground">
                {t(interest)}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
