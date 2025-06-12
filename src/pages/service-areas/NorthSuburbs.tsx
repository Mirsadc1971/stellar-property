
import ServiceAreaLayout from "@/components/service-areas/ServiceAreaLayout";

export default function NorthSuburbs() {
  return (
    <ServiceAreaLayout
      title="North Suburbs Property Management Services"
      metaDescription="Professional HOA and condo property management services in Chicago's North Suburbs. Stellar Property Management offers comprehensive association management solutions for suburban communities."
      heroImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      description="Expert property management services for communities in Chicago's prestigious North Suburbs"
      overview="The North Suburbs of Chicago are home to some of the area's most desirable communities, featuring everything from lakefront high-rises to suburban townhome developments. Stellar Property Management brings big-city expertise with a personal touch that suburban communities value, ensuring your association operates smoothly while maintaining the character that makes your community special."
      serviceAreas={[
        "Evanston",
        "Skokie",
        "Wilmette", 
        "Winnetka",
        "Northbrook",
        "Glencoe",
        "Highland Park",
        "Lake Forest",
        "Deerfield",
        "Lincolnshire",
        "Vernon Hills",
        "Libertyville",
        "Gurnee",
        "Waukegan",
        "North Chicago",
        "Zion",
        "Lake Bluff",
        "Lake Zurich"
      ]}
      features={[
        "Extensive experience with North Shore lakefront properties",
        "Understanding of suburban community dynamics and expectations",
        "Specialized knowledge of Cook and Lake County regulations",
        "Network of trusted vendors serving the North Suburbs",
        "Experience with both high-rise and low-rise suburban developments",
        "Expertise in townhome and single-family HOA management",
        "Proactive landscape and common area maintenance programs",
        "Strategic planning for suburban community amenities",
        "Personalized service approach valued by suburban residents",
        "Comprehensive seasonal maintenance coordination"
      ]}
      stats={{
        propertiesManaged: "200+",
        yearsExperience: "15+",
        clientSatisfaction: "99%",
        responseTime: "< 3 hrs"
      }}
    />
  );
}
