// lib/strapi.ts

const BASE_URL =
  process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Tipado genérico para la respuesta de Strapi
export type StrapiResponse<T> = {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// Tipado para single-type o collection-type
export type StrapiData<T> = T extends { id: number } ? T : T[];

export async function getStrapiData<T>(
  endpoint: string
): Promise<StrapiResponse<T>> {
  if (!BASE_URL) {
    throw new Error('STRAPI_URL no está configurada');
  }

  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (API_TOKEN) headers['Authorization'] = `Bearer ${API_TOKEN}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    next: { revalidate: 60 }, // ISR
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
