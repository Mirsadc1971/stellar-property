import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function WestTown() {
  return (
    <CommunityLayout
      title="West Town, Chicago"
      metaDescription="Expert property management services in West Town, Chicago's trendy area including Wicker Park and Ukrainian Village. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577398-5f8dddba007b"
      description="Trendy area encompassing Wicker Park, Ukrainian Village, and surrounding neighborhoods. West Town offers hip urban living with artistic flair and nightlife."
      history="West Town developed in the late 19th century as an industrial and residential area for European immigrants, particularly Polish, German, and Ukrainian communities. The neighborhood experienced economic challenges in the mid-20th century before beginning a revitalization in the 1980s and 90s. Today, West Town encompasses several distinct sub-neighborhoods including Wicker Park and Ukrainian Village, known for their historic architecture, artistic character, and vibrant commercial districts."
      features={[
        "Artistic Community",
        "Trendy Nightlife",
        "Historic Architecture",
        "Division Street entertainment corridor",
        "Chicago Avenue arts district"
      ]}
      propertyTypes={[
        "Loft Conversions",
        "Historic Condos",
        "Victorian and worker cottages",
        "Two-flat and three-flat buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Historic building preservation",
        "Mixed-use property expertise",
        "Entertainment district management",
        "Multi-unit building operations",
        "Commercial property solutions"
      ]}
      region="Central/Downtown"
      hoaFees="$200-$650/month"
    />
  );
}