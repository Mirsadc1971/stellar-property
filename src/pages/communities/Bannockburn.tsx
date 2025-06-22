import React from 'react';
import CommunityLayout from '@/components/community/CommunityLayout';

export default function Bannockburn() {
  return (
    <CommunityLayout
      title="Bannockburn, Illinois"
      metaDescription="Expert property management services in Bannockburn, an exclusive North Shore village. Stellar Property Management offers professional property management for luxury estates and residential properties."
      heroImage="https://images.unsplash.com/photo-1543069931-db20cca57f84"
      description="Small exclusive village with luxury estates, pristine character, and ultimate privacy. Bannockburn offers the most exclusive North Shore living."
      history="Bannockburn was incorporated in 1929 as one of the North Shore's most exclusive communities. Named after the Scottish battlefield, the village was developed with large estate lots and strict zoning to preserve its rural character. The community has maintained its reputation as one of the most affluent suburbs in the Chicago area, with many properties featuring extensive grounds and equestrian facilities."
      features={[
        "Small Exclusive Village",
        "Luxury Estates",
        "Trinity International University campus",
        "Bannockburn Green shopping center",
        "Extensive forest preserves and nature trails"
      ]}
      propertyTypes={[
        "Luxury Estates",
        "Exclusive Condos",
        "Custom-built residences",
        "Historic mansions",
        "Large-lot single-family homes"
      ]}
      managementServices={[
        "Luxury estate management",
        "Equestrian property expertise",
        "Large property maintenance",
        "Historic home preservation",
        "Exclusive community governance"
      ]}
      region="North Shore"
      hoaFees="$500-$2,000/month"
    />
  );
}