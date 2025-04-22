
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function WestLoop() {
  return (
    <NeighborhoodLayout
      title="West Loop, Chicago"
      metaDescription="Expert property management services in West Loop, Chicago's trendy dining and tech hub. Manage369 offers professional property management for residential and commercial properties in this vibrant neighborhood."
      heroImage="https://images.unsplash.com/photo-1597626133663-53df9633b799"
      description="A former industrial district turned culinary and tech hub, known for its restaurants, art galleries, and converted loft spaces."
      history="The West Loop's transformation from a meat-packing and warehouse district to one of Chicago's hottest neighborhoods is a testament to urban renewal. Now home to Restaurant Row, tech companies, and luxury residential developments, the area maintains its industrial charm while embracing modern amenities. The neighborhood continues to evolve with new developments while preserving its historic character."
      landmarks={[
        "Restaurant Row on Randolph",
        "Fulton Market",
        "Google's Chicago Office",
        "McDonald's Global HQ",
        "Mary Bartelme Park",
        "Union Park"
      ]}
      schools={[
        "Whitney M. Young Magnet High School",
        "Skinner West Elementary",
        "Chicago Academy for the Arts",
        "The Chicago School of Professional Psychology",
        "University of Illinois Chicago (nearby)"
      ]}
      features={[
        "Mixed-use development expertise",
        "Restaurant and retail space management",
        "Tech-forward building solutions",
        "Historic loft conversion experience",
        "Modern amenity management",
        "Commercial property solutions"
      ]}
    />
  );
}
