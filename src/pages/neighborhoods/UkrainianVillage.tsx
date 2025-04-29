
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function UkrainianVillage() {
  return (
    <NeighborhoodLayout
      title="Ukrainian Village, Chicago"
      metaDescription="Expert property management services in Ukrainian Village, Chicago's culturally rich neighborhood. Stellar Property Management offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1594305577398-5f8dddba007b"
      description="A historic neighborhood preserving Eastern European heritage through its churches, cultural institutions, and traditional restaurants."
      history="Ukrainian Village was established in the late 19th and early 20th centuries by Ukrainian immigrants who built distinctive churches, cultural institutions, and businesses. The neighborhood has maintained much of its ethnic character despite Chicago's evolving demographics, with many Ukrainian cultural centers, museums, and churches still active today. The area gained Chicago Landmark District status in 2002 to protect its distinctive worker cottages, brick two-flats, and ornate religious structures, preserving its unique architectural and cultural heritage while evolving into one of Chicago's most coveted residential neighborhoods."
      landmarks={[
        "St. Nicholas Ukrainian Catholic Cathedral",
        "Holy Trinity Orthodox Cathedral",
        "Ukrainian Institute of Modern Art",
        "Ukrainian National Museum",
        "Sts. Volodymyr & Olha Ukrainian Catholic Church",
        "Smith Park"
      ]}
      schools={[
        "Columbus Elementary School",
        "St. Nicholas Cathedral School",
        "Talcott Elementary School",
        "Mitchell Elementary School",
        "Near North Montessori School"
      ]}
      features={[
        "Historic property preservation",
        "Cultural institution management",
        "Vintage apartment building expertise",
        "Two-flat and three-flat maintenance",
        "Commercial property solutions",
        "Traditional building restoration"
      ]}
    />
  );
}
