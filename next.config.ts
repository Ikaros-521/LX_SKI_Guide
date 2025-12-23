import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 解决GitHub Pages路径问题 - 只在生产环境应用
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/LX_SKI_Guide',
    assetPrefix: '/LX_SKI_Guide',
  }),
  // 确保静态资源正确导出
  trailingSlash: true,
};

export default nextConfig;
