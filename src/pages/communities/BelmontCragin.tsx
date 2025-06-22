import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function BelmontCragin() {
  return (
    <CommunityLayout
      title="Belmont Cragin, Chicago"
      metaDescription="Expert property management services in Belmont Cragin, Chicago's diverse working-class neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Diverse working-class neighborhood with strong Latino community, affordable housing, and family-oriented atmosphere. Belmont Cragin offers authentic multicultural living."
      history="Belmont Cragin developed in the late 19th century as a manufacturing center and working-class residential area. The neighborhood experienced significant demographic changes in the late 20th century, with a large influx of Latino residents, particularly from Mexico and Puerto Rico. Today, it remains one of Chicago's most densely populated neighborhoods, known for its affordable housing, family-oriented character, and vibrant cultural diversity."
      features={[
        "Latino Community",
        "Working-class",
        "Diverse Population",
        "Riis Park",
        "Belmont Avenue commercial corridor"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Multi-family Buildings",
        "Chicago bungalows",
        "Two-flat and three-flat buildings",
        "Small apartment buildings"
      ]}
      managementServices={[
        "Affordable housing solutions",
        "Multi-family building operations",
        "Culturally diverse community expertise",
        "Commercial property oversight",
        "Community-focused management"
      ]}
      region="Northwest Side"
      hoaFees="$150-$400/month"
    />
  );
}