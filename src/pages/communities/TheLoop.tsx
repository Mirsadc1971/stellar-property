import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function TheLoop() {
  return (
    <CommunityLayout
      title="The Loop, Chicago"
      metaDescription="Expert property management services in The Loop, Chicago's central business district. Stellar Property Management offers professional property management for residential and commercial properties in this vibrant downtown area."
      heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      description="Chicago's central business district, home to iconic skyscrapers, world-class dining, and luxury high-rise condominiums. The Loop represents the heart of Chicago's financial and cultural center."
      history="The Loop is Chicago's central business district and the seat of Cook County government. Named for the elevated 'L' train tracks that encircle the area, The Loop has been Chicago's commercial core since the city's founding. Today, it's home to world-renowned architecture, theaters, shopping destinations, and Millennium Park, making it one of the most visited neighborhoods in Chicago."
      features={[
        "Historic Architecture",
        "Business District",
        "Cultural Hub",
        "Millennium Park & Cloud Gate",
        "Art Institute of Chicago"
      ]}
      propertyTypes={[
        "High-rise Condominiums",
        "Luxury Towers",
        "Historic loft conversions",
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
      region="Central/Downtown"
      hoaFees="$400-$1,200/month"
    />
  );
}