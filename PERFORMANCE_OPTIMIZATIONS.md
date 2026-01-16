# Performance Optimizations

This document outlines the performance optimizations implemented to improve image delivery, reduce page load time, and enhance Core Web Vitals (LCP, FCP).

## Image Optimization

### Problem
The original hero images were large PNG files:
- `riceBowl.png`: 1.8 MB
- `burgerAndPopcorn.png`: 2.0 MB

This resulted in:
- Estimated savings of **1,578 KiB**
- Slow Largest Contentful Paint (LCP)
- Poor mobile performance

### Solution
Implemented WebP image format with PNG fallbacks:

#### 1. Converted Images to WebP
All images in `public/food-images/` were converted to WebP format with 85% quality:
- `riceBowl.png` (1.8MB) → `riceBowl.webp` (110KB) - **94% reduction**
- `burgerAndPopcorn.png` (2.0MB) → `burgerAndPopcorn.webp` (143KB) - **93% reduction**
- `burger.png` (1.9MB) → `burger.webp` (124KB) - **93% reduction**
- `fries.png` (1.9MB) → `fries.webp` (80KB) - **96% reduction**
- `loaded-fries.png` (1.9MB) → `loaded-fries.webp` (108KB) - **94% reduction**
- `popcorn-chicken.png` (1.9MB) → `popcorn-chicken.webp` (100KB) - **95% reduction**

#### 2. Updated HeroSection Component
Modified [src/components/HeroSection.tsx](src/components/HeroSection.tsx) to:
- Detect WebP support in the browser
- Serve WebP images to supported browsers
- Fallback to PNG for older browsers
- Maintain image quality while reducing bandwidth

#### 3. Added vite-imagetools
Installed `vite-imagetools` plugin for automatic image optimization during build:
- Enables query-based image transformations
- Supports WebP, AVIF formats
- Automatic image resizing and quality adjustment

### Optimization Script
Created `scripts/optimize-images.sh` to automate image conversion:

```bash
npm run optimize:images
```

This script:
- Converts all PNG files in `public/food-images/` to WebP
- Uses 85% quality for optimal size/quality balance
- Skips already optimized images
- Shows file size comparisons

## Font Loading Optimization

### Problem
Google Fonts were blocking the initial render, causing:
- 750ms render blocking time
- Delayed First Contentful Paint (FCP)

### Solution
Optimized font loading in [index.html](index.html):

1. **Added preconnect hints**: Establishes early connections to Google Fonts servers
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   ```

2. **Added font-display=swap**: Ensures text remains visible during font loading
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
   ```

### Benefits
- Text appears immediately with system fonts
- Custom fonts swap in when loaded
- No invisible text during loading (FOIT)
- Improved perceived performance

## Network Optimization

### Preconnect Strategy
The `preconnect` hints save approximately 100-500ms by:
- Performing DNS lookup early
- Establishing TCP connection
- Performing TLS negotiation

### Critical Request Chain
Reduced the critical path latency by optimizing:
- Font loading (non-blocking with display=swap)
- Image loading (smaller WebP files)
- Asset prioritization

## Performance Impact

### Expected Improvements
- **LCP (Largest Contentful Paint)**: Reduced by ~1.5s due to smaller hero images
- **FCP (First Contentful Paint)**: Improved by ~750ms with optimized font loading
- **Total Bundle Size**: Reduced by ~9MB (all images combined)
- **Bandwidth Savings**: ~95% reduction in image data transfer

### Browser Support
- **WebP Support**: Chrome, Edge, Firefox, Safari 14+, Opera
- **Fallback**: PNG images for older browsers (Safari < 14, IE11)

## Build Configuration

Added to [vite.config.ts](vite.config.ts):
```typescript
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    imagetools()  // Image optimization plugin
  ],
})
```

## Usage Guidelines

### For Developers

1. **Adding New Images**: 
   - Place PNG/JPG files in `public/food-images/`
   - Run `npm run optimize:images` to generate WebP versions

2. **Using Images in Components**:
   ```tsx
   // Detect WebP support
   const supportsWebP = () => {
     const elem = document.createElement('canvas');
     return elem.getContext?.('2d') && 
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
   };

   // Use WebP with fallback
   const imageSrc = supportsWebP() 
     ? '/food-images/image.webp' 
     : '/food-images/image.png';
   ```

3. **For Background Images**:
   ```tsx
   style={{ backgroundImage: `url(${imageSrc})` }}
   ```

4. **For img tags** (recommended approach):
   ```tsx
   <picture>
     <source srcSet="/food-images/image.webp" type="image/webp" />
     <img src="/food-images/image.png" alt="Description" />
   </picture>
   ```

### Best Practices

1. **Image Quality**: Use 85% quality for WebP (good balance of size/quality)
2. **Image Dimensions**: Serve images at their display size (use responsive images)
3. **Lazy Loading**: Consider adding `loading="lazy"` for below-fold images
4. **Modern Formats**: Prefer WebP over PNG/JPG, AVIF for even better compression

## Monitoring

After deployment, monitor these metrics:
- Lighthouse Performance Score
- Core Web Vitals (LCP, FCP, CLS)
- PageSpeed Insights scores
- Real User Monitoring (RUM) data

## Future Optimizations

Consider implementing:
1. **AVIF Format**: Even better compression than WebP (Safari 16+)
2. **Responsive Images**: Serve different sizes based on viewport
3. **CDN Integration**: Serve images from edge locations
4. **Image Lazy Loading**: Load images as they enter viewport
5. **Service Worker**: Cache images for offline access
6. **HTTP/2 Push**: Preload critical images

## Tools Used

- **cwebp**: WebP encoder (installed via `webp` package)
- **vite-imagetools**: Vite plugin for image optimization
- **Lighthouse**: Performance testing and metrics
