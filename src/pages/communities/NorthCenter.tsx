import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NorthCenter() {
  return (
    <CommunityLayout
      title="North Center, Chicago"
      metaDescription="Expert property management services in North Center, Chicago's family-friendly neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="Family-friendly neighborhood with tree-lined streets, excellent schools, and strong community spirit. North Center offers suburban feel with urban convenience."
      history="North Center developed in the late 19th and early 20th centuries as a working-class neighborhood with strong German and Swedish influences. The area grew around the intersection of Lincoln, Damen, and Irving Park Road, which remains its commercial heart. Over the decades, the neighborhood has evolved into a family-oriented community while preserving its historic character and small-town feel within the city."
      features={[
        "Family-Friendly",
        "Tree-lined Streets",
        "Excellent Schools",
        "Welles Park",
        "North Center Town Square"
      ]}
      propertyTypes={[
        "Family Condos",
        "Single-family Buildings",
        "Chicago bungalows",
        "Two-flat and three-flat buildings",
        "New construction developments"
      ]}
      managementServices={[
        "Family-oriented property management",
        "Historic building preservation",
        "Multi-unit building operations",
        "New development oversight",
        "Commercial property solutions"
      ]}
      region="North Side"
      hoaFees="$250-$600/month"
    />
  );
}