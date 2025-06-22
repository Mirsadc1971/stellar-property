import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Uptown() {
  return (
    <CommunityLayout
      title="Uptown, Chicago"
      metaDescription="Expert property management services in Uptown, Chicago's diverse and historic neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="Historic entertainment district experiencing renaissance with new development, diverse community, and rich cultural heritage. Uptown offers urban excitement with neighborhood character."
      history="Uptown flourished in the early 20th century as a premier entertainment district, home to elaborate movie palaces and ballrooms that attracted visitors from across Chicago. During the Jazz Age, venues like the Green Mill became legendary. Following World War II, the neighborhood welcomed diverse immigrant communities, establishing its identity as one of Chicago's most multicultural areas."
      features={[
        "Entertainment District",
        "Cultural Heritage",
        "Urban Renaissance",
        "Aragon Ballroom",
        "Green Mill Jazz Club"
      ]}
      propertyTypes={[
        "Historic Buildings",
        "New Developments",
        "Art Deco high-rises",
        "Courtyard buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Historic entertainment venue management",
        "Diverse housing solutions",
        "Vintage apartment building expertise",
        "Lakefront property maintenance",
        "Mixed-use development oversight"
      ]}
      region="Far North Side"
      hoaFees="$180-$550/month"
    />
  );
}