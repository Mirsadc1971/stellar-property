import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function ForestGlen() {
  return (
    <CommunityLayout
      title="Forest Glen, Chicago"
      metaDescription="Expert property management services in Forest Glen, Chicago's quiet residential neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1584893884751-993c24fdab1e"
      description="Quiet residential neighborhood with suburban feel, excellent schools, and family-friendly atmosphere. Forest Glen offers peaceful living within the city."
      history="Forest Glen was originally developed as a railroad suburb in the late 19th century, with the Milwaukee Road depot serving as its center. The area was annexed to Chicago in 1889 but has maintained its distinct suburban character with winding streets, mature trees, and spacious lots. The Forest Glen Community Club, established in 1896, continues to foster neighborhood identity and community spirit."
      features={[
        "Forest Glen Woods and North Branch Trail",
        "Historic Forest Glen Community Club",
        "Edgebrook Golf Course",
        "Quiet, tree-lined streets",
        "Excellent public and private schools"
      ]}
      propertyTypes={[
        "Single-family Condos",
        "Family Buildings",
        "Tudor and Colonial-style homes",
        "Ranch houses",
        "Bungalows and Cape Cods"
      ]}
      managementServices={[
        "Single-family home association management",
        "Community amenity oversight",
        "Property value enhancement strategies",
        "Common area maintenance",
        "Reserve fund planning"
      ]}
      region="Chicago"
    />
  );
}