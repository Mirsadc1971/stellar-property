import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function NobleSquare() {
  return (
    <CommunityLayout
      title="Noble Square, Chicago"
      metaDescription="Expert property management services in Noble Square, Chicago's trendy neighborhood near downtown. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577398-5f8dddba007b"
      description="Small trendy neighborhood near downtown with modern developments, young professionals, and urban convenience. Noble Square offers contemporary city living."
      history="Noble Square is a small neighborhood within the larger West Town community area. The area was originally settled by Polish immigrants in the late 19th century, with the St. Boniface Church (built in 1902) serving as a community anchor. After a period of economic challenges in the mid-20th century, Noble Square has experienced significant revitalization since the 1990s, attracting young professionals seeking proximity to downtown and the amenities of nearby Wicker Park."
      features={[
        "Eckhart Park",
        "Polonia Triangle",
        "St. Boniface Church",
        "Milwaukee Avenue corridor",
        "Proximity to downtown Chicago"
      ]}
      propertyTypes={[
        "Modern Condos",
        "New Construction",
        "Converted industrial buildings",
        "Worker cottages",
        "Two-flat and three-flat buildings"
      ]}
      managementServices={[
        "Modern development oversight",
        "Mixed-use property expertise",
        "Urban property solutions",
        "Multi-unit building operations",
        "Commercial property management"
      ]}
      region="Chicago"
    />
  );
}