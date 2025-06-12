
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
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes
}) => {
  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('unsplash.com')) return '';
    
    const sizesToGenerate = [400, 800, 1200, 1600];
    return sizesToGenerate
      .map(size => `${baseSrc}?w=${size}&q=80 ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);
  const optimizedSrc = src.includes('unsplash.com') ? `${src}?w=1200&q=80` : src;

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet || undefined}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
    />
  );
};

export default OptimizedImage;
