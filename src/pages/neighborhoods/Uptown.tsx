
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function Uptown() {
  return (
    <NeighborhoodLayout
      title="Uptown, Chicago"
      metaDescription="Expert property management services in Uptown, Chicago's diverse and historic neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
      description="A diverse neighborhood known for historic entertainment venues, lakefront recreation, and multicultural dining."
      history="Uptown flourished in the early 20th century as a premier entertainment district, home to elaborate movie palaces and ballrooms that attracted visitors from across Chicago. During the Jazz Age, venues like the Green Mill became legendary. Following World War II, the neighborhood welcomed diverse immigrant communities, establishing its identity as one of Chicago's most multicultural areas. After some economic challenges in the latter part of the 20th century, Uptown has been experiencing revitalization while working to preserve its historic character and maintain housing affordability for its diverse population."
      landmarks={[
        "Aragon Ballroom",
        "Green Mill Jazz Club",
        "Riviera Theatre",
        "Montrose Beach and Harbor",
        "Uptown Theatre",
        "St. Augustine College"
      ]}
      schools={[
        "Uplift Community High School",
        "McCutcheon Elementary School",
        "Brennemann Elementary School",
        "Disney II Magnet School",
        "Goudy Elementary School"
      ]}
      features={[
        "Historic entertainment venue management",
        "Diverse housing solutions",
        "Vintage apartment building expertise",
        "Lakefront property maintenance",
        "Mixed-use development oversight",
        "Cultural landmark preservation"
      ]}
    />
  );
}
