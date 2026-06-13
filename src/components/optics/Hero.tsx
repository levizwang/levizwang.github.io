import { useT, ui } from '../../i18n/lang';

export function Hero() {
  const t = useT();
  return (
    <section className="pt-16 pb-16 px-6">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-gray-900 dark:text-gray-100">
          {t(ui.opticsTitle)}
        </h1>
        <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-wide">
          {t(ui.opticsSub)}
        </p>
      </div>
    </section>
  );
}
