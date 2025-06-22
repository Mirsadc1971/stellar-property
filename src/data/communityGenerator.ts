import { communityData } from './communityData';

// Base template for community data
const communityTemplate = {
  region: "",
  heroImage: "",
  description: "",
  history: "",
  features: [],
  propertyTypes: [],
  managementServices: []
};

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
    "Portage Park",
    "Forest Glen",
    "North Center",
    "Jefferson Park"
  ],
  "North Side": [
    "Lincoln Park",
    "Lakeview",
    "Avondale",
    "Logan Square",
    "Roscoe Village",
    "North Center",
    "Irving Park"
  ],
  "Northwest Side": [
    "Hermosa",
    "Avondale",
    "Logan Square",
    "Humboldt Park",
    "West Town",
    "Austin",
    "Montclare",
    "Belmont Cragin",
    "Dunning"
  ],
  "West Side": [
    "West Town",
    "Humboldt Park",
    "East Garfield Park",
    "West Garfield Park",
    "Near West Side",
    "North Lawndale",
    "South Lawndale",
    "Lower West Side"
  ],
  "Central/Downtown": [
    "The Loop",
    "Near North Side",
    "River North",
    "Gold Coast",
    "Streeterville",
    "West Loop",
    "South Loop",
    "Near South Side"
  ],
  "South Side": [
    "Armour Square",
    "Douglas",
    "Oakland",
    "Fuller Park",
    "Grand Boulevard",
    "Kenwood",
    "Washington Park",
    "Hyde Park",
    "Woodlawn",
    "South Shore",
    "Bridgeport",
    "McKinley Park"
  ],
  "Southwest Side": [
    "Garfield Ridge",
    "Archer Heights",
    "Brighton Park",
    "New City",
    "West Elsdon",
    "Gage Park",
    "Clearing",
    "West Lawn",
    "Chicago Lawn",
    "West Englewood",
    "Englewood"
  ],
  "Far Southwest Side": [
    "Ashburn",
    "Auburn Gresham",
    "Beverly",
    "Washington Heights",
    "Mount Greenwood",
    "Morgan Park"
  ],
  "Far Southeast Side": [
    "Chatham",
    "Avalon Park",
    "South Chicago",
    "Burnside",
    "Calumet Heights",
    "Roseland",
    "Pullman",
    "South Deering",
    "East Side",
    "Hegewisch"
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
    "Deerfield",
    "Northbrook",
    "Glenview",
    "Northfield",
    "Bannockburn"
  ],
  "Northwest Suburbs": [
    "Arlington Heights",
    "Mount Prospect",
    "Des Plaines",
    "Park Ridge",
    "Niles",
    "Morton Grove",
    "Skokie",
    "Lincolnwood",
    "Rosemont",
    "Schaumburg",
    "Hoffman Estates",
    "Palatine",
    "Rolling Meadows",
    "Inverness",
    "Barrington",
    "Buffalo Grove",
    "Wheeling",
    "Prospect Heights",
    "Elk Grove Village"
  ],
  "Western Suburbs": [
    "Oak Park",
    "River Forest",
    "Forest Park",
    "Maywood",
    "Bellwood",
    "Westchester",
    "Broadview",
    "Hillside",
    "Berkeley",
    "Elmhurst",
    "Villa Park",
    "Lombard",
    "Glen Ellyn",
    "Wheaton",
    "Naperville",
    "Lisle",
    "Downers Grove",
    "Woodridge",
    "Darien",
    "Westmont",
    "Clarendon Hills",
    "Hinsdale",
    "Western Springs",
    "La Grange",
    "La Grange Park",
    "Brookfield",
    "Riverside"
  ],
  "Southwest Suburbs": [
    "Cicero",
    "Berwyn",
    "Stickney",
    "Forest View",
    "Lyons",
    "McCook",
    "Bedford Park",
    "Summit",
    "Bridgeview",
    "Justice",
    "Hickory Hills",
    "Palos Hills",
    "Palos Heights",
    "Worth",
    "Chicago Ridge",
    "Oak Lawn",
    "Evergreen Park",
    "Burbank",
    "Hometown",
    "Oak Forest",
    "Midlothian",
    "Crestwood",
    "Robbins",
    "Blue Island",
    "Alsip",
    "Merrionette Park",
    "Calumet Park"
  ],
  "South Suburbs": [
    "Calumet City",
    "Dolton",
    "Riverdale",
    "Harvey",
    "Phoenix",
    "South Holland",
    "Thornton",
    "Lansing",
    "Glenwood",
    "Homewood",
    "East Hazel Crest",
    "Hazel Crest",
    "Markham",
    "Country Club Hills",
    "Flossmoor",
    "Olympia Fields",
    "Matteson",
    "Richton Park",
    "Park Forest",
    "Chicago Heights",
    "South Chicago Heights",
    "Steger",
    "Crete",
    "Monee",
    "University Park",
    "Frankfort"
  ]
};

// Hero images by region
const heroImages = {
  "Far North Side": "https://images.unsplash.com/photo-1571167530149-c1105da4c2c7",
  "North Side": "https://images.unsplash.com/photo-1599676821464-3555978c0ff4",
  "Northwest Side": "https://images.unsplash.com/photo-1594305577517-3075205a9493",
  "West Side": "https://images.unsplash.com/photo-1594305577398-5f8dddba007b",
  "Central/Downtown": "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  "South Side": "https://images.unsplash.com/photo-1578681994506-b8bdf7a35d0a",
  "Southwest Side": "https://images.unsplash.com/photo-1597626133663-53df9633b799",
  "Far Southwest Side": "https://images.unsplash.com/photo-1599609939591-044013333893",
  "Far Southeast Side": "https://images.unsplash.com/photo-1599609939591-044013333893",
  "North Shore": "https://images.unsplash.com/photo-1543069931-db20cca57f84",
  "Northwest Suburbs": "https://images.unsplash.com/photo-1560472355-b33ff0c44a43",
  "Western Suburbs": "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  "Southwest Suburbs": "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  "South Suburbs": "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
};

// Community descriptions by region
const communityDescriptions = {
  "Far North Side": [
    "A diverse lakefront community with beautiful beaches and vibrant cultural scene.",
    "A family-friendly neighborhood with tree-lined streets and excellent schools.",
    "A historic area known for its architectural diversity and strong community spirit.",
    "A vibrant neighborhood with rich cultural heritage and diverse dining options.",
    "A charming community with excellent parks and convenient transportation options."
  ],
  "North Side": [
    "An upscale neighborhood with historic homes and proximity to lakefront recreation.",
    "A lively area with excellent nightlife, dining, and entertainment options.",
    "A family-friendly community with beautiful parks and top-rated schools.",
    "A trendy neighborhood with independent businesses and artistic atmosphere.",
    "A diverse area with excellent transportation and recreational amenities."
  ],
  "Northwest Side": [
    "A residential neighborhood with strong ethnic heritage and family-friendly atmosphere.",
    "A diverse community with excellent parks and affordable housing options.",
    "A vibrant area with rich cultural diversity and strong community ties.",
    "A historic neighborhood with beautiful bungalows and tree-lined streets.",
    "A family-oriented community with excellent schools and recreational facilities."
  ],
  "West Side": [
    "A historic neighborhood undergoing revitalization with beautiful architecture.",
    "A diverse community with rich cultural heritage and strong neighborhood identity.",
    "An evolving area with new development and historic preservation efforts.",
    "A vibrant neighborhood with excellent dining and cultural attractions.",
    "A community with strong ties to Chicago's industrial and cultural history."
  ],
  "Central/Downtown": [
    "A bustling urban center with world-class cultural attractions and luxury high-rises.",
    "A vibrant district with iconic architecture and excellent shopping and dining.",
    "A dynamic neighborhood blending historic buildings with modern developments.",
    "A prestigious area with luxury residences and proximity to business districts.",
    "An energetic community with excellent nightlife and cultural amenities."
  ],
  "South Side": [
    "A historic neighborhood with beautiful parks and strong community pride.",
    "A diverse area with rich cultural heritage and beautiful architecture.",
    "A community with strong educational institutions and family-friendly atmosphere.",
    "A neighborhood with excellent transportation and recreational amenities.",
    "A vibrant area with rich history and ongoing revitalization efforts."
  ],
  "Southwest Side": [
    "A family-oriented neighborhood with strong ethnic heritage and community ties.",
    "A residential area with affordable housing and excellent transportation options.",
    "A diverse community with rich cultural traditions and local businesses.",
    "A neighborhood with beautiful parks and strong community organizations.",
    "A family-friendly area with excellent schools and recreational facilities."
  ],
  "Far Southwest Side": [
    "A residential neighborhood with historic homes and strong community pride.",
    "A family-oriented area with excellent schools and beautiful parks.",
    "A community with strong Irish heritage and beautiful historic architecture.",
    "A neighborhood with tree-lined streets and suburban-like atmosphere.",
    "A diverse area with strong community organizations and local businesses."
  ],
  "Far Southeast Side": [
    "A historic neighborhood with strong industrial heritage and community pride.",
    "A diverse community with affordable housing and excellent transportation.",
    "A residential area with beautiful parks and strong neighborhood identity.",
    "A neighborhood with rich cultural history and ongoing revitalization efforts.",
    "A family-friendly community with excellent recreational facilities."
  ],
  "North Shore": [
    "A prestigious lakefront suburb with beautiful homes and excellent schools.",
    "An upscale community with historic architecture and vibrant downtown.",
    "A family-oriented suburb with excellent recreational facilities and schools.",
    "A charming village with tree-lined streets and strong community spirit.",
    "A luxurious community with beautiful estates and lakefront amenities."
  ],
  "Northwest Suburbs": [
    "A thriving suburb with excellent schools and diverse housing options.",
    "A family-friendly community with outstanding parks and recreational facilities.",
    "A growing suburb with strong business presence and residential neighborhoods.",
    "A diverse community with excellent shopping and dining options.",
    "A well-established suburb with beautiful parks and strong community services."
  ],
  "Western Suburbs": [
    "A historic suburb with beautiful architecture and excellent schools.",
    "A family-oriented community with tree-lined streets and vibrant downtown.",
    "A diverse suburb with excellent transportation and recreational amenities.",
    "A charming village with strong community spirit and beautiful homes.",
    "A growing community with excellent schools and diverse housing options."
  ],
  "Southwest Suburbs": [
    "A diverse suburb with strong ethnic heritage and family-friendly atmosphere.",
    "A residential community with affordable housing and excellent transportation.",
    "A growing suburb with new developments and established neighborhoods.",
    "A family-oriented area with excellent schools and recreational facilities.",
    "A community with strong industrial heritage and ongoing revitalization."
  ],
  "South Suburbs": [
    "A historic suburb with beautiful homes and strong community pride.",
    "A diverse community with excellent transportation and affordable housing.",
    "A family-oriented suburb with outstanding schools and recreational facilities.",
    "A residential area with beautiful parks and strong community organizations.",
    "A growing suburb with new developments and established neighborhoods."
  ]
};

// Community histories by region
const communityHistories = {
  "Far North Side": [
    "Originally settled in the late 19th century, this area developed rapidly after being annexed to Chicago. The extension of streetcar lines and later the elevated train brought significant residential development. Throughout the 20th century, the neighborhood welcomed diverse immigrant communities, creating a rich cultural tapestry that continues to define the area today.",
    "This community began as a farming settlement before being annexed to Chicago in the late 19th century. The area saw significant development in the early 20th century with the arrival of the elevated train. Over decades, it has maintained its residential character while welcoming diverse populations that have contributed to its vibrant cultural identity.",
    "Established in the early 20th century, this neighborhood grew rapidly as transportation expanded northward from downtown Chicago. The area features distinctive architecture from different eras, reflecting its development over time. Today, it maintains a balance of historic preservation and modern amenities that make it a desirable residential community."
  ],
  "North Side": [
    "This neighborhood's development began in earnest after the Great Chicago Fire of 1871, when residents moved northward from the devastated downtown area. By the early 20th century, it had become one of Chicago's most desirable residential areas, known for its beautiful homes and proximity to Lake Michigan. Today, it continues to be a premier Chicago neighborhood, balancing historic character with modern urban amenities.",
    "Originally developed in the late 19th century as a streetcar suburb, this area has evolved into one of Chicago's most vibrant neighborhoods. Its proximity to Lake Michigan and excellent transportation options have made it consistently desirable. Over the decades, it has maintained a balance of residential charm and urban excitement that continues to attract diverse residents.",
    "This community began as a working-class neighborhood in the early 20th century before evolving into a trendy urban area in recent decades. Its historic buildings have been preserved and repurposed, maintaining the area's architectural character while accommodating modern uses. Today, it's known for its vibrant street life and diverse cultural offerings."
  ],
  "Northwest Side": [
    "Originally settled in the late 19th century, this area developed as a working-class neighborhood with strong ethnic communities. The extension of streetcar lines and later the elevated train brought significant residential development. Throughout the 20th century, the neighborhood welcomed diverse immigrant communities, creating a rich cultural tapestry that continues to define the area today.",
    "This community began as a farming settlement before being annexed to Chicago in the late 19th century. The area saw significant development in the early 20th century with the arrival of the elevated train. Over decades, it has maintained its residential character while welcoming diverse populations that have contributed to its vibrant cultural identity.",
    "Established in the early 20th century, this neighborhood grew rapidly as transportation expanded from downtown Chicago. The area features distinctive architecture from different eras, reflecting its development over time. Today, it maintains a balance of historic preservation and modern amenities that make it a desirable residential community."
  ],
  "West Side": [
    "This area developed in the late 19th century as an industrial and residential neighborhood. The Great Chicago Fire of 1871 led to significant rebuilding efforts that shaped the area's character. Throughout the 20th century, the neighborhood has undergone various phases of development and revitalization, maintaining its role as an important part of Chicago's urban fabric.",
    "Originally developed as a working-class neighborhood in the late 19th century, this area has a rich history of industrial development and community organizing. Over the decades, it has seen significant changes while maintaining strong neighborhood identity and cultural heritage that continues to define the community today.",
    "This community began as part of Chicago's westward expansion in the late 19th century. The area developed with a mix of residential and industrial uses, creating a diverse urban environment. Today, ongoing revitalization efforts are bringing new investment while preserving the area's historic character and community spirit."
  ],
  "Central/Downtown": [
    "As Chicago's historic core, this area has been at the center of the city's development since its founding. Following the Great Chicago Fire of 1871, it was rebuilt with innovative architecture that would define the modern skyscraper. Throughout the 20th century, it evolved from primarily commercial use to include significant residential development, creating a vibrant mixed-use district that defines urban living in Chicago.",
    "This neighborhood transformed from an industrial and warehouse district in the late 19th century to one of Chicago's most prestigious areas. Its proximity to the central business district made it attractive for upscale development, and over decades it has become known for luxury residences, high-end shopping, and fine dining that attract visitors and residents alike.",
    "Originally developed as a commercial and entertainment district in the late 19th century, this area has reinvented itself multiple times throughout Chicago's history. Recent decades have seen significant residential development, transforming former commercial buildings into desirable urban homes while maintaining the area's historic character and central role in Chicago's cultural life."
  ],
  "South Side": [
    "This area developed in the late 19th century as part of Chicago's southward expansion. The neighborhood has a rich history of cultural institutions, including universities and museums, that have shaped its character. Throughout the 20th century, it has maintained its role as an important cultural and residential center while adapting to changing urban conditions.",
    "Originally developed as a residential neighborhood in the late 19th century, this area became known for its beautiful architecture and strong community institutions. Over the decades, it has maintained its residential character while welcoming diverse populations that have contributed to its vibrant cultural identity and ongoing development.",
    "This community began as part of Chicago's post-fire reconstruction in the late 19th century. The area developed with distinctive architecture and strong neighborhood institutions that continue to define its character. Today, ongoing revitalization efforts are bringing new investment while preserving the area's historic significance and community spirit."
  ],
  "Southwest Side": [
    "Originally settled in the late 19th century, this area developed as a working-class neighborhood with strong ethnic communities. The extension of streetcar lines brought significant residential development. Throughout the 20th century, the neighborhood welcomed diverse immigrant communities, creating a rich cultural tapestry that continues to define the area today.",
    "This community began as a farming settlement before being annexed to Chicago in the late 19th century. The area saw significant development in the early 20th century with improved transportation. Over decades, it has maintained its residential character while welcoming diverse populations that have contributed to its vibrant cultural identity.",
    "Established in the early 20th century, this neighborhood grew as part of Chicago's expansion. The area features distinctive architecture from different eras, reflecting its development over time. Today, it maintains a balance of historic preservation and modern amenities that make it a desirable residential community."
  ],
  "Far Southwest Side": [
    "Originally settled in the late 19th century, this area developed as a residential neighborhood with strong community institutions. The extension of transportation lines brought significant development. Throughout the 20th century, the neighborhood maintained its residential character while developing strong community organizations and local identity.",
    "This community began as a farming settlement before being incorporated into Chicago. The area saw significant development in the early 20th century with improved transportation access. Over decades, it has maintained its suburban-like character while developing excellent schools and community services.",
    "Established in the early 20th century, this neighborhood grew as families sought residential areas outside the city center. The area features beautiful homes and tree-lined streets that reflect its development as a desirable residential community. Today, it continues to attract families seeking quality neighborhoods with strong community spirit."
  ],
  "Far Southeast Side": [
    "This area developed in the late 19th century with strong ties to Chicago's industrial development. The neighborhood has a rich history of working-class communities and industrial heritage that shaped its character. Throughout the 20th century, it has maintained its role as an important residential area while adapting to changing economic conditions.",
    "Originally developed as an industrial and residential area in the late 19th century, this community has a strong history of neighborhood organizing and community pride. Over the decades, it has maintained its residential character while working to preserve its industrial heritage and develop new opportunities for residents.",
    "This community began as part of Chicago's industrial expansion in the late 19th century. The area developed with a mix of residential and industrial uses, creating a unique urban environment. Today, ongoing efforts focus on revitalization while preserving the area's historic character and strong community identity."
  ],
  "North Shore": [
    "Established in the late 19th century as a railroad suburb, this community developed as an escape from urban Chicago for wealthy residents. The area's beautiful natural setting along Lake Michigan attracted prominent architects who designed impressive homes and public buildings. Throughout the 20th century, it maintained its reputation for excellent schools, beautiful homes, and strong community institutions.",
    "This village was incorporated in the late 19th century and developed as an exclusive residential community for Chicago's business elite. Its careful planning included generous lot sizes, preservation of natural features, and architectural standards that created a distinctive character. Today, it remains one of the Chicago area's most prestigious addresses, known for its beautiful homes and excellent community services.",
    "Founded in the mid-19th century, this community grew significantly with the arrival of the railroad. Its development was carefully planned to preserve natural features while creating a desirable residential environment. Throughout its history, the village has maintained high standards for architecture, education, and community services that continue to make it one of Chicago's premier suburbs."
  ],
  "Northwest Suburbs": [
    "This community remained primarily agricultural until the post-World War II era, when suburban development transformed the Chicago region. The construction of highways and expansion of O'Hare International Airport spurred rapid growth in the 1950s and 60s. Since then, it has evolved into a complete community with diverse housing, strong commercial districts, and excellent public services.",
    "Originally settled in the 19th century, this area remained largely rural until the mid-20th century suburban boom. The development of regional shopping centers and corporate campuses in the 1970s and 80s established it as a major suburban center. Today, it balances its role as a commercial hub with diverse residential neighborhoods that offer excellent quality of life.",
    "This community began as a small farming settlement before experiencing dramatic growth during the post-World War II suburban expansion. Careful planning created distinct residential neighborhoods while accommodating significant commercial development. Over decades, it has evolved into a complete community with diverse housing options, excellent schools, and strong public services."
  ],
  "Western Suburbs": [
    "Established in the late 19th century as a railroad suburb, this community has long been known for its architectural significance and progressive values. Historic preservation has maintained the area's distinctive character while allowing for appropriate development. Throughout its history, the community has been known for excellent schools, diverse housing, and strong civic engagement.",
    "This village developed in the early 20th century as improved transportation made suburban living more accessible. Its growth accelerated after World War II with significant residential development. Throughout its history, the community has maintained a balance of housing options, commercial vitality, and public amenities that create an excellent quality of life.",
    "Founded in the 19th century, this community grew significantly with the arrival of the railroad. Its historic downtown and residential neighborhoods reflect different eras of development, creating architectural diversity. The community has consistently invested in education, parks, and public services, making it one of Chicago's most desirable suburbs."
  ],
  "Southwest Suburbs": [
    "This community remained primarily agricultural until the post-World War II era, when suburban development transformed the Chicago region. The construction of highways spurred rapid growth in the 1950s and 60s. Since then, it has evolved into a complete community with diverse housing, strong commercial districts, and excellent public services.",
    "Originally settled in the 19th century, this area remained largely rural until the mid-20th century suburban boom. The development of shopping centers and residential subdivisions in the 1960s and 70s established it as a growing suburban community. Today, it balances residential neighborhoods with commercial development that serves the broader region.",
    "This community began as a small farming settlement before experiencing growth during the post-World War II suburban expansion. Careful planning created residential neighborhoods while accommodating commercial development. Over decades, it has evolved into a complete community with diverse housing options, good schools, and strong public services."
  ],
  "South Suburbs": [
    "Established in the late 19th century, this community developed with the expansion of railroad lines south of Chicago. The area attracted residents seeking suburban living while maintaining access to the city. Throughout the 20th century, it has maintained its residential character while developing strong community institutions and local identity.",
    "This village developed in the early 20th century as improved transportation made suburban living more accessible. Its growth continued after World War II with significant residential development. Throughout its history, the community has maintained a balance of housing options and public amenities that create a good quality of life.",
    "Founded in the 19th century, this community grew with the arrival of the railroad. Its residential neighborhoods reflect different eras of development, creating diversity in housing stock. The community has worked to maintain good schools, parks, and public services while adapting to changing regional conditions."
  ]
};

// Community features by region
const communityFeatures = {
  "Far North Side": [
    "Miles of public beaches along Lake Michigan",
    "Diverse dining scene with global cuisines",
    "Historic architecture and tree-lined streets",
    "Excellent public transportation options",
    "Vibrant cultural institutions and festivals",
    "Strong neighborhood identity and community organizations",
    "Beautiful parks and recreational facilities",
    "Diverse housing stock from vintage apartments to single-family homes"
  ],
  "North Side": [
    "Proximity to Lake Michigan and lakefront recreation",
    "Vibrant entertainment and nightlife districts",
    "Historic architecture and landmark buildings",
    "Excellent public and private schools",
    "Diverse dining and shopping options",
    "Beautiful parks and public spaces",
    "Strong public transportation infrastructure",
    "Walkable neighborhoods with strong community character"
  ],
  "Northwest Side": [
    "Family-friendly residential streets",
    "Strong ethnic heritage and cultural institutions",
    "Historic bungalow districts",
    "Excellent parks and recreational facilities",
    "Diverse local businesses and shopping districts",
    "Good public transportation access",
    "Affordable housing options",
    "Strong community organizations and neighborhood identity"
  ],
  "West Side": [
    "Historic architecture and landmark districts",
    "Cultural institutions and community organizations",
    "Ongoing revitalization and development",
    "Diverse dining and entertainment options",
    "Strong transportation infrastructure",
    "Beautiful parks and public spaces",
    "Rich cultural heritage and community history",
    "Affordable housing with historic character"
  ],
  "Central/Downtown": [
    "World-class cultural institutions and museums",
    "Iconic architecture and skyscrapers",
    "Vibrant shopping and dining districts",
    "Beautiful public parks and riverfront",
    "Excellent public transportation hub",
    "Luxury high-rise residential buildings",
    "Historic landmark buildings",
    "Proximity to business and financial districts"
  ],
  "South Side": [
    "Historic architecture and landmark districts",
    "Beautiful parks and green spaces",
    "Strong cultural institutions and universities",
    "Diverse housing options at various price points",
    "Rich cultural heritage and community history",
    "Ongoing development and revitalization",
    "Strong community organizations",
    "Excellent transportation infrastructure"
  ],
  "Southwest Side": [
    "Strong ethnic heritage and cultural traditions",
    "Family-oriented residential neighborhoods",
    "Affordable housing options",
    "Local business districts with unique character",
    "Beautiful parks and recreational facilities",
    "Good transportation connections",
    "Strong community organizations",
    "Rich neighborhood history and identity"
  ],
  "Far Southwest Side": [
    "Historic residential architecture",
    "Beautiful parks and green spaces",
    "Strong community organizations and local identity",
    "Excellent schools and family amenities",
    "Diverse housing options",
    "Rich cultural heritage",
    "Local business districts with unique character",
    "Good transportation connections to downtown"
  ],
  "Far Southeast Side": [
    "Industrial heritage and historic sites",
    "Affordable housing options",
    "Beautiful natural areas and parks",
    "Strong community organizations",
    "Local business districts",
    "Diverse cultural heritage",
    "Ongoing revitalization efforts",
    "Good transportation infrastructure"
  ],
  "North Shore": [
    "Beautiful Lake Michigan shoreline and beaches",
    "Historic architecture and landmark homes",
    "Excellent public and private schools",
    "Charming downtown shopping districts",
    "Beautiful parks and recreational facilities",
    "Strong community institutions and services",
    "Convenient transportation to Chicago",
    "Prestigious residential addresses"
  ],
  "Northwest Suburbs": [
    "Excellent school districts",
    "Diverse housing options from starter homes to luxury estates",
    "Strong commercial and retail centers",
    "Beautiful parks and forest preserves",
    "Convenient transportation options",
    "Family-friendly recreational facilities",
    "Strong municipal services",
    "Vibrant community events and festivals"
  ],
  "Western Suburbs": [
    "Historic downtown districts with unique character",
    "Architectural significance and landmark homes",
    "Excellent public and private schools",
    "Beautiful parks and recreational facilities",
    "Strong community organizations",
    "Convenient transportation to Chicago",
    "Diverse housing options",
    "Vibrant cultural institutions"
  ],
  "Southwest Suburbs": [
    "Affordable housing options",
    "Strong ethnic heritage and cultural diversity",
    "Good transportation connections",
    "Family-friendly recreational facilities",
    "Local business districts with unique character",
    "Beautiful parks and forest preserves",
    "Strong community organizations",
    "Excellent municipal services"
  ],
  "South Suburbs": [
    "Historic architecture and landmark districts",
    "Affordable housing with character",
    "Beautiful parks and forest preserves",
    "Strong community organizations",
    "Convenient transportation to Chicago",
    "Diverse housing options",
    "Rich cultural heritage",
    "Ongoing revitalization efforts"
  ]
};

// Property types by region
const propertyTypes = {
  "Far North Side": [
    "Vintage apartment buildings",
    "Courtyard buildings",
    "Single-family homes",
    "Two-flat and three-flat buildings",
    "Modern condominiums",
    "Mixed-use properties",
    "Lakefront high-rises",
    "Historic residential buildings"
  ],
  "North Side": [
    "Historic brownstones and greystones",
    "Luxury high-rise condominiums",
    "Vintage courtyard buildings",
    "Single-family homes",
    "Converted lofts",
    "Two-flat and three-flat buildings",
    "Modern mid-rise developments",
    "Mixed-use properties"
  ],
  "Northwest Side": [
    "Chicago bungalows",
    "Two-flat and three-flat buildings",
    "Single-family homes",
    "Small apartment buildings",
    "Courtyard buildings",
    "New construction condominiums",
    "Worker cottages",
    "Mixed-use properties"
  ],
  "West Side": [
    "Historic greystones",
    "Two-flat and three-flat buildings",
    "Converted industrial lofts",
    "Worker cottages",
    "New construction developments",
    "Mixed-use properties",
    "Small apartment buildings",
    "Single-family homes"
  ],
  "Central/Downtown": [
    "Luxury high-rise condominiums",
    "Historic loft conversions",
    "Boutique condo buildings",
    "Mixed-use developments",
    "Hotel-condominium properties",
    "Historic landmark buildings",
    "Modern glass towers",
    "Waterfront properties"
  ],
  "South Side": [
    "Historic greystones",
    "Chicago bungalows",
    "Two-flat and three-flat buildings",
    "Single-family homes",
    "Courtyard buildings",
    "New construction developments",
    "Mid-rise condominiums",
    "Mixed-use properties"
  ],
  "Southwest Side": [
    "Chicago bungalows",
    "Single-family homes",
    "Two-flat buildings",
    "Small apartment buildings",
    "Ranch-style homes",
    "Cape Cod houses",
    "Mixed-use properties",
    "New construction developments"
  ],
  "Far Southwest Side": [
    "Historic single-family homes",
    "Chicago bungalows",
    "Tudor and Victorian houses",
    "Ranch-style homes",
    "Two-flat buildings",
    "New construction developments",
    "Small apartment buildings",
    "Mixed-use properties"
  ],
  "Far Southeast Side": [
    "Single-family homes",
    "Chicago bungalows",
    "Two-flat buildings",
    "Historic worker housing",
    "Small apartment buildings",
    "New construction developments",
    "Mixed-use properties",
    "Affordable housing developments"
  ],
  "North Shore": [
    "Luxury lakefront estates",
    "Historic mansions",
    "Custom-built single-family homes",
    "Luxury condominiums",
    "Townhouse developments",
    "Downtown mixed-use properties",
    "Mid-century modern homes",
    "New construction luxury homes"
  ],
  "Northwest Suburbs": [
    "Single-family subdivisions",
    "Townhouse communities",
    "Luxury custom homes",
    "Condominium developments",
    "Active adult communities",
    "Mixed-use town center developments",
    "Executive housing",
    "Apartment complexes"
  ],
  "Western Suburbs": [
    "Historic Victorian homes",
    "Prairie-style architecture",
    "Single-family subdivisions",
    "Luxury estates",
    "Downtown condominiums",
    "Townhouse communities",
    "Mid-century modern homes",
    "New construction developments"
  ],
  "Southwest Suburbs": [
    "Single-family subdivisions",
    "Ranch-style homes",
    "Split-level houses",
    "Townhouse communities",
    "Condominium developments",
    "Mixed-use properties",
    "Apartment complexes",
    "New construction developments"
  ],
  "South Suburbs": [
    "Historic single-family homes",
    "Mid-century subdivisions",
    "Ranch-style homes",
    "Townhouse communities",
    "Condominium developments",
    "Mixed-use properties",
    "Apartment complexes",
    "New construction developments"
  ]
};

// Management services by region
const managementServices = {
  "Far North Side": [
    "Vintage building preservation",
    "Lakefront property maintenance",
    "Multi-unit building operations",
    "Student housing management",
    "Diverse community engagement",
    "Commercial property solutions",
    "Mixed-use property expertise",
    "Condominium association management"
  ],
  "North Side": [
    "Historic property preservation",
    "Luxury residential management",
    "Entertainment district expertise",
    "Mixed-use property management",
    "Vintage building maintenance",
    "Modern development oversight",
    "Retail space solutions",
    "Condominium association governance"
  ],
  "Northwest Side": [
    "Bungalow belt property expertise",
    "Multi-family building operations",
    "Culturally diverse community management",
    "Affordable housing solutions",
    "Small business district coordination",
    "Residential property management",
    "Community association governance",
    "Property value enhancement strategies"
  ],
  "West Side": [
    "Historic building preservation",
    "Multi-family property management",
    "Community revitalization expertise",
    "Mixed-use property solutions",
    "Affordable housing management",
    "Commercial property oversight",
    "Residential association governance",
    "Property improvement coordination"
  ],
  "Central/Downtown": [
    "Luxury high-rise operations",
    "Mixed-use property expertise",
    "Commercial property management",
    "Historic building preservation",
    "Amenity-rich building oversight",
    "24/7 concierge services",
    "Entertainment district management",
    "Waterfront property maintenance"
  ],
  "South Side": [
    "Historic property preservation",
    "University-adjacent management",
    "Multi-family building operations",
    "Community-focused property solutions",
    "Affordable housing expertise",
    "Mixed-use property management",
    "Residential association governance",
    "Property improvement coordination"
  ],
  "Southwest Side": [
    "Single-family association management",
    "Multi-family building operations",
    "Culturally diverse community expertise",
    "Affordable housing solutions",
    "Commercial property oversight",
    "Residential property management",
    "Community association governance",
    "Property value enhancement strategies"
  ],
  "Far Southwest Side": [
    "Historic district management",
    "Single-family association governance",
    "Community-focused property solutions",
    "Commercial district coordination",
    "Residential property management",
    "Mixed-use property expertise",
    "Property value enhancement strategies",
    "Community engagement initiatives"
  ],
  "Far Southeast Side": [
    "Industrial-adjacent property management",
    "Affordable housing solutions",
    "Community revitalization expertise",
    "Residential association governance",
    "Commercial property oversight",
    "Property improvement coordination",
    "Multi-family building operations",
    "Community engagement initiatives"
  ],
  "North Shore": [
    "Luxury estate management",
    "Historic home preservation",
    "Lakefront property maintenance",
    "High-end amenity coordination",
    "Community association governance",
    "Downtown commercial property solutions",
    "Condominium association management",
    "Property value enhancement strategies"
  ],
  "Northwest Suburbs": [
    "Homeowners association management",
    "Townhouse community operations",
    "Commercial property solutions",
    "Community amenity oversight",
    "Common area maintenance",
    "Reserve fund planning",
    "Condominium association governance",
    "Property value enhancement strategies"
  ],
  "Western Suburbs": [
    "Historic property preservation",
    "Homeowners association management",
    "Downtown commercial property solutions",
    "Mixed-use property expertise",
    "Community association governance",
    "Condominium building operations",
    "Property value enhancement strategies",
    "Community engagement initiatives"
  ],
  "Southwest Suburbs": [
    "Homeowners association management",
    "Townhouse community operations",
    "Commercial property solutions",
    "Community amenity oversight",
    "Common area maintenance",
    "Reserve fund planning",
    "Condominium association governance",
    "Property value enhancement strategies"
  ],
  "South Suburbs": [
    "Homeowners association management",
    "Historic property preservation",
    "Commercial property solutions",
    "Community revitalization expertise",
    "Residential association governance",
    "Property improvement coordination",
    "Condominium building operations",
    "Community engagement initiatives"
  ]
};

// Function to generate a random item from an array
const getRandomItem = (array: string[]) => {
  if (!array || array.length === 0) {
    return "A vibrant community with excellent amenities and strong neighborhood character.";
  }
  return array[Math.floor(Math.random() * array.length)];
};

// Function to get random items from an array without duplicates
const getRandomItems = (array: string[], count: number) => {
  if (!array || array.length === 0) {
    return ["Excellent community amenities", "Strong neighborhood character", "Beautiful residential areas"];
  }
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to generate a community slug
const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

// Function to generate community data for a specific neighborhood
const generateCommunityData = (name: string, region: string, isChicago: boolean = true) => {
  const regionKey = isChicago ? region : region;
  const regionFeatures = communityFeatures[regionKey as keyof typeof communityFeatures] || [];
  const regionPropertyTypes = propertyTypes[regionKey as keyof typeof propertyTypes] || [];
  const regionManagementServices = managementServices[regionKey as keyof typeof managementServices] || [];
  const regionDescriptions = communityDescriptions[regionKey as keyof typeof communityDescriptions] || [];
  const regionHistories = communityHistories[regionKey as keyof typeof communityHistories] || [];
  
  return {
    name,
    slug: generateSlug(name),
    region: isChicago ? "Chicago" : region,
    heroImage: heroImages[regionKey as keyof typeof heroImages] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    description: getRandomItem(regionDescriptions),
    history: getRandomItem(regionHistories),
    features: getRandomItems(regionFeatures, 5),
    propertyTypes: getRandomItems(regionPropertyTypes, 5),
    managementServices: getRandomItems(regionManagementServices, 5)
  };
};

// Generate all communities
export const generateAllCommunities = () => {
  const allCommunities = [];
  
  // Generate Chicago neighborhoods
  for (const region in chicagoNeighborhoods) {
    const neighborhoods = chicagoNeighborhoods[region as keyof typeof chicagoNeighborhoods];
    for (const neighborhood of neighborhoods) {
      // Skip neighborhoods that already exist in communityData
      if (!communityData.some(c => c.name === neighborhood)) {
        allCommunities.push(generateCommunityData(neighborhood, region, true));
      }
    }
  }
  
  // Generate suburban communities
  for (const region in suburbanCommunities) {
    const communities = suburbanCommunities[region as keyof typeof suburbanCommunities];
    for (const community of communities) {
      // Skip communities that already exist in communityData
      if (!communityData.some(c => c.name === community)) {
        allCommunities.push(generateCommunityData(community, region, false));
      }
    }
  }
  
  return [...communityData, ...allCommunities];
};

// Export the generated communities
export const allCommunities = generateAllCommunities();

// Helper function to get communities by region
export const getCommunitiesByRegion = (region: string) => {
  return allCommunities.filter(community => 
    community.region === region || 
    (region === "Chicago" && chicagoRegions.includes(community.region as string))
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