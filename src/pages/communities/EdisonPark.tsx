import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function EdisonPark() {
  return (
    <CommunityLayout
      title="Edison Park, Chicago"
      metaDescription="Expert property management services in Edison Park, Chicago's small suburban enclave. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Small suburban enclave with tree-lined streets, single-family homes, and tight-knit community. Edison Park offers small-town feel in the big city."
      history="Edison Park was originally an independent village founded in 1896 and named after inventor Thomas Edison. The community was annexed to Chicago in 1910 but has maintained its distinct small-town atmosphere. The neighborhood has historically been home to many city workers, particularly police officers and firefighters, contributing to its strong community bonds and civic pride."
      features={[
        "Edison Park Fest annual celebration",
        "Monument Park",
        "Restaurant row on Northwest Highway",
        "Edison Park Field House",
        "Brooks Park"
      ]}
      propertyTypes={[
        "Single-family Condos",
        "Small Buildings",
        "Chicago bungalows",
        "Ranch-style homes",
        "Cape Cod houses"
      ]}
      managementServices={[
        "Single-family home association management",
        "Small community expertise",
        "Commercial district property solutions",
        "Property value enhancement strategies",
        "Community-focused management"
      ]}
      region="Chicago"
    />
  );
}