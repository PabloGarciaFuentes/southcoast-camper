import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import Press from './components/Press';
import { CamperIcon, ToolsIcon, LaserIcon, LocationIcon, PhoneIcon, EmailIcon } from './components/icons';
import { getHomePage } from '@/services/home';
import { getLogoMenu } from '@/services/logo';

// Configuración de ISR - regenerar cada 60 segundos
export const revalidate = 60;

export default async function Home() {
  // Inicializar variables con valores seguros
  let homePageData: { intro_title?: string; intro_description?: string } = {};
  let logoMenuUrl = '';

  // Intentar obtener home page desde Strapi
  try {
    const data = await getHomePage();
    // data?.data viene de Strapi según tu tipado en services/home.ts
    homePageData = data?.data || {};
  } catch (error) {
    console.error('❌ Error fetching home page data:', error);
  }

  // Intentar obtener logo desde Strapi
  try {
    logoMenuUrl = await getLogoMenu();
  } catch (error) {
    console.error('❌ Error fetching logo data:', error);
  }

  const { intro_title, intro_description } = homePageData;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden scroll-smooth">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">

            {/* ********************* MENU ********************* */}
            <DesktopMenu logoUrl={logoMenuUrl} />
            <MobileMenu logoUrl={logoMenuUrl} />
            {/* ********************* END MENU ********************* */}


            {/* ********************* INTRO ********************* */}
            <Intro intro_title={intro_title} intro_description={intro_description} />
            {/* ********************* END INTRO ********************* */}


            {/* ********************* GALLERY ********************* */}
            <Gallery />
            {/* ********************* END GALLERY ********************* */}


            {/* ********************* SERVICES ********************* */}
            <div className="flex flex-col gap-10 px-4 py-10 @container" id="services">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Nuestros Servicios</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Desde transformaciones completas hasta los detalles más finos, damos vida a tu visión con materiales de calidad y artesanía experta.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary">
                    <CamperIcon size={32} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Conversiones de Furgonetas</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Conversiones completas de furgonetas adaptadas a tus necesidades de aventura, desde aislamiento y electricidad hasta fontanería y diseño de distribución.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary">
                    <ToolsIcon size={32} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Mobiliario Personalizado</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Diseñamos y construimos mobiliario de alta calidad y eficiente en espacio que se adapta perfectamente a la distribución de tu caravana y tu estilo personal.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary">
                    <LaserIcon size={32} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Grabado Láser</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Añade un toque personal con grabado láser personalizado en superficies de madera, desde paneles decorativos hasta señalización personalizada.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ********************* END SERVICES ********************* */}


            {/* ********************* VIDEO ********************* */}
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
            {/* ********************* END VIDEO ********************* */}


            {/* ********************* PRESS ********************* */}
            <Press />
            {/* ********************* END PRESS ********************* */}


            {/* ********************* CONTACT ********************* */}
            <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 @container" id="contact">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Contacta con Nosotros</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">¿Preparado para comenzar tu proyecto? Rellena el formulario o utiliza los datos de contacto que aparecen abajo. Estamos emocionados de conocer el proyecto de tus sueños.</p>
                <div className="flex flex-col gap-4 mt-4 text-white">
                  <div className="flex items-center gap-3">
                    <LocationIcon className="text-primary" size={24} />
                    <span>C. de la Baila, 4, 11510 Puerto Real, Cádiz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="text-primary" size={24} />
                    <span>(+34) 664 484 557</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <EmailIcon className="text-primary" size={24} />
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
            {/* ********************* END CONTACT ********************* */}


            {/* ********************* FOOTER ********************* */}
            <footer className="mt-10 border-t border-solid border-white/10 px-4 sm:px-6 lg:px-10 py-6 text-center text-slate-400 text-sm">
              <p>© 2024 SouthCoast Camper. All rights reserved.</p>
            </footer>
            {/* ********************* END FOOTER ********************* */}

          </div>
        </div>
      </div>
    </div>
  );
}