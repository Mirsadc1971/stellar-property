import { communityData } from './communityData';

// Chicago regions
const chicagoRegions = [
  "Far North Side",
  "North Side",
  "Northwest Side",
  "West Side",
  "Central/Downtown",
  "South Side",
  "Southwest Side",
  "Far Southwest Side",
  "Far Southeast Side"
];

// Suburban regions
const suburbanRegions = [
  "North Shore",
  "Northwest Suburbs",
  "Western Suburbs",
  "Southwest Suburbs",
  "South Suburbs"
];

// Chicago neighborhoods by region
const chicagoNeighborhoods = {
  "Far North Side": [
    "Rogers Park",
    "West Ridge",
    "Edgewater",
    "Uptown",
    "Lincoln Square",
    "North Park",
    "Albany Park",
    "Forest Glen",
    "Jefferson Park",
    "Norwood Park",
    "Edison Park",
    "O'Hare"
  ],
  "North Side": [
    "North Center",
    "Lakeview",
    "Lincoln Park",
    "Avondale",
    "Logan Square"
  ],
  "Northwest Side": [
    "Irving Park",
    "Portage Park",
    "Dunning",
    "Belmont Cragin",
    "Hermosa",
    "Montclare"
  ],
  "Central/Downtown": [
    "Near North Side",
    "The Loop",
    "Near West Side",
    "West Town",
    "Noble Square",
    "River North",
    "Gold Coast",
    "Streeterville",
    "Fulton Market"
  ]
};

// Suburban communities by region
const suburbanCommunities = {
  "North Shore": [
    "Evanston",
    "Wilmette",
    "Kenilworth",
    "Winnetka",
    "Glencoe",
    "Highland Park",
    "Highwood",
    "Lake Forest",
    "Lake Bluff",
    "Northbrook",
    "Glenview",
    "Deerfield",
    "Northfield",
    "Riverwoods",
    "Bannockburn"
  ],
  "Northwest Suburbs": [
    "Arlington Heights",
    "Buffalo Grove",
    "Des Plaines",
    "Elk Grove Village",
    "Harwood Heights",
    "Hoffman Estates",
    "Mount Prospect",
    "Niles",
    "Norridge",
    "Palatine",
    "Park Ridge",
    "Prospect Heights",
    "Rolling Meadows",
    "Schaumburg",
    "Wheeling",
    "Barrington",
    "Barrington Hills",
    "South Barrington",
    "Lake Zurich",
    "Mundelein",
    "Wauconda",
    "Vernon Hills",
    "Itasca",
    "Roselle",
    "Streamwood",
    "Hanover Park",
    "Wood Dale"
  ]
};

// Generate all communities
export const generateAllCommunities = () => {
  return communityData;
};

// Export the generated communities
export const allCommunities = generateAllCommunities();

// Helper function to get communities by region
export const getCommunitiesByRegion = (region: string) => {
  return allCommunities.filter(community => 
    community.region === region || 
    (region === "Chicago" && chicagoRegions.includes(community.region))
  );
};

// Helper function to get community by slug
export const getCommunityBySlug = (slug: string) => {
  return allCommunities.find(community => 
    community.slug === slug || 
    community.name.toLowerCase().replace(/\s+/g, '-') === slug
  );
};

// Helper function to get related communities
export const getRelatedCommunities = (currentSlug: string, region: string, count: number = 3) => {
  return allCommunities
    .filter(community => community.region === region && community.slug !== currentSlug)
    .slice(0, count);
};

// Helper function to get Chicago neighborhoods
export const getChicagoNeighborhoods = () => {
  return allCommunities.filter(community => 
    chicagoRegions.includes(community.region)
  );
};

// Helper function to get suburban communities
export const getSuburbanCommunities = () => {
  return allCommunities.filter(community => 
    suburbanRegions.includes(community.region)
  );
};

// Helper function to get communities by neighborhood group
export const getCommunitiesByNeighborhoodGroup = (group: string) => {
  if (group in chicagoNeighborhoods) {
    const neighborhoodNames = chicagoNeighborhoods[group as keyof typeof chicagoNeighborhoods];
    return allCommunities.filter(community => 
      neighborhoodNames.includes(community.name)
    );
  }
  return [];
};

// Helper function to get communities by suburb group
export const getCommunitiesBySuburbGroup = (group: string) => {
  if (group in suburbanCommunities) {
    const communityNames = suburbanCommunities[group as keyof typeof suburbanCommunities];
    return allCommunities.filter(community => 
      communityNames.includes(community.name)
    );
  }
  return [];
};