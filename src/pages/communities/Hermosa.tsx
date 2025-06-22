import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Hermosa() {
  return (
    <CommunityLayout
      title="Hermosa, Chicago"
      metaDescription="Expert property management services in Hermosa, Chicago's predominantly Latino neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Predominantly Latino neighborhood with strong community ties, affordable housing, and cultural heritage. Hermosa offers authentic Chicago Latino community living."
      history="Hermosa, whose name means 'beautiful' in Spanish, was settled in the late 19th century and annexed to Chicago in 1889. The neighborhood was initially home to Scandinavian and German immigrants before welcoming Polish residents in the mid-20th century. Since the 1980s, Hermosa has become predominantly Latino, with strong Mexican and Puerto Rican influences shaping its cultural identity, businesses, and community institutions."
      features={[
        "Kelvyn Park",
        "Fullerton Avenue commercial district",
        "Historic bungalow architecture",
        "Authentic Latino businesses",
        "Strong community organizations"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Community Housing",
        "Chicago bungalows",
        "Two-flat and three-flat buildings",
        "Small apartment buildings"
      ]}
      managementServices={[
        "Affordable housing solutions",
        "Multi-family building operations",
        "Culturally diverse community expertise",
        "Commercial property oversight",
        "Community-focused management"
      ]}
      region="Chicago"
    />
  );
}