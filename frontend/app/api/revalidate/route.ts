import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Verificar token de seguridad
    const secret = request.nextUrl.searchParams.get('secret');
    const revalidateSecret = process.env.REVALIDATE_SECRET;

    if (!revalidateSecret || secret !== revalidateSecret) {
      console.error('❌ Invalid revalidate secret');
      return NextResponse.json({ 
        message: 'Unauthorized - Invalid secret' 
      }, { status: 401 });
    }

    // Obtener el body del webhook de Strapi
    const body = await request.json();
    console.log('🔄 Webhook received from Strapi:', body?.model || 'Unknown model');

    // Revalidar páginas específicas
    const pagesToRevalidate = [
      '/', // Página principal
      '/gallery', // Si tienes página de galería
      '/services', // Si tienes página de servicios
    ];

    for (const path of pagesToRevalidate) {
      try {
        revalidatePath(path);
        console.log(`✅ Revalidated: ${path}`);
      } catch (error) {
        console.error(`❌ Error revalidating ${path}:`, error);
      }
    }

    return NextResponse.json({ 
      revalidated: true,
      timestamp: new Date().toISOString(),
      paths: pagesToRevalidate
    });

  } catch (error) {
    console.error('❌ Error in revalidate webhook:', error);
    return NextResponse.json({ 
      message: 'Error processing webhook',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Permitir GET para testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidate webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}