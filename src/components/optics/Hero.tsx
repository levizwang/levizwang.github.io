import { useT, ui } from '../../i18n/lang';

export function Hero() {
  const t = useT();
  return (
    <section className="mx-auto max-w-content px-6 pb-10 pt-8 md:pt-12">
      <p className="eyebrow">Optics</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t(ui.opticsTitle)}</h1>
      <p className="mt-3 max-w-prose text-muted-foreground">{t(ui.opticsSub)}</p>
    </section>
  );
}
