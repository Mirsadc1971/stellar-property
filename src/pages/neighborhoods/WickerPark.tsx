
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function WickerPark() {
  return (
    <NeighborhoodLayout
      title="Wicker Park, Chicago"
      metaDescription="Expert property management services in Wicker Park, Chicago's trendy and artistic neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1590592080558-626ef88141de"
      description="A trendy neighborhood known for its artistic culture, independent businesses, and historic homes."
      history="Wicker Park has evolved from a 19th-century immigrants' haven to one of Chicago's most dynamic neighborhoods. Named after the central park donated by the Wicker brothers in 1870, the area flourished as merchants built elegant Victorian mansions along its boulevards. After a period of decline mid-20th century, Wicker Park experienced a renaissance in the 1980s and 90s as artists and musicians moved in, establishing its reputation as a creative hub. Today, it blends historic architecture with contemporary culture, renowned for its eclectic dining, shopping, and nightlife."
      landmarks={[
        "Wicker Park (The Park)",
        "The Flat Iron Arts Building",
        "Milwaukee Avenue Arts Corridor",
        "Double Door (Historic Music Venue)",
        "606 Elevated Trail",
        "North Avenue Shopping District"
      ]}
      schools={[
        "Pritzker School",
        "A.N. Pritzker School",
        "LaSalle II Magnet School",
        "Jose De Diego Community Academy",
        "Christopher House Elementary"
      ]}
      features={[
        "Mixed-use property expertise",
        "Historic building preservation",
        "Commercial storefront management",
        "Vintage apartment building operations",
        "Artist loft maintenance specialists",
        "Entertainment district management solutions"
      ]}
    />
  );
}
