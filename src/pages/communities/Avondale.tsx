import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Avondale() {
  return (
    <CommunityLayout
      title="Avondale, Chicago"
      metaDescription="Expert property management services in Avondale, Chicago's emerging neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577517-3075205a9493"
      description="Emerging neighborhood with growing arts scene, affordable housing, and strong Latino heritage. Avondale offers authentic Chicago character with development potential."
      history="Avondale developed in the late 19th century as a working-class industrial area and home to many Polish immigrants. The neighborhood later welcomed Latino residents, particularly from Mexico and Puerto Rico, creating a rich cultural mix. In recent years, Avondale has begun attracting artists and young professionals seeking affordable housing close to trendier areas like Logan Square, while still maintaining its authentic working-class character."
      features={[
        "Arts Scene",
        "Latino Heritage",
        "Affordable Housing",
        "Avondale Mural Project",
        "St. Hyacinth Basilica"
      ]}
      propertyTypes={[
        "Affordable Condos",
        "Artist Lofts",
        "Worker cottages",
        "Two-flat and three-flat buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Affordable housing expertise",
        "Artist community management",
        "Multi-family building operations",
        "Commercial property solutions",
        "Community-focused management"
      ]}
      region="North Side"
      hoaFees="$180-$450/month"
    />
  );
}