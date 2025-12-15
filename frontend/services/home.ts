// services/home.ts
import { getStrapiData, StrapiResponse } from "@/lib/strapi";
import { StrapiImage } from "@/helpers/strapiImage";

export interface HomePage {
  id: number;
  intro_title: string;
  intro_description: string;
  intro_button: string;
  intro_image: StrapiImage;
}

export async function getHomePage(): Promise<StrapiResponse<HomePage>> {
  return getStrapiData<HomePage>('/api/home-page?populate=*');
}
