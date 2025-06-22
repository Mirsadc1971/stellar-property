import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NorthPark() {
  return (
    <CommunityLayout
      title="North Park, Chicago"
      metaDescription="Expert property management services in North Park, Chicago's diverse residential neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="Diverse residential neighborhood with strong Korean community, excellent schools, and family-oriented atmosphere. North Park offers multicultural suburban feel."
      history="North Park developed in the early 20th century as transportation improved access to this once-rural area. The neighborhood has welcomed various immigrant groups throughout its history, with a particularly strong Korean community establishing itself in recent decades. The presence of North Park University and the North Park Village Nature Center has contributed to the area's community-oriented character."
      features={[
        "North Park University campus",
        "North Park Village Nature Center",
        "Peterson Park",
        "Korean commercial district",
        "LaBagh Woods Forest Preserve"
      ]}
      propertyTypes={[
        "Family Condos",
        "Single-family Buildings",
        "Ranch-style homes",
        "Two-flat buildings",
        "Mid-century residential developments"
      ]}
      managementServices={[
        "Family-oriented property management",
        "Culturally diverse community expertise",
        "University-adjacent property solutions",
        "Single-family home association management",
        "Multi-unit building operations"
      ]}
      region="Chicago"
    />
  );
}