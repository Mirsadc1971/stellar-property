import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function JeffersonPark() {
  return (
    <CommunityLayout
      title="Jefferson Park, Chicago"
      metaDescription="Expert property management services in Jefferson Park, Chicago's transportation hub with Polish heritage. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Working-class neighborhood with strong Polish heritage, affordable housing, and excellent transportation access. Jefferson Park offers authentic Chicago character."
      history="Jefferson Park developed around its transportation hub, with the area's growth accelerating after being annexed to Chicago in 1889. The neighborhood became a center for Polish immigrants in the early 20th century, establishing a cultural identity that remains evident today. Its role as a transportation nexus was solidified with the construction of the Jefferson Park Transit Center in 1970, making it one of Chicago's most accessible neighborhoods."
      features={[
        "Polish Heritage",
        "Working-class Community",
        "Transportation Hub",
        "Jefferson Park Transit Center",
        "Jefferson Memorial Park"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Two-flats",
        "Chicago bungalows",
        "Ranch-style homes",
        "Mid-century apartments"
      ]}
      managementServices={[
        "Multi-family building operations",
        "Affordable housing solutions",
        "Transportation-adjacent property expertise",
        "Commercial property oversight",
        "Community-focused management"
      ]}
      region="Far North Side"
      hoaFees="$150-$400/month"
    />
  );
}