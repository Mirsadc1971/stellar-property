import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Uptown() {
  return (
    <CommunityLayout
      title="Uptown, Chicago"
      metaDescription="Expert property management services in Uptown, Chicago's diverse and historic neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="A diverse neighborhood known for historic entertainment venues, lakefront recreation, and multicultural dining."
      history="Uptown flourished in the early 20th century as a premier entertainment district, home to elaborate movie palaces and ballrooms that attracted visitors from across Chicago. During the Jazz Age, venues like the Green Mill became legendary. Following World War II, the neighborhood welcomed diverse immigrant communities, establishing its identity as one of Chicago's most multicultural areas."
      features={[
        "Historic Uptown Theatre",
        "Green Mill Jazz Club",
        "Montrose Beach and Harbor",
        "Diverse international dining scene",
        "Graceland Cemetery"
      ]}
      propertyTypes={[
        "Historic apartment buildings",
        "Art Deco high-rises",
        "Converted entertainment venues",
        "Courtyard buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Historic building preservation",
        "Entertainment venue management",
        "Multi-unit building operations",
        "Affordable housing expertise",
        "Commercial property solutions"
      ]}
      region="Chicago"
    />
  );
}