/** Ambient backdrop: a dashed reference grid fading below the fold, a faint set
 *  of concentric plotting circles and a touch of grain — the drafting sheet the
 *  whole site is drawn on. Deliberately subtle. */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* dashed reference grid, strongest near the top */}
      <div className="ref-grid tech-grid absolute inset-0" />
      {/* faint plotting circles, bottom right */}
      <svg
        className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] text-foreground"
        viewBox="0 0 600 600"
        fill="none"
      >
        {[280, 220, 160, 100].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeDasharray="4 6"
          />
        ))}
        <path d="M20 300H580M300 20V580" stroke="currentColor" strokeOpacity="0.06" />
      </svg>
      {/* very faint grain for an analog, non-flat surface */}
      <div
        className="grain-overlay absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"
      />
    </div>
  );
}
