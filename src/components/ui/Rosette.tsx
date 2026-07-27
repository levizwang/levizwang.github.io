export type RosetteVariant = 'rosette' | 'quad' | 'ring' | 'aperture';

const PETAL_OUTER = 'M50 12 C56 24 56 34 50 44 C44 34 44 24 50 12 Z';
const PETAL_INNER = 'M50 28 C54 35 54 41 50 46 C46 41 46 35 50 28 Z';
const toRad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => [50 + r * Math.cos(toRad(deg)), 50 + r * Math.sin(toRad(deg))] as const;

/** Classic baoxianghua — the full eight-fold rosette (identity / home). */
function FullRosette() {
  return (
    <>
      <circle cx="50" cy="50" r="47.5" strokeOpacity="0.22" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="40" strokeOpacity="0.45" strokeWidth="0.7" />
      {Array.from({ length: 8 }, (_, k) => (
        <path key={`o${k}`} d={PETAL_OUTER} transform={`rotate(${k * 45} 50 50)`} strokeOpacity="0.85" />
      ))}
      {Array.from({ length: 8 }, (_, k) => {
        const [cx, cy] = pt(33, k * 45 + 22.5);
        return <circle key={`d${k}`} cx={cx} cy={cy} r="1.3" fill="currentColor" stroke="none" fillOpacity="0.55" />;
      })}
      {Array.from({ length: 8 }, (_, k) => (
        <path key={`i${k}`} d={PETAL_INNER} transform={`rotate(${k * 45 + 22.5} 50 50)`} strokeOpacity="0.7" />
      ))}
      <circle cx="50" cy="50" r="8" strokeOpacity="0.85" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" fillOpacity="0.8" />
    </>
  );
}

/** Four-fold bloom inside a dashed construction square (projects / works). */
function QuadMark() {
  return (
    <>
      <rect x="10" y="10" width="80" height="80" strokeOpacity="0.25" strokeWidth="0.7" strokeDasharray="3 3" />
      {Array.from({ length: 4 }, (_, k) => (
        <path key={`q${k}`} d={PETAL_OUTER} transform={`rotate(${k * 90} 50 50)`} strokeOpacity="0.85" />
      ))}
      {Array.from({ length: 4 }, (_, k) => {
        const [cx, cy] = pt(33, k * 90 + 45);
        return (
          <path
            key={`s${k}`}
            d="M0 -4.5 L4.5 0 0 4.5 -4.5 0 Z"
            transform={`translate(${cx} ${cy})`}
            strokeOpacity="0.6"
          />
        );
      })}
      <circle cx="50" cy="50" r="7" strokeOpacity="0.85" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" stroke="none" fillOpacity="0.8" />
    </>
  );
}

/** Twelve-petal wreath around an inner ring (writing / notes). */
function RingMark() {
  return (
    <>
      <circle cx="50" cy="50" r="47.5" strokeOpacity="0.22" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="41" strokeOpacity="0.5" strokeWidth="0.7" />
      {Array.from({ length: 12 }, (_, k) => (
        <path key={`r${k}`} d={PETAL_OUTER} transform={`rotate(${k * 30} 50 50)`} strokeOpacity="0.8" />
      ))}
      <circle cx="50" cy="50" r="22" strokeOpacity="0.6" />
      <circle cx="50" cy="50" r="8" strokeOpacity="0.8" />
      <circle cx="50" cy="50" r="2.5" fill="currentColor" stroke="none" fillOpacity="0.75" />
    </>
  );
}

/** Six-blade camera aperture (optics / photography). */
function ApertureMark() {
  const v = Array.from({ length: 6 }, (_, k) => pt(27, -90 + k * 60));
  return (
    <>
      <circle cx="50" cy="50" r="46" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="47.5" strokeOpacity="0.2" strokeWidth="0.6" strokeDasharray="2 3" />
      {v.map((p, k) => {
        const q = v[(k + 2) % 6];
        return <line key={`a${k}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} strokeOpacity="0.85" />;
      })}
      <circle cx="50" cy="50" r="6" strokeOpacity="0.7" />
    </>
  );
}

/**
 * Floral marks drawn as compass constructions — concentric rings, folded
 * petals, and construction geometry left visible, so the ornaments read as
 * drafting exercises rather than illustrations. Strokes inherit currentColor.
 */
export function Rosette({
  variant = 'rosette',
  className = '',
  spin = false,
}: {
  variant?: RosetteVariant;
  className?: string;
  spin?: boolean;
}) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={`${spin ? 'rosette-spin ' : ''}${className}`}>
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        {variant === 'quad' ? (
          <QuadMark />
        ) : variant === 'ring' ? (
          <RingMark />
        ) : variant === 'aperture' ? (
          <ApertureMark />
        ) : (
          <FullRosette />
        )}
      </g>
    </svg>
  );
}
