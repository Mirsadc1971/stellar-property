import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function LincolnPark() {
  return (
    <CommunityLayout
      title="Lincoln Park, Chicago"
      metaDescription="Expert property management services in Lincoln Park, Chicago's prestigious lakefront neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
      description="One of Chicago's most desirable neighborhoods, combining historic charm with modern amenities. Home to DePaul University, Lincoln Park Zoo, and beautiful tree-lined streets."
      history="Lincoln Park has evolved from modest beginnings into one of Chicago's most desirable neighborhoods. Named after the sprawling park along Lake Michigan, the area combines historic architecture with modern amenities. The neighborhood's transformation accelerated in the 1960s, and today it stands as a premier example of successful urban development."
      features={[
        "Lincoln Park Zoo",
        "DePaul University",
        "Lincoln Park Conservatory",
        "North Avenue Beach",
        "Historic architecture"
      ]}
      propertyTypes={[
        "Victorian Condos",
        "New Construction",
        "Luxury high-rise condominiums",
        "Converted lofts",
        "Multi-unit buildings"
      ]}
      managementServices={[
        "Historic property preservation",
        "Luxury residential management",
        "Student housing solutions",
        "Mixed-use property expertise",
        "High-end amenity management"
      ]}
      region="Chicago"
    />
  );
}