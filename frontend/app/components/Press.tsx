'use client';
import Image from 'next/image';

interface PressItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  quote: string;
}

const pressItems: PressItem[] = [
  {
    id: 'la-voz',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5A2wSRzKGkDbAhvCog9kivVBiPx9JoROB8osbtoWJWGfXfbapgWB8SR3rYVYckX6hA5N8WjkUzmLELdmK71lqLAX4ZFqvqTi_DKYTQzkMt5qfh3uW5khA2yM2QtTQoyYhQHoOXM_ghgax-7DgFnjzw4rzcnSszOwPKbbdYNIHgdzmJv4A4_ckIOqf6obhybmSIo-ULW9FJb6yABuBJ-qUoUKTTNpHszuKb7D4KjX2o6eDQwK5IhLLGoP8eNOO3GZ5eUyH9WfHln0',
    alt: 'Logo de La Voz del Sur o captura de pantalla del artículo',
    title: 'La Voz del Sur',
    quote: 'Redefiniendo la vida móvil con conversiones impresionantes y artesanales.'
  },
  {
    id: 'camper-weekly',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwzn5wc6X3SN24j1OrYHUbyLROpyZYoR5-PQ2bhFjTFsNp7M8Uh1jZSLEu5FLuTO7426e12S3VJEJydbIXjymGLvkGroRJEHatvopnTU2K-LklCQHq131WVLwvnK0rQPGnI_W78UtDqcrRcUAIMRlZVSy0htvhdJf2CjzU-EGFJ-3g9fuzOnBdj-OpDh5SNHEIQwKl3FCmpnLbYxgD1cZqPr6sTbIaNTc3xLLHN5rl9lzmil82jlnlAF6xTatoDOyFgZ3yB0V1_Ls',
    alt: 'Portada de la revista Camper Weekly o captura de pantalla del artículo',
    title: 'Camper Weekly',
    quote: 'Una mirada en profundidad al meticuloso proceso de grabado láser.'
  },
  {
    id: 'road-timber',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBREYVdRYR4gCHkvDa2AY-swZ6Suw2ozb7HIdCYHDBW8Yk68lwiVh1BhCO5akGk6cdqI90XOm2CUxOf6fK_HIq0cLw7Ryd3-e44S4TN0BxqCUhTRXbhKJU9UzaFd8hDyiS1BfRAZetHWfLCfh-0VbdNOqab2ByPJXnMti3SzeYIthFr3QP8RFS9cNv9aQYzQ7UwVFsy-RZ9wVFg6PhcdFd73pkhq0_QAXus55WYcKFSAccxmJYUZYtC7o5auyaKdr6Kvqgm-ZUVTA',
    alt: 'Captura de pantalla de la publicación Road & Timber',
    title: 'Road & Timber',
    quote: 'No tienes que sacrificar la comodidad por una vida de aventura.'
  },
  {
    id: 'van-life',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdZZcccQTi_ZTtsHNr-02j3P1sF760ayLiJupL3STioOrLWr0do1dK0tgAlmRvds5UFSu1gqKu4dUf1HeOQXOqAw03Bluj6GXaMH6-AvRP3-4Yg6IoVLvAgIWG0Jv_ZhrMQDXs0tVs03mPgy2Z7v6NYi3W-9QjVrgo3dY-PwD90QGnwUhYuNtI42cmYiRLTzz40z-dDIJBtVekE-NYZ_Jo-SWH7ofM4Gu8bUdNsWaTHlmh0VanDqYZOUXjeQYJGvZUQ4qvppcWRuU',
    alt: 'Portada de la revista Van Life Journal',
    title: 'Van Life Journal',
    quote: 'Mostrando su compromiso con la calidad y las soluciones personalizadas.'
  }
];

export default function Press() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container" id="press">
      <div className="flex flex-col gap-4">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          En Prensa
        </h1>
        <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">
          Nos enorgullece aparecer en publicaciones que comparten nuestra pasión por la artesanía y el movimiento de la vida en furgoneta.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pressItems.map((item, index) => (
          <a
            key={item.id}
            className="group flex flex-col gap-3 overflow-hidden rounded-lg"
            href="#"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading={index < 2 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={80}
              />
            </div>
            <div className="flex flex-col p-1">
              <h3 className="font-bold text-white group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 line-clamp-3">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}