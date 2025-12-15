// helpers/strapiImage.ts

export type StrapiImageFormat = 'thumbnail' | 'small' | 'medium' | 'large';

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
  formats?: Record<StrapiImageFormat, { url: string }>;
  attributes?: unknown; // legacy o single-type con attributes
}

export function getStrapiImageUrl(
  image: StrapiImage | null | undefined,
  size: StrapiImageFormat = 'small'
): string {
  if (!image) return '';

  // Si viene legacy con attributes
  const img = (image.attributes ?? image) as StrapiImage;

  // Intentar obtener el formato específico, sino usar la URL original
  const url = img.formats?.[size]?.url || img.url;
  if (!url) return '';

  // Obtener la URL base de Strapi
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
  
  // Si la URL ya es completa, usarla tal como está
  if (url.startsWith('http')) {
    return url;
  }
  
  // Si no, combinar con la URL base, asegurándose de que no haya barras duplicadas
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  
  return `${cleanBaseUrl}${cleanUrl}`;
}
