import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { useLang, useT } from '../i18n/lang';

export function Header() {
  const { lang, toggle: toggleLang } = useLang();
  const t = useT();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (err) {
      void err;
    }
  }, [isDark]);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  const ctrlBtn =
    'inline-flex h-9 items-center justify-center rounded-full border border-hairline bg-surface/60 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-muted-foreground/40';

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <div
        className={`flex w-full max-w-content items-center justify-between rounded-full px-3 py-2 pl-5 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'glass border border-hairline shadow-soft'
            : 'border border-transparent'
        }`}
      >
        <Link to="/" className="text-[15px] font-semibold tracking-tight">
          Levi Wang
        </Link>

        <div className="flex items-center gap-1.5">
          {/* desktop nav */}
          <nav className="mr-1 hidden items-center sm:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(item.name)}
                {isActive(item.path) && (
                  <span className="mx-auto mt-0.5 block h-[2px] w-4 rounded-full bg-brand" />
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}
            onClick={toggleLang}
            className={`${ctrlBtn} gap-1 px-2.5 text-xs font-medium`}
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === 'en' ? '中' : 'EN'}
          </button>

          <button
            type="button"
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
            onClick={() => setIsDark((p) => !p)}
            className={`${ctrlBtn} w-9`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsMenuOpen((p) => !p)}
            className={`${ctrlBtn} w-9 sm:hidden`}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      {isMenuOpen && (
        <div className="glass absolute inset-x-4 top-[4.5rem] rounded-3xl border border-hairline p-2 shadow-float sm:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block rounded-2xl px-4 py-3 text-[15px] ${
                isActive(item.path) ? 'bg-secondary text-foreground' : 'text-muted-foreground'
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
