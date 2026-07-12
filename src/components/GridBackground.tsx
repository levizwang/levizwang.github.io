/** Ambient backdrop: a faint blueprint grid fading below the fold, two slow
 *  brand-tinted auroras, and a touch of grain. Deliberately subtle — it should
 *  register only as a sense of depth, never as decoration. */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* engineering-paper grid, strongest near the top */}
      <div className="tech-grid absolute inset-0" />
      {/* top-left aurora */}
      <div
        className="aurora-brand absolute -top-[18rem] -left-[14rem] h-[42rem] w-[42rem] rounded-full animate-aurora"
      />
      {/* bottom-right aurora */}
      <div
        className="aurora-blue absolute -bottom-[20rem] -right-[16rem] h-[46rem] w-[46rem] rounded-full animate-aurora"
      />
      {/* very faint grain for an analog, non-flat surface */}
      <div
        className="grain-overlay absolute inset-0 opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay"
      />
    </div>
  );
}
