import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function AlbanyPark() {
  return (
    <CommunityLayout
      title="Albany Park, Chicago"
      metaDescription="Expert property management services in Albany Park, Chicago's diverse immigrant community. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Diverse immigrant community with affordable housing, strong cultural identity, and growing arts scene. Albany Park represents Chicago's multicultural spirit."
      history="Albany Park developed in the early 20th century following the extension of the Ravenswood elevated train line. The neighborhood has been a gateway community for immigrants throughout its history, welcoming waves of new residents from around the world. This cultural diversity has created one of Chicago's most international neighborhoods, with over 40 languages spoken in its schools and a rich tapestry of global cuisines and businesses."
      features={[
        "Immigrant Community",
        "Affordable Housing",
        "Cultural Diversity",
        "Global dining scene with authentic restaurants",
        "Albany Park Theater Project"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Multi-family Buildings",
        "Two-flat and three-flat buildings",
        "Courtyard apartments",
        "Mixed-use commercial properties"
      ]}
      managementServices={[
        "Culturally diverse community management",
        "Affordable housing expertise",
        "Multi-family building operations",
        "Commercial property oversight",
        "Community-focused management solutions"
      ]}
      region="Far North Side"
      hoaFees="$150-$400/month"
    />
  );
}