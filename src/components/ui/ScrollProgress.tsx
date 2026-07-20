import { useEffect, useState } from 'react';

const TICKS_MAJOR =
  'repeating-linear-gradient(to right, hsl(var(--foreground) / 0.4) 0 1px, transparent 1px 80px)';
const TICKS_MINOR =
  'repeating-linear-gradient(to right, hsl(var(--foreground) / 0.2) 0 1px, transparent 1px 16px)';
const GRIP =
  'linear-gradient(to right, transparent 4px, hsl(var(--muted-foreground) / 0.9) 4px 5px, transparent 5px 8px, hsl(var(--muted-foreground) / 0.9) 8px 9px, transparent 9px)';

/**
 * Reading-progress caliper — a ruler along the top edge of the viewport with
 * a sliding jaw that carries a measurement flag (POS 042%).
 */
export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const pct = Math.round(p * 100);
  const left = `clamp(7px, ${p * 100}%, calc(100% - 7px))`;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
      {/* ruler track */}
      <div
        className="h-2 w-full border-b border-line bg-background/85 backdrop-blur-sm"
        style={{
          backgroundImage: `${TICKS_MAJOR}, ${TICKS_MINOR}`,
          backgroundSize: '100% 5px, 100% 3px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left, bottom left',
        }}
      />
      {/* caliper jaw */}
      <div
        className="absolute top-0 h-2 w-[14px] border border-line bg-surface"
        style={{ left, transform: 'translateX(-50%)', backgroundImage: GRIP }}
      />
      {/* measurement flag */}
      <div
        className="absolute top-2 hidden -translate-x-1/2 flex-col items-center sm:flex"
        style={{ left }}
      >
        <span className="h-1.5 w-px bg-line" />
        <span className="bg-background/85 px-0.5 font-mono text-[8px] tracking-[0.08em] text-muted-foreground backdrop-blur-sm">
          {String(pct).padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
}
