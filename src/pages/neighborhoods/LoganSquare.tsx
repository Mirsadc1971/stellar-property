
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function LoganSquare() {
  return (
    <NeighborhoodLayout
      title="Logan Square, Chicago"
      metaDescription="Expert property management services in Logan Square, Chicago's vibrant and diverse neighborhood. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1599609939591-044013333893"
      description="A diverse community known for its historic boulevards, trendy dining scene, and beautiful greystones."
      history="Logan Square takes its name from the public square honoring Civil War General John A. Logan. The neighborhood is distinguished by its boulevard system, designated a Chicago Landmark in 2005, and the Illinois Centennial Monument at its center. Originally developed in the early 1900s, the area attracted many European immigrants who built the beautiful graystones and bungalows that still characterize the neighborhood. After a period of economic challenges, Logan Square has experienced a renaissance since the early 2000s, becoming known for its independent restaurants, coffee shops, and vibrant arts scene while maintaining its diverse community spirit."
      landmarks={[
        "Illinois Centennial Monument",
        "Logan Boulevard Historic District",
        "Palmer Square Park",
        "Congress Theater (Historic Landmark)",
        "Milwaukee Avenue Arts Corridor",
        "The 606 Elevated Trail"
      ]}
      schools={[
        "Darwin Elementary School",
        "Brentano Math & Science Academy",
        "Goethe Elementary School",
        "Funston Elementary School",
        "Logandale Middle School"
      ]}
      features={[
        "Vintage building preservation",
        "Mixed-use property expertise",
        "Greystone maintenance specialists",
        "New development management",
        "Commercial storefront solutions",
        "Entertainment venue proximity management"
      ]}
    />
  );
}
