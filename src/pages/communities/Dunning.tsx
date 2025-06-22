import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Dunning() {
  return (
    <CommunityLayout
      title="Dunning, Chicago"
      metaDescription="Expert property management services in Dunning, Chicago's quiet residential neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Quiet residential neighborhood with suburban feel, affordable housing, and strong community spirit. Dunning offers peaceful living with city convenience."
      history="Dunning was named after Andrew Dunning, who purchased land in the area in the 1850s. The neighborhood remained largely undeveloped until after World War II, when it experienced significant growth as part of Chicago's expansion. Originally home to several institutions including a state hospital, the area has transformed into a primarily residential community with a suburban character that distinguishes it from more urban parts of Chicago."
      features={[
        "Suburban Feel",
        "Quiet Residential",
        "Affordable Housing",
        "Dunning Square shopping center",
        "Wright College campus"
      ]}
      propertyTypes={[
        "Suburban-style Condos",
        "Single-family Buildings",
        "Ranch-style homes",
        "Chicago bungalows",
        "Mid-century residential developments"
      ]}
      managementServices={[
        "Single-family home association management",
        "Community amenity oversight",
        "Property value enhancement strategies",
        "Common area maintenance",
        "Residential property management"
      ]}
      region="Northwest Side"
      hoaFees="$150-$450/month"
    />
  );
}