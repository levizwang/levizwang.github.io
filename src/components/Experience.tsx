import { SectionDivider } from './SectionDivider';
import { experience } from '../data/resume';

export function Experience() {
  return (
    <>
      <SectionDivider label="Experience" />

      <section id="experience" className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="mb-1 text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Experience
        </h2>
        <p className="mb-7 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          Agents · evaluation infra · synthetic data.
        </p>

        <div className="space-y-5">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="relative px-6 py-5 border border-dashed md:p-7 rounded-2xl border-neutral-300 dark:border-neutral-700"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
                  <span className="font-semibold">{job.company}</span>
                  <span className="text-neutral-400 dark:text-neutral-500"> · </span>
                  <span className="text-neutral-700 dark:text-neutral-300">{job.role}</span>
                </h3>
                <p className="flex-shrink-0 font-mono text-xs text-neutral-500 dark:text-neutral-400 sm:text-right">
                  {job.period}
                  <span className="hidden sm:inline"> · </span>
                  <span className="block sm:inline">{job.location}</span>
                </p>
              </div>

              {job.summary && (
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">{job.summary}</p>
              )}

              <ul className="mt-3 space-y-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-neutral-400 dark:before:bg-neutral-500"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 font-mono text-[11px] rounded-full border border-dashed border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
