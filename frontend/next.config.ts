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
    // Optimizaciones agresivas de performance
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [60, 70, 75, 80, 85, 100],
    minimumCacheTTL: 31536000, // 1 año
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimización agresiva de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    webpackBuildWorker: true,
    optimizeServerReact: true,
    serverMinification: true,
  },

  // Configuración para Turbopack (Next.js 16+)
  turbopack: {
    // Optimizaciones de performance
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
