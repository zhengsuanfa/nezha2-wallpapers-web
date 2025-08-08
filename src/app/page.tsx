import { getWallpapers } from '@/lib/data';
import WallpaperCard from '@/components/WallpaperCard';
import SparkleBackground from '@/components/SparkleBackground';

export default function HomePage() {
  const wallpapers = getWallpapers();
  
  // 分组逻辑：01、02，25-32为竖版，其他为横版
  const landscapeWallpapers = wallpapers.filter(wallpaper => {
    const id = wallpaper.id;
    const num = parseInt(id.replace('nezha2_', ''));
    return !(num === 1 || num === 2 || (num >= 25 && num <= 32));
  });
  
  const portraitWallpapers = wallpapers.filter(wallpaper => {
    const id = wallpaper.id;
    const num = parseInt(id.replace('nezha2_', ''));
    return num === 1 || num === 2 || (num >= 25 && num <= 32);
  });

  return (
    <div className="min-h-screen relative">
      {/* 哪吒风格火花背景 */}
      <SparkleBackground />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        {/* Page Header */}
        <div className="relative py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow mb-4">
              哪吒2壁纸宇宙
            </h1>
            <p className="text-xl text-white/80 text-shadow max-w-3xl mx-auto mb-4">
              精选《哪吒2》电影中的精美壁纸，点击图片即可下载
            </p>
          </div>
        </div>

        {/* 公司介绍部分 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-lg mb-3">🎬</div>
            <h2 className="text-lg sm:text-xl font-bold text-white text-shadow mb-4">
              你好，热爱哪吒2的你！
            </h2>
            <div className="text-white/90 text-sm leading-relaxed space-y-3 text-left">
              <p>
                我们是一群怀揣梦想的大学生，成立了一个初创公司，专注于AI软硬件的研发，也承接各种软件开发项目。最近哪吒2上线，我们实在太喜欢这部电影，决定做一个壁纸站，记录每一个燃爆瞬间。
              </p>
              <p>
                如果你也有好看的截图，欢迎发给我们，一起打造这个小小的热爱合集💖
              </p>
              <div className="text-center mt-4">
                <p className="text-base font-semibold text-orange-300 mb-1">📮 投稿邮箱：</p>
                <a 
                  href="mailto:public@neovurge.com" 
                  className="text-lg font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  public@neovurge.com
                </a>
              </div>
              <p className="mt-4">
                同时，我们也正在发起一个&ldquo;灵衍智联 · 企业联盟&rdquo;计划，面向中小企业，前100家免费制作官网，欢迎加入我们，一起点亮未来。
              </p>
              <div className="text-center mt-4 pt-3 border-t border-white/20">
                <p className="text-white/70 italic text-xs">
                  —— 来自灵衍未来（武汉市）科技有限公司
                </p>
                <p className="text-white/80 mt-1 text-sm">
                  做点有趣的事，留点热血的痕迹。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wallpaper Grid - 分组显示 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* 横图组 */}
          {landscapeWallpapers.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center text-shadow">横版壁纸</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {landscapeWallpapers.map((wallpaper) => (
                  <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
                ))}
              </div>
            </div>
          )}

          {/* 竖图组 */}
          {portraitWallpapers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center text-shadow">竖版壁纸</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {portraitWallpapers.map((wallpaper) => (
                  <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
