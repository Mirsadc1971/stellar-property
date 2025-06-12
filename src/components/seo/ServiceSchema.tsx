
import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  areaServed: string;
  provider?: {
    name: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone?: string;
    email?: string;
  };
  offers?: {
    description: string;
    price?: string;
    priceCurrency?: string;
  };
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  areaServed,
  provider = {
    name: "Stellar Property Management",
    address: {
      streetAddress: "5107 North Western Avenue Ste 1S",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60625",
      addressCountry: "US"
    },
    telephone: "+17737280652",
    email: "info@stellarpropertygroup.com"
  },
  offers
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceName,
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": provider.name,
      "address": provider.address ? {
        "@type": "PostalAddress",
        ...provider.address
      } : undefined,
      "telephone": provider.telephone,
      "email": provider.email
    },
    "offers": offers ? {
      "@type": "Offer",
      "description": offers.description,
      "price": offers.price,
      "priceCurrency": offers.priceCurrency || "USD"
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
};

export default ServiceSchema;
