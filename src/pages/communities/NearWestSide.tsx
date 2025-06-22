import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NearWestSide() {
  return (
    <CommunityLayout
      title="Near West Side, Chicago"
      metaDescription="Expert property management services in Near West Side, Chicago's dynamic area with university and medical district. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1597626133663-53df9633b799"
      description="Dynamic area including University of Illinois at Chicago campus, medical district, and emerging residential developments. Near West Side offers urban convenience with institutional presence."
      history="The Near West Side has a rich and complex history, from its early days as home to immigrants working in nearby factories to its current status as a center for education, healthcare, and urban redevelopment. The area includes the historic Maxwell Street Market, the University of Illinois at Chicago campus (built in the 1960s), and the Illinois Medical District. Recent decades have seen significant residential development, particularly in the Fulton Market and West Loop sections."
      features={[
        "University Area",
        "Medical District",
        "Urban Development",
        "University of Illinois at Chicago",
        "Illinois Medical District"
      ]}
      propertyTypes={[
        "Student Housing",
        "Medical Professional Housing",
        "Converted industrial lofts",
        "Modern residential developments",
        "Mixed-use properties"
      ]}
      managementServices={[
        "University-adjacent property expertise",
        "Medical district housing solutions",
        "Mixed-use property management",
        "Student housing operations",
        "Institutional property coordination"
      ]}
      region="Central/Downtown"
      hoaFees="$250-$700/month"
    />
  );
}