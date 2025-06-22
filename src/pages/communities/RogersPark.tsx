import React from 'react';
import { useParams } from 'react-router-dom';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function RogersPark() {
  return (
    <CommunityLayout
      title="Rogers Park, Chicago"
      metaDescription="Expert property management services in Rogers Park, Chicago's diverse northernmost neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7"
      description="Chicago's northernmost neighborhood, known for its cultural diversity, beaches, and artistic community."
      history="Rogers Park was incorporated as a village in 1878, named after Irish immigrant Philip Rogers who settled in the area in the 1830s. The neighborhood was annexed to Chicago in 1893 and saw rapid development with the expansion of transit lines. Throughout the 20th century, Rogers Park became one of Chicago's most diverse communities, welcoming immigrants from around the world."
      features={[
        "Miles of public beaches along Lake Michigan",
        "Diverse dining scene with global cuisines",
        "Loyola University Chicago campus",
        "Vibrant arts community and galleries",
        "Historic architecture and tree-lined streets"
      ]}
      propertyTypes={[
        "Vintage apartment buildings",
        "Courtyard buildings",
        "Single-family homes",
        "Modern condominiums",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Student housing management",
        "Vintage building preservation",
        "Lakefront property maintenance",
        "Multi-unit building operations",
        "Diverse community engagement"
      ]}
      region="Chicago"
    />
  );
}