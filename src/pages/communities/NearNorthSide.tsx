import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NearNorthSide() {
  return (
    <CommunityLayout
      title="Near North Side, Chicago"
      metaDescription="Expert property management services in Near North Side, Chicago's upscale downtown area. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      description="Upscale downtown area including Gold Coast and River North, featuring luxury high-rises, shopping, and dining. Near North Side represents Chicago's premium urban living."
      history="The Near North Side has been one of Chicago's most fashionable areas since the city's early days. Following the Great Chicago Fire of 1871, wealthy Chicagoans built elegant homes north of the river, establishing what would become the Gold Coast. The area has continuously evolved, from the notorious Cabrini-Green housing project (now redeveloped) to the upscale shopping district of the Magnificent Mile and the entertainment-focused River North, creating one of Chicago's most diverse and dynamic neighborhoods."
      features={[
        "Luxury Living",
        "Premium Shopping",
        "Fine Dining",
        "Magnificent Mile shopping",
        "Navy Pier"
      ]}
      propertyTypes={[
        "Luxury High-rises",
        "Premium Condos",
        "Historic mansions",
        "Boutique condo buildings",
        "Mixed-use developments"
      ]}
      managementServices={[
        "Luxury high-rise operations",
        "Concierge-level service",
        "High-end amenity management",
        "Historic building preservation",
        "Mixed-use property expertise"
      ]}
      region="Central/Downtown"
      hoaFees="$500-$2,000/month"
    />
  );
}