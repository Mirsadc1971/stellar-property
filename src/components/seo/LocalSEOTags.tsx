import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';

interface LocalSEOTagsProps {
  neighborhood?: string;
  serviceArea?: string;
}

export const LocalSEOTags: React.FC<LocalSEOTagsProps> = ({ 
  neighborhood,
  serviceArea
}) => {
  // Determine the specific location for geo tags
  const location = neighborhood || serviceArea || 'Chicago';
  
  return (
    <Helmet>
      {/* Basic Local SEO Meta Tags */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content={`${seoConfig.business.geo.latitude};${seoConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.business.geo.latitude}, ${seoConfig.business.geo.longitude}`} />
      
      {/* Local Business Information */}
      <meta name="business:contact_data:street_address" content={seoConfig.business.address.streetAddress} />
      <meta name="business:contact_data:locality" content={seoConfig.business.address.addressLocality} />
      <meta name="business:contact_data:region" content={seoConfig.business.address.addressRegion} />
      <meta name="business:contact_data:postal_code" content={seoConfig.business.address.postalCode} />
      <meta name="business:contact_data:country_name" content={seoConfig.business.address.addressCountry} />
      <meta name="business:contact_data:phone_number" content={seoConfig.business.phone} />
      <meta name="business:contact_data:website" content={seoConfig.baseUrl} />
      
      {/* Enhanced Local SEO for Neighborhoods */}
      {neighborhood && (
        <>
          <meta name="geo.region" content="US-IL-Chicago" />
          <meta name="geo.placename" content={`${neighborhood}, Chicago`} />
          <meta name="business:contact_data:service_area" content={`${neighborhood}, Chicago`} />
        </>
      )}
      
      {/* Enhanced Local SEO for Service Areas */}
      {serviceArea && (
        <>
          <meta name="geo.region" content="US-IL" />
          <meta name="geo.placename" content={serviceArea} />
          <meta name="business:contact_data:service_area" content={serviceArea} />
        </>
      )}
    </Helmet>
  );
};

export default LocalSEOTags;