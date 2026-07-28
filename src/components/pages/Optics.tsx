import { useState } from 'react';
import { Hero } from '@/components/optics/Hero';
import { FilterBar } from '@/components/optics/FilterBar';
import { Gallery } from '@/components/optics/Gallery';
import { Lightbox } from '@/components/optics/Lightbox';
import { Photo } from '@/types/optics';

export function Optics() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />
      <FilterBar 
        selectedFilter={selectedFilter} 
        onFilterChange={setSelectedFilter} 
      />
      <Gallery 
        filter={selectedFilter}
        onPhotoClick={setSelectedPhoto}
      />
      {selectedPhoto && (
        <Lightbox 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
}
