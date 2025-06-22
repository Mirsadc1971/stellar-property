import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Wilmette() {
  return (
    <CommunityLayout
      title="Wilmette, Illinois"
      metaDescription="Expert property management services in Wilmette, an upscale North Shore suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="An upscale North Shore suburb known for excellent schools, beautiful homes, and the iconic Bahá'í Temple."
      history="Wilmette was incorporated in 1872 and named after Antoine Ouilmette, a French-Canadian fur trader. The village developed as a railroad suburb in the late 19th century and experienced significant growth in the early 20th century. The completion of the Bahá'í House of Worship in 1953 added a distinctive architectural landmark to the community."
      features={[
        "Bahá'í House of Worship",
        "Gillson Park and Beach",
        "Plaza del Lago shopping center",
        "Wilmette Harbor",
        "Historic Village Center"
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
    />
  );
}