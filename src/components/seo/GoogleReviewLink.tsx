import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface GoogleReviewLinkProps {
  placeId: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const GoogleReviewLink: React.FC<GoogleReviewLinkProps> = ({ 
  placeId, 
  className = "",
  variant = 'default',
  size = 'default'
}) => {
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
  
  return (
    <Button 
      variant={variant} 
      size={size}
      className={className}
      onClick={() => window.open(reviewUrl, '_blank')}
    >
      <Star className="mr-2 h-4 w-4" />
      Leave a Google Review
    </Button>
  );
};

export default GoogleReviewLink;