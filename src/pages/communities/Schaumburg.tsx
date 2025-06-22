import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Schaumburg() {
  return (
    <CommunityLayout
      title="Schaumburg, Illinois"
      metaDescription="Expert property management services in Schaumburg, a major suburban commercial center. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
      description="A major suburban commercial center, home to Woodfield Mall and numerous corporate headquarters."
      history="Schaumburg remained primarily agricultural until the 1950s when developers began transforming farmland into residential subdivisions. The opening of Woodfield Mall in 1971, then the largest mall in America, established Schaumburg as a major commercial center. Today, it's known for its robust retail presence, corporate offices, and diverse housing options."
      features={[
        "Woodfield Mall",
        "Schaumburg Convention Center",
        "Prairie Center for the Arts",
        "Busse Woods Forest Preserve",
        "LEGOLAND Discovery Center"
      ]}
      propertyTypes={[
        "Single-family subdivisions",
        "Townhouse communities",
        "Luxury apartment complexes",
        "Condominium developments",
        "Commercial properties"
      ]}
      managementServices={[
        "Homeowners association management",
        "Commercial property solutions",
        "Retail property expertise",
        "Townhouse community operations",
        "Amenity-rich community management"
      ]}
      region="Northwest Suburbs"
    />
  );
}