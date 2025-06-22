import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NorwoodPark() {
  return (
    <CommunityLayout
      title="Norwood Park, Chicago"
      metaDescription="Expert property management services in Norwood Park, Chicago's suburban-style neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Suburban-style neighborhood with single-family homes, quiet streets, and strong community ties. Norwood Park offers suburban living within Chicago."
      history="Norwood Park was founded as a village in 1872 and annexed to Chicago in 1893. The neighborhood was designed with a suburban layout featuring curved streets and generous lots, departing from Chicago's typical grid pattern. This distinctive character has been preserved, making Norwood Park one of the city's most suburban-feeling neighborhoods with a strong sense of community identity and pride."
      features={[
        "Historic Norwood Park Circle",
        "Norwood Park Historical Society",
        "Beautiful Victorian homes",
        "Onahan Elementary School",
        "Norwood Park Field House"
      ]}
      propertyTypes={[
        "Single-family Condos",
        "Suburban-style Buildings",
        "Victorian and Queen Anne homes",
        "Chicago bungalows",
        "Ranch-style houses"
      ]}
      managementServices={[
        "Single-family home association management",
        "Historic property preservation",
        "Community amenity oversight",
        "Property value enhancement strategies",
        "Common area maintenance"
      ]}
      region="Chicago"
    />
  );
}