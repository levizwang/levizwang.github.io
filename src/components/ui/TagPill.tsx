import type { ReactNode } from 'react';

/** Monospace tag chip used in capability/case-study/experience cards. */
export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}
