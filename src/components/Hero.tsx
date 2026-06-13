import { ImageWithFallback } from './figma/ImageWithFallback';
import { siteConfig } from '../config/site';
import { useT } from '../i18n/lang';

export function Hero() {
  const t = useT();
  return (
    <section className="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 xl:px-0">
      <div className="flex flex-col items-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <h1 className="mb-5 leading-tight dark:text-white">
            {siteConfig.title}
          </h1>
          <p className="mb-6 text-neutral-800 dark:text-neutral-200">
            {t(siteConfig.description)}
          </p>
          <p className="mb-2 text-neutral-600 dark:text-neutral-400">
            {t(siteConfig.bio)}
          </p>
          <p className="mt-3 font-mono text-xs tracking-wide text-neutral-500 dark:text-neutral-500">
            {t(siteConfig.location)} · {siteConfig.resumeEmail}
          </p>

          <div className="flex items-center gap-5 mt-6">
            {siteConfig.social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-60"
                aria-label={item.name}
              >
                <item.icon size={item.size} className="text-neutral-800 dark:text-neutral-200" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative justify-end w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
          <div className="relative z-30 max-w-80 group cursor-pointer">
            <span className="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-transparent border border-dashed rounded-3xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
            <span className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-3xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <div className="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              <ImageWithFallback
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="w-full md:max-w-md mx-auto rounded-3xl h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
