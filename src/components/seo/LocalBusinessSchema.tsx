import React from 'react';
import { seoConfig } from '@/config/seo';

interface LocalBusinessSchemaProps {
  customData?: Record<string, any>;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ customData = {} }) => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": seoConfig.baseUrl,
    "name": seoConfig.business.name,
    "alternateName": seoConfig.business.alternateName,
    "url": seoConfig.baseUrl,
    "logo": `${seoConfig.baseUrl}${seoConfig.images.logo}`,
    "image": `${seoConfig.baseUrl}${seoConfig.images.defaultOg}`,
    "description": seoConfig.defaultDescription,
    "telephone": seoConfig.business.phone,
    "email": seoConfig.business.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.business.address.streetAddress,
      "addressLocality": seoConfig.business.address.addressLocality,
      "addressRegion": seoConfig.business.address.addressRegion,
      "postalCode": seoConfig.business.address.postalCode,
      "addressCountry": seoConfig.business.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": seoConfig.business.geo.latitude,
      "longitude": seoConfig.business.geo.longitude
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "AdministrativeArea",
        "name": "North Suburbs of Chicago"
      }
    ],
    "serviceType": [
      "HOA Management",
      "Condo Association Management", 
      "Property Management",
      "Community Management",
      "Financial Management",
      "Maintenance Coordination"
    ],
    "openingHours": seoConfig.business.openingHours,
    "sameAs": seoConfig.business.socialMedia,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Management Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "HOA Management Chicago",
          "description": "Complete HOA and condo association management services in Chicago"
        },
        {
          "@type": "Service", 
          "name": "Property Maintenance",
          "description": "24/7 maintenance services for Chicago properties"
        },
        {
          "@type": "Service",
          "name": "Financial Management",
          "description": "Professional financial services for property associations in Chicago"
        }
      ]
    },
    ...customData
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default LocalBusinessSchema;