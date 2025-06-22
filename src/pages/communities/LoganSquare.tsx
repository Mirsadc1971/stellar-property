import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function LoganSquare() {
  return (
    <CommunityLayout
      title="Logan Square, Chicago"
      metaDescription="Expert property management services in Logan Square, Chicago's hip and artistic neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599609939591-044013333893"
      description="Hip, artistic neighborhood known for its vibrant nightlife, craft breweries, and creative community. Logan Square has become one of Chicago's most sought-after areas for young professionals."
      history="Logan Square was developed in the late 19th century around its namesake public square and boulevard system. The neighborhood was home to many European immigrants, particularly Norwegians and Poles. After a period of economic challenges in the mid-20th century, Logan Square has experienced significant revitalization since the early 2000s, becoming known for its thriving arts scene, independent businesses, and historic greystones and boulevards."
      features={[
        "Historic boulevard system",
        "Logan Square Farmers Market",
        "Palmer Square Park",
        "Milwaukee Avenue corridor",
        "Craft brewery scene"
      ]}
      propertyTypes={[
        "Vintage Condos",
        "Loft Conversions",
        "Historic greystones",
        "Two-flat and three-flat buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Historic building preservation",
        "Mixed-use property expertise",
        "Entertainment district management",
        "Multi-unit building operations",
        "Commercial property solutions"
      ]}
      region="Chicago"
    />
  );
}