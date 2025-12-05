'use client';
import Image from 'next/image';

export default function DesktopMenu() {

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 lg:px-10 py-3" id="home">
        <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-4">
            <div className="size-40 text-primary">
                <Image
                src="/images/logo/LOGO_INSTAGRAM.png"
                alt="SouthCoast Camper Logo"
                width={160}
                height={160}
                className="w-40 h-40 object-contain"
                priority
                quality={100}
                unoptimized={false}
                />
            </div>
            </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
            <a className="text-white text-base font-medium leading-normal hover:text-primary" href="#home">Inicio</a>
            <a className="text-white text-base font-medium leading-normal hover:text-primary" href="#gallery">Galería</a>
            <a className="text-white text-base font-medium leading-normal hover:text-primary" href="#services">Servicios</a>
            <a className="text-white text-base font-medium leading-normal hover:text-primary" href="#press">Prensa</a>
            <a className="text-white text-base font-medium leading-normal hover:text-primary" href="#contact">Contacto</a>
            </div>
            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90" href="#contact">
            <span className="truncate">Solicitar Presupuesto</span>
            </a>
        </div>
      </header>
    </>
  );
}