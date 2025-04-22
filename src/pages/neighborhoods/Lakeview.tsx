
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Lakeview() {
  return (
    <NeighborhoodLayout
      title="Lakeview, Chicago"
      metaDescription="Expert property management services in Lakeview, Chicago's vibrant lakefront community. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
      description="A diverse neighborhood offering lakefront recreation, entertainment venues, and a mix of historic and modern housing."
      history="Lakeview has grown from a summer resort town in the 1800s to one of Chicago's largest and most diverse neighborhoods. Home to several distinct areas including Wrigleyville and Boystown, the neighborhood offers a perfect blend of residential charm and urban excitement. Its proximity to Lake Michigan and excellent transportation options has made it a consistently popular choice for residents."
      landmarks={[
        "Wrigley Field",
        "Belmont Harbor",
        "Music Box Theatre",
        "Century Shopping Centre",
        "Boystown",
        "Southport Corridor"
      ]}
      schools={[
        "Lake View High School",
        "Blaine Elementary",
        "Nettelhorst Elementary",
        "Hamilton Elementary",
        "St. Andrew School"
      ]}
      features={[
        "Entertainment district expertise",
        "Mixed-use property management",
        "Vintage building preservation",
        "Modern development oversight",
        "Retail space solutions",
        "Residential property management"
      ]}
    />
  );
}
