/**
 * FIELD STUDY 01 — EVALUATION SCIENCE 001: a generated drafting-plate figure
 * telling the benchmark audit story. Main panel: JUDGE SCORE vs RUBRIC
 * POSITIVE-HIT RATE scatter (134 legal items) with the expected-agreement
 * diagonal, the 0.5–0.7 acceptance band, the final-mean centroid and two
 * fatal-zero outliers (rubric hits 91–93 % scored 0 by a judge misread).
 * Side panels: REWORK TRAJECTORY (0.821 → 0.730 → 0.648) and a mini
 * process-aware RUBRIC DAG. All strokes use currentColor (theme-adaptive);
 * everything is deterministic (seeded mulberry32 PRNG).
 */

const MONO = 'SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace';

/** mulberry32 — tiny deterministic PRNG so the scatter layout is stable. */
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Small mono panel title with underline. */
function PanelTitle({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <g stroke="currentColor" fill="none">
      <text x={x} y={y} fontFamily={MONO} fontSize="11" letterSpacing="2" fill="currentColor" stroke="none" fillOpacity="0.85">
        {text}
      </text>
      <path d={`M${x},${y + 6}H${x + text.length * 8.6}`} strokeOpacity="0.6" strokeWidth="1" />
    </g>
  );
}

/** Filled arrow head: tip at (x, y), pointing along `deg` (SVG degrees). */
function Head({ x, y, deg, opacity = 0.85 }: { x: number; y: number; deg: number; opacity?: number }) {
  return (
    <path
      d="M0,0 L-7,3 L-7,-3 Z"
      fill="currentColor"
      stroke="none"
      fillOpacity={opacity}
      transform={`translate(${x},${y}) rotate(${deg})`}
    />
  );
}

/** Straight thin arrow from (x1, y1) to (x2, y2) with a filled head. */
function LineArrow({
  x1,
  y1,
  x2,
  y2,
  dashed = false,
  opacity = 0.8,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  opacity?: number;
}) {
  const deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  const len = Math.hypot(x2 - x1, y2 - y1);
  const t = (len - 6) / len;
  const ex = x1 + (x2 - x1) * t;
  const ey = y1 + (y2 - y1) * t;
  return (
    <g stroke="currentColor" fill="none" strokeOpacity={opacity}>
      <path d={`M${x1},${y1}L${ex},${ey}`} strokeWidth="1" strokeDasharray={dashed ? '4 4' : undefined} />
      <Head x={x2} y={y2} deg={deg} opacity={opacity} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Spec block (top right)                                              */
/* ------------------------------------------------------------------ */

const SPEC_ROWS = [
  ['SUBJECT:', 'LLM-JUDGED BENCHMARK'],
  ['MEDIUM:', '134 LEGAL ITEMS'],
  ['UNITS:', 'SCORE 0–1'],
  ['ANALYST:', 'L. WANG'],
  ['REV:', 'A1'],
  ['FILE:', 'EB01'],
];

function SpecBlock() {
  return (
    <g stroke="currentColor" fill="none">
      <rect x={856} y={26} width={318} height={138} className="fill-surface" strokeOpacity="0.7" strokeWidth="1" />
      {SPEC_ROWS.map(([k, v], i) => (
        <g key={k}>
          <text x={868} y={50 + i * 20.5} fontFamily={MONO} fontSize="10.5" fill="currentColor" stroke="none" fillOpacity="0.6">
            {k}
          </text>
          <text x={1000} y={50 + i * 20.5} fontFamily={MONO} fontSize="10.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.9">
            {v}
          </text>
        </g>
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Observation notes (left margin)                                     */
/* ------------------------------------------------------------------ */

function NotesBlock() {
  return (
    <g stroke="currentColor" fill="none">
      <text x={28} y={130} fontFamily={MONO} fontSize="10" letterSpacing="2" fill="currentColor" stroke="none" fillOpacity="0.85">
        NOTES
      </text>
      <path d="M28,136H76" strokeOpacity="0.6" strokeWidth="1" />
      {['** 132 / 134 ITEMS TRACK RUBRIC HITS', '** 2 ITEMS ZEROED BY JUDGE MISREAD', '** SEE FATAL-ZERO CALLOUT, LOWER RIGHT'].map((t, i) => (
        <text key={t} x={28} y={156 + i * 16} fontFamily={MONO} fontSize="8.5" letterSpacing="0.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          {t}
        </text>
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Main panel: JUDGE SCORE vs RUBRIC HIT RATE scatter                  */
/* ------------------------------------------------------------------ */

const SX = { x0: 320, y0: 480, w: 480, h: 360 }; // plot area: x 320..800, y 120..480
const scX = (v: number) => SX.x0 + v * SX.w;
const scY = (v: number) => SX.y0 - v * SX.h;

/** 132 deterministic dots hugging the expected-agreement diagonal (denser mid-range). */
function ScatterDots() {
  const rand = prng(134);
  const dots: { x: number; y: number; o: number }[] = [];
  for (let i = 0; i < 132; i++) {
    const xd = 0.05 + 0.9 * ((rand() + rand()) / 2);
    const yd = Math.min(0.985, Math.max(0.03, xd + (rand() + rand() - 1) * 0.15));
    dots.push({ x: scX(xd), y: scY(yd), o: 0.35 + rand() * 0.35 });
  }
  return (
    <g fill="currentColor" stroke="none">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="1.8" fillOpacity={d.o.toFixed(2)} />
      ))}
    </g>
  );
}

function ScatterPanel() {
  const outliers: [number, number][] = [
    [0.91, 0.04],
    [0.93, 0.02],
  ];
  return (
    <g stroke="currentColor" fill="none">
      {/* dashed reference grid */}
      {[0.2, 0.4, 0.6, 0.8].map((v) => (
        <path key={`g${v}`} d={`M${scX(v)},${SX.y0}V${SX.y0 - SX.h}M${SX.x0},${scY(v)}H${SX.x0 + SX.w}`} strokeOpacity="0.14" strokeWidth="0.7" strokeDasharray="2 4" />
      ))}

      {/* acceptance band 0.5–0.7 (horizontal, judge score) */}
      <rect x={SX.x0} y={scY(0.7)} width={SX.w} height={scY(0.5) - scY(0.7)} fill="url(#ff-band)" stroke="none" />
      <path d={`M${SX.x0},${scY(0.5)}H${SX.x0 + SX.w}M${SX.x0},${scY(0.7)}H${SX.x0 + SX.w}`} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" />
      <text x={SX.x0 + 8} y={scY(0.7) - 8} fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
        ACCEPTANCE BAND 0.5–0.7
      </text>

      {/* expected agreement diagonal */}
      <path d={`M${SX.x0},${SX.y0}L${SX.x0 + SX.w},${SX.y0 - SX.h}`} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="5 5" />
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8.5"
        letterSpacing="1.5"
        fill="currentColor"
        stroke="none"
        fillOpacity="0.65"
        transform={`translate(553,287) rotate(-36.87)`}
      >
        EXPECTED AGREEMENT
      </text>

      <ScatterDots />

      {/* centroid: final mean 0.648 */}
      <path
        d={`M${scX(0.648) - 10},${scY(0.648)}H${scX(0.648) + 10}M${scX(0.648)},${scY(0.648) - 10}V${scY(0.648) + 10}`}
        strokeOpacity="0.9"
        strokeWidth="1.2"
      />
      <circle cx={scX(0.648)} cy={scY(0.648)} r="2.2" fill="currentColor" stroke="none" fillOpacity="0.9" />
      <text x={scX(0.648) + 14} y={scY(0.648) + 18} fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.85">
        FINAL MEAN 0.648
      </text>

      {/* fatal-zero outliers: rubric hits 91–93 % scored ~0 by the judge */}
      {outliers.map(([xd, yd]) => (
        <g key={xd}>
          <circle cx={scX(xd)} cy={scY(yd)} r="6.5" strokeOpacity="0.9" strokeWidth="1" />
          <text x={scX(xd)} y={scY(yd) + 3.5} textAnchor="middle" fontFamily={MONO} fontSize="9" fill="currentColor" stroke="none" fillOpacity="0.9">
            ✗
          </text>
        </g>
      ))}
      <path d={`M749,461 L586,429`} strokeOpacity="0.55" strokeWidth="0.7" />
      <circle cx={749} cy={461} r="1.6" fill="currentColor" stroke="none" fillOpacity="0.7" />
      <text x={340} y={420} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.85">
        FATAL ZERO ×2 —
      </text>
      <text x={340} y={433} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.85">
        IN-MATERIAL CITATION MISREAD AS LEAKAGE
      </text>

      {/* axes */}
      <path d={`M${SX.x0},${SX.y0}H${SX.x0 + SX.w}M${SX.x0},${SX.y0}V${SX.y0 - SX.h}`} strokeOpacity="0.85" strokeWidth="1.2" />
      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v) => (
        <g key={`a${v}`}>
          <path d={`M${scX(v)},${SX.y0}V${SX.y0 + 5}`} strokeOpacity="0.7" strokeWidth="1" />
          <path d={`M${SX.x0 - 5},${scY(v)}H${SX.x0}`} strokeOpacity="0.7" strokeWidth="1" />
          <text x={scX(v)} y={SX.y0 + 16} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.65">
            {v.toFixed(1)}
          </text>
          <text x={SX.x0 - 9} y={scY(v) + 3} textAnchor="end" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.65">
            {v.toFixed(1)}
          </text>
        </g>
      ))}
      <text x={SX.x0 + SX.w / 2} y={SX.y0 + 34} textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="2" fill="currentColor" stroke="none" fillOpacity="0.75">
        RUBRIC POSITIVE-HIT RATE
      </text>
      <text
        x={284}
        y={SX.y0 - SX.h / 2}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
        stroke="none"
        fillOpacity="0.75"
        transform={`rotate(-90 284 ${SX.y0 - SX.h / 2})`}
      >
        JUDGE SCORE
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Right middle panel: REWORK TRAJECTORY                               */
/* ------------------------------------------------------------------ */

const RY = { x0: 860, x1: 1160, base: 300, top: 215 };
const rwY = (v: number) => RY.base - (v - 0.4) * ((RY.base - RY.top) / 0.5);
const ROUNDS = [
  { x: 890, v: 0.821, label: 'ROUND 0' },
  { x: 1010, v: 0.73, label: 'ROUND 1' },
  { x: 1130, v: 0.648, label: 'ROUND 2' },
];

function ReworkChart() {
  return (
    <g stroke="currentColor" fill="none">
      <PanelTitle x={840} y={200} text="REWORK TRAJECTORY" />

      {/* acceptance band */}
      <path d={`M${RY.x0},${rwY(0.5)}H${RY.x1}M${RY.x0},${rwY(0.7)}H${RY.x1}`} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" />
      <text x={RY.x0 + 2} y={rwY(0.7) - 4} fontFamily={MONO} fontSize="7" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
        ACCEPTANCE BAND
      </text>
      <text x={RY.x0 - 4} y={rwY(0.5) + 3} textAnchor="end" fontFamily={MONO} fontSize="7" fill="currentColor" stroke="none" fillOpacity="0.55">
        0.5
      </text>
      <text x={RY.x0 - 4} y={rwY(0.7) + 3} textAnchor="end" fontFamily={MONO} fontSize="7" fill="currentColor" stroke="none" fillOpacity="0.55">
        0.7
      </text>

      {/* axes */}
      <path d={`M${RY.x0},${RY.base}H${RY.x1}M${RY.x0},${RY.base}V${RY.top}`} strokeOpacity="0.85" strokeWidth="1.2" />

      {/* trajectory polyline + round markers */}
      <path d={`M${ROUNDS[0].x},${rwY(ROUNDS[0].v)} L${ROUNDS[1].x},${rwY(ROUNDS[1].v)} L${ROUNDS[2].x},${rwY(ROUNDS[2].v)}`} strokeOpacity="0.9" strokeWidth="1.4" />
      {ROUNDS.map((r, i) => (
        <g key={r.label}>
          <circle cx={r.x} cy={rwY(r.v)} r="3" fill="currentColor" stroke="none" fillOpacity="0.9" />
          <path d={`M${r.x},${RY.base}V${RY.base + 4}`} strokeOpacity="0.7" strokeWidth="1" />
          <text x={r.x} y={RY.base + 14} textAnchor="middle" fontFamily={MONO} fontSize="7.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.65">
            {r.label}
          </text>
          <text
            x={r.x}
            y={i === 2 ? rwY(r.v) + 14 : rwY(r.v) - 9}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="8.5"
            fill="currentColor"
            stroke="none"
            fillOpacity="0.85"
          >
            {r.v.toFixed(3)}
          </text>
        </g>
      ))}

      {/* effect arrows */}
      <LineArrow x1={1150} y1={232} x2={1150} y2={254} opacity={0.7} />
      <LineArrow x1={868} y1={254} x2={868} y2={232} opacity={0.7} />
      <text x={RY.x0} y={330} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
        ▼ −0.139 REWORK / ROUND
      </text>
      <text x={RY.x0} y={346} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
        ▲ +0.159 EFFORT (CONTROL)
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Right lower panel: mini RUBRIC DAG                                  */
/* ------------------------------------------------------------------ */

const DAG_NODES = [
  { x: 850, y: 420, label: 'READ' },
  { x: 930, y: 420, label: 'QUOTE' },
  { x: 1010, y: 420, label: 'CALC' },
  { x: 1090, y: 420, label: 'FINAL' },
  { x: 950, y: 466, label: 'REASON' },
  { x: 850, y: 466, label: 'HURDLE', gate: true },
];

function DagMini() {
  return (
    <g stroke="currentColor" fill="none">
      <PanelTitle x={840} y={395} text="RUBRIC DAG — PROCESS-AWARE" />

      {/* nodes */}
      {DAG_NODES.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width={60} height={20} className="fill-surface" strokeOpacity="0.8" strokeWidth="1" />
          {n.gate && <rect x={n.x + 2.5} y={n.y + 2.5} width={55} height={15} strokeOpacity="0.55" strokeWidth="0.8" />}
          <text x={n.x + 30} y={n.y + 13.5} textAnchor="middle" fontFamily={MONO} fontSize="7" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.9">
            {n.label}
          </text>
        </g>
      ))}

      {/* main chain: READ → QUOTE → CALC → FINAL */}
      <LineArrow x1={912} y1={430} x2={928} y2={430} />
      <LineArrow x1={992} y1={430} x2={1008} y2={430} />
      <LineArrow x1={1072} y1={430} x2={1088} y2={430} />

      {/* reasoning side branch: QUOTE → REASON → FINAL */}
      <LineArrow x1={962} y1={442} x2={968} y2={464} />
      <LineArrow x1={1012} y1={470} x2={1098} y2={444} />

      {/* gate edge: READ → HURDLE, dashed FAIL edge */}
      <LineArrow x1={880} y1={442} x2={880} y2={464} />
      <path d="M880,486 V502" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="4 4" />
      <text x={880} y={514} textAnchor="middle" fontFamily={MONO} fontSize="9" fill="currentColor" stroke="none" fillOpacity="0.8">
        ✗
      </text>
      <text x={892} y={514} fontFamily={MONO} fontSize="7" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
        FAIL
      </text>
      <text x={918} y={530} fontFamily={MONO} fontSize="7" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
        HURDLE — MUST PASS
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Legend (bottom left)                                                */
/* ------------------------------------------------------------------ */

const LEGEND_ROWS: { sym: 'dots' | 'text' | 'dash' | 'arrow'; symText?: string; label: string }[] = [
  { sym: 'dots', label: 'BENCHMARK ITEM (N=134)' },
  { sym: 'text', symText: '⊗', label: 'FATAL ZERO (JUDGE DEFECT)' },
  { sym: 'dash', label: 'ACCEPTANCE BAND 0.5–0.7' },
  { sym: 'arrow', label: 'REWORK TRAJECTORY' },
  { sym: 'text', symText: '▲', label: 'CONTROL-GROUP CONFOUND' },
];

function Legend() {
  const x = 28;
  const y = 350;
  const w = 252;
  return (
    <g stroke="currentColor" fill="none">
      <rect x={x} y={y} width={w} height={150} className="fill-surface" strokeOpacity="0.7" strokeWidth="1" />
      <text x={x + 12} y={y + 20} fontFamily={MONO} fontSize="10" letterSpacing="2" fill="currentColor" stroke="none" fillOpacity="0.85">
        LEGEND
      </text>
      <path d={`M${x + 12},${y + 26}H${x + 76}`} strokeOpacity="0.6" strokeWidth="1" />
      {LEGEND_ROWS.map((row, i) => {
        const ry = y + 44 + i * 17;
        return (
          <g key={row.label}>
            {row.sym === 'dots' && (
              <g fill="currentColor" fillOpacity="0.6" stroke="none">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <circle key={d} cx={x + 14 + d * 5.4} cy={ry - 3 - (d % 2) * 2} r="1" />
                ))}
              </g>
            )}
            {row.sym === 'text' && (
              <text x={x + 12} y={ry} fontFamily={MONO} fontSize="10" fill="currentColor" stroke="none" fillOpacity="0.8">
                {row.symText}
              </text>
            )}
            {row.sym === 'dash' && <path d={`M${x + 12},${ry - 3}H${x + 52}`} strokeOpacity="0.6" strokeWidth="1" strokeDasharray="4 4" />}
            {row.sym === 'arrow' && (
              <g>
                <path d={`M${x + 12},${ry - 3}H${x + 45}`} strokeOpacity="0.8" strokeWidth="1" />
                <Head x={x + 52} y={ry - 3} deg={0} opacity={0.8} />
              </g>
            )}
            <text x={x + 64} y={ry} fontFamily={MONO} fontSize="8.5" letterSpacing="0.5" fill="currentColor" stroke="none" fillOpacity="0.75">
              {row.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Bottom ruler (score scale, aligned with the scatter x axis)         */
/* ------------------------------------------------------------------ */

function BottomRuler() {
  const ticks = [];
  for (let x = SX.x0; x <= SX.x0 + SX.w; x += 24) {
    const major = (x - SX.x0) % 96 === 0;
    ticks.push(<path key={x} d={`M${x},550V${major ? 540 : 545}`} strokeOpacity={major ? 0.6 : 0.35} strokeWidth="1" />);
  }
  return (
    <g stroke="currentColor" fill="none">
      {ticks}
      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v, i) => (
        <text key={v} x={SX.x0 + i * 96} y={534} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.65">
          {v.toFixed(1)}
        </text>
      ))}
      <text x={SX.x0 + SX.w + 12} y={534} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.65">
        SCORE
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */

export function FieldFigure({
  className = '',
  viewBox = '0 0 1200 560',
}: {
  className?: string;
  /** Crop the drawing — used to show only the main scatter on small screens. */
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox={viewBox}
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* dashed reference grid */}
      <defs>
        <pattern id="fs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H40M0.5 0V40" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="2 4" strokeWidth="0.7" />
        </pattern>
        <pattern id="ff-band" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="1" fill="currentColor" fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect x="11" y="11" width="1178" height="538" fill="url(#fs-grid)" />

      {/* title block */}
      <g fill="currentColor" stroke="none">
        <text x={30} y={58} fontFamily={MONO} fontSize="25" fontWeight="600" letterSpacing="6" fillOpacity="0.9">
          FIELD STUDY 01
        </text>
        <text x={30} y={80} fontFamily={MONO} fontSize="11.5" letterSpacing="3" fillOpacity="0.65">
          JUDGE AUDIT &amp; DIFFICULTY CALIBRATION 001
        </text>
      </g>

      <SpecBlock />
      <NotesBlock />
      <ScatterPanel />
      <ReworkChart />
      <DagMini />
      <Legend />
      <BottomRuler />

      {/* frame */}
      <rect x="10" y="10" width="1180" height="540" fill="none" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.4" />
    </svg>
  );
}
