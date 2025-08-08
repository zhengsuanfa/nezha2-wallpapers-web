import Link from 'next/link';
import { Wallpaper } from '@/types';
import ResponsiveImage from './ResponsiveImage';

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
      <Link href={`/download/${wallpaper.id}`}>
        <ResponsiveImage
          src={wallpaper.image}
          alt={wallpaper.title}
          className="group-hover:scale-110"
        />
        
        {/* 悬停效果 */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-lg font-semibold mb-2">点击下载</div>
            <div className="text-sm opacity-80">查看大图并下载</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
