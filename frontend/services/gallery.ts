// services/gallery.ts
import { getStrapiData, StrapiResponse } from "@/lib/strapi";
import { getStrapiImageUrl, StrapiImage } from "@/helpers/strapiImage";

export interface GalleryData {
  id: number;
  main_image: StrapiImage;
  main_image_title: string;
  main_image_description: string;
  image_1: StrapiImage;
  image_1_title: string;
  image_2: StrapiImage;
  image_2_title: string;
  image_3: StrapiImage;
  image_3_title: string;
  image_4: StrapiImage;
  image_4_title: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
}

// Función para transformar los datos de Strapi al formato esperado por el componente
export function transformGalleryData(data: GalleryData): GalleryItem[] {
  return [
    {
      id: 'main-image',
      src: getStrapiImageUrl(data.main_image, 'large'), // Usar tamaño large para la imagen principal
      alt: data.main_image_title,
      title: data.main_image_title,
      description: data.main_image_description,
      priority: true
    },
    {
      id: 'image-1',
      src: getStrapiImageUrl(data.image_1, 'medium'), // Usar tamaño medium para las demás
      alt: data.image_1_title,
      title: data.image_1_title,
      description: '', // Solo la imagen principal tiene descripción
    },
    {
      id: 'image-2',
      src: getStrapiImageUrl(data.image_2, 'medium'),
      alt: data.image_2_title,
      title: data.image_2_title,
      description: '',
    },
    {
      id: 'image-3',
      src: getStrapiImageUrl(data.image_3, 'medium'),
      alt: data.image_3_title,
      title: data.image_3_title,
      description: '',
    },
    {
      id: 'image-4',
      src: getStrapiImageUrl(data.image_4, 'medium'),
      alt: data.image_4_title,
      title: data.image_4_title,
      description: '',
    }
  ];
}

export async function getGalleryData(): Promise<StrapiResponse<GalleryData>> {
  try {
    const result = await getStrapiData<GalleryData>('/api/gallery?populate=*');
    
    // Debug: Log de las URLs generadas
    if (result.data && process.env.NODE_ENV === 'development') {
      console.log('🖼️  Gallery images URLs:', {
        main_image: getStrapiImageUrl(result.data.main_image, 'large'),
        image_1: getStrapiImageUrl(result.data.image_1, 'medium'),
        image_2: getStrapiImageUrl(result.data.image_2, 'medium'),
        image_3: getStrapiImageUrl(result.data.image_3, 'medium'),
        image_4: getStrapiImageUrl(result.data.image_4, 'medium'),
      });
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error fetching gallery data:', error);
    throw error;
  }
}

// Función legacy para compatibilidad (si se necesita)
export async function getGalleryImages(): Promise<string> {
  const data: StrapiResponse<GalleryData> = await getStrapiData('/api/gallery?populate=main_image');
  return getStrapiImageUrl(data.data.main_image);
}
