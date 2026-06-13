import { SectionDivider } from './SectionDivider';
import { education, skills, interests } from '../data/resume';
import { useT, ui } from '../i18n/lang';

export function Resume() {
  const t = useT();
  return (
    <>
      <SectionDivider label="Education & Skills" />

      <section id="education" className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="mb-5 text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          {t(ui.education)}
        </h2>

        <div className="space-y-5">
          {education.map((edu, ei) => (
            <article
              key={ei}
              className="relative px-6 py-5 border border-dashed md:p-7 rounded-2xl border-neutral-300 dark:border-neutral-700"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
                  <span className="font-semibold">{t(edu.school)}</span>
                </h3>
                <p className="flex-shrink-0 font-mono text-xs text-neutral-500 dark:text-neutral-400 sm:text-right">
                  {edu.period}
                  <span className="hidden sm:inline"> · </span>
                  <span className="block sm:inline">{t(edu.location)}</span>
                </p>
              </div>
              <p className="mt-1 text-neutral-700 dark:text-neutral-300">{t(edu.degree)}</p>
              <ul className="mt-3 space-y-2">
                {edu.details.map((d, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-neutral-400 dark:before:bg-neutral-500"
                  >
                    {t(d)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h2 className="mt-12 mb-5 text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          {t(ui.skillsInterests)}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <div
              key={gi}
              className="px-6 py-5 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700"
            >
              <h3 className="mb-3 font-mono text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                {t(group.label)}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item, ii) => (
                  <li key={ii} className="text-sm text-neutral-700 dark:text-neutral-300">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="px-6 py-5 mt-4 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700">
          <h3 className="mb-3 font-mono text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            {t(ui.beyondWork)}
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs rounded-full border border-dashed border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
              >
                {t(interest)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
