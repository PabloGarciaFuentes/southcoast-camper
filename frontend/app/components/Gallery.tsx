'use client';
import Image from 'next/image';
import { GalleryItem } from '@/services/gallery';

interface GalleryProps {
  galleryItems?: GalleryItem[];
}

export default function Gallery({ galleryItems: propGalleryItems }: GalleryProps) {
  // Usar datos de props si están disponibles, sino usar datos por defecto
  const galleryItems = propGalleryItems;
  return (
    <div id="gallery">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Nuestra Artesanía
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
        {galleryItems?.map((item, index) => (
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