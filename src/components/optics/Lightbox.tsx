import { useEffect, useRef } from 'react';
import { X, MapPin, Camera } from 'lucide-react';
import { Photo } from '@/types/optics';
import { useT, ui } from '@/i18n/lang';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    focusables()[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const els = focusables();
        if (els.length === 0) {
          e.preventDefault();
          return;
        }
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.classList.add('scroll-locked');

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('scroll-locked');
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-fadeIn"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-[2px] border border-line bg-surface text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground"
        aria-label={t(ui.closeLightbox)}
      >
        <X className="h-5 w-5" />
      </button>

      <div className="grid max-h-[90vh] w-full max-w-7xl gap-8 md:grid-cols-[1fr_400px]">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[85vh] w-auto rounded-[2px] border border-line shadow-2xl"
          />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-4">
          {/* Title */}
          <div>
            <h2 className="mb-2 text-3xl font-semibold tracking-tight text-foreground">{photo.title}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{photo.location}</span>
            </div>
          </div>

          {/* Tech Specs */}
          <div className="rounded-[2px] border border-line bg-surface p-4">
            <div className="mb-3 flex items-center gap-2">
              <Camera className="h-4 w-4 text-brand" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {t(ui.techSpecs)}
              </h3>
            </div>
            <div className="space-y-2 font-mono text-xs text-foreground/85">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground/70">{t(ui.camera)}</span>
                <span>{photo.camera}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground/70">{t(ui.lens)}</span>
                <span>{photo.lens}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground/70">{t(ui.iso)}</span>
                <span>{photo.iso}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground/70">{t(ui.aperture)}</span>
                <span>{photo.aperture}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground/70">{t(ui.shutter)}</span>
                <span>{photo.shutter}</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {t(ui.story)}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{photo.story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
