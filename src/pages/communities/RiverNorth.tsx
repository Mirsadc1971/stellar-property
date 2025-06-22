import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function RiverNorth() {
  return (
    <CommunityLayout
      title="River North, Chicago"
      metaDescription="Expert property management services in River North, Chicago's premier arts and entertainment district. Stellar Property Management offers professional property management for residential and commercial properties in this vibrant neighborhood."
      heroImage="https://images.unsplash.com/photo-1554797589-4e8b99f1d33c"
      description="A dynamic urban neighborhood known for its art galleries, high-end dining, and proximity to Downtown Chicago's business center."
      history="River North, once an industrial area, transformed in the 1970s into a thriving arts and entertainment district. Home to the largest concentration of art galleries outside of Manhattan, the neighborhood has become synonymous with urban sophistication. Its proximity to the Chicago Loop and its mix of historic warehouses converted into lofts and modern high-rises make it a unique and desirable location."
      features={[
        "Gallery district",
        "Merchandise Mart",
        "Chicago Riverwalk",
        "Trendy dining scene",
        "Nightlife destinations"
      ]}
      propertyTypes={[
        "Converted warehouse lofts",
        "Luxury high-rise condominiums",
        "Boutique condo buildings",
        "Mixed-use developments",
        "Historic commercial buildings"
      ]}
      managementServices={[
        "Luxury high-rise operations",
        "Mixed-use property expertise",
        "Historic building preservation",
        "Entertainment district management",
        "Commercial property solutions"
      ]}
      region="Chicago"
    />
  );
}