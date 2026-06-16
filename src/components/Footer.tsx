import { Link } from 'react-router-dom';
import { SocialLinks } from './ui/SocialLinks';
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
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t(siteConfig.bio)}</p>
        </div>

        <SocialLinks />
      </div>

      <div className="mt-10 flex flex-col gap-1 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
        <span>© {year} Levi Wang</span>
        <span className="hidden sm:inline opacity-40">·</span>
        <span>{t(ui.runningFor)} {days} {t(ui.days)}</span>
        <span className="hidden sm:inline opacity-40">·</span>
        <span>{t(ui.inspiredBy)} <a className="hover:text-foreground" href="https://diygod.me" target="_blank" rel="noopener noreferrer">DIYgod</a></span>
      </div>
    </footer>
  );
}
