import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

/** Outlined square router link used for the "View all" / back actions. */
export function PillLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-foreground/60 hover:bg-surface"
    >
      {children}
    </Link>
  );
}
