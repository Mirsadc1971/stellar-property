
import React from 'react';
import { seoConfig } from '@/config/seo';

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'breadcrumb' | 'website';
  data?: any;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data = {} }) => {
  const generateSchema = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": seoConfig.business.name,
      "alternateName": seoConfig.business.alternateName,
      "url": seoConfig.baseUrl,
      "logo": `${seoConfig.baseUrl}${seoConfig.images.logo}`,
      "image": `${seoConfig.baseUrl}${seoConfig.images.defaultOg}`,
      "description": seoConfig.defaultDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.business.address.streetAddress,
        "addressLocality": seoConfig.business.address.addressLocality,
        "addressRegion": seoConfig.business.address.addressRegion,
        "postalCode": seoConfig.business.address.postalCode,
        "addressCountry": seoConfig.business.address.addressCountry
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": seoConfig.business.phone,
        "contactType": "customer service",
        "areaServed": "Chicago, IL",
        "availableLanguage": "English"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.business.geo.latitude,
        "longitude": seoConfig.business.geo.longitude
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:30",
        "closes": "16:30"
      },
      "sameAs": seoConfig.business.socialMedia
    };

    switch (type) {
      case 'organization':
        return baseOrganization;

      case 'localBusiness':
        return {
          ...baseOrganization,
          "@type": "LocalBusiness",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Check",
          "currenciesAccepted": "USD",
          "areaServed": [
            {
              "@type": "City",
              "name": "Chicago",
              "sameAs": "https://en.wikipedia.org/wiki/Chicago"
            },
            {
              "@type": "AdministrativeArea",
              "name": "North Suburbs",
              "containedInPlace": {
                "@type": "State",
                "name": "Illinois"
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": data.serviceType || "Property Management",
          "provider": baseOrganization,
          "areaServed": data.areaServed || "Chicago, IL",
          "offers": {
            "@type": "Offer",
            "description": data.description || "Professional property management services"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": seoConfig.siteName,
          "url": seoConfig.baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${seoConfig.baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "publisher": baseOrganization
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items || []
        };

      default:
        return baseOrganization;
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
