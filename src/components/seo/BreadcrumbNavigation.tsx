
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

const routeLabels: Record<string, string> = {
  'about': 'About Us',
  'services': 'Services',
  'contact': 'Contact',
  'request-proposal': 'Request Proposal',
  'blog': 'Blog',
  'faqs': 'FAQs',
  'payments': 'Payments',
  'forms': 'Forms',
  'resident-info': 'Resident Information',
  'service-areas': 'Service Areas',
  'chicago': 'Chicago',
  'north-suburbs': 'North Suburbs',
  'neighborhoods': 'Neighborhoods',
  'the-loop': 'The Loop',
  'river-north': 'River North',
  'gold-coast': 'Gold Coast',
  'lincoln-park': 'Lincoln Park',
  'lakeview': 'Lakeview',
  'wicker-park': 'Wicker Park',
  'bucktown': 'Bucktown',
  'old-town': 'Old Town',
  'west-loop': 'West Loop',
  'south-loop': 'South Loop',
  'streeterville': 'Streeterville',
  'hyde-park': 'Hyde Park',
  'uptown': 'Uptown',
  'wrigleyville': 'Wrigleyville',
  'rogers-park': 'Rogers Park',
  'edgewater': 'Edgewater',
  'andersonville': 'Andersonville',
  'ravenswood': 'Ravenswood',
  'logan-square': 'Logan Square',
  'ukrainian-village': 'Ukrainian Village',
};

export default function BreadcrumbNavigation() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null; // Don't show breadcrumbs on home page
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbItems.push({
      label,
      href: isLast ? undefined : currentPath,
      current: isLast
    });
  });

  return (
    <div className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={index}>
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.current ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href!}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
