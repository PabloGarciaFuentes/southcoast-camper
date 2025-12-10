import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cambiar a ISR para Strapi Cloud (comentar 'export' para habilitar ISR)
  // output: 'export', // Descomenta esta línea si quieres volver a exportación estática
  
  trailingSlash: true,
  
  images: {
    // Dominios permitidos para imágenes de Strapi Cloud
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
      },
      {
        protocol: 'https', 
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Si usas Cloudinary
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // Para desarrollo local
      }
    ],
    // Solo unoptimized si usas exportación estática
    unoptimized: false,
  },

  // Variables de entorno públicas
  env: {
    STRAPI_URL: process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL,
  },
};

export default nextConfig;
