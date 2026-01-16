#!/bin/bash

# Script to optimize images by converting them to WebP format
# This significantly reduces file sizes while maintaining quality

cd "$(dirname "$0")/.."

echo "Optimizing images in public/food-images..."

for image in public/food-images/*.png; do
  if [ -f "$image" ]; then
    filename=$(basename "$image" .png)
    webp_file="public/food-images/${filename}.webp"
    
    # Skip if WebP already exists and is newer than the PNG
    if [ -f "$webp_file" ] && [ "$webp_file" -nt "$image" ]; then
      echo "Skipping $filename.png (WebP already up to date)"
      continue
    fi
    
    echo "Converting $filename.png to WebP..."
    cwebp -q 85 "$image" -o "$webp_file"
    
    # Show file size comparison
    if [ -f "$webp_file" ]; then
      original_size=$(du -h "$image" | cut -f1)
      webp_size=$(du -h "$webp_file" | cut -f1)
      echo "  ✓ $filename: $original_size → $webp_size"
    fi
  fi
done

echo ""
echo "Image optimization complete!"
echo "Remember to update your components to use .webp files with .png fallbacks"
