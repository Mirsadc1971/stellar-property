
import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import SEOHead from '@/components/seo/SEOHead';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
  seoProps?: {
    title?: string;
    description?: string;
    keywords?: string;
    noindex?: boolean;
  };
}

export default function MainLayout({ 
  children, 
  showBreadcrumbs = true,
  seoProps 
}: MainLayoutProps) {
  const location = useLocation();
  
  // This effect will run whenever the location changes
  useEffect(() => {
    // Force scroll to top when layout mounts or route changes
    window.scrollTo(0, 0);
    
    // Also set body scroll position
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location]);

  // Add default SEO if not provided by specific pages
  const shouldAddDefaultSEO = !React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === SEOHead
  );

  return (
    <div className="flex flex-col min-h-screen">
      {shouldAddDefaultSEO && seoProps && (
        <SEOHead
          title={seoProps.title || 'Stellar Property Management'}
          description={seoProps.description || 'Professional property management services in Chicago'}
          canonical={location.pathname}
          keywords={seoProps.keywords}
          noindex={seoProps.noindex}
        />
      )}
      <Header />
      {showBreadcrumbs && <BreadcrumbNavigation />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
