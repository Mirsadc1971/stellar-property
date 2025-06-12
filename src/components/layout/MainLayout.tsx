
import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export default function MainLayout({ children, showBreadcrumbs = true }: MainLayoutProps) {
  const location = useLocation();
  
  // This effect will run whenever the location changes
  useEffect(() => {
    // Force scroll to top when layout mounts or route changes
    window.scrollTo(0, 0);
    
    // Also set body scroll position
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showBreadcrumbs && <BreadcrumbNavigation />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
