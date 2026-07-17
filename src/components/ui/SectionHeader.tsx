import { useT, useLang, type L } from '../../i18n/lang';

/**
 * Shared eyebrow + heading block used by every section.
 * `size="page"` renders the larger sm:text-5xl scale used on the dedicated
 * list pages; the default "section" keeps the sm:text-4xl home-section scale.
 * Not wrapped in <Reveal> so callers can place it inside their own layout.
 */
export function SectionHeader({
  eyebrow,
  title,
  sub,
  size = 'section',
  narrow = false,
}: {
  eyebrow: L;
  title: L;
  sub?: L;
  size?: 'section' | 'page';
  narrow?: boolean;
}) {
  const t = useT();
  const { lang } = useLang();
  return (
    <>
      <p className="eyebrow">{t(eyebrow)}</p>
      <h2
        className={`mt-3 font-semibold ${
          lang === 'en'
            ? `font-mono uppercase tracking-wide text-xl ${size === 'page' ? 'sm:text-3xl' : 'sm:text-2xl'}`
            : `tracking-tight text-3xl ${size === 'page' ? 'sm:text-5xl' : 'sm:text-4xl'}`
        }${narrow ? ' max-w-2xl' : ''}`}
      >
        {t(title)}
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{t(sub)}</p>}
    </>
  );
}
