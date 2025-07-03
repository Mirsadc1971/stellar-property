import { seoConfig } from '@/config/seo';
import { getNeighborhoodOGImage } from './ogImageGenerator';

export interface NeighborhoodSEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const getNeighborhoodSEO = (neighborhoodKey: string, neighborhoodName: string): NeighborhoodSEOData => {
  // Get title from configuration or generate fallback
  const title = seoConfig.titles[neighborhoodKey as keyof typeof seoConfig.titles] || 
    `${neighborhoodName} Property Management | Chicago HOA | Stellar`;

  // Get description from configuration or generate fallback
  const description = seoConfig.neighborhoods.descriptions[neighborhoodKey as keyof typeof seoConfig.neighborhoods.descriptions] || 
    `Professional property management services for ${neighborhoodName} condominiums and HOAs. Expert ${neighborhoodName} property management with 24/7 support and local expertise in Chicago.`;

  // Get keywords from configuration
  const keywords = seoConfig.neighborhoods.keywords[neighborhoodKey as keyof typeof seoConfig.neighborhoods.keywords] || 
    `${neighborhoodName} property management, ${neighborhoodName} HOA management, Chicago ${neighborhoodName} condo management, ${neighborhoodName} property management services`;

  // Generate custom OG image
  const ogImage = getNeighborhoodOGImage(neighborhoodKey);

  // Generate canonical URL
  const canonical = `/neighborhoods/${neighborhoodKey}`;

  return {
    title,
    description,
    keywords,
    ogImage,
    canonical
  };
};

export const getServiceAreaSEO = (areaKey: string, areaName: string): NeighborhoodSEOData => {
  const title = seoConfig.titles[areaKey as keyof typeof seoConfig.titles] || 
    `${areaName} Property Management Services | Stellar`;

  const description = `Professional property management services throughout ${areaName}. Expert HOA and condo management with local expertise, 24/7 support, and proven results for ${areaName} communities.`;

  const keywords = `${areaName} property management, ${areaName} HOA management, ${areaName} condo association management, ${areaName} community management services`;

  const ogImage = getNeighborhoodOGImage(areaKey);
  const canonical = `/service-areas/${areaKey}`;

  return {
    title,
    description,
    keywords,
    ogImage,
    canonical
  };
};