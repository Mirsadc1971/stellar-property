import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Edgewater() {
  return (
    <CommunityLayout
      title="Edgewater, Chicago"
      metaDescription="Expert property management services in Edgewater, Chicago's lakefront neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="Historic lakefront neighborhood with beautiful vintage buildings, diverse community, and stunning lake views. Edgewater combines historic charm with modern amenities."
      history="Edgewater was originally developed in the late 19th century as a summer retreat for Chicago's elite, featuring luxurious hotels and mansions along the lakefront. The extension of Lake Shore Drive and the elevated train in the early 20th century transformed it into a residential neighborhood. Over decades, the area evolved from an exclusive enclave to a diverse community welcoming immigrants from around the world."
      features={[
        "Historic Architecture",
        "Lakefront Views",
        "Diverse Community",
        "Kathy Osterman Beach",
        "Bryn Mawr Historic District"
      ]}
      propertyTypes={[
        "Historic High-rises",
        "Vintage Condos",
        "Converted mansions",
        "Modern condominiums",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Vintage apartment building expertise",
        "Lakefront property maintenance",
        "Historic building preservation",
        "Mixed-use development management",
        "Courtyard building operations"
      ]}
      region="Far North Side"
      hoaFees="$200-$600/month"
    />
  );
}