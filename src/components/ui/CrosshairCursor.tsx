import { useEffect, useRef, useState } from 'react';

/**
 * Crosshair cursor — a surveyor's reticle that replaces the native pointer on
 * fine-pointer devices. Over links/buttons the reticle becomes a target frame;
 * over text fields the native I-beam takes back over. Rendered in white with
 * mix-blend-difference so it reads on both paper themes.
 */
export function CrosshairCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [overField, setOverField] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        rootRef.current?.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
      });
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      setOverField(!!el?.closest?.('input, textarea, [contenteditable="true"]'));
      setActive(!!el?.closest?.('a, button, [role="button"], select, label'));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!enabled || overField) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ transform: 'translate(-100px, -100px)' }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="-translate-x-1/2 -translate-y-1/2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M11 1v6.5M11 14.5V21M1 11h6.5M14.5 11H21" />
        {active ? (
          /* corner brackets when something clickable is under the reticle */
          <path d="M8.5 5H5v3.5M13.5 5H17v3.5M8.5 17H5v-3.5M13.5 17h3.5v-3.5" strokeWidth="1.2" />
        ) : (
          <circle cx="11" cy="11" r="1.6" />
        )}
      </svg>
    </div>
  );
}
