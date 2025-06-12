
import ServiceAreaLayout from "@/components/service-areas/ServiceAreaLayout";

export default function Chicago() {
  return (
    <ServiceAreaLayout
      title="Chicago Property Management Services"
      metaDescription="Professional HOA and condo property management services throughout Chicago. Stellar Property Management offers comprehensive association management solutions for Chicago communities."
      heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      description="Comprehensive HOA and condo management services throughout the greater Chicago area"
      overview="Chicago's diverse neighborhoods require specialized property management expertise. From the bustling Loop to quiet residential areas, Stellar Property Management understands the unique challenges and opportunities that Chicago properties present. Our local knowledge combined with professional management practices ensures your community thrives."
      serviceAreas={[
        "Downtown Chicago",
        "The Loop",
        "River North",
        "Streeterville",
        "Lincoln Park",
        "Lakeview",
        "Gold Coast",
        "Old Town",
        "West Loop",
        "South Loop",
        "Wicker Park",
        "Bucktown",
        "Logan Square",
        "Ukrainian Village",
        "Wrigleyville",
        "Uptown",
        "Andersonville",
        "Edgewater",
        "Rogers Park",
        "Ravenswood",
        "Hyde Park"
      ]}
      features={[
        "Local Chicago market expertise and knowledge of city regulations",
        "24/7 emergency maintenance coordination for high-rise and vintage buildings",
        "Specialized experience with Chicago's unique architectural styles",
        "Comprehensive vendor network throughout the Chicago metropolitan area",
        "Expert handling of Chicago Department of Buildings requirements",
        "Professional board meeting facilitation and governance support",
        "Detailed financial reporting and budget management",
        "Proactive communication with residents and board members",
        "Strategic reserve planning for long-term community health",
        "Compliance with Chicago Municipal Code and association bylaws"
      ]}
      stats={{
        propertiesManaged: "300+",
        yearsExperience: "15+",
        clientSatisfaction: "98%",
        responseTime: "< 2 hrs"
      }}
    />
  );
}
