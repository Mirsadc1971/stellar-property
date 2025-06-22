import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function OHare() {
  return (
    <CommunityLayout
      title="O'Hare, Chicago"
      metaDescription="Expert property management services in O'Hare, Chicago's airport-adjacent area. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599609939591-044013333893"
      description="Airport-adjacent area with modern developments, business travelers, and convenient transportation. O'Hare offers urban convenience with airport access."
      history="The O'Hare community area developed primarily after World War II with the expansion of O'Hare International Airport, which opened to commercial air traffic in 1955. Originally part of the surrounding townships, the area was annexed to Chicago to secure the airport for the city. The neighborhood has evolved to serve the needs of the airport, with hotels, office parks, and residential developments catering to business travelers and airport employees."
      features={[
        "Airport Access",
        "Modern Developments",
        "Business Travelers",
        "O'Hare International Airport",
        "Catherine Chevalier Woods"
      ]}
      propertyTypes={[
        "Modern Condos",
        "Business Housing",
        "Hotel-condominium properties",
        "Townhouse developments",
        "Corporate housing"
      ]}
      managementServices={[
        "Business traveler accommodation",
        "Airport-adjacent property expertise",
        "Corporate housing solutions",
        "Hotel-condominium management",
        "Transportation-oriented property oversight"
      ]}
      region="Far North Side"
      hoaFees="$250-$600/month"
    />
  );
}