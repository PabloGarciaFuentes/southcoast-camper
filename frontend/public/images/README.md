# Images Directory Structure

This directory contains all static images for the SouthCoast Camper website.

## 📁 Directory Organization

### `/logo/`
- `logo.svg` - Main logo (vector format, recommended)
- `logo.png` - Logo in PNG format for compatibility
- `logo-dark.svg` - Dark mode variant (if needed)
- `logo-icon.svg` - Icon only without text
- `favicon.ico` - Website favicon

### `/gallery/`
- Gallery images for the services showcase
- Van conversion photos
- Custom furniture examples
- Laser engraving samples

### `/icons/`
- Custom icons and small graphics
- Service icons
- UI elements

## 💡 Usage Examples

```tsx
// Logo in header
import Image from 'next/image'

<Image 
  src="/images/logo/logo.svg"
  alt="SouthCoast Camper"
  width={120}
  height={40}
  priority
/>

// Gallery images
<Image
  src="/images/gallery/van-conversion-1.jpg"
  alt="Van conversion example"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

## 🎨 Image Guidelines

- **Logo**: SVG preferred for scalability
- **Gallery**: WebP or JPEG, optimized for web
- **Icons**: SVG for crispness at all sizes
- **Naming**: Use kebab-case (e.g., `van-conversion-1.jpg`)