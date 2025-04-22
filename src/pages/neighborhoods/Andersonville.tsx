
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Andersonville() {
  return (
    <NeighborhoodLayout
      title="Andersonville, Chicago"
      metaDescription="Expert property management services in Andersonville, Chicago's charming Swedish heritage neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1598446311482-0408ad38d7bb"
      description="A welcoming neighborhood known for its Swedish heritage, independent businesses, and strong community spirit."
      history="Andersonville began as a Swedish enclave in the late 19th century when immigrants moved north following the Great Chicago Fire of 1871. The community's Swedish heritage remains evident in its architecture, cultural institutions, and annual celebrations. By the mid-20th century, the neighborhood welcomed diverse new residents while maintaining its distinctive character. Since the 1990s, Andersonville has flourished as a hub for independent businesses, creating one of Chicago's most vibrant commercial corridors while preserving its small-town charm within the big city."
      landmarks={[
        "Swedish American Museum",
        "Women & Children First Bookstore",
        "Clark Street Business District",
        "Andersonville Water Tower",
        "Neo-Futurists Theater",
        "Andersonville Galleria"
      ]}
      schools={[
        "Peirce School of International Studies",
        "Chappell Elementary School",
        "Northside Catholic Academy",
        "Trumbull Elementary School",
        "Swift Elementary School"
      ]}
      features={[
        "Historic building preservation",
        "Independent business district management",
        "Vintage apartment maintenance",
        "Mixed-use property expertise",
        "Commercial storefront solutions",
        "Community-oriented property oversight"
      ]}
    />
  );
}
