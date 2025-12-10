# 🔄 Configuración de Webhooks en Strapi Cloud

## Pasos para configurar webhooks automáticos:

### 1. **Acceder a Strapi Admin**
- Ve a tu panel de Strapi Cloud: `https://tu-proyecto.strapiapp.com/admin`
- Inicia sesión con tus credenciales

### 2. **Configurar Webhook**
- Ve a **Settings** → **Webhooks**
- Haz clic en **"Add new webhook"**

### 3. **Configuración del Webhook**
```
Name: Netlify Revalidation
URL: https://tu-sitio.netlify.app/api/revalidate?secret=tu_secret_super_seguro_aqui
Headers: (opcional)
Events: Selecciona todos los eventos de Entry (create, update, delete)
```

### 4. **Eventos a seleccionar:**
- ✅ Entry - Create
- ✅ Entry - Update  
- ✅ Entry - Delete
- ✅ Entry - Publish
- ✅ Entry - Unpublish

### 5. **Configuración en Código**

#### **En Strapi (si tienes acceso al código backend):**
```javascript
// backend/config/plugins.js
module.exports = {
  'webhooks': {
    enabled: true,
    config: {
      populateRelations: false,
    },
  },
};
```

### 6. **Testing del Webhook**
1. Edita algún contenido en Strapi
2. Guarda los cambios
3. Ve a tu sitio web - debería actualizarse automáticamente
4. Revisa los logs en Netlify Functions para verificar que el webhook funciona

### 7. **Verificar que funciona**
```bash
# Test del endpoint
curl https://tu-sitio.netlify.app/api/revalidate?secret=tu_secret

# Debería responder con:
{
  "revalidated": true,
  "timestamp": "2024-12-05T...",
  "paths": ["/", "/gallery", "/services"]
}
```

## 🛠️ Troubleshooting

### Si el webhook no funciona:
1. **Verificar URL del webhook** - debe incluir `?secret=tu_secret`
2. **Verificar variable REVALIDATE_SECRET** en Netlify
3. **Revisar logs** en Netlify Functions
4. **Probar manualmente** el endpoint con curl

### Logs útiles:
- **Strapi**: Settings → Webhooks → Ver historial de llamadas
- **Netlify**: Site Overview → Functions → Ver logs de ejecución