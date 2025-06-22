import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function HighlandPark() {
  return (
    <CommunityLayout
      title="Highland Park, Illinois"
      metaDescription="Expert property management services in Highland Park, a prestigious North Shore suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="Vibrant North Shore community with cultural attractions, excellent schools, and lakefront access. Highland Park offers dynamic North Shore living."
      history="Highland Park was incorporated in 1869 and developed as a summer retreat for wealthy Chicagoans. The city's unique topography, with deep ravines and bluffs overlooking Lake Michigan, influenced its development pattern. Highland Park became known for its architectural significance, with homes designed by notable architects including Frank Lloyd Wright and David Adler."
      features={[
        "Vibrant Community",
        "Cultural Attractions",
        "Excellent Schools",
        "Ravinia Festival outdoor music venue",
        "Rosewood Beach"
      ]}
      propertyTypes={[
        "Cultural District Condos",
        "Vibrant Properties",
        "Mid-century modern homes",
        "Ravine properties",
        "Downtown condominiums"
      ]}
      managementServices={[
        "Luxury estate management",
        "Ravine property expertise",
        "Historic home preservation",
        "Downtown commercial property solutions",
        "Community association governance"
      ]}
      region="North Shore"
      hoaFees="$350-$1,000/month"
    />
  );
}