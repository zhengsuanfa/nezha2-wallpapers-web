import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900/20 via-orange-900/10 to-yellow-900/20">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-white mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-shadow-lg mb-4">
          页面未找到
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在。可能是链接错误或页面已被移除。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            返回首页
          </Link>
          <Link
            href="/wallpapers"
            className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            浏览壁纸
          </Link>
        </div>
      </div>
    </div>
  );
}
