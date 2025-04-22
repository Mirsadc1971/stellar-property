
import NeighborhoodLayout from "@/components/neighborhood/NeighborhoodLayout";

export default function HydePark() {
  return (
    <NeighborhoodLayout
      title="Hyde Park, Chicago"
      metaDescription="Expert property management services in Hyde Park, Chicago's historic lakefront community. Manage369 offers professional property management for residential and commercial properties."
      heroImage="https://images.unsplash.com/photo-1578681994506-b8bdf7a35d0a"
      description="A historic lakefront neighborhood home to the University of Chicago, museums, and architectural landmarks."
      history="Hyde Park's development began in 1853, gaining prominence when it hosted the World's Columbian Exposition of 1893. The founding of the University of Chicago in 1890 established the neighborhood as an intellectual center. Throughout the 20th century, Hyde Park maintained its diverse character, becoming known for progressive politics and racial integration during a time of significant segregation in Chicago. Today, it remains a vibrant community that balances academic institutions, historic architecture, cultural attractions, and lakefront recreation areas."
      landmarks={[
        "University of Chicago Campus",
        "Museum of Science and Industry",
        "Promontory Point",
        "Frank Lloyd Wright's Robie House",
        "DuSable Museum of African American History",
        "57th Street Books"
      ]}
      schools={[
        "University of Chicago Laboratory Schools",
        "Kenwood Academy High School",
        "Murray Language Academy",
        "Bret Harte Elementary",
        "University of Chicago"
      ]}
      features={[
        "Academic institution adjacency expertise",
        "Historic property preservation",
        "Student housing management",
        "Faculty housing solutions",
        "Mixed-use building operations",
        "Lakefront property maintenance"
      ]}
    />
  );
}
