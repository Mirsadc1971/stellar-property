import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Evanston() {
  return (
    <CommunityLayout
      title="Evanston, Illinois"
      metaDescription="Expert property management services in Evanston, a vibrant North Shore suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="A vibrant lakefront suburb home to Northwestern University, beautiful beaches, and a thriving downtown district."
      history="Evanston was founded in the 1850s and named after John Evans, one of the founders of Northwestern University. The city developed as both a university town and a desirable residential suburb with a strong temperance movement that kept it dry until 1972. Today, Evanston is known for its architectural diversity, educational institutions, and progressive community values."
      features={[
        "Northwestern University campus",
        "Downtown Evanston shopping and dining",
        "Multiple Lake Michigan beaches",
        "Historic districts with architectural significance",
        "Grosse Point Lighthouse"
      ]}
      propertyTypes={[
        "Historic single-family homes",
        "Lakefront high-rise condominiums",
        "University-adjacent apartments",
        "Victorian and Prairie-style houses",
        "Mixed-use developments"
      ]}
      managementServices={[
        "University-adjacent property expertise",
        "Historic home association management",
        "Lakefront property maintenance",
        "Downtown commercial property solutions",
        "Multi-unit building operations"
      ]}
      region="North Shore"
    />
  );
}