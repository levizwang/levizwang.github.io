import type { ReactNode } from 'react';

/** Registration cross placed at the corners of a drafting plate. */
function Cross({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`pointer-events-none absolute z-10 h-3 w-3 text-foreground/45 ${className}`}
    >
      <path d="M6 0.5V11.5M0.5 6H11.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** A flat paper plate with a ruled ink frame and corner registration marks. */
export function Plate({
  className = '',
  marks = true,
  interactive = false,
  children,
}: {
  className?: string;
  marks?: boolean;
  /** Hover darkens the frame and inverts the title strip (for figure plates). */
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`relative ${interactive ? 'plate-interactive ' : ''}${className}`}>
      {marks && (
        <>
          <Cross className="-left-2 -top-2" />
          <Cross className="-right-2 -top-2" />
          <Cross className="-bottom-2 -left-2" />
          <Cross className="-bottom-2 -right-2" />
        </>
      )}
      <div className="surface h-full overflow-hidden">{children}</div>
    </div>
  );
}

/** Title-block strip rendered at the top of a plate: FILE / REV / UNITS labels. */
export function PlateStrip({ left, right }: { left: ReactNode; right?: ReactNode }) {
  return (
    <div className="strip">
      <span className="truncate">{left}</span>
      {right != null && <span className="shrink-0 text-right">{right}</span>}
    </div>
  );
}
