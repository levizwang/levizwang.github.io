import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SocialLinks } from './ui/SocialLinks';
import { Plate, PlateStrip } from './ui/Plate';
import { FieldFigure } from './ui/FieldFigure';
import { Ruler } from './ui/Ruler';
import { siteConfig } from '../config/site';
import { useT, ui } from '../i18n/lang';

export function Hero() {
  const t = useT();
  const headline = t(siteConfig.headline);
  // Typewriter mono for Latin headlines, clean sans when the headline is CJK.
  const headlineIsCjk = /\p{Script=Han}/u.test(headline);

  return (
    <section className="relative z-10 mx-auto max-w-content px-6 pt-10 md:pt-16">
      {/* sheet header row */}
      <div className="reveal is-visible flex items-end justify-between gap-4">
        <p className="eyebrow">Field Study 01 — {t({ en: 'Evaluation Science', zh: '评测科学' })}</p>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
          File: LW01 · Rev A1
        </p>
      </div>
      <Ruler className="mt-3" />

      <div className="mt-10 grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        {/* Left: copy */}
        <div className="reveal is-visible">
          {/* Live status chip */}
          <a
            href="https://www.linkedin.com/in/levizwang"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-line bg-surface/70 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 bg-brand" />
            </span>
            {t(siteConfig.status)}
            <span className="translate-x-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5">↗</span>
          </a>

          {/* Display headline — typewriter mono for English, clean sans for CJK */}
          <h1
            className={`mt-7 font-semibold text-balance ${
              headlineIsCjk
                ? 'leading-[1.15] tracking-tightest text-[2.15rem] sm:text-5xl md:text-[3.8rem]'
                : 'font-mono uppercase leading-[1.18] tracking-tight text-[1.65rem] sm:text-4xl md:text-[2.7rem]'
            }`}
          >
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Supporting line */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t(siteConfig.description)}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              {t(ui.viewWork)}
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-foreground/60"
            >
              {t(ui.readWriting)}
            </Link>
          </div>

          {/* Socials */}
          <SocialLinks className="mt-9" />
        </div>

        {/* Right: subject plate */}
        <div className="reveal reveal-delay-120 is-visible order-first md:order-none">
          <Plate className="mx-auto w-56 sm:w-72 md:w-full md:max-w-[320px]">
            <PlateStrip left="Subject: Levi Wang" right="No. 001" />
            <div className="relative">
              <ImageWithFallback
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="aspect-square h-full w-full object-cover grayscale-[0.25] brightness-[1.06] contrast-[1.02]"
              />
              <div aria-hidden className="absolute inset-0 bg-brand/10 mix-blend-multiply dark:mix-blend-screen" />
              {/* crosshair overlay */}
              <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-foreground/50">
                <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" />
              </svg>
            </div>
            <div className="strip border-b-0 border-t">
              <span className="truncate">{t(siteConfig.location)}</span>
              <span className="shrink-0">Scale 1:1</span>
            </div>
          </Plate>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {siteConfig.resumeEmail}
          </p>
        </div>
      </div>

      {/* FIG. 01 — generated evaluation-science plate */}
      <div className="reveal is-visible mt-14">
        <Plate>
          <PlateStrip left="Fig. 01 — Evaluation Science" right="Units: score" />
          <FieldFigure />
        </Plate>
      </div>
    </section>
  );
}
