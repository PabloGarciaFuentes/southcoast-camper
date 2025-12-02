# Favicon Configuration

## Adding Favicon to Your Next.js Project

To add a proper favicon to your SouthCoast Camper website:

1. **Create favicon files** in the `/public` directory (root, not `/images`):
   - `favicon.ico` - Standard favicon for older browsers
   - `icon.png` - Modern PNG favicon (recommended 32x32 or larger)
   - `apple-touch-icon.png` - For iOS/Apple devices (180x180)

2. **Optional: Use favicon generator tools** like:
   - https://realfavicongenerator.net/
   - https://favicon.io/

3. **Update metadata** in `app/layout.tsx` if needed:
```tsx
export const metadata: Metadata = {
  title: 'SouthCoast Camper',
  description: 'Premium RV rentals and outdoor adventures',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
}
```

## Current Temporary Icon
- **Location**: `/images/logo/logo-icon.svg`
- **Usage**: Can be used as a base for creating favicon files
- **Design**: Mountain/triangle design in brand blue (#137fec)

## Next Steps
1. Replace `logo-icon.svg` with your actual logo icon
2. Create favicon files from your logo
3. Place favicon files in `/public` directory
4. Test across different browsers and devices