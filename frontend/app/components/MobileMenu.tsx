'use client';
import { useState } from 'react';
import Image from 'next/image';

interface IntroProps {
  logoUrl?: string;
}

export default function MobileMenu({ logoUrl }: IntroProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden border-b border-solid border-white/10 p-4">
        <div className="flex items-center justify-between mb-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-primary transition-colors"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo Centered */}
          <div className="flex items-center gap-2 text-white">
            <div className="size-32 text-primary">
              <Image
                src={logoUrl || ''}
                alt="SouthCoast Camper Logo"
                width={128}
                height={128}
                className="w-32 h-32 object-contain"
                priority
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>

          {/* Spacer for centering */}
          <div className="w-6"></div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90" href="#contact">
            <span className="truncate">Solicitar Presupuesto</span>
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="fixed top-0 left-0 h-full w-80 bg-[#101922] z-50 shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-white text-lg font-bold">SouthCoast Camper</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-primary transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  <a 
                    className="text-white text-lg font-medium leading-normal hover:text-primary transition-colors" 
                    href="#home"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inicio
                  </a>
                  <a 
                    className="text-white text-lg font-medium leading-normal hover:text-primary transition-colors" 
                    href="#gallery"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Galería
                  </a>
                  <a 
                    className="text-white text-lg font-medium leading-normal hover:text-primary transition-colors" 
                    href="#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Servicios
                  </a>
                  <a 
                    className="text-white text-lg font-medium leading-normal hover:text-primary transition-colors" 
                    href="#press"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Prensa
                  </a>
                  <a 
                    className="text-white text-lg font-medium leading-normal hover:text-primary transition-colors" 
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}