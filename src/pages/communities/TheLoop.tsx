import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function TheLoop() {
  return (
    <CommunityLayout
      title="The Loop, Chicago"
      metaDescription="Expert property management services in The Loop, Chicago's central business district. Stellar Property Management offers professional property management for residential and commercial properties in this vibrant downtown area."
      heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      description="Chicago's central business district and cultural heart, known for its iconic architecture, world-class theaters, and bustling business community."
      history="The Loop is Chicago's central business district and the seat of Cook County government. Named for the elevated 'L' train tracks that encircle the area, The Loop has been Chicago's commercial core since the city's founding. Today, it's home to world-renowned architecture, theaters, shopping destinations, and Millennium Park, making it one of the most visited neighborhoods in Chicago."
      features={[
        "Millennium Park & Cloud Gate",
        "Art Institute of Chicago",
        "Chicago Theatre District",
        "Chicago Board of Trade",
        "State Street shopping"
      ]}
      propertyTypes={[
        "Historic office buildings",
        "Luxury high-rise condominiums",
        "Converted lofts",
        "Mixed-use developments",
        "Hotel-condominium properties"
      ]}
      managementServices={[
        "High-rise building operations",
        "Mixed-use property expertise",
        "Commercial property management",
        "Historic building preservation",
        "Luxury amenity coordination"
      ]}
      region="Chicago"
    />
  );
}