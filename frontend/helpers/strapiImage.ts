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

  const url = img.formats?.[size]?.url || img.url;
  if (!url) return '';

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  return url.startsWith('http') ? url : `${baseUrl}${url}`;
}
