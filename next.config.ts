import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // 禁用图片优化，直接使用原始图片
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
