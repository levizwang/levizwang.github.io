/**
 * TECHNICAL FIGURES — a set of generated drafting-plate diagrams (engineering
 * drawing / field-study style) used instead of bitmap illustrations across the
 * site: difficulty distribution dot-pile, calibration track, synthesis
 * pipeline, judge audit, adversarial fan-out, compatibility matrix, QC loop,
 * RAG radar, MEV pipeline and rubric DAG. All strokes use currentColor so the
 * plates adapt to light/dark themes; generated details are deterministic
 * (seeded mulberry32 PRNG, no Math.random).
 */

const MONO = 'SF Mono, JetBrains Mono, ui-monospace, Menlo, monospace';

/** mulberry32 — tiny deterministic PRNG so generated layouts are stable. */
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

/** Split a box label into two balanced lines when it is too long for one. */
function splitLabel(s: string): string[] {
  if (s.length <= 10 || !s.includes(' ')) return [s];
  const words = s.split(' ');
  let best = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ').length;
    const b = words.slice(i).join(' ').length;
    const d = Math.abs(a - b);
    if (d < bestDiff) {
      bestDiff = d;
      best = i;
    }
  }
  return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
}

/** Underlined mono plate title (top-left). */
function FigTitle({ text, x = 30, y = 34 }: { text: string; x?: number; y?: number }) {
  return (
    <g stroke="currentColor" fill="none">
      <text x={x} y={y} fontFamily={MONO} fontSize="12" letterSpacing="2" fill="currentColor" stroke="none" fillOpacity="0.85">
        {text}
      </text>
      <path d={`M${x},${y + 7}H${x + text.length * 9.4}`} strokeOpacity="0.6" strokeWidth="1" />
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

/** Drafting box: paper-filled thin rect + mono label (auto 2-line) + optional sub-line. */
function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  double = false,
  fontSize = 9,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  double?: boolean;
  fontSize?: number;
}) {
  const lines = splitLabel(label);
  const blockH = lines.length * 11 + (sub ? 10 : 0);
  const first = y + h / 2 - blockH / 2 + 8;
  return (
    <g stroke="currentColor" fill="none">
      <rect x={x} y={y} width={w} height={h} className="fill-surface" strokeOpacity="0.8" strokeWidth="1.1" />
      {double && <rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} strokeOpacity="0.55" strokeWidth="0.8" />}
      {lines.map((ln, i) => (
        <text
          key={ln}
          x={x + w / 2}
          y={first + i * 11}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize={fontSize}
          letterSpacing="1"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.9"
        >
          {ln}
        </text>
      ))}
      {sub && (
        <text
          x={x + w / 2}
          y={first + lines.length * 11 + 1}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="7"
          letterSpacing="1"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.6"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 01 — difficulty distribution (134-task legal benchmark)         */
/* ------------------------------------------------------------------ */

const DIST = { x0: 90, x1: 690, base: 228, top: 64 };
const distX = (v: number) => DIST.x0 + v * (DIST.x1 - DIST.x0);

/** 134 deterministic dots stacked into a histogram (approx. normal, mean ≈ 0.66). */
function DistDots() {
  const rand = prng(134648);
  const levels = new Map<number, number>();
  const dots: { x: number; y: number; o: number }[] = [];
  for (let i = 0; i < 134; i++) {
    const z = (rand() + rand() + rand() + rand() - 2) / 2;
    const v = Math.min(0.985, Math.max(0.03, 0.66 + z * 0.17));
    const col = Math.round(distX(v) / 9);
    const level = levels.get(col) ?? 0;
    levels.set(col, level + 1);
    dots.push({ x: col * 9 + (rand() - 0.5) * 4, y: DIST.base - 5 - level * 6.2, o: 0.45 + rand() * 0.4 });
  }
  return (
    <g fill="currentColor" stroke="none">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="1.9" fillOpacity={d.o.toFixed(2)} />
      ))}
    </g>
  );
}

export function FigDistribution({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="figdist-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="1" fill="currentColor" fillOpacity="0.16" />
        </pattern>
      </defs>
      <g stroke="currentColor" fill="none">
        <FigTitle text="DIFFICULTY DISTRIBUTION — 134-TASK LEGAL BENCHMARK" />

        {/* acceptance band: dotted shading + dashed boundaries */}
        <rect x={distX(0.5)} y={DIST.top} width={distX(0.7) - distX(0.5)} height={DIST.base - DIST.top} fill="url(#figdist-dots)" stroke="none" />
        <path
          d={`M${distX(0.5)},${DIST.top}V${DIST.base}M${distX(0.7)},${DIST.top}V${DIST.base}`}
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text
          x={(distX(0.5) + distX(0.7)) / 2}
          y={DIST.top - 8}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          letterSpacing="1.5"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.75"
        >
          ACCEPTANCE BAND 0.5–0.7
        </text>

        {/* final mean: solid line, rotated label, axis marker */}
        <path d={`M${distX(0.648)},${DIST.top}V${DIST.base}`} strokeOpacity="0.9" strokeWidth="1.4" />
        <text
          x={distX(0.648) - 6}
          y={120}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="8.5"
          letterSpacing="1.5"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.85"
          transform={`rotate(-90 ${distX(0.648) - 6} 120)`}
        >
          FINAL MEAN 0.648
        </text>
        <path d={`M${distX(0.648)},${DIST.base} l-4,7 h8 Z`} fill="currentColor" stroke="none" fillOpacity="0.85" />

        <DistDots />

        {/* initial mean marker + rework arrow towards the band */}
        <circle cx={distX(0.821)} cy="60" r="3.5" fill="currentColor" stroke="none" fillOpacity="0.9" />
        <text x={distX(0.821) + 10} y={56} fontFamily={MONO} fontSize="9" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.85">
          INITIAL MEAN 0.821
        </text>
        <path d={`M${distX(0.821) - 7},67 C556,86 534,92 514,96`} strokeOpacity="0.8" strokeWidth="1" />
        <Head x={514} y={96} deg={169} />
        <text x={544} y={116} textAnchor="middle" fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          2 REWORK ROUNDS
        </text>

        {/* x axis: solver score 0.0–1.0 */}
        <path d={`M${DIST.x0},${DIST.base}H${DIST.x1}`} strokeOpacity="0.9" strokeWidth="1.2" />
        {Array.from({ length: 11 }, (_, i) => i).map((i) => (
          <path key={i} d={`M${distX(i / 10)},${DIST.base}V${DIST.base + (i % 2 === 0 ? 7 : 4)}`} strokeOpacity="0.7" strokeWidth="1" />
        ))}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v) => (
          <text key={v} x={distX(v)} y={DIST.base + 20} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.65">
            {v.toFixed(1)}
          </text>
        ))}
        <text
          x={(DIST.x0 + DIST.x1) / 2}
          y={DIST.base + 40}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          letterSpacing="2"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.75"
        >
          SOLVER SCORE
        </text>
        <text x={775} y={DIST.base + 40} textAnchor="end" fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
          EFFORT CONFOUND +0.159 / REWORK −0.139 PER ROUND
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 02 — difficulty calibration track                               */
/* ------------------------------------------------------------------ */

const CAL = { x0: 120, x1: 680, y: 150 };
const calX = (v: number) => CAL.x0 + v * (CAL.x1 - CAL.x0);

export function FigCalibration({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="figcal-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0,0V7" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.6" fill="none" />
        </pattern>
      </defs>
      <g stroke="currentColor" fill="none">
        <FigTitle text="DIFFICULTY CALIBRATION" />

        {/* acceptance band: hatched fill + dashed boundaries */}
        <rect x={calX(0.5)} y={CAL.y - 32} width={calX(0.7) - calX(0.5)} height="64" fill="url(#figcal-hatch)" stroke="none" />
        <path
          d={`M${calX(0.5)},${CAL.y - 38}V${CAL.y + 38}M${calX(0.7)},${CAL.y - 38}V${CAL.y + 38}`}
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text
          x={(calX(0.5) + calX(0.7)) / 2}
          y={CAL.y - 46}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          letterSpacing="1.5"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.75"
        >
          ACCEPTANCE BAND 0.5–0.7
        </text>

        {/* axis 0–1 */}
        <path d={`M${CAL.x0},${CAL.y}H${CAL.x1 - 6}`} strokeOpacity="0.9" strokeWidth="1.2" />
        <Head x={CAL.x1} y={CAL.y} deg={0} opacity={0.9} />
        {Array.from({ length: 11 }, (_, i) => i).map((i) => (
          <path key={i} d={`M${calX(i / 10)},${CAL.y}V${CAL.y + (i % 2 === 0 ? 7 : 4)}`} strokeOpacity="0.7" strokeWidth="1" />
        ))}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((v) => (
          <text key={v} x={calX(v)} y={CAL.y + 20} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.65">
            {v.toFixed(1)}
          </text>
        ))}
        <text
          x={(CAL.x0 + CAL.x1) / 2}
          y={CAL.y + 42}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          letterSpacing="2"
          fill="currentColor"
          stroke="none"
          fillOpacity="0.75"
        >
          SOLVER SCORE
        </text>

        {/* rework polyline arrow: start -> final */}
        <path
          d={`M${calX(0.821) - 8},${CAL.y - 10} L${calX(0.73)},${CAL.y - 52} L${calX(0.665)},${CAL.y - 10}`}
          strokeOpacity="0.85"
          strokeWidth="1.2"
        />
        <Head x={calX(0.665)} y={CAL.y - 10} deg={131} />
        <text x={calX(0.745)} y={CAL.y - 60} textAnchor="middle" fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.75">
          2 REWORK ROUNDS
        </text>

        {/* start + final dots */}
        <circle cx={calX(0.821)} cy={CAL.y} r="5" fill="currentColor" stroke="none" fillOpacity="0.9" />
        <text x={calX(0.821) + 12} y={CAL.y - 12} fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.85">
          START 0.821
        </text>
        <circle cx={calX(0.648)} cy={CAL.y} r="5" fill="currentColor" stroke="none" fillOpacity="0.9" />
        <text x={calX(0.648)} y={CAL.y + 58} textAnchor="middle" fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.85">
          FINAL 0.648
        </text>

        {/* control notes */}
        <text x={CAL.x0} y={246} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.65">
          CONTROL: EFFORT +0.159
        </text>
        <text x={CAL.x1} y={246} textAnchor="end" fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.65">
          REWORK EFFECT −0.139/ROUND
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 03 — synthesis pipeline flow                                    */
/* ------------------------------------------------------------------ */

export function FigPipeline({
  steps = ['SOURCE FILES', 'EVIDENCE LEDGER', 'DRAFT', 'CRITIQUE', 'VERIFY', 'PACKAGE'],
  gates = ['QUOTE GATE', 'CROSS-MODEL', 'LEAK CHECK', 'ANTI-GUESS'],
  className = '',
}: {
  steps?: string[];
  gates?: string[];
  className?: string;
}) {
  const x0 = 36;
  const x1 = 784;
  const gap = 26;
  const y = 118;
  const h = 44;
  const w = (x1 - x0 - (steps.length - 1) * gap) / steps.length;
  const bx = (i: number) => x0 + i * (w + gap);
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="SYNTHESIS PIPELINE" />

        {/* stacked source sheets at the first step */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={x0 + 8 + i * 5}
            y={y - 26 - i * 5}
            width="26"
            height="16"
            className="fill-surface"
            strokeOpacity="0.75"
            strokeWidth="0.9"
          />
        ))}
        <path d={`M${x0 + 38},${y - 36} l6,6`} strokeOpacity="0.6" strokeWidth="0.8" />
        <path d={`M${x0 + 22},${y - 30} h12 M${x0 + 22},${y - 26} h9`} strokeOpacity="0.45" strokeWidth="0.8" />

        {/* step boxes */}
        {steps.map((s, i) => (
          <Box key={`${s}-${i}`} x={bx(i)} y={y} w={w} h={h} label={s} />
        ))}

        {/* arrows + gate labels */}
        {steps.slice(0, -1).map((s, i) => (
          <g key={`gate-${i}`}>
            <LineArrow x1={bx(i) + w + 2} y1={y + h / 2} x2={bx(i + 1) - 2} y2={y + h / 2} />
            <text
              x={bx(i) + w + gap / 2}
              y={y + h + 20}
              textAnchor="middle"
              fontFamily={MONO}
              fontSize="7"
              letterSpacing="0.5"
              fill="currentColor"
              stroke="none"
              fillOpacity="0.6"
            >
              {gates[i % gates.length]}
            </text>
          </g>
        ))}

        {/* ledger entry dots under the EVIDENCE LEDGER box */}
        {steps.length > 1 && (
          <g fill="currentColor" stroke="none" fillOpacity="0.5">
            {Array.from({ length: Math.floor((w - 14) / 7) }, (_, i) => (
              <circle key={i} cx={bx(1) + 7 + i * 7} cy={y + h + 9} r="1.1" />
            ))}
          </g>
        )}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 04 — judge audit (fatal-zero review)                            */
/* ------------------------------------------------------------------ */

const JUDGE_FATAL: Record<number, string> = {
  2: 'CITATION MISREAD AS LEAKAGE',
  5: 'DAG DEPENDENCY FIELDS DROPPED',
};

export function FigJudge({ className = '' }: { className?: string }) {
  const rand = prng(88);
  const pcts = Array.from({ length: 8 }, () => 0.88 + rand() * 0.07);
  const x0 = 100;
  const w = 440;
  const y0 = 68;
  const step = 22;
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="JUDGE AUDIT — FATAL-ZERO REVIEW" />

        {/* scale header + gridlines */}
        {[0, 0.5, 1].map((f) => (
          <text key={f} x={x0 + f * w} y={52} textAnchor="middle" fontFamily={MONO} fontSize="7.5" fill="currentColor" stroke="none" fillOpacity="0.55">
            {f * 100}
          </text>
        ))}
        {[0.5, 1].map((f) => (
          <path key={f} d={`M${x0 + f * w},58 V230`} strokeOpacity="0.22" strokeWidth="0.8" strokeDasharray="3 4" />
        ))}

        {/* item rows */}
        {pcts.map((p, i) => {
          const y = y0 + i * step;
          const ex = x0 + p * w;
          const fatal = JUDGE_FATAL[i];
          return (
            <g key={i}>
              <text x={36} y={y + 3.5} fontFamily={MONO} fontSize="9" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.8">
                {`Q-0${i + 1}`}
              </text>
              <path d={`M${x0},${y}H${x0 + w}`} strokeOpacity="0.3" strokeWidth="1" />
              <rect x={x0} y={y - 3} width={p * w} height="6" fill="currentColor" stroke="none" fillOpacity="0.28" />
              {fatal ? (
                <g>
                  <text x={ex} y={y + 4} textAnchor="middle" fontFamily={MONO} fontSize="11" fill="currentColor" stroke="none" fillOpacity="0.9">
                    ✗
                  </text>
                  <text x={556} y={y - 6} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.85">
                    FATAL ZERO
                  </text>
                  <path d={`M614,${y}H632`} strokeOpacity="0.55" strokeWidth="0.8" />
                  <circle cx={614} cy={y} r="1.4" fill="currentColor" stroke="none" fillOpacity="0.7" />
                  <rect x={636} y={y - 10} width="150" height="20" className="fill-surface" strokeOpacity="0.7" strokeWidth="0.9" />
                  <text x={711} y={y + 3} textAnchor="middle" fontFamily={MONO} fontSize="7" letterSpacing="0.5" fill="currentColor" stroke="none" fillOpacity="0.85">
                    {fatal}
                  </text>
                </g>
              ) : (
                <g>
                  <circle cx={ex} cy={y} r="3" fill="currentColor" stroke="none" fillOpacity="0.85" />
                  <text x={556} y={y + 3} fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.75">
                    {`${Math.round(p * 100)}%`}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* defenses footer */}
        <path d={`M36,${y0 + 8 * step + 6}H764`} strokeOpacity="0.5" strokeWidth="1" />
        <text x={36} y={y0 + 8 * step + 28} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
          DEFENSES: SCHEMA ROUND-TRIP · ORACLE FULL-MARK · LINE-BY-LINE RE-CHECK
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 05 — adversarial fan-out review                                 */
/* ------------------------------------------------------------------ */

export function FigFanout({ className = '' }: { className?: string }) {
  const finderYs = [46, 84, 122, 160, 198, 236];
  const execYs = [96, 140, 184];
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="51-AGENT ADVERSARIAL REVIEW" />
        <text x={776} y={30} textAnchor="end" fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
          ~59 MIN WALL-CLOCK
        </text>

        <Box x={24} y={130} w={110} h={44} label="DIFF · 216 FILES" sub="17 COMMITS" />

        {/* fan-out curves */}
        {finderYs.map((fy) => (
          <path key={fy} d={`M134,152 C172,152 178,${fy + 12} 215,${fy + 12}`} strokeOpacity="0.55" strokeWidth="0.9" />
        ))}
        {finderYs.map((fy, i) => (
          <Box key={fy} x={215} y={fy} w={88} h={24} label={`FINDER 0${i + 1}`} fontSize={8.5} />
        ))}

        {/* convergence to the candidate bus */}
        {finderYs.map((fy) => (
          <path key={fy} d={`M303,${fy + 12} C340,${fy + 12} 352,152 392,152`} strokeOpacity="0.55" strokeWidth="0.9" />
        ))}
        <path d="M392,118V186" strokeOpacity="0.8" strokeWidth="1.4" />
        <circle cx={392} cy={152} r="3" fill="currentColor" stroke="none" fillOpacity="0.85" />
        <text x={392} y={106} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.75">
          45 CANDIDATES
        </text>

        {/* exec verifiers */}
        {execYs.map((ey, i) => (
          <g key={ey}>
            <LineArrow x1={398} y1={152} x2={466} y2={ey + 12} opacity={0.7} />
            <Box x={470} y={ey} w={112} h={24} label={`EXEC VERIFIER ${i + 1}`} fontSize={8} />
          </g>
        ))}

        {/* confirmed */}
        {execYs.map((ey) => (
          <LineArrow key={ey} x1={586} y1={ey + 12} x2={644} y2={152} opacity={0.7} />
        ))}
        <Box x={648} y={130} w={132} h={44} label="40 CONFIRMED" sub="git log -S" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 06 — model × harness compatibility matrix                       */
/* ------------------------------------------------------------------ */

export function FigMatrix({
  rows = ['GPT', 'CLAUDE', 'GEMINI', 'QWEN', 'DEEPSEEK', 'LLAMA'],
  cols = ['HARNESS A', 'HARNESS B', 'HARNESS C', 'HARNESS D', 'HARNESS E'],
  title = 'MODEL × HARNESS MATRIX',
  className = '',
}: {
  rows?: string[];
  cols?: string[];
  title?: string;
  className?: string;
}) {
  const rand = prng(42);
  const cells = rows.map(() => cols.map(() => rand() < 0.85));
  const cellW = 84;
  const cellH = 28;
  const gx = 150;
  const gy = 84;
  const gw = cols.length * cellW;
  const gh = rows.length * cellH;
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text={title} />

        {/* grid */}
        <rect x={gx} y={gy} width={gw} height={gh} strokeOpacity="0.8" strokeWidth="1.1" />
        {cols.slice(1).map((_, i) => (
          <path key={i} d={`M${gx + (i + 1) * cellW},${gy}V${gy + gh}`} strokeOpacity="0.3" strokeWidth="0.8" />
        ))}
        {rows.slice(1).map((_, i) => (
          <path key={i} d={`M${gx},${gy + (i + 1) * cellH}H${gx + gw}`} strokeOpacity="0.3" strokeWidth="0.8" />
        ))}

        {/* axis labels */}
        {cols.map((c, i) => (
          <text key={c} x={gx + i * cellW + cellW / 2} y={gy - 10} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
            {c}
          </text>
        ))}
        {rows.map((r, i) => (
          <text key={r} x={gx - 10} y={gy + i * cellH + cellH / 2 + 3} textAnchor="end" fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
            {r}
          </text>
        ))}

        {/* cells: deterministic pass/skip marks */}
        {cells.map((row, i) =>
          row.map((ok, j) => (
            <text
              key={`${i}-${j}`}
              x={gx + j * cellW + cellW / 2}
              y={gy + i * cellH + cellH / 2 + 4}
              textAnchor="middle"
              fontFamily={MONO}
              fontSize={ok ? '11' : '13'}
              fill="currentColor"
              stroke="none"
              fillOpacity={ok ? 0.8 : 0.45}
            >
              {ok ? '✓' : '·'}
            </text>
          )),
        )}

        {/* legend + combos note */}
        <text x={gx + gw + 40} y={gy + 32} fontFamily={MONO} fontSize="9" fill="currentColor" stroke="none" fillOpacity="0.8">
          ✓
        </text>
        <text x={gx + gw + 56} y={gy + 32} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
          PASS
        </text>
        <text x={gx + gw + 40} y={gy + 50} fontFamily={MONO} fontSize="11" fill="currentColor" stroke="none" fillOpacity="0.5">
          ·
        </text>
        <text x={gx + gw + 56} y={gy + 50} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
          SKIP
        </text>
        <text x={gx + gw} y={gy + gh + 24} textAnchor="end" fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
          {`${rows.length * cols.length} CONTAINERIZED COMBOS`}
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 07 — actor–critic–monitor QC loop                               */
/* ------------------------------------------------------------------ */

export function FigLoop({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="ADVERSARIAL QC LOOP" />

        <Box x={340} y={58} w={120} h={44} label="ACTOR" sub="GENERATE" />
        <Box x={120} y={194} w={120} h={44} label="CRITIC" sub="FINDINGS" />
        <Box x={560} y={194} w={120} h={44} label="MONITOR" sub="ARBITRATE" />

        {/* cycle arrows */}
        <LineArrow x1={352} y1={106} x2={212} y2={190} />
        <text x={248} y={140} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          CASE
        </text>
        <LineArrow x1={246} y1={216} x2={554} y2={216} />
        <text x={400} y={206} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          STRUCTURED FINDINGS
        </text>
        <LineArrow x1={592} y1={190} x2={452} y2={106} />
        <text x={556} y={140} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          REVISE / REWORK
        </text>

        {/* pass exit */}
        <LineArrow x1={686} y1={216} x2={768} y2={216} />
        <text x={727} y={204} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          PASS → DELIVERY
        </text>

        {/* memory feeds the critic */}
        <Box x={345} y={256} w={110} h={28} label="MEMORY" />
        <path d="M180,238 V270 H341" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="4 4" />
        <text x={258} y={262} textAnchor="middle" fontFamily={MONO} fontSize="7.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
          BAD-PATTERN DETECTORS
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 08 — RAG evaluation radar                                       */
/* ------------------------------------------------------------------ */

const RAD = { cx: 300, cy: 172, r: 104 };
const RADAR_AXES = [
  { name: 'FAITHFULNESS', value: 0.87 },
  { name: 'ANSWER REL.', value: 0.82 },
  { name: 'CONTEXT PREC.', value: 0.85 },
  { name: 'CONTEXT RECALL', value: 0.78 },
  { name: 'HALLUCINATION †', value: 0.93 },
];

function radPt(v: number, i: number): [number, number] {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return [RAD.cx + v * RAD.r * Math.cos(a), RAD.cy + v * RAD.r * Math.sin(a)];
}

export function FigRadar({ className = '' }: { className?: string }) {
  const anchors: ('start' | 'middle' | 'end')[] = ['middle', 'start', 'start', 'end', 'end'];
  const gridPoly = (f: number) => RADAR_AXES.map((_, i) => radPt(f, i).join(',')).join(' ');
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="RAG EVALUATION PROFILE" />

        {/* dashed concentric grid + spokes */}
        {[0.33, 0.66, 1].map((f) => (
          <polygon key={f} points={gridPoly(f)} strokeOpacity={f === 1 ? 0.45 : 0.28} strokeWidth="0.9" strokeDasharray="3 4" />
        ))}
        {RADAR_AXES.map((ax, i) => {
          const [x, y] = radPt(1, i);
          return <path key={ax.name} d={`M${RAD.cx},${RAD.cy}L${x},${y}`} strokeOpacity="0.4" strokeWidth="0.8" />;
        })}
        {[0.33, 0.66, 1].map((f) => (
          <text key={f} x={RAD.cx + 6} y={RAD.cy - f * RAD.r + 3} fontFamily={MONO} fontSize="7" fill="currentColor" stroke="none" fillOpacity="0.5">
            {f.toFixed(2)}
          </text>
        ))}

        {/* axis labels */}
        {RADAR_AXES.map((ax, i) => {
          const [x, y] = radPt(1.22, i);
          return (
            <text key={ax.name} x={x} y={y + 3} textAnchor={anchors[i]} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
              {ax.name}
            </text>
          );
        })}

        {/* data polygon + vertex dots + values */}
        <polygon
          points={RADAR_AXES.map((ax, i) => radPt(ax.value, i).join(',')).join(' ')}
          fill="currentColor"
          fillOpacity="0.08"
          strokeOpacity="0.9"
          strokeWidth="1.4"
        />
        {RADAR_AXES.map((ax, i) => {
          const [x, y] = radPt(ax.value, i);
          const [lx, ly] = radPt(ax.value + 0.15, i);
          return (
            <g key={ax.name}>
              <circle cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" fillOpacity="0.9" />
              <text x={lx} y={ly + 3} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill="currentColor" stroke="none" fillOpacity="0.85">
                {ax.value.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* side notes */}
        <rect x={520} y={110} width={248} height={104} className="fill-surface" strokeOpacity="0.7" strokeWidth="1" />
        <text x={536} y={134} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
          SCALE 0.0–1.0
        </text>
        <text x={536} y={152} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
          GRID 0.33 / 0.66 / 1.00
        </text>
        <text x={536} y={170} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.75">
          MEAN 0.85
        </text>
        <text x={536} y={194} fontFamily={MONO} fontSize="8.5" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.6">
          † HALLUCINATION INVERTED
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 09 — MEV searcher pipeline                                      */
/* ------------------------------------------------------------------ */

const MEV_STEPS: { label: string; sub?: string; param: string; above: boolean }[] = [
  { label: 'SCOUT', sub: '(SUB-MS)', param: 'MEMPOOL + LANDED TX', above: false },
  { label: 'PRICING', sub: '(AMM)', param: 'xy = k REQUOTE', above: true },
  { label: 'CROSS-DEX ARB', param: 'ΔP > FEES + TIP', above: false },
  { label: 'JITO BUNDLE', param: 'TIP AUCTION · 1 SLOT', above: true },
];

export function FigBlocks({ className = '' }: { className?: string }) {
  const x0 = 36;
  const w = 140;
  const gap = 32;
  const y = 104;
  const h = 44;
  const bx = (i: number) => x0 + i * (w + gap);
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="MEV SEARCHER PIPELINE" />

        {MEV_STEPS.map((s, i) => (
          <g key={s.label}>
            <Box x={bx(i)} y={y} w={w} h={h} label={s.label} sub={s.sub} />
            <text
              x={bx(i) + w / 2}
              y={s.above ? y - 10 : y + h + 16}
              textAnchor="middle"
              fontFamily={MONO}
              fontSize="7.5"
              letterSpacing="1"
              fill="currentColor"
              stroke="none"
              fillOpacity="0.6"
            >
              {s.param}
            </text>
            {i < MEV_STEPS.length - 1 && <LineArrow x1={bx(i) + w + 2} y1={y + h / 2} x2={bx(i + 1) - 2} y2={y + h / 2} />}
          </g>
        ))}

        {/* profit marker */}
        <LineArrow x1={bx(3) + w + 2} y1={y + h / 2} x2={722} y2={y + h / 2} />
        <rect x={724} y={y + 4} width="52" height="36" className="fill-surface" strokeOpacity="0.8" strokeWidth="1.1" />
        <text x={750} y={y + 27} textAnchor="middle" fontFamily={MONO} fontSize="15" fill="currentColor" stroke="none" fillOpacity="0.9">
          $
        </text>
        <text x={750} y={y + h + 16} textAnchor="middle" fontFamily={MONO} fontSize="8" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.7">
          PROFIT
        </text>

        {/* slot-time axis */}
        <path d="M36,210 H770" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="4 4" />
        <Head x={776} y={210} deg={0} opacity={0.7} />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${bx(i) + w / 2},206 V214`} strokeOpacity="0.55" strokeWidth="1" />
        ))}
        <path d="M750,206V214" strokeOpacity="0.55" strokeWidth="1" />
        <text x={x0} y={232} fontFamily={MONO} fontSize="8.5" letterSpacing="1.5" fill="currentColor" stroke="none" fillOpacity="0.65">
          SLOT TIME
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG 10 — rubric as DAG                                              */
/* ------------------------------------------------------------------ */

export function FigDAG({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 300"
      className={`block h-auto w-full text-foreground ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" fill="none">
        <FigTitle text="RUBRIC AS DAG" />

        {/* main chain */}
        <Box x={36} y={56} w={132} h={28} label="READ FILE" />
        <Box x={206} y={56} w={132} h={28} label="QUOTE EVIDENCE" fontSize={8.5} />
        <Box x={376} y={56} w={132} h={28} label="CALC VALUE" />
        <Box x={546} y={56} w={132} h={28} label="FINAL ANSWER" />
        <LineArrow x1={170} y1={70} x2={204} y2={70} />
        <LineArrow x1={340} y1={70} x2={374} y2={70} />
        <LineArrow x1={510} y1={70} x2={544} y2={70} />

        {/* reasoning side branch */}
        <Box x={291} y={124} w={132} h={28} label="REASON STEP" />
        <LineArrow x1={292} y1={86} x2={334} y2={122} />
        <LineArrow x1={423} y1={132} x2={566} y2={90} />

        {/* format + leak gate */}
        <Box x={546} y={124} w={132} h={28} label="FORMAT" />
        <LineArrow x1={612} y1={86} x2={612} y2={122} />
        <Box x={36} y={124} w={132} h={28} label="NO LEAK" />
        <LineArrow x1={102} y1={86} x2={102} y2={122} />

        {/* hurdle gate (double frame = must pass) */}
        <Box x={206} y={196} w={132} h={28} label="HURDLE" double />
        <text x={348} y={208} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
          HURDLE — MUST PASS
        </text>
        <path d="M612,152 V214 H344" strokeOpacity="0.8" strokeWidth="1" />
        <Head x={340} y={214} deg={180} />
        <path d="M102,152 V210 H198" strokeOpacity="0.8" strokeWidth="1" />
        <Head x={202} y={210} deg={0} />

        {/* dashed FAIL edges */}
        <path d="M60,152 V186" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="4 4" />
        <text x={60} y={200} textAnchor="middle" fontFamily={MONO} fontSize="10" fill="currentColor" stroke="none" fillOpacity="0.8">
          ✗
        </text>
        <text x={72} y={200} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
          FAIL
        </text>
        <path d="M272,224 V252" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="4 4" />
        <text x={272} y={266} textAnchor="middle" fontFamily={MONO} fontSize="10" fill="currentColor" stroke="none" fillOpacity="0.8">
          ✗
        </text>
        <text x={284} y={266} fontFamily={MONO} fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" fillOpacity="0.7">
          FAIL → REWORK
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* ProjectFigure — dispatch by project id                              */
/* ------------------------------------------------------------------ */

export function ProjectFigure({ id, className = '' }: { id: string; className?: string }) {
  switch (id) {
    case 'benchmark-synthesis':
      return (
        <FigPipeline
          steps={['WORKSPACE', 'EVIDENCE', 'DRAFT', 'TRIAL-SOLVER', 'REVIEW', 'EXPORT']}
          gates={['QUOTE GATE', 'EMBEDDING ROUTE', 'BLIND→HINT', 'QA GATE']}
          className={className}
        />
      );
    case 'difficulty-calibration':
    case 'benchmark-difficulty':
      return <FigCalibration className={className} />;
    case 'eval-platform':
    case 'office-harnesses':
    case 'judge-reliability':
    case 'agent-as-judge':
    case 'eval-validity':
      return <FigJudge className={className} />;
    case 'adversarial-verification':
    case 'adversarial-code-review':
    case 'nvwa':
      return <FigFanout className={className} />;
    case 'harbor-eval':
    case 'eval-plumbing':
      return <FigMatrix className={className} />;
    case 'medical-acm':
    case 'adversarial-qc':
      return <FigLoop className={className} />;
    case 'rag-eval':
      return <FigRadar className={className} />;
    case 'solana-mev':
    case 'solana-mev-guide':
    case '9':
      return <FigBlocks className={className} />;
    case 'rubric-dags':
      return <FigDAG className={className} />;
    case 'syndata-pipeline':
    case 'toolathlon-mcp':
    case 'evidence-ledger':
    default:
      return <FigPipeline className={className} />;
  }
}
