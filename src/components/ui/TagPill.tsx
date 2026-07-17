import type { ReactNode } from 'react';

/** Square mono annotation chip used in capability/case-study/experience cards. */
export function TagPill({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}
