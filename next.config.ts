import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // tu peux garder ceci
  },
};

export default nextConfig;
