'use client';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'full-conversion',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVdUhUlhTSc17elgGKDe_kYnr0zh9z9JybhMNZs3l1TEXfN0VIXnRvNVjtT4pqpaQK8JbuJQWYjKxQRfO-_z-KjvGULCLvk1Gk0h17fP5uTB6WoV-dLlHs9j5nzYtSgIdj5glNvcf3LESQGd83zhHcl5007lofRil8GMLTHnpWEykwd4HWQ8lhBl0Oj3LKFBVOHzYtVy3bcBd7OH05AVNZuRXtRxoOAE-ZzFY_QAOm7roPGQqAiwmkQZJqXwF7ERABF3v3M6WIF34',
    alt: 'Conversión completa de furgoneta con cama, cocina y área de descanso',
    title: 'Full Van Conversions',
    description: 'Conversiones completas de furgonetas',
    priority: true
  },
  {
    id: 'custom-cabinetry',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWf2yBEgn2vOcFysq1M3SBtIc8A5cYJ_vGQI5okA95CacX6GitMwZsNTwoZ2Ko0RxrQliccrwIGs_78BwGRy02y-LvQel9EopHHm0QAIwACUDwclR0MTsBOoFUsv70actRR3_Pu3OJUn0cRy910CFhM7TbN1QEeNeSkOvUxyZDlymnklKBYnAhcD8dctthUl6h5IcUJPVesCkDeLCXgTOVFLUN4ufebwFY042M-JgQkI1hJDFGmeBOK7FNvNwUd_CbvzpTEx9pYK0',
    alt: 'Muebles de madera personalizados construidos a medida dentro de una furgoneta camper',
    title: 'Custom Cabinetry',
    description: 'Mobiliario personalizado artesanal'
  },
  {
    id: 'laser-engraved',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_meBAxsikZWaG9qYzSDwHNDz3arhgNmuU5PDxQV1HGJQEG9xzDvXYZRXQQOEH8n5xFr0AgOIbUyy1lfoxlCO4h2cSvP-v4BtgTbRHSTXo9TnE54b1drkSYYD0cWIUcjDaKuegH0tsQ-lG8HSMFM8EMnhHwCwBsehz5L-1mEty7JVoWN7uZoJazFLSgDAAGMRxj8v5TnGf39HVVt8OASt1govJMdHziQrQjprSrnBwTghQk3360hMUWW2caTt2aX9DEE9qCtNa_t8',
    alt: 'Escena de montaña grabada con láser intrincado en un panel de madera',
    title: 'Laser Engraved Details',
    description: 'Detalles grabados con láser de precisión'
  },
  {
    id: 'bespoke-furniture',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoka-eBWHF2RTFcytfRYSkf0DdUbnH_DQP2rZbFEuqLfrCyFkxHxCZf8mZctH329NDMIwQRUL3n2gD_K4lgP3muMJ7EUnzY9__ULKJGrtOUkhLkRT741SYk3lZaxnhW1wGfsQDL7hh86HCgJq-SSw7321VEd2eKX4cwoQoNx4-ntIqEb1wTWLQ52eYtQSBVOpmb9_DfwSWEWl_enscMHeQfbrpyj35dnbhOUUTJjYsthyvb9boCWe8agfXkzAiZ4AVRgWTQheEanY',
    alt: 'Mesa y asiento de banco plegable hecho a medida en una furgoneta',
    title: 'Bespoke Furniture',
    description: 'Muebles a medida para espacios únicos'
  },
  {
    id: 'sleeping-area',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHWCNAW2zYWHQZ9Kzkq4Smtmj1o99-rPdzlVZgi4C5rW_AUa0XWatwVRSOL7UxxzDy4ubAYgRkm3TaXKt65EnAQTRj-es4FQBoQt3aZ9tVu7f-wb2XmUaotLhSLgOm_9uhenPKtcZqNbG1xfk0DYtlAIs0Kj_OktChbFB3BVz9bYi2gu0ot1ul_oBtzSSyqTNXvvGxUyMrjOsZHs6cG5rd1bGytPNofmgM1uo5gf5GuEGWmIehsL5Ll6bC9vjXna5u0ndHV4bwnzU',
    alt: 'Área de dormitorio acogedora y bien iluminada con soluciones de almacenamiento personalizadas',
    title: 'Cozy Sleeping Nooks',
    description: 'Espacios de descanso cómodos y funcionales'
  }
];

export default function Gallery() {
  return (
    <div id="gallery">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Nuestra Artesanía
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
        {galleryItems.map((item, index) => (
          <a
            key={item.id}
            className={`group relative block overflow-hidden rounded-lg ${
              index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
            }`}
            href="#"
          >
            {/* Imagen Optimizada */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={item.priority}
              loading={item.priority ? 'eager' : 'lazy'}
              sizes={index === 0 
                ? "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                : "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
              }
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none z-10">
              <p className="text-white text-lg font-bold leading-tight mb-1">
                {item.title}
              </p>
              {index === 0 && (
                <p className="text-white/80 text-sm leading-normal hidden md:block">
                  {item.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}