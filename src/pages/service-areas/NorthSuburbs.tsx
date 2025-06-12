
import MainLayout from "@/components/layout/MainLayout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import NorthSuburbsHero from "@/components/service-areas/north-suburbs/NorthSuburbsHero";
import NorthSuburbsStats from "@/components/service-areas/north-suburbs/NorthSuburbsStats";
import NorthSuburbsLifestyle from "@/components/service-areas/north-suburbs/NorthSuburbsLifestyle";
import NorthSuburbsSeasonalServices from "@/components/service-areas/north-suburbs/NorthSuburbsSeasonalServices";
import NorthSuburbsCommunities from "@/components/service-areas/north-suburbs/NorthSuburbsCommunities";
import NorthSuburbsServices from "@/components/service-areas/north-suburbs/NorthSuburbsServices";
import NorthSuburbsTestimonials from "@/components/service-areas/north-suburbs/NorthSuburbsTestimonials";
import NorthSuburbsFAQ from "@/components/service-areas/north-suburbs/NorthSuburbsFAQ";
import NorthSuburbsCTA from "@/components/service-areas/north-suburbs/NorthSuburbsCTA";

export default function NorthSuburbs() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'North Suburbs', url: '/service-areas/north-suburbs' }
  ];

  const serviceStructuredData = {
    name: "North Suburbs Property Management Services",
    description: "Premier HOA and community management for Chicago's North Suburbs. Specializing in suburban lifestyle preservation, landscaping, seasonal services, and family-oriented communities.",
    areaServed: {
      "@type": "AdministrativeArea",
      "name": "North Suburbs of Chicago",
      "containsPlace": [
        "Evanston", "Skokie", "Wilmette", "Winnetka", "Northbrook",
        "Glencoe", "Highland Park", "Lake Forest", "Deerfield", "Lincolnshire"
      ]
    },
    serviceType: [
      "Comprehensive Landscape Management",
      "Seasonal Maintenance Programs",
      "Community Amenity Coordination", 
      "HOA Rule Enforcement",
      "Pool & Recreation Facility Management",
      "Snow Removal & Winter Services"
    ],
    audienceType: "Suburban HOAs, Family Communities, Residential Associations"
  };

  const faqData = [
    {
      question: "How do you handle seasonal landscaping changes?",
      answer: "Our seasonal programs include spring cleanup and planting, summer maintenance and irrigation, fall leaf removal and winterization, plus snow removal services. We coordinate all seasonal transitions seamlessly."
    },
    {
      question: "What's included in community amenity management?",
      answer: "We manage pools, playgrounds, walking trails, clubhouses, and common areas. This includes maintenance, safety inspections, seasonal opening/closing, and coordinating any repairs or improvements."
    },
    {
      question: "How do you support community events and activities?",
      answer: "We assist with event planning logistics, coordinate facility use, manage vendor relationships for community events, and help ensure all activities comply with HOA guidelines and local regulations."
    },
    {
      question: "What makes suburban management different from urban?",
      answer: "Suburban communities require more focus on landscaping, seasonal services, family amenities, and community building. We understand the pace is different and residents expect more personalized attention and community involvement."
    }
  ];

  return (
    <MainLayout>
      <SEOHead
        title="North Suburbs Property Management Services"
        description="Premier HOA and community management for Chicago's North Suburbs. Specializing in suburban lifestyle preservation, landscaping, seasonal services, and family-oriented communities."
        canonical="/service-areas/north-suburbs"
        keywords="North Suburbs property management, suburban HOA management, Evanston property management, Skokie HOA management, Wilmette community management, Highland Park property services, seasonal landscaping management"
        breadcrumbs={breadcrumbs}
      />

      <StructuredData type="service" data={serviceStructuredData} />
      <StructuredData type="faq" data={faqData} />

      <NorthSuburbsHero />
      <NorthSuburbsStats />
      <NorthSuburbsLifestyle />
      <NorthSuburbsSeasonalServices />
      <NorthSuburbsCommunities />
      <NorthSuburbsServices />
      <NorthSuburbsTestimonials />
      <NorthSuburbsFAQ />
      <NorthSuburbsCTA />
    </MainLayout>
  );
}
