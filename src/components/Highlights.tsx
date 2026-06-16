import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { useT, ui } from '../i18n/lang';
import { stats, marquee, type Stat } from '../data/highlights';

function useCountUp(target: number, run: boolean, ms = 1100) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return n;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const t = useT();
  const n = useCountUp(stat.value, active);
  return (
    <div>
      <div className="text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl">
        {n}
        {stat.suffix ?? ''}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{t(stat.label)}</div>
    </div>
  );
}

export function Highlights() {
  const t = useT();
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setActive(true), io.disconnect())),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="mx-auto mt-28 max-w-content px-6 md:mt-36">
      <Reveal>
        <p className="eyebrow">{t(ui.atScale)}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(ui.atScaleTitle)}
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div
          ref={ref}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-hairline pt-12 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} active={active} />
          ))}
        </div>
      </Reveal>

      {/* Marquee of the real tech / benchmark surface */}
      <Reveal delay={120}>
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
            {[...marquee, ...marquee].map((term, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-hairline bg-surface/50 px-4 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
