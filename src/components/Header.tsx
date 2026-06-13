import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { siteConfig } from '../config/site';
import { useLang, useT } from '../i18n/lang';

export function Header() {
  const { lang, toggle: toggleLang } = useLang();
  const t = useT();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  const handleTypewriterInit = (typewriter: TypewriterClass) => {
    typewriter
      .typeString(siteConfig.title)
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .start();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <header
      id="header"
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'h-14' : 'h-20'
      }`}
    >
      <div
        className={`flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 transition-all duration-300 select-none lg:border-r lg:border-l lg:rounded-b-xl ${
          isScrolled
            ? 'border-neutral-300/50 bg-white/80 dark:border-neutral-600/40 dark:bg-neutral-900/60 backdrop-blur-2xl'
            : 'border-transparent'
        }`}
      >
        <Link
          to="/"
          className="relative z-30 flex items-center space-x-2 text-black dark:text-white"
        >
          <span className="text-nowrap">
            <Typewriter
              component="span"
              onInit={handleTypewriterInit}
              options={{
                delay: 70,
                deleteSpeed: 40,
                cursor: '',
                loop: true
              }}
            />
          </span>
        </Link>

        {isMenuOpen && (
          <div
            id="mobileMenuBackground"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90 sm:hidden"
          />
        )}

        <nav className="relative z-30 flex items-center justify-end w-full text-sm text-neutral-500 dark:text-neutral-400">
          <div
            id="menu"
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } ${
              isScrolled ? 'top-[56px]' : 'top-[75px]'
            } fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 z-40 flex-col items-end justify-start w-full h-auto text-sm sm:h-auto sm:relative sm:flex-row sm:flex sm:w-auto sm:pr-0 sm:pt-0`}
          >
            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
              <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
            </div>

            {siteConfig.nav.map((item) => (
              item.path.startsWith('http') ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-[#CCFF00]"
                >
                  {t(item.name)}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex items-center justify-center w-full px-3 py-2 tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-[#CCFF00]"
                >
                  {t(item.name)}
                </Link>
              )
            ))}
          </div>

          <button
            type="button"
            aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}
            title={lang === 'en' ? '中文' : 'English'}
            onClick={toggleLang}
            className={`relative z-30 ml-2 inline-flex h-9 items-center justify-center gap-1 rounded-md px-2 text-xs font-medium transition-colors ${
              isScrolled
                ? 'border border-neutral-200/60 bg-white/60 backdrop-blur-2xl hover:bg-neutral-100/80 dark:border-neutral-700/50 dark:bg-neutral-900/40 dark:hover:bg-neutral-800/60'
                : 'hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60'
            }`}
          >
            <Languages className="h-4 w-4" />
            <span>{lang === 'en' ? '中' : 'EN'}</span>
          </button>

          <button
            type="button"
            aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
            onClick={() => setIsDark((prev) => !prev)}
            className={`relative z-30 ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
              isScrolled
                ? 'border border-neutral-200/60 bg-white/60 backdrop-blur-2xl hover:bg-neutral-100/80 dark:border-neutral-700/50 dark:bg-neutral-900/40 dark:hover:bg-neutral-800/60'
                : 'hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60'
            }`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
          </div>
        </nav>
      </div>
    </header>
  );
}
