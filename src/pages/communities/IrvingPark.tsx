import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function IrvingPark() {
  return (
    <CommunityLayout
      title="Irving Park, Chicago"
      metaDescription="Expert property management services in Irving Park, Chicago's diverse residential neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Diverse residential neighborhood with strong Polish heritage, affordable housing, and family-friendly atmosphere. Irving Park offers authentic Chicago living."
      history="Irving Park began as a rural community in the 1840s before being annexed to Chicago in 1889. The arrival of the railroad spurred development, with many elegant homes built in the late 19th century. The neighborhood has welcomed waves of immigrants throughout its history, creating a diverse community with strong European influences, particularly Polish and German, that remain evident in its cultural institutions and architecture."
      features={[
        "Independence Park",
        "Villa District historic area",
        "Irving Park Road commercial corridor",
        "Historic churches and architecture",
        "Six Corners shopping district"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Two-flats",
        "Chicago bungalows",
        "Victorian homes",
        "Courtyard apartment buildings"
      ]}
      managementServices={[
        "Multi-family building operations",
        "Historic property preservation",
        "Affordable housing solutions",
        "Commercial property oversight",
        "Community-focused management"
      ]}
      region="Chicago"
    />
  );
}