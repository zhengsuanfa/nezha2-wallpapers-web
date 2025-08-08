import { getWallpaperById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DownloadImage from '@/components/DownloadImage';
import SparkleBackground from '@/components/SparkleBackground';

interface DownloadPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { id } = await params;
  const wallpaper = getWallpaperById(id);

  if (!wallpaper) {
    notFound();
  }

  return (
    <div className="min-h-screen relative">
      {/* 哪吒风格火花背景 */}
      <SparkleBackground />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* 返回按钮 */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
          </div>

          <div className="flex flex-col items-center">
            {/* 壁纸图片 - 全比例显示 */}
            <div className="mb-8">
              <DownloadImage
                src={wallpaper.image}
                alt={wallpaper.title}
              />
            </div>

            {/* 下载按钮 */}
            <div className="w-full max-w-md">
              <a
                href={wallpaper.image}
                download={wallpaper.title}
                className="block w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-4 px-6 rounded-lg text-center hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                📥 立即下载
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
