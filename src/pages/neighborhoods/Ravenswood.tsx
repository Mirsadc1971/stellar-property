
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Ravenswood() {
  return (
    <NeighborhoodLayout
      title="Ravenswood, Chicago"
      metaDescription="Expert property management services in Ravenswood, Chicago's historic neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1584893884751-993c24fdab1e"
      description="A tree-lined neighborhood known for historic homes, artisan workshops, and craft breweries."
      history="Ravenswood was established in the 1860s as one of Chicago's first planned commuter suburbs, centered around the Chicago & North Western Railroad. The construction of single-family homes and the commercial district began in earnest in the 1890s. Many of the area's distinctive commercial buildings were originally factories and warehouses, creating an industrial corridor along Ravenswood Avenue. In recent decades, these industrial spaces have been repurposed by artisans, breweries, and small manufacturers, creating a unique mix of residential charm and creative industry that defines modern Ravenswood."
      landmarks={[
        "Ravenswood Industrial Corridor",
        "Architectural Artifacts",
        "All Saints' Episcopal Church",
        "McPherson Elementary School",
        "Lillstreet Art Center",
        "Ravenswood Event Center"
      ]}
      schools={[
        "Amundsen High School",
        "McPherson Elementary School",
        "Ravenswood Elementary School",
        "Lycée Français de Chicago",
        "Lake View High School (nearby)"
      ]}
      features={[
        "Historic home preservation",
        "Adaptive reuse expertise",
        "Mixed-use building management",
        "Commercial property solutions",
        "Single-family home oversight",
        "Artist/industrial space management"
      ]}
    />
  );
}
