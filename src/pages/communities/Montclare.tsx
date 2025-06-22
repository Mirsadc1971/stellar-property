import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Montclare() {
  return (
    <CommunityLayout
      title="Montclare, Chicago"
      metaDescription="Expert property management services in Montclare, Chicago's small residential neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Small residential neighborhood with quiet streets, affordable housing, and community atmosphere. Montclare offers peaceful living with neighborhood character."
      history="Montclare is one of Chicago's youngest neighborhoods, developing primarily after World War II. The area was annexed to Chicago in 1889 but remained largely undeveloped until the mid-20th century. The construction of the Montclare-Elmwood Park Metra station in 1931 improved access to the area, spurring residential development that created the quiet, family-oriented community that exists today."
      features: [
        "Rutherford Sayre Park",
        "Montclare-Elmwood Park Metra station",
        "Quiet residential streets",
        "Mont Clare Library",
        "Neighborhood shopping districts"
      ],
      propertyTypes: [
        "Small Buildings",
        "Affordable Condos",
        "Chicago bungalows",
        "Ranch-style homes",
        "Mid-century residential developments"
      ],
      managementServices: [
        "Single-family home association management",
        "Small community expertise",
        "Affordable housing solutions",
        "Property value enhancement strategies",
        "Community-focused management"
      ],
      region: "Chicago"
    />
  );
}