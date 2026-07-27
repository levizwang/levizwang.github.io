import { Link } from 'react-router-dom';
import { SocialLinks } from './ui/SocialLinks';
import { Rosette } from './ui/Rosette';
import { siteConfig } from '../config/site';
import { useT, ui } from '../i18n/lang';

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  const start = new Date(siteConfig.startDate);
  const days = Math.floor((Date.now() - start.getTime()) / 86_400_000);

  return (
    <footer className="mx-auto mt-32 max-w-content px-6 pb-16 md:mt-40">
      <div className="hr-line" />
      <div className="flex flex-col items-start gap-8 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="text-lg font-semibold tracking-tight">
            Levi Wang
          </Link>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{t(siteConfig.bio)}</p>
        </div>

        <SocialLinks />
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
          <span>© {year} Levi Wang</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>{t(ui.runningFor)} {days} {t(ui.days)}</span>
        </div>
        {/* maker's seal, stamped at the bottom of the sheet */}
        <Rosette spin className="h-10 w-10 shrink-0 text-brand/60" />
      </div>
    </footer>
  );
}
