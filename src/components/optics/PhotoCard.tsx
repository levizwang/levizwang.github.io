import { useEffect, useRef, useState } from 'react';
import { Photo } from '@/types/optics';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A cached image can finish loading before React attaches onLoad — catch that.
  useEffect(() => {
    if (imgRef.current?.complete) setIsLoaded(true);
  }, []);

  return (
    <div
      className="lift group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-hairline"
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A] animate-pulse" />
      )}
      
      {/* Image */}
      <img
        ref={imgRef}
        src={photo.url}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="space-y-2">
          <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
          <div className="font-mono text-xs text-[#CCFF00] space-y-1">
            <div>{photo.camera} | {photo.lens}</div>
            <div>{photo.iso} | {photo.aperture} | {photo.shutter}</div>
          </div>
        </div>
      </div>
    </div>
  );
}