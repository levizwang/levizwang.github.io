import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SocialLinks } from './ui/SocialLinks';
import { siteConfig } from '../config/site';
import { useT, ui } from '../i18n/lang';

export function Hero() {
  const t = useT();
  const headline = t(siteConfig.headline);

  return (
    <section className="relative z-10 mx-auto max-w-content px-6 pt-10 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        {/* Left: copy */}
        <div className="reveal is-visible">
          {/* Live status pill */}
          <a
            href="https://www.linkedin.com/in/levizwang"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 py-1.5 pl-2 pr-3.5 text-[13px] font-medium text-muted-foreground shadow-soft backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {t(siteConfig.status)}
            <span className="translate-x-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5">↗</span>
          </a>

          {/* Display headline */}
          <h1 className="mt-7 text-[2.15rem] font-semibold leading-[1.06] tracking-tightest text-balance sm:text-5xl md:text-[4rem]">
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block text-gradient">
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
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t(ui.viewWork)}
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t(ui.readWriting)}
            </Link>
          </div>

          {/* Socials */}
          <SocialLinks className="mt-9" />
        </div>

        {/* Right: portrait */}
        <div className="reveal is-visible order-first md:order-none" style={{ transitionDelay: '120ms' }}>
          <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-[320px]">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full opacity-70 blur-2xl"
              style={{ background: 'radial-gradient(closest-side, hsl(var(--brand) / 0.22), transparent 72%)' }}
            />
            <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-surface shadow-float">
              <ImageWithFallback
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-mono text-xs tracking-wide text-muted-foreground">
              {t(siteConfig.location)} · {siteConfig.resumeEmail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
