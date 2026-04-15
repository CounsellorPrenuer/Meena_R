import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Meena_R',
  assetPrefix: '/Meena_R',
};

export default nextConfig;
