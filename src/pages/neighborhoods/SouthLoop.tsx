
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function SouthLoop() {
  return (
    <NeighborhoodLayout
      title="South Loop, Chicago"
      metaDescription="Expert property management services in South Loop, Chicago's vibrant lakefront community. Manage369 offers professional property management for residential and commercial properties in this dynamic neighborhood."
      heroImage="https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
      description="A dynamic neighborhood combining historic architecture with modern development, offering lakefront living and cultural attractions."
      history="The South Loop has transformed from its industrial and printing house roots into one of Chicago's most sought-after residential areas. Once home to the famous Printer's Row, the neighborhood now boasts a perfect blend of historic loft conversions and luxury high-rises. Its proximity to Grant Park, Museum Campus, and the lakefront has made it a prime location for urban living."
      landmarks={[
        "Grant Park",
        "Museum Campus",
        "Soldier Field",
        "Printer's Row",
        "Columbia College Chicago",
        "McCormick Place"
      ]}
      schools={[
        "Jones College Prep",
        "South Loop Elementary",
        "British International School",
        "Columbia College Chicago",
        "Roosevelt University"
      ]}
      features={[
        "Mixed-use property expertise",
        "Historic building management",
        "Modern high-rise operations",
        "Event venue proximity management",
        "Student housing solutions",
        "Retail space management"
      ]}
    />
  );
}
