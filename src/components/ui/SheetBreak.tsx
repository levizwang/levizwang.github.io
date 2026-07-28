/** Sheet cut line — a hairline with registration crosses and a sheet-number
 *  tab, separating the long page into drawing sheets. */
export function SheetBreak({ n }: { n: string }) {
  return (
    <div aria-hidden className="mx-auto mt-16 max-w-content px-6 md:mt-20">
      <div className="flex items-center gap-4 text-muted-foreground/45">
        <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="6" cy="6" r="4" />
          <path d="M6 0.5V11.5M0.5 6H11.5" />
        </svg>
        <div className="h-px flex-1 bg-line/60" />
        <span className="font-mono text-[9px] uppercase tracking-[0.22em]">SHT. {n}</span>
        <div className="h-px flex-1 bg-line/60" />
        <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="6" cy="6" r="4" />
          <path d="M6 0.5V11.5M0.5 6H11.5" />
        </svg>
      </div>
    </div>
  );
}
