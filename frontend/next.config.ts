import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ❌ export estático desactivado para ISR
  // output: 'export',

  trailingSlash: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.strapiapp.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'http', hostname: 'localhost', port: '1337' }
    ],
    unoptimized: false,
    // Optimizaciones de performance para imágenes
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Optimización de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Compresión y optimizaciones
  compress: true,
  poweredByHeader: false,

  env: {
    STRAPI_URL: process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL,
  },

  // Headers para mejor performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
