import { Link } from 'react-router-dom';
import { experience, education, skills, interests } from '../../data/resume';
import { siteConfig } from '../../config/site';
import { useT } from '../../i18n/lang';

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-5 border-b border-neutral-700 pb-0.5 font-serif text-[11pt] font-bold uppercase tracking-[0.08em] first:mt-0">
      {children}
    </h2>
  );
}

/** Classic one-column résumé rendered from the same data as the site — print
 *  it (or save as PDF) via the toolbar button; always in sync with the web CV. */
export function Cv() {
  const t = useT();
  const github = siteConfig.social.find((s) => s.name === 'GitHub')?.url.replace('https://', '');
  const linkedin = siteConfig.social.find((s) => s.name === 'LinkedIn')?.url.replace('https://www.', '');
  const contact = [
    t(siteConfig.location),
    siteConfig.resumeEmail,
    siteConfig.phone,
    github,
    linkedin,
    'levi.run',
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-[220mm] px-4 py-8 md:py-12">
      {/* screen-only toolbar */}
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden>←</span> {t({ en: 'Back', zh: '返回' })}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
        >
          {t({ en: 'Print / Save PDF', zh: '打印 / 存为 PDF' })} <span aria-hidden>↓</span>
        </button>
      </div>

      {/* the sheet */}
      <article
        id="cv-sheet"
        className="border border-line bg-white px-[14mm] py-[12mm] font-serif text-[9.6pt] leading-[1.42] text-neutral-900 shadow-soft"
      >
        {/* header */}
        <header className="text-center">
          <h1 className="font-serif text-[22pt] font-bold tracking-wide">Levi Wang</h1>
          <p className="mt-1.5 text-[8.6pt] text-neutral-700">{contact.join('  |  ')}</p>
        </header>

        {/* education */}
        <SectionTitle>{t({ en: 'Education', zh: '教育经历' })}</SectionTitle>
        {education.map((edu, i) => (
          <div key={i} className="mt-2">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-bold">{t(edu.school)}</span>
              <span className="shrink-0">{t(edu.location)}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span>{t(edu.degree)}</span>
              <span className="shrink-0 italic">{edu.period}</span>
            </div>
            <ul className="mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500">
              {edu.details.map((d, j) => (
                <li key={j}>{t(d)}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* experience */}
        <SectionTitle>{t({ en: 'Experience', zh: '工作经历' })}</SectionTitle>
        {experience.map((job, i) => (
          <div key={i} className="mt-2.5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-bold">{job.company}</span>
              <span className="shrink-0">{t(job.location)}</span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-semibold">{t(job.role)}</span>
              <span className="shrink-0 italic">{job.period}</span>
            </div>
            {job.summary && <p className="mt-0.5">{t(job.summary)}</p>}
            <ul className="mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500">
              {job.highlights.map((h, j) =>
                typeof h === 'object' && 'items' in h ? (
                  <li key={j} className="list-none -ml-5">
                    <p className="mt-1 font-semibold">{t(h.title)}</p>
                    <ul className="mt-0.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500">
                      {h.items.map((it, k) => (
                        <li key={k}>{t(it)}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={j}>{t(h)}</li>
                ),
              )}
            </ul>
          </div>
        ))}

        {/* skills & interests */}
        <SectionTitle>{t({ en: 'Skills & Interests', zh: '技能与兴趣' })}</SectionTitle>
        <ul className="mt-1.5 list-disc space-y-0.5 pl-5 marker:text-neutral-500">
          {skills.map((group, i) => (
            <li key={i}>
              <span className="font-semibold">{t(group.label)}:</span>{' '}
              {group.items.map((it) => t(it)).join(', ')}.
            </li>
          ))}
          <li>
            <span className="font-semibold">{t({ en: 'Interests', zh: '兴趣' })}:</span>{' '}
            {interests.map((it) => t(it)).join(', ')}.
          </li>
        </ul>
      </article>
    </div>
  );
}
