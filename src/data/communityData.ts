export interface Community {
  name: string;
  slug: string;
  region: string;
  description: string;
  history: string;
  features: string[];
  propertyTypes: string[];
  managementServices: string[];
  hoaFees: string;
  heroImage: string;
}

export const communityData: Community[] = [
  // Chicago - Far North Side
  {
    name: "Rogers Park",
    slug: "rogers-park",
    region: "Far North Side",
    description: "Diverse lakefront neighborhood known for its multicultural community, affordable housing options, and proximity to Loyola University. Rogers Park offers urban living with a neighborhood feel.",
    history: "Rogers Park was incorporated as a village in 1878, named after Irish immigrant Philip Rogers who settled in the area in the 1830s. The neighborhood was annexed to Chicago in 1893 and saw rapid development with the expansion of transit lines. Throughout the 20th century, Rogers Park became one of Chicago's most diverse communities, welcoming immigrants from around the world.",
    features: [
      "Multicultural Community",
      "Affordable Housing",
      "University Area",
      "Miles of public beaches along Lake Michigan",
      "Diverse dining scene with global cuisines"
    ],
    propertyTypes: [
      "Vintage Buildings",
      "Student Housing",
      "Courtyard buildings",
      "Single-family homes",
      "Mixed-use properties"
    ],
    managementServices: [
      "Student housing management",
      "Vintage building preservation",
      "Lakefront property maintenance",
      "Multi-unit building operations",
      "Diverse community engagement"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1571167530149-c1105da4c2c7"
  },
  {
    name: "West Ridge",
    slug: "west-ridge",
    region: "Far North Side",
    description: "Quiet residential neighborhood with strong Orthodox Jewish community, tree-lined streets, and family-friendly atmosphere. West Ridge offers suburban feel within the city.",
    history: "West Ridge, also known as West Rogers Park, developed in the early 20th century as a farming community before being annexed to Chicago. The area saw significant growth after World War II and has become known for its cultural diversity, with particularly strong Indian, Pakistani, Assyrian, and Orthodox Jewish communities.",
    features: [
      "Orthodox Jewish Community",
      "Family-Friendly",
      "Tree-lined Streets",
      "Devon Avenue international marketplace",
      "Diverse religious institutions"
    ],
    propertyTypes: [
      "Single-family Condos",
      "Two-flats",
      "Mid-rise apartment buildings",
      "Courtyard apartments",
      "Mixed-use commercial properties"
    ],
    managementServices: [
      "Culturally sensitive property management",
      "Multi-family building operations",
      "Commercial property oversight",
      "Vintage building maintenance",
      "Community-focused management solutions"
    ],
    hoaFees: "$150-$450/month",
    heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
  },
  {
    name: "Edgewater",
    slug: "edgewater",
    region: "Far North Side",
    description: "Historic lakefront neighborhood with beautiful vintage buildings, diverse community, and stunning lake views. Edgewater combines historic charm with modern amenities.",
    history: "Edgewater was originally developed in the late 19th century as a summer retreat for Chicago's elite, featuring luxurious hotels and mansions along the lakefront. The extension of Lake Shore Drive and the elevated train in the early 20th century transformed it into a residential neighborhood. Over decades, the area evolved from an exclusive enclave to a diverse community welcoming immigrants from around the world.",
    features: [
      "Historic Architecture",
      "Lakefront Views",
      "Diverse Community",
      "Kathy Osterman Beach",
      "Bryn Mawr Historic District"
    ],
    propertyTypes: [
      "Historic High-rises",
      "Vintage Condos",
      "Converted mansions",
      "Modern condominiums",
      "Mixed-use properties"
    ],
    managementServices: [
      "Vintage apartment building expertise",
      "Lakefront property maintenance",
      "Historic building preservation",
      "Mixed-use development management",
      "Courtyard building operations"
    ],
    hoaFees: "$200-$600/month",
    heroImage: "https://images.unsplash.com/photo-1543069931-db20cca57f84"
  },
  {
    name: "Uptown",
    slug: "uptown",
    region: "Far North Side",
    description: "Historic entertainment district experiencing renaissance with new development, diverse community, and rich cultural heritage. Uptown offers urban excitement with neighborhood character.",
    history: "Uptown flourished in the early 20th century as a premier entertainment district, home to elaborate movie palaces and ballrooms that attracted visitors from across Chicago. During the Jazz Age, venues like the Green Mill became legendary. Following World War II, the neighborhood welcomed diverse immigrant communities, establishing its identity as one of Chicago's most multicultural areas.",
    features: [
      "Entertainment District",
      "Cultural Heritage",
      "Urban Renaissance",
      "Aragon Ballroom",
      "Green Mill Jazz Club"
    ],
    propertyTypes: [
      "Historic Buildings",
      "New Developments",
      "Art Deco high-rises",
      "Courtyard buildings",
      "Mixed-use properties"
    ],
    managementServices: [
      "Historic entertainment venue management",
      "Diverse housing solutions",
      "Vintage apartment building expertise",
      "Lakefront property maintenance",
      "Mixed-use development oversight"
    ],
    hoaFees: "$180-$550/month",
    heroImage: "https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
  },
  {
    name: "Lincoln Square",
    slug: "lincoln-square",
    region: "Far North Side",
    description: "Charming German-heritage neighborhood with tree-lined streets, family-friendly atmosphere, and strong community spirit. Lincoln Square offers European charm in Chicago.",
    history: "Lincoln Square was originally farmland before being annexed to Chicago in 1889. The area's German heritage dates back to the early 20th century when many German immigrants settled here. The neighborhood has maintained its European charm while evolving into one of Chicago's most desirable residential areas.",
    features: [
      "German Heritage",
      "Family-Friendly",
      "Tree-lined Streets",
      "Historic Lincoln Square",
      "Old Town School of Folk Music"
    ],
    propertyTypes: [
      "Family Condos",
      "Historic Buildings",
      "Two-flat and three-flat buildings",
      "Courtyard apartments",
      "Mixed-use properties"
    ],
    managementServices: [
      "Family-oriented community management",
      "Historic property preservation",
      "Small business district expertise",
      "Multi-unit building operations",
      "New development oversight"
    ],
    hoaFees: "$200-$500/month",
    heroImage: "https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
  },
  {
    name: "North Park",
    slug: "north-park",
    region: "Far North Side",
    description: "Diverse residential neighborhood with strong Korean community, excellent schools, and family-oriented atmosphere. North Park offers multicultural suburban feel.",
    history: "North Park developed in the early 20th century as transportation improved access to this once-rural area. The neighborhood has welcomed various immigrant groups throughout its history, with a particularly strong Korean community establishing itself in recent decades. The presence of North Park University and the North Park Village Nature Center has contributed to the area's community-oriented character.",
    features: [
      "Korean Community",
      "Excellent Schools",
      "Family-Oriented",
      "North Park University campus",
      "North Park Village Nature Center"
    ],
    propertyTypes: [
      "Family Condos",
      "Single-family Buildings",
      "Ranch-style homes",
      "Two-flat buildings",
      "Mid-century residential developments"
    ],
    managementServices: [
      "Family-oriented property management",
      "Culturally diverse community expertise",
      "University-adjacent property solutions",
      "Single-family home association management",
      "Multi-unit building operations"
    ],
    hoaFees: "$180-$480/month",
    heroImage: "https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
  },
  {
    name: "Albany Park",
    slug: "albany-park",
    region: "Far North Side",
    description: "Diverse immigrant community with affordable housing, strong cultural identity, and growing arts scene. Albany Park represents Chicago's multicultural spirit.",
    history: "Albany Park developed in the early 20th century following the extension of the Ravenswood elevated train line. The neighborhood has been a gateway community for immigrants throughout its history, welcoming waves of new residents from around the world. This cultural diversity has created one of Chicago's most international neighborhoods, with over 40 languages spoken in its schools and a rich tapestry of global cuisines and businesses.",
    features: [
      "Immigrant Community",
      "Affordable Housing",
      "Cultural Diversity",
      "Global dining scene with authentic restaurants",
      "Albany Park Theater Project"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Multi-family Buildings",
      "Two-flat and three-flat buildings",
      "Courtyard apartments",
      "Mixed-use commercial properties"
    ],
    managementServices: [
      "Culturally diverse community management",
      "Affordable housing expertise",
      "Multi-family building operations",
      "Commercial property oversight",
      "Community-focused management solutions"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Forest Glen",
    slug: "forest-glen",
    region: "Far North Side",
    description: "Quiet residential neighborhood with suburban feel, excellent schools, and family-friendly atmosphere. Forest Glen offers peaceful living within the city.",
    history: "Forest Glen was originally developed as a railroad suburb in the late 19th century, with the Milwaukee Road depot serving as its center. The area was annexed to Chicago in 1889 but has maintained its distinct suburban character with winding streets, mature trees, and spacious lots. The Forest Glen Community Club, established in 1896, continues to foster neighborhood identity and community spirit.",
    features: [
      "Suburban Feel",
      "Excellent Schools",
      "Family-Friendly",
      "Forest Glen Woods and North Branch Trail",
      "Historic Forest Glen Community Club"
    ],
    propertyTypes: [
      "Single-family Condos",
      "Family Buildings",
      "Tudor and Colonial-style homes",
      "Ranch houses",
      "Bungalows and Cape Cods"
    ],
    managementServices: [
      "Single-family home association management",
      "Community amenity oversight",
      "Property value enhancement strategies",
      "Common area maintenance",
      "Reserve fund planning"
    ],
    hoaFees: "$200-$500/month",
    heroImage: "https://images.unsplash.com/photo-1584893884751-993c24fdab1e"
  },
  {
    name: "Jefferson Park",
    slug: "jefferson-park",
    region: "Far North Side",
    description: "Working-class neighborhood with strong Polish heritage, affordable housing, and excellent transportation access. Jefferson Park offers authentic Chicago character.",
    history: "Jefferson Park developed around its transportation hub, with the area's growth accelerating after being annexed to Chicago in 1889. The neighborhood became a center for Polish immigrants in the early 20th century, establishing a cultural identity that remains evident today. Its role as a transportation nexus was solidified with the construction of the Jefferson Park Transit Center in 1970, making it one of Chicago's most accessible neighborhoods.",
    features: [
      "Polish Heritage",
      "Working-class Community",
      "Transportation Hub",
      "Jefferson Park Transit Center",
      "Jefferson Memorial Park"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Two-flats",
      "Chicago bungalows",
      "Ranch-style homes",
      "Mid-century apartments"
    ],
    managementServices: [
      "Multi-family building operations",
      "Affordable housing solutions",
      "Transportation-adjacent property expertise",
      "Commercial property oversight",
      "Community-focused management"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Norwood Park",
    slug: "norwood-park",
    region: "Far North Side",
    description: "Suburban-style neighborhood with single-family homes, quiet streets, and strong community ties. Norwood Park offers suburban living within Chicago.",
    history: "Norwood Park was founded as a village in 1872 and annexed to Chicago in 1893. The neighborhood was designed with a suburban layout featuring curved streets and generous lots, departing from Chicago's typical grid pattern. This distinctive character has been preserved, making Norwood Park one of the city's most suburban-feeling neighborhoods with a strong sense of community identity and pride.",
    features: [
      "Suburban Style",
      "Single-family Homes",
      "Quiet Streets",
      "Historic Norwood Park Circle",
      "Norwood Park Historical Society"
    ],
    propertyTypes: [
      "Single-family Condos",
      "Suburban-style Buildings",
      "Victorian and Queen Anne homes",
      "Chicago bungalows",
      "Ranch-style houses"
    ],
    managementServices: [
      "Single-family home association management",
      "Historic property preservation",
      "Community amenity oversight",
      "Property value enhancement strategies",
      "Common area maintenance"
    ],
    hoaFees: "$200-$550/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Edison Park",
    slug: "edison-park",
    region: "Far North Side",
    description: "Small suburban enclave with tree-lined streets, single-family homes, and tight-knit community. Edison Park offers small-town feel in the big city.",
    history: "Edison Park was originally an independent village founded in 1896 and named after inventor Thomas Edison. The community was annexed to Chicago in 1910 but has maintained its distinct small-town atmosphere. The neighborhood has historically been home to many city workers, particularly police officers and firefighters, contributing to its strong community bonds and civic pride.",
    features: [
      "Suburban Enclave",
      "Tree-lined Streets",
      "Tight-knit Community",
      "Edison Park Fest annual celebration",
      "Restaurant row on Northwest Highway"
    ],
    propertyTypes: [
      "Single-family Condos",
      "Small Buildings",
      "Chicago bungalows",
      "Ranch-style homes",
      "Cape Cod houses"
    ],
    managementServices: [
      "Single-family home association management",
      "Small community expertise",
      "Commercial district property solutions",
      "Property value enhancement strategies",
      "Community-focused management"
    ],
    hoaFees: "$200-$500/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "O'Hare",
    slug: "ohare",
    region: "Far North Side",
    description: "Airport-adjacent area with modern developments, business travelers, and convenient transportation. O'Hare offers urban convenience with airport access.",
    history: "The O'Hare community area developed primarily after World War II with the expansion of O'Hare International Airport, which opened to commercial air traffic in 1955. Originally part of the surrounding townships, the area was annexed to Chicago to secure the airport for the city. The neighborhood has evolved to serve the needs of the airport, with hotels, office parks, and residential developments catering to business travelers and airport employees.",
    features: [
      "Airport Access",
      "Modern Developments",
      "Business Travelers",
      "O'Hare International Airport",
      "Catherine Chevalier Woods"
    ],
    propertyTypes: [
      "Modern Condos",
      "Business Housing",
      "Hotel-condominium properties",
      "Townhouse developments",
      "Corporate housing"
    ],
    managementServices: [
      "Business traveler accommodation",
      "Airport-adjacent property expertise",
      "Corporate housing solutions",
      "Hotel-condominium management",
      "Transportation-oriented property oversight"
    ],
    hoaFees: "$250-$600/month",
    heroImage: "https://images.unsplash.com/photo-1599609939591-044013333893"
  },
  
  // Chicago - North Side
  {
    name: "North Center",
    slug: "north-center",
    region: "North Side",
    description: "Family-friendly neighborhood with tree-lined streets, excellent schools, and strong community spirit. North Center offers suburban feel with urban convenience.",
    history: "North Center developed in the late 19th and early 20th centuries as a working-class neighborhood with strong German and Swedish influences. The area grew around the intersection of Lincoln, Damen, and Irving Park Road, which remains its commercial heart. Over the decades, the neighborhood has evolved into a family-oriented community while preserving its historic character and small-town feel within the city.",
    features: [
      "Family-Friendly",
      "Tree-lined Streets",
      "Excellent Schools",
      "Welles Park",
      "North Center Town Square"
    ],
    propertyTypes: [
      "Family Condos",
      "Single-family Buildings",
      "Chicago bungalows",
      "Two-flat and three-flat buildings",
      "New construction developments"
    ],
    managementServices: [
      "Family-oriented property management",
      "Historic building preservation",
      "Multi-unit building operations",
      "New development oversight",
      "Commercial property solutions"
    ],
    hoaFees: "$250-$600/month",
    heroImage: "https://images.unsplash.com/photo-1582630465361-eaa2aacd5f86"
  },
  {
    name: "Lakeview",
    slug: "lakeview",
    region: "North Side",
    description: "Vibrant lakefront neighborhood home to Wrigley Field and a diverse mix of residents. Lakeview offers excellent dining, nightlife, and easy access to Lake Michigan.",
    history: "Lakeview has grown from a summer resort town in the 1800s to one of Chicago's largest and most diverse neighborhoods. Home to several distinct areas including Wrigleyville and Boystown, the neighborhood offers a perfect blend of residential charm and urban excitement. Its proximity to Lake Michigan and excellent transportation options has made it a consistently popular choice for residents.",
    features: [
      "Wrigley Field",
      "Lakefront Access",
      "Diverse Community",
      "Belmont Harbor",
      "Boystown entertainment district"
    ],
    propertyTypes: [
      "Three-flats",
      "Mid-rise Condos",
      "Vintage apartment buildings",
      "Converted lofts",
      "Mixed-use properties"
    ],
    managementServices: [
      "Entertainment district expertise",
      "Mixed-use property management",
      "Vintage building preservation",
      "Modern development oversight",
      "Retail space solutions"
    ],
    hoaFees: "$250-$700/month",
    heroImage: "https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
  },
  {
    name: "Lincoln Park",
    slug: "lincoln-park",
    region: "North Side",
    description: "One of Chicago's most desirable neighborhoods, combining historic charm with modern amenities. Home to DePaul University, Lincoln Park Zoo, and beautiful tree-lined streets.",
    history: "Lincoln Park has evolved from modest beginnings into one of Chicago's most desirable neighborhoods. Named after the sprawling park along Lake Michigan, the area combines historic architecture with modern amenities. The neighborhood's transformation accelerated in the 1960s, and today it stands as a premier example of successful urban development.",
    features: [
      "Historic Character",
      "Family-Friendly",
      "University Area",
      "Lincoln Park Zoo",
      "DePaul University"
    ],
    propertyTypes: [
      "Victorian Condos",
      "New Construction",
      "Luxury high-rise condominiums",
      "Converted lofts",
      "Multi-unit buildings"
    ],
    managementServices: [
      "Historic property preservation",
      "Luxury residential management",
      "Student housing solutions",
      "Mixed-use property expertise",
      "High-end amenity management"
    ],
    hoaFees: "$300-$800/month",
    heroImage: "https://images.unsplash.com/photo-1599676821464-3555978c0ff4"
  },
  {
    name: "Avondale",
    slug: "avondale",
    region: "North Side",
    description: "Emerging neighborhood with growing arts scene, affordable housing, and strong Latino heritage. Avondale offers authentic Chicago character with development potential.",
    history: "Avondale developed in the late 19th century as a working-class industrial area and home to many Polish immigrants. The neighborhood later welcomed Latino residents, particularly from Mexico and Puerto Rico, creating a rich cultural mix. In recent years, Avondale has begun attracting artists and young professionals seeking affordable housing close to trendier areas like Logan Square, while still maintaining its authentic working-class character.",
    features: [
      "Arts Scene",
      "Latino Heritage",
      "Affordable Housing",
      "Avondale Mural Project",
      "St. Hyacinth Basilica"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Artist Lofts",
      "Worker cottages",
      "Two-flat and three-flat buildings",
      "Mixed-use properties"
    ],
    managementServices: [
      "Affordable housing expertise",
      "Artist community management",
      "Multi-family building operations",
      "Commercial property solutions",
      "Community-focused management"
    ],
    hoaFees: "$180-$450/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Logan Square",
    slug: "logan-square",
    region: "North Side",
    description: "Hip, artistic neighborhood known for its vibrant nightlife, craft breweries, and creative community. Logan Square has become one of Chicago's most sought-after areas for young professionals.",
    history: "Logan Square was developed in the late 19th century around its namesake public square and boulevard system. The neighborhood was home to many European immigrants, particularly Norwegians and Poles. After a period of economic challenges in the mid-20th century, Logan Square has experienced significant revitalization since the early 2000s, becoming known for its thriving arts scene, independent businesses, and historic greystones and boulevards.",
    features: [
      "Arts Scene",
      "Craft Breweries",
      "Historic Architecture",
      "Historic boulevard system",
      "Logan Square Farmers Market"
    ],
    propertyTypes: [
      "Vintage Condos",
      "Loft Conversions",
      "Historic greystones",
      "Two-flat and three-flat buildings",
      "Mixed-use properties"
    ],
    managementServices: [
      "Historic building preservation",
      "Mixed-use property expertise",
      "Entertainment district management",
      "Multi-unit building operations",
      "Commercial property solutions"
    ],
    hoaFees: "$200-$600/month",
    heroImage: "https://images.unsplash.com/photo-1599609939591-044013333893"
  },
  
  // Chicago - Northwest Side
  {
    name: "Irving Park",
    slug: "irving-park",
    region: "Northwest Side",
    description: "Diverse residential neighborhood with strong Polish heritage, affordable housing, and family-friendly atmosphere. Irving Park offers authentic Chicago living.",
    history: "Irving Park began as a rural community in the 1840s before being annexed to Chicago in 1889. The arrival of the railroad spurred development, with many elegant homes built in the late 19th century. The neighborhood has welcomed waves of immigrants throughout its history, creating a diverse community with strong European influences, particularly Polish and German, that remain evident in its cultural institutions and architecture.",
    features: [
      "Polish Heritage",
      "Diverse Community",
      "Affordable Housing",
      "Independence Park",
      "Villa District historic area"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Two-flats",
      "Chicago bungalows",
      "Victorian homes",
      "Courtyard apartment buildings"
    ],
    managementServices: [
      "Multi-family building operations",
      "Historic property preservation",
      "Affordable housing solutions",
      "Commercial property oversight",
      "Community-focused management"
    ],
    hoaFees: "$150-$450/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Portage Park",
    slug: "portage-park",
    region: "Northwest Side",
    description: "Working-class neighborhood with strong community ties, affordable housing, and family-oriented atmosphere. Portage Park offers authentic Chicago neighborhood living.",
    history: "Portage Park takes its name from the Native American portage between the Chicago and Des Plaines Rivers. The neighborhood developed rapidly after being annexed to Chicago in 1889, with its namesake park established in 1913. The area became known for its bungalow belt architecture and strong working-class identity. Throughout its history, Portage Park has maintained its family-oriented character while welcoming diverse residents.",
    features: [
      "Working-class Community",
      "Strong Community Ties",
      "Affordable Housing",
      "Portage Park (the park)",
      "Six Corners shopping district"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Two-flats",
      "Chicago bungalows",
      "Mid-century ranch homes",
      "Small apartment buildings"
    ],
    managementServices: [
      "Affordable housing solutions",
      "Multi-family building operations",
      "Commercial district property management",
      "Single-family home association oversight",
      "Community-focused management"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Dunning",
    slug: "dunning",
    region: "Northwest Side",
    description: "Quiet residential neighborhood with suburban feel, affordable housing, and community atmosphere. Dunning offers peaceful living with neighborhood character.",
    history: "Dunning was named after Andrew Dunning, who purchased land in the area in the 1850s. The neighborhood remained largely undeveloped until after World War II, when it experienced significant growth as part of Chicago's expansion. Originally home to several institutions including a state hospital, the area has transformed into a primarily residential community with a suburban character that distinguishes it from more urban parts of Chicago.",
    features: [
      "Quiet Streets",
      "Small Community",
      "Affordable Housing",
      "Rutherford Sayre Park",
      "Montclare-Elmwood Park Metra station"
    ],
    propertyTypes: [
      "Small Buildings",
      "Affordable Condos",
      "Chicago bungalows",
      "Ranch-style homes",
      "Mid-century residential developments"
    ],
    managementServices: [
      "Single-family home association management",
      "Small community expertise",
      "Affordable housing solutions",
      "Property value enhancement strategies",
      "Community-focused management"
    ],
    hoaFees: "$150-$450/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Belmont Cragin",
    slug: "belmont-cragin",
    region: "Northwest Side",
    description: "Diverse working-class neighborhood with strong Latino community, affordable housing, and family-oriented atmosphere. Belmont Cragin offers authentic Chicago Latino community living.",
    history: "Belmont Cragin developed in the late 19th century as a manufacturing center and working-class residential area. The neighborhood experienced significant demographic changes in the late 20th century, with a large influx of Latino residents, particularly from Mexico and Puerto Rico. Today, it remains one of Chicago's most densely populated neighborhoods, known for its affordable housing, family-oriented character, and vibrant cultural diversity.",
    features: [
      "Latino Community",
      "Working-class",
      "Diverse Population",
      "Kelvyn Park",
      "Belmont Avenue commercial corridor"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Multi-family Buildings",
      "Chicago bungalows",
      "Two-flat and three-flat buildings",
      "Small apartment buildings"
    ],
    managementServices: [
      "Affordable housing solutions",
      "Multi-family building operations",
      "Culturally diverse community expertise",
      "Commercial property oversight",
      "Community-focused management"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Hermosa",
    slug: "hermosa",
    region: "Northwest Side",
    description: "Predominantly Latino neighborhood with strong community ties, affordable housing, and cultural heritage. Hermosa offers authentic Chicago Latino community living.",
    history: "Hermosa, whose name means 'beautiful' in Spanish, was settled in the late 19th century and annexed to Chicago in 1889. The neighborhood was initially home to Scandinavian and German immigrants before welcoming Polish residents in the mid-20th century. Since the 1980s, Hermosa has become predominantly Latino, with strong Mexican and Puerto Rican influences shaping its cultural identity, businesses, and community institutions.",
    features: [
      "Latino Heritage",
      "Strong Community Ties",
      "Affordable Housing",
      "Kelvyn Park",
      "Authentic Latino businesses"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Community Housing",
      "Chicago bungalows",
      "Two-flat and three-flat buildings",
      "Small apartment buildings"
    ],
    managementServices: [
      "Affordable housing solutions",
      "Multi-family building operations",
      "Culturally diverse community expertise",
      "Commercial property oversight",
      "Community-focused management"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  {
    name: "Montclare",
    slug: "montclare",
    region: "Northwest Side",
    description: "Small residential neighborhood with quiet streets, affordable housing, and community atmosphere. Montclare offers peaceful living with neighborhood character.",
    history: "Montclare is one of Chicago's youngest neighborhoods, developing primarily after World War II. The area was annexed to Chicago in 1889 but remained largely undeveloped until the mid-20th century. The construction of the Montclare-Elmwood Park Metra station in 1931 improved access to the area, spurring residential development that created the quiet, family-oriented community that exists today.",
    features: [
      "Quiet Streets",
      "Small Community",
      "Affordable Housing",
      "Rutherford Sayre Park",
      "Montclare-Elmwood Park Metra station"
    ],
    propertyTypes: [
      "Small Buildings",
      "Affordable Condos",
      "Chicago bungalows",
      "Ranch-style homes",
      "Mid-century residential developments"
    ],
    managementServices: [
      "Single-family home association management",
      "Small community expertise",
      "Affordable housing solutions",
      "Property value enhancement strategies",
      "Community-focused management"
    ],
    hoaFees: "$150-$400/month",
    heroImage: "https://images.unsplash.com/photo-1594305577517-3075205a9493"
  },
  
  // Chicago - Central/Downtown
  {
    name: "The Loop",
    slug: "the-loop",
    region: "Central/Downtown",
    description: "Chicago's central business district, home to iconic skyscrapers, world-class dining, and luxury high-rise condominiums. The Loop represents the heart of Chicago's financial and cultural center.",
    history: "The Loop is Chicago's central business district and the seat of Cook County government. Named for the elevated 'L' train tracks that encircle the area, The Loop has been Chicago's commercial core since the city's founding. Today, it's home to world-renowned architecture, theaters, shopping destinations, and Millennium Park, making it one of the most visited neighborhoods in Chicago.",
    features: [
      "Historic Architecture",
      "Business District",
      "Cultural Hub",
      "Millennium Park & Cloud Gate",
      "Art Institute of Chicago"
    ],
    propertyTypes: [
      "High-rise Condominiums",
      "Luxury Towers",
      "Historic loft conversions",
      "Mixed-use developments",
      "Hotel-condominium properties"
    ],
    managementServices: [
      "High-rise building operations",
      "Mixed-use property expertise",
      "Commercial property management",
      "Historic building preservation",
      "Luxury amenity coordination"
    ],
    hoaFees: "$400-$1,200/month",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    name: "River North",
    slug: "river-north",
    region: "Central/Downtown",
    description: "Upscale neighborhood known for its vibrant nightlife, art galleries, and luxury high-rise living. River North combines urban sophistication with convenient downtown access.",
    history: "River North, once an industrial area, transformed in the 1970s into a thriving arts and entertainment district. Home to the largest concentration of art galleries outside of Manhattan, the neighborhood has become synonymous with urban sophistication. Its proximity to the Chicago Loop and its mix of historic warehouses converted into lofts and modern high-rises make it a unique and desirable location.",
    features: [
      "Art Gallery District",
      "Nightlife Hub",
      "Luxury Living",
      "Gallery district",
      "Chicago Riverwalk"
    ],
    propertyTypes: [
      "Luxury High-rises",
      "Boutique Condominiums",
      "Converted warehouse lofts",
      "Mixed-use developments",
      "Historic commercial buildings"
    ],
    managementServices: [
      "Luxury high-rise operations",
      "Mixed-use property expertise",
      "Historic building preservation",
      "Entertainment district management",
      "Commercial property solutions"
    ],
    hoaFees: "$500-$1,500/month",
    heroImage: "https://images.unsplash.com/photo-1554797589-4e8b99f1d33c"
  },
  {
    name: "Streeterville",
    slug: "streeterville",
    region: "Central/Downtown",
    description: "Prestigious lakefront neighborhood featuring luxury high-rises, world-class shopping, and stunning Lake Michigan views. Home to Northwestern Memorial Hospital and Navy Pier.",
    history: "Streeterville's unique history begins with George 'Cap' Streeter, who accidentally grounded his boat on a sandbar in 1886. The neighborhood has since transformed into one of Chicago's most prestigious areas, featuring iconic landmarks like Navy Pier and the Magnificent Mile. Its prime location between the Magnificent Mile and Lake Michigan has made it a sought-after destination for luxury living and high-end commercial properties.",
    features: [
      "Lakefront Location",
      "Medical District",
      "Luxury Shopping",
      "Navy Pier",
      "Museum of Contemporary Art"
    ],
    propertyTypes: [
      "Luxury Towers",
      "Lakefront Condominiums",
      "Hotel-condominium properties",
      "Medical district housing",
      "Waterfront properties"
    ],
    managementServices: [
      "Specialized luxury property management services",
      "24/7 concierge and security solutions",
      "High-rise building expertise",
      "Premium amenity management",
      "Waterfront property maintenance expertise"
    ],
    hoaFees: "$600-$2,000/month",
    heroImage: "https://images.unsplash.com/photo-1599578704297-c84a64957344"
  },
  {
    name: "West Loop",
    slug: "west-loop",
    region: "Central/Downtown",
    description: "Former industrial district turned culinary and tech hub, known for its restaurants, art galleries, and converted loft spaces.",
    history: "The West Loop's transformation from a meat-packing and warehouse district to one of Chicago's hottest neighborhoods is a testament to urban renewal. Now home to Restaurant Row, tech companies, and luxury residential developments, the area maintains its industrial charm while embracing modern amenities. The neighborhood continues to evolve with new developments while preserving its historic character.",
    features: [
      "Restaurant Row on Randolph",
      "Fulton Market",
      "Google's Chicago Office",
      "McDonald's Global HQ",
      "Mary Bartelme Park"
    ],
    propertyTypes: [
      "Converted Warehouses",
      "Luxury Lofts",
      "New construction high-rises",
      "Mixed-use developments",
      "Boutique condo buildings"
    ],
    managementServices: [
      "Mixed-use development expertise",
      "Restaurant and retail space management",
      "Tech-forward building solutions",
      "Historic loft conversion experience",
      "Modern amenity management"
    ],
    hoaFees: "$350-$1,000/month",
    heroImage: "https://images.unsplash.com/photo-1597626133663-53df9633b799"
  },
  {
    name: "Near West Side",
    slug: "near-west-side",
    region: "Central/Downtown",
    description: "Dynamic area including University of Illinois at Chicago campus, medical district, and emerging residential developments. Near West Side offers urban convenience with institutional presence.",
    history: "The Near West Side has a rich and complex history, from its early days as home to immigrants working in nearby factories to its current status as a center for education, healthcare, and urban redevelopment. The area includes the historic Maxwell Street Market, the University of Illinois at Chicago campus (built in the 1960s), and the Illinois Medical District. Recent decades have seen significant residential development, particularly in the Fulton Market and West Loop sections.",
    features: [
      "University Area",
      "Medical District",
      "Urban Development",
      "University of Illinois at Chicago",
      "Illinois Medical District"
    ],
    propertyTypes: [
      "Student Housing",
      "Medical Professional Housing",
      "Converted industrial lofts",
      "Modern residential developments",
      "Mixed-use properties"
    ],
    managementServices: [
      "University-adjacent property expertise",
      "Medical district housing solutions",
      "Mixed-use property management",
      "Student housing operations",
      "Institutional property coordination"
    ],
    hoaFees: "$250-$700/month",
    heroImage: "https://images.unsplash.com/photo-1597626133663-53df9633b799"
  },
  {
    name: "West Town",
    slug: "west-town",
    region: "Central/Downtown",
    description: "Trendy area encompassing Wicker Park, Ukrainian Village, and surrounding neighborhoods. West Town offers hip urban living with artistic flair and nightlife.",
    history: "West Town developed in the late 19th century as an industrial and residential area for European immigrants, particularly Polish, German, and Ukrainian communities. The neighborhood experienced economic challenges in the mid-20th century before beginning a revitalization in the 1980s and 90s. Today, West Town encompasses several distinct sub-neighborhoods including Wicker Park and Ukrainian Village, known for their historic architecture, artistic character, and vibrant commercial districts.",
    features: [
      "Artistic Community",
      "Trendy Nightlife",
      "Historic Architecture",
      "Division Street entertainment corridor",
      "Chicago Avenue arts district"
    ],
    propertyTypes: [
      "Loft Conversions",
      "Historic Condos",
      "Victorian and worker cottages",
      "Two-flat and three-flat buildings",
      "Mixed-use properties"
    ],
    managementServices: [
      "Historic building preservation",
      "Mixed-use property expertise",
      "Entertainment district management",
      "Multi-unit building operations",
      "Commercial property solutions"
    ],
    hoaFees: "$200-$650/month",
    heroImage: "https://images.unsplash.com/photo-1594305577398-5f8dddba007b"
  },
  {
    name: "Noble Square",
    slug: "noble-square",
    region: "Central/Downtown",
    description: "Small trendy neighborhood near downtown with modern developments, young professionals, and urban convenience. Noble Square offers contemporary city living.",
    history: "Noble Square is a small neighborhood within the larger West Town community area. The area was originally settled by Polish immigrants in the late 19th century, with the St. Boniface Church (built in 1902) serving as a community anchor. After a period of economic challenges in the mid-20th century, Noble Square has experienced significant revitalization since the 1990s, attracting young professionals seeking proximity to downtown and the amenities of nearby Wicker Park.",
    features: [
      "Modern Developments",
      "Young Professionals",
      "Urban Convenience",
      "Eckhart Park",
      "Polonia Triangle"
    ],
    propertyTypes: [
      "Modern Condos",
      "New Construction",
      "Converted industrial buildings",
      "Worker cottages",
      "Two-flat and three-flat buildings"
    ],
    managementServices: [
      "Modern development oversight",
      "Mixed-use property expertise",
      "Urban property solutions",
      "Multi-unit building operations",
      "Commercial property management"
    ],
    hoaFees: "$300-$700/month",
    heroImage: "https://images.unsplash.com/photo-1594305577398-5f8dddba007b"
  },
  {
    name: "Gold Coast",
    slug: "gold-coast",
    region: "Central/Downtown",
    description: "Chicago's most prestigious neighborhood, featuring historic mansions, luxury high-rises, and upscale shopping along the Magnificent Mile. The Gold Coast epitomizes Chicago elegance.",
    history: "The Gold Coast emerged as Chicago's most exclusive neighborhood following the Great Chicago Fire of 1871. Wealthy Chicagoans built ornate mansions along Lake Shore Drive and the surrounding streets, establishing it as the city's premier residential district. Today, the neighborhood blends historic charm with modern luxury, featuring landmark buildings, designer boutiques, and renowned restaurants.",
    features: [
      "Historic Elegance",
      "Magnificent Mile",
      "Luxury Shopping",
      "Historic Astor Street District",
      "Oak Street shopping"
    ],
    propertyTypes: [
      "Historic Mansions",
      "Luxury High-rises",
      "Vintage co-op buildings",
      "Boutique condo buildings",
      "Mixed-use properties"
    ],
    managementServices: [
      "Luxury property management",
      "Historic building preservation",
      "High-end amenity management",
      "Doorman building operations",
      "Concierge-level service"
    ],
    hoaFees: "$800-$3,000/month",
    heroImage: "https://images.unsplash.com/photo-1581373449483-44867d6afee4"
  },
  {
    name: "Near North Side",
    slug: "near-north-side",
    region: "Central/Downtown",
    description: "Upscale downtown area including Gold Coast and River North, featuring luxury high-rises, shopping, and dining. Near North Side represents Chicago's premium urban living.",
    history: "The Near North Side has been one of Chicago's most fashionable areas since the city's early days. Following the Great Chicago Fire of 1871, wealthy Chicagoans built elegant homes north of the river, establishing what would become the Gold Coast. The area has continuously evolved, from the notorious Cabrini-Green housing project (now redeveloped) to the upscale shopping district of the Magnificent Mile and the entertainment-focused River North, creating one of Chicago's most diverse and dynamic neighborhoods.",
    features: [
      "Luxury Living",
      "Premium Shopping",
      "Fine Dining",
      "Magnificent Mile shopping",
      "Navy Pier"
    ],
    propertyTypes: [
      "Luxury High-rises",
      "Premium Condos",
      "Historic mansions",
      "Boutique condo buildings",
      "Mixed-use developments"
    ],
    managementServices: [
      "Luxury high-rise operations",
      "Concierge-level service",
      "High-end amenity management",
      "Historic building preservation",
      "Mixed-use property expertise"
    ],
    hoaFees: "$500-$2,000/month",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    name: "Fulton Market",
    slug: "fulton-market",
    region: "Central/Downtown",
    description: "Trendy former meatpacking district transformed into hip neighborhood with tech companies, restaurants, and modern developments. Fulton Market offers cutting-edge urban living.",
    history: "Fulton Market began as Chicago's central food distribution hub in the 19th century, particularly for meat processing. The area maintained its industrial character throughout most of the 20th century before beginning a dramatic transformation in the early 2000s. The arrival of acclaimed restaurants, followed by Google's Chicago headquarters in 2015, accelerated development, turning the former meatpacking district into one of the city's most dynamic neighborhoods while preserving elements of its industrial heritage.",
    features: [
      "Tech Hub",
      "Culinary Scene",
      "Modern Developments",
      "Restaurant Row on Randolph Street",
      "Google's Chicago headquarters"
    ],
    propertyTypes: [
      "Modern Condos",
      "Loft Conversions",
      "Adaptive reuse developments",
      "Luxury high-rises",
      "Mixed-use properties"
    ],
    managementServices: [
      "Mixed-use property expertise",
      "Tech-oriented building solutions",
      "Historic industrial building preservation",
      "Luxury residential management",
      "Commercial property solutions"
    ],
    hoaFees: "$350-$900/month",
    heroImage: "https://images.unsplash.com/photo-1597626133663-53df9633b799"
  },
  
  // North Shore
  {
    name: "Evanston",
    slug: "evanston",
    region: "North Shore",
    description: "Prestigious lakefront suburb home to Northwestern University, featuring excellent schools, cultural amenities, and diverse housing options. Evanston combines suburban comfort with urban sophistication.",
    history: "Evanston was founded in the 1850s and named after John Evans, one of the founders of Northwestern University. The city developed as both a university town and a desirable residential suburb with a strong temperance movement that kept it dry until 1972. Today, Evanston is known for its architectural diversity, educational institutions, and progressive community values.",
    features: [
      "Northwestern University",
      "Lakefront Location",
      "Excellent Schools",
      "Downtown Evanston shopping and dining",
      "Multiple Lake Michigan beaches"
    ],
    propertyTypes: [
      "Lakefront Condos",
      "Historic Buildings",
      "University-adjacent apartments",
      "Victorian and Prairie-style houses",
      "Mixed-use developments"
    ],
    managementServices: [
      "University-adjacent property expertise",
      "Historic home association management",
      "Lakefront property maintenance",
      "Downtown commercial property solutions",
      "Multi-unit building operations"
    ],
    hoaFees: "$300-$900/month",
    heroImage: "https://images.unsplash.com/photo-1543069931-db20cca57f84"
  },
  {
    name: "Wilmette",
    slug: "wilmette",
    region: "North Shore",
    description: "Prestigious North Shore community with excellent schools, beautiful lakefront, and upscale amenities. Wilmette offers elite suburban living with lake access.",
    history: "Wilmette was incorporated in 1872 and named after Antoine Ouilmette, a French-Canadian fur trader. The village developed as a railroad suburb in the late 19th century and experienced significant growth in the early 20th century. The completion of the Bahá'í House of Worship in 1953 added a distinctive architectural landmark to the community.",
    features: [
      "Prestigious North Shore",
      "Excellent Schools",
      "Lakefront Access",
      "Bahá'í House of Worship",
      "Gillson Park and Beach"
    ],
    propertyTypes: [
      "Luxury Lakefront Condos",
      "Prestigious Buildings",
      "Historic properties",
      "Lakefront estates",
      "New construction developments"
    ],
    managementServices: [
      "Luxury property management",
      "Historic home association expertise",
      "Lakefront property maintenance",
      "Community association governance",
      "High-end amenity management"
    ],
    hoaFees: "$400-$1,200/month",
    heroImage: "https://images.unsplash.com/photo-1543069931-db20cca57f84"
  },
  {
    name: "Highland Park",
    slug: "highland-park",
    region: "North Shore",
    description: "Vibrant North Shore community with cultural attractions, excellent schools, and lakefront access. Highland Park offers dynamic North Shore living.",
    history: "Highland Park was incorporated in 1869 and developed as a summer retreat for wealthy Chicagoans. The city's unique topography, with deep ravines and bluffs overlooking Lake Michigan, influenced its development pattern. Highland Park became known for its architectural significance, with homes designed by notable architects including Frank Lloyd Wright and David Adler.",
    features: [
      "Vibrant Community",
      "Cultural Attractions",
      "Excellent Schools",
      "Ravinia Festival outdoor music venue",
      "Rosewood Beach"
    ],
    propertyTypes: [
      "Cultural District Condos",
      "Vibrant Properties",
      "Mid-century modern homes",
      "Ravine properties",
      "Downtown condominiums"
    ],
    managementServices: [
      "Luxury estate management",
      "Ravine property expertise",
      "Historic home preservation",
      "Downtown commercial property solutions",
      "Community association governance"
    ],
    hoaFees: "$350-$1,000/month",
    heroImage: "https://images.unsplash.com/photo-1543069931-db20cca57f84"
  },
  {
    name: "Bannockburn",
    slug: "bannockburn",
    region: "North Shore",
    description: "Small exclusive village with luxury estates, pristine character, and ultimate privacy. Bannockburn offers the most exclusive North Shore living.",
    history: "Bannockburn was incorporated in 1929 as one of the North Shore's most exclusive communities. Named after the Scottish battlefield, the village was developed with large estate lots and strict zoning to preserve its rural character. The community has maintained its reputation as one of the most affluent suburbs in the Chicago area, with many properties featuring extensive grounds and equestrian facilities.",
    features: [
      "Small Exclusive Village",
      "Luxury Estates",
      "Trinity International University campus",
      "Bannockburn Green shopping center",
      "Extensive forest preserves and nature trails"
    ],
    propertyTypes: [
      "Luxury Estates",
      "Exclusive Condos",
      "Custom-built residences",
      "Historic mansions",
      "Large-lot single-family homes"
    ],
    managementServices: [
      "Luxury estate management",
      "Equestrian property expertise",
      "Large property maintenance",
      "Historic home preservation",
      "Exclusive community governance"
    ],
    hoaFees: "$500-$2,000/month",
    heroImage: "https://images.unsplash.com/photo-1543069931-db20cca57f84"
  },
  
  // Northwest Suburbs
  {
    name: "Arlington Heights",
    slug: "arlington-heights",
    region: "Northwest Suburbs",
    description: "Premier northwest suburb known for excellent schools, beautiful downtown area, and high quality of life. Arlington Heights offers upscale suburban living with strong community amenities.",
    history: "Arlington Heights began as a small farming community in the 1800s before being incorporated in 1887. The arrival of the railroad and later Arlington Park Racetrack in 1927 spurred significant growth. Following World War II, the village experienced a housing boom that transformed it into one of Chicago's largest and most prosperous suburbs.",
    features: [
      "Premier Suburb",
      "Excellent Schools",
      "Downtown District",
      "Arlington Park Racetrack site",
      "Arlington Heights Memorial Library"
    ],
    propertyTypes: [
      "Upscale Condos",
      "Luxury Townhomes",
      "Single-family homes",
      "Downtown apartments",
      "Senior living communities"
    ],
    managementServices: [
      "Homeowners association management",
      "Townhouse community operations",
      "Downtown property solutions",
      "Commercial property oversight",
      "Community amenity management"
    ],
    hoaFees: "$300-$900/month",
    heroImage: "https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
  },
  {
    name: "Buffalo Grove",
    slug: "buffalo-grove",
    region: "Northwest Suburbs",
    description: "Affluent suburban community with excellent schools, family-friendly atmosphere, and modern amenities. Buffalo Grove offers premium suburban living with strong community values.",
    history: "Buffalo Grove was incorporated in 1958, making it a relatively young suburb. The area was originally settled in the 1840s by German farmers who named it for the buffalo that once roamed the area. Significant development occurred in the 1960s and 1970s, transforming it from a small farming community into a thriving residential suburb.",
    features: [
      "Affluent Community",
      "Excellent Schools",
      "Family-Friendly",
      "Buffalo Grove Golf Course",
      "Buffalo Creek Forest Preserve"
    ],
    propertyTypes: [
      "Luxury Condos",
      "Executive Townhomes",
      "Single-family homes",
      "Condominium developments",
      "Senior living communities"
    ],
    managementServices: [
      "Homeowners association management",
      "Townhouse community operations",
      "Community amenity oversight",
      "Common area maintenance",
      "Reserve fund planning"
    ],
    hoaFees: "$300-$800/month",
    heroImage: "https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
  },
  {
    name: "Schaumburg",
    slug: "schaumburg",
    region: "Northwest Suburbs",
    description: "Major suburban center with business districts, shopping centers, and diverse housing options. Schaumburg offers comprehensive suburban living with urban amenities.",
    history: "Schaumburg remained primarily agricultural until the 1950s when developers began transforming farmland into residential subdivisions. The opening of Woodfield Mall in 1971, then the largest mall in America, established Schaumburg as a major commercial center. Today, it's known for its robust retail presence, corporate offices, and diverse housing options.",
    features: [
      "Business Center",
      "Shopping Districts",
      "Diverse Housing",
      "Woodfield Mall",
      "Schaumburg Convention Center"
    ],
    propertyTypes: [
      "Business Condos",
      "Shopping District Housing",
      "Townhouse communities",
      "Luxury apartment complexes",
      "Condominium developments"
    ],
    managementServices: [
      "Homeowners association management",
      "Commercial property solutions",
      "Retail property expertise",
      "Townhouse community operations",
      "Amenity-rich community management"
    ],
    hoaFees: "$300-$800/month",
    heroImage: "https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
  },
  {
    name: "Des Plaines",
    slug: "des-plaines",
    region: "Northwest Suburbs",
    description: "Diverse suburban community with excellent transportation access, family amenities, and growing business district. Des Plaines offers affordable suburban living with urban convenience.",
    history: "Des Plaines developed along the Des Plaines River and was incorporated as a city in 1925. The opening of O'Hare International Airport nearby in the 1950s spurred significant growth. The city is known as the home of the first McDonald's franchise opened by Ray Kroc in 1955 (now a museum). Throughout its history, Des Plaines has maintained a balance of residential, commercial, and industrial development that has created a diverse and stable community.",
    features: [
      "Transportation Hub",
      "Diverse Community",
      "Business District",
      "Rivers Casino",
      "Des Plaines River Trail"
    ],
    propertyTypes: [
      "Affordable Condos",
      "Family Townhomes",
      "Single-family homes",
      "Mid-century subdivisions",
      "Mixed-use developments"
    ],
    managementServices: [
      "Homeowners association management",
      "Townhouse community operations",
      "Commercial property solutions",
      "Multi-family building operations",
      "Community amenity oversight"
    ],
    hoaFees: "$200-$550/month",
    heroImage: "https://images.unsplash.com/photo-1560472355-b33ff0c44a43"
  }
];