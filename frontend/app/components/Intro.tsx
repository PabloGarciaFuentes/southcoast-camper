'use client';

interface IntroProps {
  intro_title?: string;
  intro_description?: string;
}

export default function Intro({ intro_title, intro_description }: IntroProps) {

  return (
    <>
    <div className="@container mt-5" id="intro">
        <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10" data-alt="A beautifully crafted wooden interior of a camper van with warm lighting." style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw")'}}>
                <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">{intro_title}</h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">{intro_description}</h2>
                </div>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors hover:bg-primary/90" href="#gallery">
                <span className="truncate">Ver Nuestro Trabajo</span>
                </a>
            </div>
        </div>
    </div>
    </>
  );
}