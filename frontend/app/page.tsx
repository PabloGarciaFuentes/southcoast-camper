'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden scroll-smooth">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
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
                      src="/images/logo/LOGO_INSTAGRAM.png"
                      alt="SouthCoast Camper Logo"
                      width={128}
                      height={128}
                      className="w-32 h-32 object-contain"
                      priority
                      quality={100}
                      unoptimized={false}
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
            <div className="@container mt-5" id="intro">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10" data-alt="A beautifully crafted wooden interior of a camper van with warm lighting." style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw")'}}>
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Transforma Tu Viaje. Artesanía para la Carretera.</h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Conversiones de Furgonetas Expertas, Mobiliario Personalizado y Grabado Láser de Precisión.</h2>
                  </div>
                  <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors hover:bg-primary/90" href="#gallery">
                    <span className="truncate">Ver Nuestro Trabajo</span>
                  </a>
                </div>
              </div>
            </div>
            <div id="gallery">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Nuestra Artesanía</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
                <a className="group relative block md:col-span-2 md:row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-lg" href="#">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A full view of a completed van conversion with a bed, kitchen, and seating area." style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVdUhUlhTSc17elgGKDe_kYnr0zh9z9JybhMNZs3l1TEXfN0VIXnRvNVjtT4pqpaQK8JbuJQWYjKxQRfO-_z-KjvGULCLvk1Gk0h17fP5uTB6WoV-dLlHs9j5nzYtSgIdj5glNvcf3LESQGd83zhHcl5007lofRil8GMLTHnpWEykwd4HWQ8lhBl0Oj3LKFBVOHzYtVy3bcBd7OH05AVNZuRXtRxoOAE-ZzFY_QAOm7roPGQqAiwmkQZJqXwF7ERABF3v3M6WIF34")'}}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white text-lg font-bold leading-tight">Full Van Conversions</p>
                  </div>
                </a>
                <a className="group relative block aspect-square overflow-hidden rounded-lg" href="#">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Close-up of custom-built wooden cabinetry inside a camper van." style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWf2yBEgn2vOcFysq1M3SBtIc8A5cYJ_vGQI5okA95CacX6GitMwZsNTwoZ2Ko0RxrQliccrwIGs_78BwGRy02y-LvQel9EopHHm0QAIwACUDwclR0MTsBOoFUsv70actRR3_Pu3OJUn0cRy910CFhM7TbN1QEeNeSkOvUxyZDlymnklKBYnAhcD8dctthUl6h5IcUJPVesCkDeLCXgTOVFLUN4ufebwFY042M-JgQkI1hJDFGmeBOK7FNvNwUd_CbvzpTEx9pYK0")'}}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-3">Custom Cabinetry</p>
                  </div>
                </a>
                <a className="group relative block aspect-square overflow-hidden rounded-lg" href="#">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="An intricate laser-engraved mountain scene on a wooden panel." style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_meBAxsikZWaG9qYzSDwHNDz3arhgNmuU5PDxQV1HGJQEG9xzDvXYZRXQQOEH8n5xFr0AgOIbUyy1lfoxlCO4h2cSvP-v4BtgTbRHSTXo9TnE54b1drkSYYD0cWIUcjDaKuegH0tsQ-lG8HSMFM8EMnhHwCwBsehz5L-1mEty7JVoWN7uZoJazFLSgDAAGMRxj8v5TnGf39HVVt8OASt1govJMdHziQrQjprSrnBwTghQk3360hMUWW2caTt2aX9DEE9qCtNa_t8")'}}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-3">Laser Engraved Details</p>
                  </div>
                </a>
                <a className="group relative block aspect-square overflow-hidden rounded-lg" href="#">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A custom-made foldable table and bench seat in a camper." style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoka-eBWHF2RTFcytfRYSkf0DdUbnH_DQP2rZbFEuqLfrCyFkxHxCZf8mZctH329NDMIwQRUL3n2gD_K4lgP3muMJ7EUnzY9__ULKJGrtOUkhLkRT741SYk3lZaxnhW1wGfsQDL7hh86HCgJq-SSw7321VEd2eKX4cwoQoNx4-ntIqEb1wTWLQ52eYtQSBVOpmb9_DfwSWEWl_enscMHeQfbrpyj35dnbhOUUTJjYsthyvb9boCWe8agfXkzAiZ4AVRgWTQheEanY")'}}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-3">Bespoke Furniture</p>
                  </div>
                </a>
                <a className="group relative block aspect-square overflow-hidden rounded-lg" href="#">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A cozy, well-lit sleeping area with custom storage solutions." style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHWCNAW2zYWHQZ9Kzkq4Smtmj1o99-rPdzlVZgi4C5rW_AUa0XWatwVRSOL7UxxzDy4ubAYgRkm3TaXKt65EnAQTRj-es4FQBoQt3aZ9tVu7f-wb2XmUaotLhSLgOm_9uhenPKtcZqNbG1xfk0DYtlAIs0Kj_OktChbFB3BVz9bYi2gu0ot1ul_oBtzSSyqTNXvvGxUyMrjOsZHs6cG5rd1bGytPNofmgM1uo5gf5GuEGWmIehsL5Ll6bC9vjXna5u0ndHV4bwnzU")'}}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-3">Cozy Sleeping Nooks</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container" id="services">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Nuestros Servicios</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Desde transformaciones completas hasta los detalles más finos, damos vida a tu visión con materiales de calidad y artesanía experta.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Van" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">airport_shuttle</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Conversiones de Furgonetas</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Conversiones completas de furgonetas adaptadas a tus necesidades de aventura, desde aislamiento y electricidad hasta fontanería y diseño de distribución.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Couch" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">chair</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Mobiliario Personalizado</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Diseñamos y construimos mobiliario de alta calidad y eficiente en espacio que se adapta perfectamente a la distribución de tu caravana y tu estilo personal.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Sparkle" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Grabado Láser</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Añade un toque personal con grabado láser personalizado en superficies de madera, desde paneles decorativos hasta señalización personalizada.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container" id="video">
              <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Observa Nuestra Artesanía en Movimiento</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Observa cómo transformamos una furgoneta vacía en un hogar a medida sobre ruedas, mostrando la artesanía y el detalle que ponemos en cada construcción de SouthCoast Camper.</p>
              </div>
              <a className="group relative block aspect-video w-full overflow-hidden rounded-lg" href="#">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="A still from the promotional video showing a craftsman working on a van's interior." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVdUhUlhTSc17elgGKDe_kYnr0zh9z9JybhMNZs3l1TEXfN0VIXnRvNVjtT4pqpaQK8JbuJQWYjKxQRfO-_z-KjvGULCLvk1Gk0h17fP5uTB6WoV-dLlHs9j5nzYtSgIdj5glNvcf3LESQGd83zhHcl5007lofRil8GMLTHnpWEykwd4HWQ8lhBl0Oj3LKFBVOHzYtVy3bcBd7OH05AVNZuRXtRxoOAE-ZzFY_QAOm7roPGQqAiwmkQZJqXwF7ERABF3v3M6WIF34")'}}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary/80">
                    <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container" id="press">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">En Prensa</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Nos enorgullece aparecer en publicaciones que comparten nuestra pasión por la artesanía y el movimiento de la vida en furgoneta.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="La Voz del Sur newspaper logo or article screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5A2wSRzKGkDbAhvCog9kivVBiPx9JoROB8osbtoWJWGfXfbapgWB8SR3rYVYckX6hA5N8WjkUzmLELdmK71lqLAX4ZFqvqTi_DKYTQzkMt5qfh3uW5khA2yM2QtTQoyYhQHoOXM_ghgax-7DgFnjzw4rzcnSszOwPKbbdYNIHgdzmJv4A4_ckIOqf6obhybmSIo-ULW9FJb6yABuBJ-qUoUKTTNpHszuKb7D4KjX2o6eDQwK5IhLLGoP8eNOO3GZ5eUyH9WfHln0")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">La Voz del Sur</h3>
                    <p className="text-sm text-slate-400">&ldquo;Redefiniendo la vida móvil con conversiones impresionantes y artesanales.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Camper Weekly magazine cover or article screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwzn5wc6X3SN24j1OrYHUbyLROpyZYoR5-PQ2bhFjTFsNp7M8Uh1jZSLEu5FLuTO7426e12S3VJEJydbIXjymGLvkGroRJEHatvopnTU2K-LklCQHq131WVLwvnK0rQPGnI_W78UtDqcrRcUAIMRlZVSy0htvhdJf2CjzU-EGFJ-3g9fuzOnBdj-OpDh5SNHEIQwKl3FCmpnLbYxgD1cZqPr6sTbIaNTc3xLLHN5rl9lzmil82jlnlAF6xTatoDOyFgZ3yB0V1_Ls")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Camper Weekly</h3>
                    <p className="text-sm text-slate-400">&ldquo;Una mirada en profundidad al meticuloso proceso de grabado láser.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Road & Timber publication screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBREYVdRYR4gCHkvDa2AY-swZ6Suw2ozb7HIdCYHDBW8Yk68lwiVh1BhCO5akGk6cdqI90XOm2CUxOf6fK_HIq0cLw7Ryd3-e44S4TN0BxqCUhTRXbhKJU9UzaFd8hDyiS1BfRAZetHWfLCfh-0VbdNOqab2ByPJXnMti3SzeYIthFr3QP8RFS9cNv9aQYzQ7UwVFsy-RZ9wVFg6PhcdFd73pkhq0_QAXus55WYcKFSAccxmJYUZYtC7o5auyaKdr6Kvqgm-ZUVTA")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Road &amp; Timber</h3>
                    <p className="text-sm text-slate-400">&ldquo;No tienes que sacrificar la comodidad por una vida de aventura.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Van Life Journal magazine cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdZZcccQTi_ZTtsHNr-02j3P1sF760ayLiJupL3STioOrLWr0do1dK0tgAlmRvds5UFSu1gqKu4dUf1HeOQXOqAw03Bluj6GXaMH6-AvRP3-4Yg6IoVLvAgIWG0Jv_ZhrMQDXs0tVs03mPgy2Z7v6NYi3W-9QjVrgo3dY-PwD90QGnwUhYuNtI42cmYiRLTzz40z-dDIJBtVekE-NYZ_Jo-SWH7ofM4Gu8bUdNsWaTHlmh0VanDqYZOUXjeQYJGvZUQ4qvppcWRuU")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Van Life Journal</h3>
                    <p className="text-sm text-slate-400">&ldquo;Mostrando su compromiso con la calidad y las soluciones personalizadas.&rdquo;</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 @container" id="contact">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Contacta con Nosotros</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">¿Preparado para comenzar tu proyecto? Rellena el formulario o utiliza los datos de contacto que aparecen abajo. Estamos emocionados de conocer el proyecto de tus sueños.</p>
                <div className="flex flex-col gap-4 mt-4 text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span>C. de la Baila, 4, 11510 Puerto Real, Cádiz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <span>(+34) 664 484 557</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">email</span>
                    <span>southcoastcamper@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:w-1/2 bg-[#1c2127] p-6 rounded-lg border border-white/10">
                <form action="#" className="flex flex-col gap-4" method="POST">
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="name">Tu Nombre</label>
                    <input className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="name" name="name" type="text"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="email">Tu Correo Electrónico</label>
                    <input className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="email" name="email" type="email"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="message">Tu Mensaje</label>
                    <textarea className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="message" name="message" rows={4}></textarea>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90" type="submit">
                    <span className="truncate">Enviar Mensaje</span>
                  </button>
                </form>
              </div>
            </div>
            <footer className="mt-10 border-t border-solid border-white/10 px-4 sm:px-6 lg:px-10 py-6 text-center text-slate-400 text-sm">
              <p>© 2024 SouthCoast Camper. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
