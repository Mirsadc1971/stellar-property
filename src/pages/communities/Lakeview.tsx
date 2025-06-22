import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Lakeview() {
  return (
    <CommunityLayout
      title="Lakeview, Chicago"
      metaDescription="Expert property management services in Lakeview, Chicago's vibrant lakefront community. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
      description="A diverse neighborhood offering lakefront recreation, entertainment venues, and a mix of historic and modern housing."
      history="Lakeview has grown from a summer resort town in the 1800s to one of Chicago's largest and most diverse neighborhoods. Home to several distinct areas including Wrigleyville and Boystown, the neighborhood offers a perfect blend of residential charm and urban excitement. Its proximity to Lake Michigan and excellent transportation options has made it a consistently popular choice for residents."
      features={[
        "Wrigley Field",
        "Belmont Harbor",
        "Boystown entertainment district",
        "Southport Corridor shopping",
        "Lakefront recreation trail"
      ]}
      propertyTypes={[
        "Vintage apartment buildings",
        "Modern condominiums",
        "Single-family homes",
        "Converted lofts",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Entertainment district expertise",
        "Mixed-use property management",
        "Vintage building preservation",
        "Modern development oversight",
        "Retail space solutions"
      ]}
      region="Chicago"
    />
  );
}