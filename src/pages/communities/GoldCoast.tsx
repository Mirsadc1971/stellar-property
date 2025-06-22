import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function GoldCoast() {
  return (
    <CommunityLayout
      title="Gold Coast, Chicago"
      metaDescription="Expert property management services in Gold Coast, Chicago's prestigious lakefront neighborhood. Stellar Property Management offers professional property management for residential and commercial properties in this historic area."
      heroImage="https://images.unsplash.com/photo-1581373449483-44867d6afee4"
      description="Chicago's most prestigious neighborhood, featuring historic mansions, luxury high-rises, and upscale shopping along the Magnificent Mile. The Gold Coast epitomizes Chicago elegance."
      history="The Gold Coast emerged as Chicago's most exclusive neighborhood following the Great Chicago Fire of 1871. Wealthy Chicagoans built ornate mansions along Lake Shore Drive and the surrounding streets, establishing it as the city's premier residential district. Today, the neighborhood blends historic charm with modern luxury, featuring landmark buildings, designer boutiques, and renowned restaurants."
      features={[
        "Historic Elegance",
        "Magnificent Mile",
        "Luxury Shopping",
        "Historic Astor Street District",
        "Oak Street shopping"
      ]}
      propertyTypes={[
        "Historic Mansions",
        "Luxury High-rises",
        "Vintage co-op buildings",
        "Boutique condo buildings",
        "Mixed-use properties"
      ]}
      managementServices={[
        "Luxury property management",
        "Historic building preservation",
        "High-end amenity management",
        "Doorman building operations",
        "Concierge-level service"
      ]}
      region="Central/Downtown"
      hoaFees="$800-$3,000/month"
    />
  );
}