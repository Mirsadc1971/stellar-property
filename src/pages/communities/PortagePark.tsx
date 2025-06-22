import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function PortagePark() {
  return (
    <CommunityLayout
      title="Portage Park, Chicago"
      metaDescription="Expert property management services in Portage Park, Chicago's working-class neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Working-class neighborhood with strong community ties, affordable housing, and family-oriented atmosphere. Portage Park offers authentic Chicago neighborhood living."
      history="Portage Park takes its name from the Native American portage between the Chicago and Des Plaines Rivers. The neighborhood developed rapidly after being annexed to Chicago in 1889, with its namesake park established in 1913. The area became known for its bungalow belt architecture and strong working-class identity. Throughout its history, Portage Park has maintained its family-oriented character while welcoming diverse residents."
      features={[
        "Portage Park (the park)",
        "Six Corners shopping district",
        "Portage Theater",
        "Chicago Bungalow Belt architecture",
        "Chopin Park"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Two-flats",
        "Chicago bungalows",
        "Mid-century ranch homes",
        "Small apartment buildings"
      ]}
      managementServices={[
        "Affordable housing solutions",
        "Multi-family building operations",
        "Commercial district property management",
        "Single-family home association oversight",
        "Community-focused management"
      ]}
      region="Chicago"
    />
  );
}