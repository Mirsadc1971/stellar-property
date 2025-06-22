import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function ArlingtonHeights() {
  return (
    <CommunityLayout
      title="Arlington Heights, Illinois"
      metaDescription="Expert property management services in Arlington Heights, a premier Northwest suburb. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
      description="Premier northwest suburb known for excellent schools, beautiful downtown area, and high quality of life. Arlington Heights offers upscale suburban living with strong community amenities."
      history="Arlington Heights began as a small farming community in the 1800s before being incorporated in 1887. The arrival of the railroad and later Arlington Park Racetrack in 1927 spurred significant growth. Following World War II, the village experienced a housing boom that transformed it into one of Chicago's largest and most prosperous suburbs."
      features={[
        "Premier Suburb",
        "Excellent Schools",
        "Downtown District",
        "Arlington Park Racetrack site",
        "Arlington Heights Memorial Library"
      ]}
      propertyTypes={[
        "Upscale Condos",
        "Luxury Townhomes",
        "Single-family homes",
        "Downtown apartments",
        "Senior living communities"
      ]}
      managementServices={[
        "Homeowners association management",
        "Townhouse community operations",
        "Downtown property solutions",
        "Commercial property oversight",
        "Community amenity management"
      ]}
      region="Northwest Suburbs"
      hoaFees="$300-$900/month"
    />
  );
}