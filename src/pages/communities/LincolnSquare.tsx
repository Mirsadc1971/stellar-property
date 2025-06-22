import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function LincolnSquare() {
  return (
    <CommunityLayout
      title="Lincoln Square, Chicago"
      metaDescription="Expert property management services in Lincoln Square, Chicago's charming neighborhood with German heritage. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="Charming German-heritage neighborhood with tree-lined streets, family-friendly atmosphere, and strong community spirit. Lincoln Square offers European charm in Chicago."
      history="Lincoln Square was originally farmland before being annexed to Chicago in 1889. The area's German heritage dates back to the early 20th century when many German immigrants settled here. The neighborhood has maintained its European charm while evolving into one of Chicago's most desirable residential areas."
      features={[
        "German Heritage",
        "Family-Friendly",
        "Tree-lined Streets",
        "Historic Lincoln Square",
        "Old Town School of Folk Music"
      ]}
      propertyTypes={[
        "Family Condos",
        "Historic Buildings",
        "Two-flat and three-flat buildings",
        "Courtyard apartments",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Family-oriented community management",
        "Historic property preservation",
        "Small business district expertise",
        "Multi-unit building operations",
        "New development oversight"
      ]}
      region="Far North Side"
      hoaFees="$200-$500/month"
    />
  );
}