// Configuración para Strapi Cloud
const BASE_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Datos por defecto cuando Strapi no está disponible
const defaultData = {
  data: {
    intro_title: "Transforma Tu Viaje. Artesanía para la Carretera.",
    intro_description: "Conversiones de Furgonetas Expertas, Mobiliario Personalizado y Grabado Láser de Precisión."
  }
};

export async function getStrapiData(url: string) {
    // Si no hay URL de Strapi configurada, usar datos por defecto
    if (!BASE_URL || BASE_URL === 'http://localhost:1337' && process.env.NODE_ENV === 'production') {
        console.log('Using default data (no Strapi URL configured for production)');
        return defaultData;
    }

    try {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        // Añadir token de autorización si está disponible
        if (API_TOKEN) {
            headers['Authorization'] = `Bearer ${API_TOKEN}`;
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            headers,
            // Cache con revalidación para ISR
            next: { revalidate: 60 }, // Revalidar cada 60 segundos
            // Timeout para evitar builds largos
            signal: AbortSignal.timeout(10000)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Data fetched successfully from Strapi Cloud');
        return data;
    } catch (error) {
        console.error('❌ Error fetching data from Strapi:', error);
        console.log('🔄 Falling back to default data');
        return defaultData;
    }
}