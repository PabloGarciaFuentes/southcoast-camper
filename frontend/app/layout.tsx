import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SouthCoast Camper - Conversiones de Furgonetas Artesanales",
  description: "Especialistas en transformación de furgonetas en autocaravanas personalizadas. Mobiliario artesanal, grabado láser y conversiones completas en Cádiz.",
  keywords: "furgonetas camper, conversión furgonetas, autocaravanas, mobiliario artesanal, grabado láser, Cádiz, Puerto Real",
  authors: [{ name: "SouthCoast Camper" }],
  creator: "SouthCoast Camper",
  openGraph: {
    title: "SouthCoast Camper - Conversiones de Furgonetas Artesanales",
    description: "Especialistas en transformación de furgonetas en autocaravanas personalizadas",
    url: "https://southcoast-camper.netlify.app",
    siteName: "SouthCoast Camper",
    images: [{
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw",
      width: 1200,
      height: 630,
      alt: "Interior de furgoneta camper con muebles artesanales"
    }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SouthCoast Camper - Conversiones de Furgonetas",
    description: "Especialistas en transformación de furgonetas en autocaravanas personalizadas",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA_FM5zA31yPl7AyGwFtaJSBD759GjmYHTxcKpBfSZHPi3rR9DyzAMyerpCtELNjnjhQRl_qoEEttu1P_jIZM44CTPCcfLp3d73ka8pClpz83wU8oNnNoKh6u3qzhBAofw82I2WWPcWxUFkSLRxvcnkCgOHcndLUMcF7MVlUSPLHhvKCLIy2qajRoG-IpB8qq8ljBg2jkudXuQVA1bGSTWgt8mjzmbpoDr2G7oxqV13PPnrKV78b_dtCLYIfvr4TSUna0G5ZylkQTw"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Añadir cuando tengas Google Search Console
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        {/* Preconnects críticos para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        
        {/* Google Icons - Material Symbols */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" 
          rel="stylesheet"
        />
        
        {/* Estilos para Google Icons */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
              font-variation-settings:
              'FILL' 0,
              'wght' 400,
              'GRAD' 0,
              'opsz' 24;
              user-select: none;
            }
          `
        }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-background-light dark:bg-background-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
