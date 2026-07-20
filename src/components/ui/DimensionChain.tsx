export interface ChainItem {
  label: string;
  period: string;
}

function monthsOf(period: string): number {
  const [a, b] = period.split(' – ');
  const start = new Date(a);
  const end = !b || /present/i.test(b) ? new Date() : new Date(b);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 1;
  const m = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  return Math.max(1, m);
}

function fmt(m: number): string {
  if (m < 12) return `${m} MO`;
  const y = Math.floor(m / 12);
  const r = m % 12;
  return r ? `${y} YR ${r} MO` : `${y} YR`;
}

/**
 * Dimension chain — career history drawn as a chain of proportional
 * measurement segments, like chained dimensions on a drawing.
 */
export function DimensionChain({ items }: { items: ChainItem[] }) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-[640px]">
        {items.map((it, i) => {
          const months = monthsOf(it.period);
          return (
            <div key={i} className="flex-1 text-center" style={{ flexGrow: months, flexBasis: 0 }}>
              <div className="px-1 font-mono text-[9px] tracking-[0.14em] text-brand">{fmt(months)}</div>
              <div className="relative mt-1 h-3 text-foreground/45">
                <div className="absolute inset-x-0 top-1/2 h-px bg-foreground/45" />
                <div className="absolute left-0 top-0 h-full w-px bg-foreground/45" />
                {i === 0 && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent',
                      borderRight: '5px solid currentColor',
                    }}
                  />
                )}
                {i === items.length - 1 && (
                  <>
                    <div className="absolute right-0 top-0 h-full w-px bg-foreground/45" />
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      style={{
                        borderTop: '3px solid transparent',
                        borderBottom: '3px solid transparent',
                        borderLeft: '5px solid currentColor',
                      }}
                    />
                  </>
                )}
              </div>
              <div className="mt-1 truncate px-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground">
                {it.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
