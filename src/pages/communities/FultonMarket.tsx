import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function FultonMarket() {
  return (
    <CommunityLayout
      title="Fulton Market, Chicago"
      metaDescription="Expert property management services in Fulton Market, Chicago's trendy former meatpacking district. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1597626133663-53df9633b799"
      description="Trendy former meatpacking district transformed into hip neighborhood with tech companies, restaurants, and modern developments. Fulton Market offers cutting-edge urban living."
      history="Fulton Market began as Chicago's central food distribution hub in the 19th century, particularly for meat processing. The area maintained its industrial character throughout most of the 20th century before beginning a dramatic transformation in the early 2000s. The arrival of acclaimed restaurants, followed by Google's Chicago headquarters in 2015, accelerated development, turning the former meatpacking district into one of the city's most dynamic neighborhoods while preserving elements of its industrial heritage."
      features={[
        "Tech Hub",
        "Culinary Scene",
        "Modern Developments",
        "Restaurant Row on Randolph Street",
        "Google's Chicago headquarters"
      ]}
      propertyTypes={[
        "Modern Condos",
        "Loft Conversions",
        "Adaptive reuse developments",
        "Luxury high-rises",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Mixed-use property expertise",
        "Tech-oriented building solutions",
        "Historic industrial building preservation",
        "Luxury residential management",
        "Commercial property solutions"
      ]}
      region="Central/Downtown"
      hoaFees="$350-$900/month"
    />
  );
}