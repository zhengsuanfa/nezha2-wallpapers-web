'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: ResponsiveImageProps) {
  const [imageRatio, setImageRatio] = useState<'landscape' | 'portrait'>('landscape');

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const ratio = img.naturalWidth / img.naturalHeight;
    setImageRatio(ratio > 1 ? 'landscape' : 'portrait');
  };

  return (
    <div 
      className={`relative overflow-hidden bg-black/20 ${
        imageRatio === 'portrait' 
          ? 'aspect-[3/4]' 
          : 'aspect-[16/9]'
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300"
        sizes={sizes}
        priority={priority}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
