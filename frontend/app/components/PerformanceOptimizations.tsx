import { Suspense } from 'react';

// Componente para precargar recursos críticos
export function CriticalResources() {
  return (
    <>
      {/* Precargar CSS crítico */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* DNS prefetch para recursos externos */}
      <link rel="dns-prefetch" href="//lh3.googleusercontent.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Preconnect para recursos críticos */}
      <link rel="preconnect" href="https://lh3.googleusercontent.com" />
      
      {/* Meta tags para performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0287B8" />
      
      {/* Resource hints */}
      <link rel="prefetch" href="/api/revalidate" />
    </>
  );
}

// Componente Skeleton para loading states
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 p-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`animate-pulse bg-gray-700 rounded-lg ${
            i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
          }`}
        />
      ))}
    </div>
  );
}

export function PressSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="animate-pulse bg-gray-700 aspect-[4/3] rounded-lg" />
          <div className="space-y-2">
            <div className="animate-pulse bg-gray-700 h-4 rounded" />
            <div className="animate-pulse bg-gray-700 h-3 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Wrapper para lazy loading de componentes
export function LazyWrapper({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}