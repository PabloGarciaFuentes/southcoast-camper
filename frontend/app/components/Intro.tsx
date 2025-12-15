'use client';
import Image from 'next/image';

interface IntroProps {
  intro_title?: string;
  intro_description?: string;
  intro_button?: string;
}

export default function Intro({ intro_title, intro_description, intro_button }: IntroProps) {

  return (
    <>
    <div className="@container mt-5" id="intro">
        <div className="@[480px]:p-4">
            <div className="relative flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10 overflow-hidden">
                {/* Background Image Optimizada */}
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw=w1200-h675-c"
                  alt="Interior de furgoneta camper con muebles de madera artesanales"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 1200px"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/10 z-10"></div>
                
                <div className="relative z-20 flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">{intro_title || "Transforma Tu Viaje. Artesanía para la Carretera."}</h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">{intro_description || "Conversiones de Furgonetas Expertas, Mobiliario Personalizado y Grabado Láser de Precisión."}</h2>
                </div>
                <a className="relative z-20 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors hover:bg-primary/90" href="#gallery">
                <span className="truncate">{intro_button || "Ver Nuestro Trabajo"}</span>
                </a>
            </div>
        </div>
    </div>
    </>
  );
}