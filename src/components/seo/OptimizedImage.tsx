
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  aspectRatio
}) => {
  // Generate srcSet for responsive images with WebP support
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('unsplash.com')) return '';
    
    const sizesToGenerate = [400, 800, 1200, 1600];
    return sizesToGenerate
      .map(size => `${baseSrc}?w=${size}&q=75&fm=webp ${size}w`)
      .join(', ');
  };

  // Generate fallback srcSet for browsers that don't support WebP
  const generateFallbackSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('unsplash.com')) return '';
    
    const sizesToGenerate = [400, 800, 1200, 1600];
    return sizesToGenerate
      .map(size => `${baseSrc}?w=${size}&q=80 ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);
  const fallbackSrcSet = generateFallbackSrcSet(src);
  const optimizedSrc = src.includes('unsplash.com') ? `${src}?w=1200&q=80` : src;
  const webpSrc = src.includes('unsplash.com') ? `${src}?w=1200&q=75&fm=webp` : src;

  // Calculate aspect ratio for preventing layout shift
  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};
  const dimensionProps = width && height ? { width, height } : {};

  // For priority images, we'll use a picture element with WebP support
  if (priority && srcSet) {
    return (
      <picture>
        <source
          srcSet={srcSet}
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          type="image/webp"
        />
        <source
          srcSet={fallbackSrcSet || undefined}
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          type="image/jpeg"
        />
        <img
          src={optimizedSrc}
          alt={alt}
          className={className}
          loading="eager"
          decoding="async"
          style={aspectRatioStyle}
          {...dimensionProps}
        />
      </picture>
    );
  }

  // For non-priority images, use regular img with lazy loading
  return (
    <img
      src={optimizedSrc}
      srcSet={fallbackSrcSet || undefined}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      style={aspectRatioStyle}
      {...dimensionProps}
    />
  );
};

export default OptimizedImage;
