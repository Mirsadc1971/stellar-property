import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Wilmette() {
  return (
    <CommunityLayout
      title="Wilmette, Illinois"
      metaDescription="Expert property management services in Wilmette, an upscale North Shore suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="Prestigious North Shore community with excellent schools, beautiful lakefront, and upscale amenities. Wilmette offers elite suburban living with lake access."
      history="Wilmette was incorporated in 1872 and named after Antoine Ouilmette, a French-Canadian fur trader. The village developed as a railroad suburb in the late 19th century and experienced significant growth in the early 20th century. The completion of the Bahá'í House of Worship in 1953 added a distinctive architectural landmark to the community."
      features={[
        "Prestigious North Shore",
        "Excellent Schools",
        "Lakefront Access",
        "Bahá'í House of Worship",
        "Gillson Park and Beach"
      ]}
      propertyTypes={[
        "Luxury Lakefront Condos",
        "Prestigious Buildings",
        "Historic properties",
        "Lakefront estates",
        "New construction developments"
      ]}
      managementServices={[
        "Luxury property management",
        "Historic home association expertise",
        "Lakefront property maintenance",
        "Community association governance",
        "High-end amenity management"
      ]}
      region="North Shore"
      hoaFees="$400-$1,200/month"
    />
  );
}