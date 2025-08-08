'use client';

import Image from 'next/image';
import { useState } from 'react';

interface DownloadImageProps {
  src: string;
  alt: string;
}

export default function DownloadImage({ src, alt }: DownloadImageProps) {
  const [imageRatio, setImageRatio] = useState<'landscape' | 'portrait'>('landscape');

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const ratio = img.naturalWidth / img.naturalHeight;
    setImageRatio(ratio > 1 ? 'landscape' : 'portrait');
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden glass-effect bg-black/20 ${
        imageRatio === 'portrait' 
          ? 'max-w-md' 
          : 'max-w-4xl'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto object-contain"
        sizes="(max-width: 1024px) 100vw, 800px"
        priority
        onLoad={handleImageLoad}
      />
    </div>
  );
}
