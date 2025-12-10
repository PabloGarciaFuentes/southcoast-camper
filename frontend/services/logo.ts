// services/logo.ts
import { getStrapiData, StrapiResponse } from "@/lib/strapi";
import { getStrapiImageUrl, StrapiImage } from "@/helpers/strapiImage";

export interface Logo {
  id: number;
  image: StrapiImage;
}

export async function getLogoMenu(): Promise<string> {
  const data: StrapiResponse<Logo> = await getStrapiData('/api/logo?populate=image');
  return getStrapiImageUrl(data.data.image);
}
