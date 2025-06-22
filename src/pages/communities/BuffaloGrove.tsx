import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function BuffaloGrove() {
  return (
    <CommunityLayout
      title="Buffalo Grove, Illinois"
      metaDescription="Expert property management services in Buffalo Grove, a family-friendly northwest suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
      description="Affluent suburban community with excellent schools, family-friendly atmosphere, and modern amenities. Buffalo Grove offers premium suburban living with strong community values."
      history="Buffalo Grove was incorporated in 1958, making it a relatively young suburb. The area was originally settled in the 1840s by German farmers who named it for the buffalo that once roamed the area. Significant development occurred in the 1960s and 1970s, transforming it from a small farming community into a thriving residential suburb."
      features={[
        "Affluent Community",
        "Excellent Schools",
        "Family-Friendly",
        "Buffalo Grove Golf Course",
        "Buffalo Creek Forest Preserve"
      ]}
      propertyTypes={[
        "Luxury Condos",
        "Executive Townhomes",
        "Single-family homes",
        "Condominium developments",
        "Senior living communities"
      ]}
      managementServices={[
        "Homeowners association management",
        "Townhouse community operations",
        "Community amenity oversight",
        "Common area maintenance",
        "Reserve fund planning"
      ]}
      region="Northwest Suburbs"
      hoaFees="$300-$800/month"
    />
  );
}