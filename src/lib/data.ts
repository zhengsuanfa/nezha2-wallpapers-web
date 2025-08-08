import wallpapersData from '@/data/wallpapers.json';
import { Wallpaper } from '@/types';

export function getWallpapers(): Wallpaper[] {
  return wallpapersData;
}

export function getWallpaperById(id: string): Wallpaper | undefined {
  return wallpapersData.find(wallpaper => wallpaper.id === id);
}
