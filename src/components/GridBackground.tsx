/** Ambient backdrop: two slow, soft brand-tinted auroras over the page,
 *  plus a faint grain. Deliberately subtle — it should register only
 *  as a sense of depth, never as decoration. */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* top-left aurora */}
      <div
        className="absolute -top-[18rem] -left-[14rem] h-[42rem] w-[42rem] rounded-full animate-aurora"
        style={{
          background:
            'radial-gradient(closest-side, hsl(var(--brand) / 0.16), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* bottom-right aurora */}
      <div
        className="absolute -bottom-[20rem] -right-[16rem] h-[46rem] w-[46rem] rounded-full animate-aurora"
        style={{
          animationDelay: '-11s',
          background:
            'radial-gradient(closest-side, hsl(210 90% 56% / 0.10), transparent 70%)',
          filter: 'blur(48px)',
        }}
      />
      {/* very faint grain for an analog, non-flat surface */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
