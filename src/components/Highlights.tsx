import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { Plate, PlateStrip } from './ui/Plate';
import { FigDistribution } from './ui/figures';
import { Ornament } from './ui/ornaments';
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

function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const t = useT();
  const n = useCountUp(stat.value, active);
  return (
    <div>
      <div className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="mt-1.5 font-mono text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl">
        {n}
        {stat.suffix ? <span className="text-brand">{stat.suffix}</span> : null}
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
    <section className="relative mx-auto mt-12 max-w-content px-6 md:mt-16">
      <Ornament kind="armillary" className="absolute -right-44 top-0 hidden w-40 text-foreground/30 min-[1450px]:block" />
      <Reveal>
        <p className="eyebrow">{t(ui.atScale)}</p>
      </Reveal>

      <Reveal delay={80}>
        <Plate className="mt-12">
          <PlateStrip left="Measured values" right="Units: count" />
          <div
            ref={ref}
            className="grid grid-cols-2 gap-x-6 gap-y-12 p-7 md:grid-cols-4 md:p-9"
          >
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} active={active} index={i} />
            ))}
          </div>
        </Plate>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* FIG. 02 — difficulty distribution of the 134-item benchmark */}
        <Reveal delay={120}>
          <Plate interactive className="h-full">
            <PlateStrip left="Fig. 02 — Difficulty distribution" right="134 items" />
            <FigDistribution className="w-full p-4" />
          </Plate>
        </Reveal>

        {/* Marquee of the real tech / benchmark surface — two counter-flowing rows */}
        <Reveal delay={160}>
          <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
              {[...marquee, ...marquee].map((term, i) => (
                <span key={i} className="chip whitespace-nowrap">
                  {term}
                </span>
              ))}
            </div>
            <div
              className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]"
              style={{ animationDirection: 'reverse', animationDuration: '44s' }}
            >
              {[...marquee].reverse().concat(marquee.slice().reverse()).map((term, i) => (
                <span key={i} className="chip whitespace-nowrap">
                  {term}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
