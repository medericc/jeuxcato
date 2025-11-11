import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
};

export default withPWA({
  dest: 'public',
  disable: isDev, // désactive le service worker en dev
})(nextConfig);
