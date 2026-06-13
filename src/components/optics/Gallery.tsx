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
      <div className="max-w-[1600px] mx-auto">
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
              className="px-8 py-3 border border-gray-300 dark:border-[#333333] rounded-lg text-sm font-medium hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
            >
              {t(ui.loadMore)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}