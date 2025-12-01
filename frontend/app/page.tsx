export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 lg:px-10 py-3" id="home">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-4">
                  <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                      <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SouthCoast Camper</h2>
                </div>
                <a className="text-white hover:text-primary" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.117 0-3.482.01-4.697.067-2.61.12-3.828 1.34-3.95 3.95-.057 1.214-.066 1.577-.066 4.697s.01 3.482.066 4.697c.12 2.61 1.34 3.828 3.95 3.95 1.214.057 1.577.066 4.697.066s3.482-.01 4.697-.066c2.61-.12 3.828-1.34 3.95-3.95.057-1.214.066-1.577.066-4.697s-.01-3.482-.066-4.697c-.12-2.61-1.34-3.828-3.95-3.95-1.214-.057-1.577-.066-4.697-.066zm0 2.999a4.882 4.882 0 100 9.764 4.882 4.882 0 000-9.764zm0 8.332a3.45 3.45 0 110-6.9 3.45 3.45 0 010 6.9zM16.949 6.864a1.2 1.2 0 10.001 2.4 1.2 1.2 0 000-2.4z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                  <a className="text-white text-sm font-medium leading-normal hover:text-primary" href="#home">Home</a>
                  <a className="text-white text-sm font-medium leading-normal hover:text-primary" href="#gallery">Gallery</a>
                  <a className="text-white text-sm font-medium leading-normal hover:text-primary" href="#services">Services</a>
                  <a className="text-white text-sm font-medium leading-normal hover:text-primary" href="#press">Press</a>
                  <a className="text-white text-sm font-medium leading-normal hover:text-primary" href="#contact">Contact</a>
                </div>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]" href="#contact">
                  <span className="truncate">Get a Quote</span>
                </a>
              </div>
            </header>
            <div className="@container mt-5">
              <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10" data-alt="A beautifully crafted wooden interior of a camper van with warm lighting." style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw")'}}>
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Transform Your Travel. Handcrafted for the Open Road.</h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Expert Van Conversions, Custom Camper Furniture, and Precision Laser Engraving.</h2>
                  </div>
                  <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" href="#gallery">
                    <span className="truncate">View Our Work</span>
                  </a>
                </div>
              </div>
            </div>
            <div id="gallery">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Our Craftsmanship</h2>
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
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Our Services</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">From complete transformations to the finest details, we bring your vision to life with quality materials and expert craftsmanship.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Van" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">airport_shuttle</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Van Conversions</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Full-service van conversions tailored to your adventure needs, from insulation and electrical to plumbing and layout design.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Couch" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">chair</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Custom Furniture</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">We design and build high-quality, space-efficient furniture that perfectly fits your camper&apos;s layout and your personal style.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-[#1c2127] p-4 flex-col">
                  <div className="text-primary" data-icon="Sparkle" data-size="24px" data-weight="regular">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">Laser Engraving</h2>
                    <p className="text-slate-400 text-sm font-normal leading-normal">Add a personal touch with custom laser engraving on wood surfaces, from decorative panels to personalized signage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container" id="video">
              <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">See Our Craft in Motion</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Watch how we transform an empty van into a bespoke home on wheels, showcasing the craftsmanship and detail that goes into every SouthCoast Camper build.</p>
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
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">In the Press</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">We&apos;re proud to be featured in publications that share our passion for craftsmanship and the van life movement.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="La Voz del Sur newspaper logo or article screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5A2wSRzKGkDbAhvCog9kivVBiPx9JoROB8osbtoWJWGfXfbapgWB8SR3rYVYckX6hA5N8WjkUzmLELdmK71lqLAX4ZFqvqTi_DKYTQzkMt5qfh3uW5khA2yM2QtTQoyYhQHoOXM_ghgax-7DgFnjzw4rzcnSszOwPKbbdYNIHgdzmJv4A4_ckIOqf6obhybmSIo-ULW9FJb6yABuBJ-qUoUKTTNpHszuKb7D4KjX2o6eDQwK5IhLLGoP8eNOO3GZ5eUyH9WfHln0")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">La Voz del Sur</h3>
                    <p className="text-sm text-slate-400">&ldquo;Redefining mobile living with stunning, handcrafted conversions.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Camper Weekly magazine cover or article screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwzn5wc6X3SN24j1OrYHUbyLROpyZYoR5-PQ2bhFjTFsNp7M8Uh1jZSLEu5FLuTO7426e12S3VJEJydbIXjymGLvkGroRJEHatvopnTU2K-LklCQHq131WVLwvnK0rQPGnI_W78UtDqcrRcUAIMRlZVSy0htvhdJf2CjzU-EGFJ-3g9fuzOnBdj-OpDh5SNHEIQwKl3FCmpnLbYxgD1cZqPr6sTbIaNTc3xLLHN5rl9lzmil82jlnlAF6xTatoDOyFgZ3yB0V1_Ls")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Camper Weekly</h3>
                    <p className="text-sm text-slate-400">&ldquo;An in-depth look at the meticulous laser engraving process.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Road & Timber publication screenshot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBREYVdRYR4gCHkvDa2AY-swZ6Suw2ozb7HIdCYHDBW8Yk68lwiVh1BhCO5akGk6cdqI90XOm2CUxOf6fK_HIq0cLw7Ryd3-e44S4TN0BxqCUhTRXbhKJU9UzaFd8hDyiS1BfRAZetHWfLCfh-0VbdNOqab2ByPJXnMti3SzeYIthFr3QP8RFS9cNv9aQYzQ7UwVFsy-RZ9wVFg6PhcdFd73pkhq0_QAXus55WYcKFSAccxmJYUZYtC7o5auyaKdr6Kvqgm-ZUVTA")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Road &amp; Timber</h3>
                    <p className="text-sm text-slate-400">&ldquo;You don&apos;t have to sacrifice comfort for a life of adventure.&rdquo;</p>
                  </div>
                </a>
                <a className="group flex flex-col gap-3 overflow-hidden rounded-lg" href="#">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" data-alt="Van Life Journal magazine cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdZZcccQTi_ZTtsHNr-02j3P1sF760ayLiJupL3STioOrLWr0do1dK0tgAlmRvds5UFSu1gqKu4dUf1HeOQXOqAw03Bluj6GXaMH6-AvRP3-4Yg6IoVLvAgIWG0Jv_ZhrMQDXs0tVs03mPgy2Z7v6NYi3W-9QjVrgo3dY-PwD90QGnwUhYuNtI42cmYiRLTzz40z-dDIJBtVekE-NYZ_Jo-SWH7ofM4Gu8bUdNsWaTHlmh0VanDqYZOUXjeQYJGvZUQ4qvppcWRuU")'}}></div>
                  </div>
                  <div className="flex flex-col p-1">
                    <h3 className="font-bold text-white group-hover:text-primary">Van Life Journal</h3>
                    <p className="text-sm text-slate-400">&ldquo;Showcasing their commitment to quality and custom solutions.&rdquo;</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 @container" id="contact">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Get in Touch</h1>
                <p className="text-slate-400 text-base font-normal leading-normal max-w-[720px]">Ready to start your project? Fill out the form or use the contact details below. We&apos;re excited to hear about your dream build.</p>
                <div className="flex flex-col gap-4 mt-4 text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span>123 Craftsmans Way, Unit 4B, SouthCoast, USA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">email</span>
                    <span>hello@southcoastcamper.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:w-1/2 bg-[#1c2127] p-6 rounded-lg border border-white/10">
                <form action="#" className="flex flex-col gap-4" method="POST">
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="name">Your Name</label>
                    <input className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="name" name="name" type="text"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="email">Your Email</label>
                    <input className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="email" name="email" type="email"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white" htmlFor="message">Your Message</label>
                    <textarea className="mt-1 block w-full rounded-lg border-white/10 bg-[#101922] text-white p-2 focus:ring-primary focus:border-primary" id="message" name="message" rows={4}></textarea>
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]" type="submit">
                    <span className="truncate">Send Message</span>
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
