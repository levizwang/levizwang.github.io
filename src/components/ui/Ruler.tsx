const LABELS = ['0', '20', '40', '60', '80', '100', '120', '140', 'mm'];

/** Drafting ruler: %-based tick scale with mono labels, matching the .ruler CSS. */
export function Ruler({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`ruler ${className}`}>
      {LABELS.map((l, i) => (
        <span key={l} style={{ left: `${(i / (LABELS.length - 1)) * 100}%` }}>
          {l}
        </span>
      ))}
    </div>
  );
}
