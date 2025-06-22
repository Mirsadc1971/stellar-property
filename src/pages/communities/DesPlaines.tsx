import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function DesPlaines() {
  return (
    <CommunityLayout
      title="Des Plaines, Illinois"
      metaDescription="Expert property management services in Des Plaines, a diverse suburban community. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
      description="Diverse suburban community with excellent transportation access, family amenities, and growing business district. Des Plaines offers affordable suburban living with urban convenience."
      history="Des Plaines developed along the Des Plaines River and was incorporated as a city in 1925. The opening of O'Hare International Airport nearby in the 1950s spurred significant growth. The city is known as the home of the first McDonald's franchise opened by Ray Kroc in 1955 (now a museum). Throughout its history, Des Plaines has maintained a balance of residential, commercial, and industrial development that has created a diverse and stable community."
      features={[
        "Transportation Hub",
        "Diverse Community",
        "Business District",
        "Rivers Casino",
        "Des Plaines River Trail"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Family Townhomes",
        "Single-family homes",
        "Mid-century subdivisions",
        "Mixed-use developments"
      ]}
      managementServices={[
        "Homeowners association management",
        "Townhouse community operations",
        "Commercial property solutions",
        "Multi-family building operations",
        "Community amenity oversight"
      ]}
      region="Northwest Suburbs"
      hoaFees="$200-$550/month"
    />
  );
}