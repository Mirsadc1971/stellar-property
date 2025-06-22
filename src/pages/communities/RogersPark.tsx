import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function RogersPark() {
  return (
    <CommunityLayout
      title="Rogers Park, Chicago"
      metaDescription="Expert property management services in Rogers Park, Chicago's diverse northernmost neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7"
      description="Diverse lakefront neighborhood known for its multicultural community, affordable housing options, and proximity to Loyola University. Rogers Park offers urban living with a neighborhood feel."
      history="Rogers Park was incorporated as a village in 1878, named after Irish immigrant Philip Rogers who settled in the area in the 1830s. The neighborhood was annexed to Chicago in 1893 and saw rapid development with the expansion of transit lines. Throughout the 20th century, Rogers Park became one of Chicago's most diverse communities, welcoming immigrants from around the world."
      features={[
        "Multicultural Community",
        "Affordable Housing",
        "University Area",
        "Miles of public beaches along Lake Michigan",
        "Diverse dining scene with global cuisines"
      ]}
      propertyTypes={[
        "Vintage Buildings",
        "Student Housing",
        "Courtyard buildings",
        "Single-family homes",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Student housing management",
        "Vintage building preservation",
        "Lakefront property maintenance",
        "Multi-unit building operations",
        "Diverse community engagement"
      ]}
      region="Far North Side"
      hoaFees="$150-$400/month"
    />
  );
}