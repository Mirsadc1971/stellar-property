import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function WestRidge() {
  return (
    <CommunityLayout
      title="West Ridge, Chicago"
      metaDescription="Expert property management services in West Ridge, Chicago's diverse and culturally rich neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
      description="A diverse neighborhood with rich cultural heritage, known for its Indian and Orthodox Jewish communities."
      history="West Ridge, also known as West Rogers Park, developed in the early 20th century as a farming community before being annexed to Chicago. The area saw significant growth after World War II and has become known for its cultural diversity, with particularly strong Indian, Pakistani, Assyrian, and Orthodox Jewish communities."
      features={[
        "Devon Avenue international marketplace",
        "Warren Park's extensive recreational facilities",
        "Indian Boundary Park and Cultural Center",
        "Diverse religious institutions",
        "Rich multicultural dining scene"
      ]}
      propertyTypes={[
        "Single-family bungalows",
        "Two-flat and three-flat buildings",
        "Mid-rise apartment buildings",
        "Courtyard apartments",
        "Mixed-use commercial properties"
      ]}
      managementServices={[
        "Culturally sensitive property management",
        "Multi-family building operations",
        "Commercial property oversight",
        "Vintage building maintenance",
        "Community-focused management solutions"
      ]}
      region="Chicago"
    />
  );
}