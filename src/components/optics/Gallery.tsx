import { useState } from 'react';
import { PhotoCard } from './PhotoCard';
import { Photo } from '@/types/optics';
import { photos } from '@/data/optics';
import { useT, ui } from '@/i18n/lang';

interface GalleryProps {
  filter: string;
  onPhotoClick: (photo: Photo) => void;
}

export function Gallery({ filter, onPhotoClick }: GalleryProps) {
  const t = useT();
  const [visibleCount, setVisibleCount] = useState(9);
  
  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  return (
    <div className="px-6 pb-16">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((photo) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo}
              onClick={() => onPhotoClick(photo)}
            />
          ))}
        </div>
        
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="rounded-full border border-hairline px-6 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t(ui.loadMore)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}