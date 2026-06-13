import { siteConfig } from '../config/site';
import { useT, ui } from '../i18n/lang';

export function Footer() {
  const t = useT();
  const currentYear = new Date().getFullYear();
  const startDate = new Date(siteConfig.startDate);
  const today = new Date();
  const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <footer className="text-gray-700 bg-white border-t sm:mt-20 dark:bg-background border-neutral-200 dark:border-neutral-800">
      <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row justify-center">
        <a
          href="/"
          className="relative z-30 flex items-center space-x-2 text-black dark:text-white"
        >
          <span className="text-nowrap">{siteConfig.title}</span>
        </a>
        
        <p className="mt-4 text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          {t(ui.runningFor)} {daysSinceStart} {t(ui.days)}
        </p>

        <p className="mt-4 text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          © {currentYear} {siteConfig.name}. {t(ui.rights)}
        </p>

        <p className="mt-4 text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          {t(ui.inspiredBy)} <a href="https://diygod.me">DIYgod</a>
        </p>
      </div>
    </footer>
  );
}
