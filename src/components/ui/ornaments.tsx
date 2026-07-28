import type { CSSProperties } from 'react';

export type OrnamentKind = 'tesseract' | 'armillary' | 'staircase' | 'gears' | 'compass' | 'moon';

const CAPTIONS: Record<OrnamentKind, string> = {
  tesseract: 'Fig. G1 — Tesseract',
  armillary: 'Fig. M1 — Armillary sphere',
  staircase: 'Fig. S1 — Spiral stair',
  gears: 'Fig. W1 — Gear train',
  compass: 'Fig. D1 — Dividers',
  moon: 'Fig. L1 — Luna',
};

const toRad = (deg: number) => (deg * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) =>
  [cx + r * Math.cos(toRad(deg)), cy + r * Math.sin(toRad(deg))] as const;

/* ------------------------------------------------------------------ */
/* Armillary sphere — graduated meridian/equator bands, tilted         */
/* ecliptic, caged globe on a polar axis, stand. Rings counter-rotate. */
/* ------------------------------------------------------------------ */
function ArmillarySphere() {
  const cx = 100;
  const cy = 92;
  return (
    <>
      {/* stand */}
      <ellipse cx="100" cy="178" rx="42" ry="7" strokeOpacity="0.7" />
      <path d="M88 170v8M112 170v8" strokeOpacity="0.5" />
      <path d="M96 176l-14-12M104 176l14-12" strokeOpacity="0.45" />

      {/* meridian band with degree ticks */}
      <circle cx={cx} cy={cy} r="82" strokeOpacity="0.9" strokeWidth="1.3" />
      <circle cx={cx} cy={cy} r="75" strokeOpacity="0.55" strokeWidth="0.7" />
      {Array.from({ length: 72 }, (_, k) => {
        const major = k % 6 === 0;
        const [x1, y1] = pt(cx, cy, 75, k * 5);
        const [x2, y2] = pt(cx, cy, major ? 82 : 79, k * 5);
        return <line key={`m${k}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={major ? 0.75 : 0.4} strokeWidth={major ? 0.8 : 0.5} />;
      })}

      {/* equator band */}
      <ellipse cx={cx} cy={cy} rx="82" ry="24" strokeOpacity="0.75" />
      <ellipse cx={cx} cy={cy} rx="82" ry="17.5" strokeOpacity="0.4" strokeWidth="0.7" />
      {Array.from({ length: 24 }, (_, k) => {
        const [x1, y1] = [cx + 82 * Math.cos(toRad(k * 15)), cy + 24 * Math.sin(toRad(k * 15))];
        const [x2, y2] = [cx + 82 * Math.cos(toRad(k * 15)), cy + 17.5 * Math.sin(toRad(k * 15))];
        return <line key={`e${k}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.4" strokeWidth="0.5" />;
      })}

      {/* colures */}
      <ellipse cx={cx} cy={cy} rx="20" ry="78" strokeOpacity="0.45" />
      <ellipse cx={cx} cy={cy} rx="78" ry="14" strokeOpacity="0.3" strokeDasharray="3 4" />

      {/* ecliptic — tilted, ticked, counter-rotating */}
      <g className="spin-ccw" style={{ '--dur': '90s' } as CSSProperties}>
        <g transform={`rotate(-23.5 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx="70" ry="19" strokeOpacity="0.65" />
          <ellipse cx={cx} cy={cy} rx="70" ry="14" strokeOpacity="0.35" strokeWidth="0.7" />
          {Array.from({ length: 12 }, (_, k) => {
            const a = toRad(k * 30);
            return (
              <line
                key={`z${k}`}
                x1={cx + 70 * Math.cos(a)}
                y1={cy + 19 * Math.sin(a)}
                x2={cx + 70 * Math.cos(a)}
                y2={cy + 14 * Math.sin(a)}
                strokeOpacity="0.4"
                strokeWidth="0.5"
              />
            );
          })}
        </g>
      </g>

      {/* caged globe on tilted polar axis */}
      <g className="spin-cw" style={{ '--dur': '70s' } as CSSProperties}>
        <circle cx={cx} cy={cy} r="20" strokeOpacity="0.85" />
        <ellipse cx={cx} cy={cy - 9} rx="16" ry="5" strokeOpacity="0.4" strokeWidth="0.7" />
        <ellipse cx={cx} cy={cy} rx="20" ry="6" strokeOpacity="0.5" strokeWidth="0.7" />
        <ellipse cx={cx} cy={cy + 9} rx="16" ry="5" strokeOpacity="0.4" strokeWidth="0.7" />
        <ellipse cx={cx} cy={cy} rx="7" ry="20" strokeOpacity="0.4" strokeWidth="0.7" />
        <ellipse cx={cx} cy={cy} rx="14" ry="20" strokeOpacity="0.3" strokeWidth="0.6" />
      </g>
      <line x1={cx - 24} y1={cy + 66} x2={cx + 24} y2={cy - 66} strokeOpacity="0.7" />
      <circle cx={cx + 24} cy={cy - 66} r="2.4" strokeOpacity="0.8" />
      <circle cx={cx - 24} cy={cy + 66} r="2.4" strokeOpacity="0.8" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Gear train — two toothed wheels in mesh, rotating against each      */
/* other at the teeth ratio, with pitch-circle construction lines.     */
/* ------------------------------------------------------------------ */
function gearPath(cx: number, cy: number, rRoot: number, teeth: number, toothH: number): string {
  const step = (Math.PI * 2) / teeth;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const rT = rRoot + toothH;
    const p = (r: number, off: number) => `${(cx + r * Math.cos(a + off)).toFixed(2)},${(cy + r * Math.sin(a + off)).toFixed(2)}`;
    d += `${i === 0 ? 'M' : 'L'}${p(rRoot, 0)} `;
    d += `L${p(rRoot, step * 0.28)} `;
    d += `L${p(rT, step * 0.36)} `;
    d += `L${p(rT, step * 0.64)} `;
    d += `L${p(rRoot, step * 0.72)} `;
  }
  return d + 'Z';
}

function Wheel({
  cx,
  cy,
  rRoot,
  teeth,
  toothH,
  spokes,
  dur,
  rev = false,
}: {
  cx: number;
  cy: number;
  rRoot: number;
  teeth: number;
  toothH: number;
  spokes: number;
  dur: string;
  rev?: boolean;
}) {
  return (
    <g className={rev ? 'spin-ccw' : 'spin-cw'} style={{ '--dur': dur } as CSSProperties}>
      <path d={gearPath(cx, cy, rRoot, teeth, toothH)} strokeOpacity="0.9" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r={rRoot * 0.68} strokeOpacity="0.5" strokeWidth="0.8" />
      {Array.from({ length: spokes }, (_, k) => {
        const a = (k * Math.PI * 2) / spokes;
        return (
          <line
            key={k}
            x1={cx + rRoot * 0.22 * Math.cos(a)}
            y1={cy + rRoot * 0.22 * Math.sin(a)}
            x2={cx + rRoot * 0.68 * Math.cos(a)}
            y2={cy + rRoot * 0.68 * Math.sin(a)}
            strokeOpacity="0.55"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={rRoot * 0.22} strokeOpacity="0.75" />
      <circle cx={cx} cy={cy} r={rRoot * 0.07} fill="currentColor" stroke="none" fillOpacity="0.7" />
      {/* bolt circle */}
      {Array.from({ length: spokes }, (_, k) => {
        const a = (k * Math.PI * 2) / spokes + Math.PI / spokes;
        return (
          <circle
            key={`b${k}`}
            cx={cx + rRoot * 0.45 * Math.cos(a)}
            cy={cy + rRoot * 0.45 * Math.sin(a)}
            r={rRoot * 0.045}
            strokeOpacity="0.5"
            strokeWidth="0.7"
          />
        );
      })}
    </g>
  );
}

function GearTrain() {
  // mesh: centre distance = root radii + one tooth height
  const a = { x: 74, y: 108, r: 42, t: 18, h: 8 };
  const b = { x: 74 + 74 * Math.cos(toRad(-38)), y: 108 + 74 * Math.sin(toRad(-38)), r: 26, t: 12, h: 7 };
  return (
    <>
      {/* pitch circles (construction) */}
      <circle cx={a.x} cy={a.y} r={a.r + a.h / 2} strokeOpacity="0.25" strokeDasharray="3 4" strokeWidth="0.7" />
      <circle cx={b.x} cy={b.y} r={b.r + b.h / 2} strokeOpacity="0.25" strokeDasharray="3 4" strokeWidth="0.7" />
      <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} strokeOpacity="0.3" strokeDasharray="2 3" strokeWidth="0.7" />
      <Wheel cx={a.x} cy={a.y} rRoot={a.r} teeth={a.t} toothH={a.h} spokes={5} dur="36s" />
      <Wheel cx={b.x} cy={b.y} rRoot={b.r} teeth={b.t} toothH={b.h} spokes={4} dur="24s" rev />
      {/* centre posts */}
      <circle cx={a.x} cy={a.y} r="2.2" strokeOpacity="0.8" />
      <circle cx={b.x} cy={b.y} r="2.2" strokeOpacity="0.8" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Spiral staircase — stepped wedges, balustrade with posts, newel.    */
/* ------------------------------------------------------------------ */
function SpiralStair() {
  const cx = 80;
  const cy = 80;
  const steps = 18;
  return (
    <>
      {/* balustrade */}
      <circle cx={cx} cy={cy} r="76" strokeOpacity="0.55" />
      <circle cx={cx} cy={cy} r="71.5" strokeOpacity="0.3" strokeWidth="0.7" />
      {Array.from({ length: 24 }, (_, k) => {
        const [x1, y1] = pt(cx, cy, 71.5, k * 15);
        const [x2, y2] = pt(cx, cy, 76, k * 15);
        return <line key={`p${k}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.3" strokeWidth="0.6" />;
      })}
      <g className="spin-cw" style={{ '--dur': '140s' } as CSSProperties}>
        {/* steps: arc treads with risers, climbing the spiral */}
        {Array.from({ length: steps }, (_, k) => {
          const a0 = k * 24;
          const r = 12 + k * 3.4;
          const [sx, sy] = pt(cx, cy, r, a0);
          const [ex, ey] = pt(cx, cy, r, a0 + 24);
          const [rx, ry] = pt(cx, cy, r + 3.4, a0 + 24);
          return (
            <path
              key={k}
              d={`M${sx.toFixed(1)},${sy.toFixed(1)} A${r},${r} 0 0 1 ${ex.toFixed(1)},${ey.toFixed(1)} L${rx.toFixed(1)},${ry.toFixed(1)}`}
              strokeOpacity="0.8"
            />
          );
        })}
        {/* newel */}
        <circle cx={cx} cy={cy} r="7" strokeOpacity="0.8" />
        <circle cx={cx} cy={cy} r="3.5" strokeOpacity="0.5" strokeWidth="0.7" />
      </g>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Dividers — knurled hinge, adjustment wheel, taper legs, scale arc.  */
/* ------------------------------------------------------------------ */
function Dividers() {
  return (
    <>
      {/* hinge */}
      <circle cx="80" cy="26" r="9" strokeOpacity="0.85" strokeWidth="1.2" />
      <circle cx="80" cy="26" r="3.5" strokeOpacity="0.55" strokeWidth="0.8" />
      <path d="M77 26h6M80 23v6" strokeOpacity="0.55" strokeWidth="0.7" />
      {/* knurled adjustment wheel */}
      <circle cx="80" cy="46" r="5" strokeOpacity="0.7" />
      {Array.from({ length: 10 }, (_, k) => {
        const [x1, y1] = pt(80, 46, 5, k * 36);
        const [x2, y2] = pt(80, 46, 7, k * 36);
        return <line key={`k${k}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.6" strokeWidth="0.6" />;
      })}
      {/* legs with taper */}
      <path d="M76 34L56 132M74.5 33.5L57.5 132" strokeOpacity="0.85" />
      <path d="M84 34l20 98M85.5 33.5L102.5 132" strokeOpacity="0.85" />
      {/* needle points */}
      <path d="M56 132l-1.5 8M104 132l1.5 8" strokeOpacity="0.9" />
      {/* scale arc */}
      <path d="M54 140a62 62 0 0 0 52 0" strokeOpacity="0.45" strokeDasharray="2 3" />
      {Array.from({ length: 7 }, (_, k) => {
        const [x1, y1] = pt(80, 78, 60, 215 + k * 18.3);
        const [x2, y2] = pt(80, 78, 55, 215 + k * 18.3);
        return <line key={`s${k}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.4" strokeWidth="0.6" />;
      })}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Luna — mare patches, rimmed craters, hatched terminator.            */
/* ------------------------------------------------------------------ */
function Luna() {
  return (
    <>
      <circle cx="80" cy="80" r="66" strokeOpacity="0.85" strokeWidth="1.2" />
      {/* mare */}
      <path d="M52 58q14-12 30-6q10 4 4 16q-8 12-24 8q-14-4-10-18Z" fill="currentColor" stroke="none" fillOpacity="0.07" />
      <path d="M88 96q16-4 24 6q6 10-6 18q-14 8-24-2q-6-12 6-22Z" fill="currentColor" stroke="none" fillOpacity="0.06" />
      {/* rimmed craters */}
      {[
        [60, 70, 8],
        [96, 60, 6],
        [78, 100, 10],
        [104, 88, 5],
        [70, 46, 4.5],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx={x} cy={y} r={r * 0.55} strokeOpacity="0.3" strokeWidth="0.6" />
        </g>
      ))}
      {/* terminator with hatching on the night side */}
      <path d="M80 14a66 66 0 0 0 0 132" strokeOpacity="0.5" />
      {Array.from({ length: 9 }, (_, k) => (
        <line
          key={`h${k}`}
          x1={80 - 4 - k * 5.5}
          y1={32 + k * 12}
          x2={80 - 14 - k * 5.5}
          y2={38 + k * 12}
          strokeOpacity="0.22"
          strokeWidth="0.6"
        />
      ))}
    </>
  );
}

function Tesseract() {
  return (
    <>
      <rect x="8" y="8" width="84" height="84" strokeOpacity="0.85" />
      <rect x="30" y="30" width="40" height="40" strokeOpacity="0.6" />
      <path d="M8 8l22 22M92 8L70 30M8 92l22-22M92 92L70 70" strokeOpacity="0.6" />
      <path d="M30 30h40M30 70h40" strokeOpacity="0.25" strokeDasharray="2 3" />
    </>
  );
}

const VIEWBOX: Record<OrnamentKind, string> = {
  armillary: '0 0 200 200',
  gears: '0 0 200 200',
  staircase: '0 0 160 160',
  compass: '0 0 160 160',
  moon: '0 0 160 160',
  tesseract: '0 0 100 100',
};

/**
 * Engraving-style scientific ornaments — graduated rings, toothed gears and
 * construction lines redrawn as hairline SVG, with slow counter-rotating
 * motion on the moving parts. Purely decorative; pointer-transparent.
 */
export function Ornament({
  kind,
  className = '',
  caption = true,
}: {
  kind: OrnamentKind;
  className?: string;
  caption?: boolean;
}) {
  return (
    <figure aria-hidden className={`pointer-events-none select-none ${className}`}>
      <svg viewBox={VIEWBOX[kind]} fill="none" stroke="currentColor" strokeWidth="1" className="w-full">
        {kind === 'tesseract' ? (
          <Tesseract />
        ) : kind === 'armillary' ? (
          <ArmillarySphere />
        ) : kind === 'staircase' ? (
          <SpiralStair />
        ) : kind === 'gears' ? (
          <GearTrain />
        ) : kind === 'compass' ? (
          <Dividers />
        ) : (
          <Luna />
        )}
      </svg>
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.16em]">
          {CAPTIONS[kind]}
        </figcaption>
      )}
    </figure>
  );
}
