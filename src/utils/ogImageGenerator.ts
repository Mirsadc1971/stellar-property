
import { seoConfig } from '@/config/seo';

interface OGImageOptions {
  title: string;
  neighborhood?: string;
  serviceArea?: string;
  type: 'neighborhood' | 'service' | 'general';
}

export const generateOGImageUrl = (options: OGImageOptions): string => {
  const { title, neighborhood, serviceArea, type } = options;
  
  // For now, we'll use a placeholder service that generates images with text overlay
  // In production, you would integrate with a service like Vercel's OG Image Generation
  // or create custom images using Canvas API
  
  const baseImageUrl = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625';
  
  // Generate different images based on type
  switch (type) {
    case 'neighborhood':
      return `${baseImageUrl}?w=1200&h=630&q=80&txt=${encodeURIComponent(title)}&txt-size=48&txt-color=ffffff&txt-align=center,middle&overlay=gradient&overlay-color=000000&overlay-opacity=60`;
    
    case 'service':
      return `${baseImageUrl}?w=1200&h=630&q=80&txt=${encodeURIComponent(title)}&txt-size=42&txt-color=ffffff&txt-align=center,middle&overlay=gradient&overlay-color=1e40af&overlay-opacity=70`;
    
    default:
      return `${seoConfig.baseUrl}${seoConfig.images.defaultOg}`;
  }
};

export const getNeighborhoodOGImage = (neighborhoodKey: string): string => {
  const title = seoConfig.titles[neighborhoodKey as keyof typeof seoConfig.titles] || 'Chicago Property Management';
  
  return generateOGImageUrl({
    title,
    neighborhood: neighborhoodKey,
    type: 'neighborhood'
  });
};

export const getServiceOGImage = (serviceTitle: string): string => {
  return generateOGImageUrl({
    title: serviceTitle,
    type: 'service'
  });
};
