import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

/** Outlined pill-shaped router link used for the "View all" / back actions. */
export function PillLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
    >
      {children}
    </Link>
  );
}
