import React from 'react';
import { seoConfig } from '@/config/seo';

interface NAPConsistencyProps {
  className?: string;
  showTitle?: boolean;
}

export const NAPConsistency: React.FC<NAPConsistencyProps> = ({ 
  className = "", 
  showTitle = false 
}) => {
  return (
    <div className={`nap-info ${className}`} itemScope itemType="https://schema.org/LocalBusiness">
      {showTitle && (
        <h3 className="text-xl font-semibold mb-3" itemProp="name">{seoConfig.business.name}</h3>
      )}
      <div className="space-y-1">
        <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{seoConfig.business.address.streetAddress}</span><br />
          <span itemProp="addressLocality">{seoConfig.business.address.addressLocality}</span>,{' '}
          <span itemProp="addressRegion">{seoConfig.business.address.addressRegion}</span>{' '}
          <span itemProp="postalCode">{seoConfig.business.address.postalCode}</span>
        </address>
        <div>
          Phone: <a href={`tel:${seoConfig.business.phone.replace(/\D/g, '')}`} itemProp="telephone" className="hover:underline">{seoConfig.business.phone}</a>
        </div>
        <div>
          Email: <a href={`mailto:${seoConfig.business.email}`} itemProp="email" className="hover:underline">{seoConfig.business.email}</a>
        </div>
        <div itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
          <meta itemProp="dayOfWeek" content="Monday Tuesday Wednesday Thursday Friday" />
          <meta itemProp="opens" content="09:30" />
          <meta itemProp="closes" content="16:30" />
          Hours: Monday-Friday 9:30 AM - 4:30 PM
        </div>
      </div>
    </div>
  );
};

export default NAPConsistency;