export const organizationData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://stellarpropertygroup.com",
  "name": "Stellar Property Management",
  "alternateName": "Stellar Property Group",
  "url": "https://stellarpropertygroup.com",
  "logo": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
  "image": "https://stellarpropertygroup.com/lovable-uploads/8e2d98b2-5011-4e40-a78f-3a78664306ba.png",
  "description": "Professional Chicago property management company specializing in HOA and condo association management services. Expert solutions for property maintenance, financial management, and community success.",
  "telephone": "+17737280652",
  "email": "info@stellarpropertygroup.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5107 North Western Avenue Ste 1S",
    "addressLocality": "Chicago",
    "addressRegion": "IL",
    "postalCode": "60625",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.975938,
    "longitude": -87.691592
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Chicago",
      "sameAs": "https://en.wikipedia.org/wiki/Chicago"
    },
    {
      "@type": "AdministrativeArea",
      "name": "North Suburbs of Chicago"
    }
  ],
  "serviceType": [
    "HOA Management",
    "Condo Association Management", 
    "Property Management",
    "Community Management",
    "Financial Management",
    "Maintenance Coordination"
  ],
  "openingHours": [
    "Mo-Fr 09:30-16:30"
  ],
  "sameAs": [
    "https://www.facebook.com/stellarpropertymgmt",
    "https://www.linkedin.com/company/stellarpropertymgmt",
    "https://twitter.com/stellarpropmgmt"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Property Management Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "HOA Management Chicago",
        "description": "Complete HOA and condo association management services in Chicago"
      },
      {
        "@type": "Service", 
        "name": "Property Maintenance",
        "description": "24/7 maintenance services for Chicago properties"
      },
      {
        "@type": "Service",
        "name": "Financial Management",
        "description": "Professional financial services for property associations in Chicago"
      }
    ]
  }
};

export const featuredNeighborhoodLinks = [
  {
    title: "Lincoln Park Property Management",
    description: "Premium lakefront neighborhood management with expertise in historic Victorian homes and luxury high-rises near Lincoln Park Zoo.",
    path: "/neighborhoods/lincoln-park",
    category: 'neighborhood' as const
  },
  {
    title: "River North HOA Services",
    description: "Specialized management for converted warehouses and modern condos in Chicago's premier arts district.",
    path: "/neighborhoods/river-north",
    category: 'neighborhood' as const
  },
  {
    title: "Gold Coast Luxury Management",
    description: "Elite property management for Chicago's most prestigious lakefront neighborhood with upscale amenities.",
    path: "/neighborhoods/gold-coast",
    category: 'neighborhood' as const
  }
];

export const serviceAreaLinks = [
  {
    title: "Downtown Chicago Services",
    description: "Comprehensive property management for Loop high-rises, River North lofts, and Streeterville luxury towers.",
    path: "/service-areas/chicago",
    category: 'area' as const
  },
  {
    title: "North Suburbs Management",
    description: "Family-focused community management for suburban neighborhoods throughout Chicago's North Shore.",
    path: "/service-areas/north-suburbs",
    category: 'area' as const
  },
  {
    title: "Professional HOA Services",
    description: "Complete HOA management solutions including board support, financial management, and maintenance coordination.",
    path: "/services",
    category: 'service' as const
  }
];

export const chicagoFAQs = [
  {
    question: "What makes Stellar Property Management different from other Chicago property management companies?",
    answer: `Our deep understanding of Chicago's unique neighborhoods sets us apart. From navigating <a href="/neighborhoods/lincoln-park" class="text-darkBlue hover:underline">Lincoln Park's</a> historic preservation requirements to managing high-rise buildings in <a href="/neighborhoods/river-north" class="text-darkBlue hover:underline">River North</a>, we provide localized expertise. Our <a href="/about" class="text-darkBlue hover:underline">experienced team</a> understands Chicago Municipal Code, local vendor networks, and neighborhood-specific challenges that affect property values and resident satisfaction.`
  },
  {
    question: "Which Chicago neighborhoods does Stellar Property Management serve?",
    answer: `We proudly serve all major Chicago neighborhoods including <a href="/neighborhoods/gold-coast" class="text-darkBlue hover:underline">Gold Coast</a>, <a href="/neighborhoods/lakeview" class="text-darkBlue hover:underline">Lakeview</a>, <a href="/neighborhoods/west-loop" class="text-darkBlue hover:underline">West Loop</a>, <a href="/neighborhoods/old-town" class="text-darkBlue hover:underline">Old Town</a>, and many more. Our <a href="/service-areas/chicago" class="text-darkBlue hover:underline">comprehensive service area</a> extends throughout downtown Chicago and into the <a href="/service-areas/north-suburbs" class="text-darkBlue hover:underline">North Suburbs</a>, ensuring consistent, professional management regardless of location.`
  },
  {
    question: "How do you handle emergency maintenance for Chicago properties?",
    answer: `Our 24/7 emergency response system is specifically designed for Chicago's climate and building types. Whether it's a heating emergency during a Chicago winter in <a href="/neighborhoods/wicker-park" class="text-darkBlue hover:underline">Wicker Park</a> or a plumbing issue in a <a href="/neighborhoods/streeterville" class="text-darkBlue hover:underline">Streeterville</a> high-rise, we maintain relationships with licensed local vendors who understand Chicago building codes and can respond quickly to protect your property and residents.`
  },
  {
    question: "What are your property management fees for Chicago HOAs and condos?",
    answer: `Our management fees are competitive and tailored to each property's specific needs and location. Factors include building size, amenities, and neighborhood requirements. <a href="/contact" class="text-darkBlue hover:underline">Contact our team</a> for a personalized quote, or <a href="/request-proposal" class="text-darkBlue hover:underline">request a free proposal</a> to see how our services can benefit your Chicago property association.`
  }
];