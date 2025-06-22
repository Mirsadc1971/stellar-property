import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CommunityLayout from '@/components/community/CommunityLayout';
import { communityData } from '@/data/communityData';
import NotFound from '@/pages/NotFound';

export default function CommunityPage() {
  const { communitySlug } = useParams<{ communitySlug: string }>();
  
  // Find the community data based on the slug
  const community = communityData.find(c => 
    c.slug === communitySlug || 
    c.name.toLowerCase().replace(/\s+/g, '-') === communitySlug
  );
  
  // Check if there's a dedicated page for this community
  const hasDedicatedPage = [
    'rogers-park', 'west-ridge', 'edgewater', 'evanston', 'arlington-heights'
  ].includes(communitySlug || '');
  
  // If there's a dedicated page, redirect to it
  if (hasDedicatedPage) {
    return <Navigate to={`/communities/${communitySlug}`} replace />;
  }
  
  // If community not found, show 404 page
  if (!community) {
    return <NotFound />;
  }
  
  return (
    <CommunityLayout
      title={`${community.name}, ${community.region}`}
      metaDescription={`Expert property management services in ${community.name}, ${community.region}. Stellar Property Management offers professional HOA and condo management services tailored for ${community.name}'s unique community needs.`}
      heroImage={community.heroImage}
      description={community.description}
      history={community.history}
      features={community.features}
      propertyTypes={community.propertyTypes}
      managementServices={community.managementServices}
      region={community.region}
    />
  );
}