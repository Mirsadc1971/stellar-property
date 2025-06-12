
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { seoConfig } from "@/config/seo";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNavigation({ items, className = "" }: BreadcrumbNavigationProps) {
  // Don't show breadcrumbs if we only have home
  if (items.length <= 1) return null;

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@id": `${seoConfig.baseUrl}${item.url}`,
        "name": item.name
      }
    }))
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <nav className={`py-4 bg-gray-50 border-b ${className}`} aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              {/* Home item */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center hover:text-darkBlue transition-colors">
                    <Home className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              
              {/* Handle breadcrumb items */}
              {items.slice(1).map((item, index) => {
                const isLast = index === items.length - 2;
                const actualIndex = index + 1; // Account for home being first
                
                return (
                  <React.Fragment key={item.url}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="font-medium text-darkBlue">
                          {item.name}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link 
                            to={item.url} 
                            className="hover:text-darkBlue transition-colors"
                            title={`Navigate to ${item.name}`}
                          >
                            {item.name}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
    </>
  );
}
