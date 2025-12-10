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
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL,
  },
};

export default nextConfig;
