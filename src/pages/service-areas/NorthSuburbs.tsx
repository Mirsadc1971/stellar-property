import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Trees, Home, Leaf, Users, Calendar, Shield, Award, CheckCircle, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function NorthSuburbs() {
  const northSuburbCommunities = [
    "Evanston", "Skokie", "Wilmette", "Winnetka", "Northbrook",
    "Glencoe", "Highland Park", "Lake Forest", "Deerfield", "Lincolnshire",
    "Vernon Hills", "Libertyville", "Gurnee", "Waukegan", "North Chicago",
    "Zion", "Lake Bluff", "Lake Zurich", "Buffalo Grove", "Wheeling"
  ];

  const suburbanServices = [
    "Comprehensive Landscape Management",
    "Seasonal Maintenance Programs", 
    "Community Amenity Coordination",
    "HOA Rule Enforcement & Mediation",
    "Suburban Vendor Network",
    "Pool & Recreation Facility Management",
    "Snow Removal & Winter Services",
    "Community Event Planning Support",
    "Playground & Common Area Maintenance",
    "Lakefront Property Specialization"
  ];

  const seasonalServices = [
    { season: "Spring", services: ["Landscape renovation", "Pool opening", "Irrigation startup", "Common area refresh"] },
    { season: "Summer", services: ["Grounds maintenance", "Recreation management", "Event coordination", "Pest control"] },
    { season: "Fall", services: ["Leaf removal", "Winterization", "Gutter cleaning", "Landscape prep"] },
    { season: "Winter", services: ["Snow removal", "Salt application", "Holiday decorations", "System monitoring"] }
  ];

  const suburbanTestimonials = [
    {
      quote: "Our Winnetka community has never looked better. Stellar's attention to our landscaping and seasonal needs really shows they understand suburban living.",
      author: "Jennifer Walsh",
      community: "Winnetka Hills HOA"
    },
    {
      quote: "The pool management and summer programming for our kids has been outstanding. They truly get what suburban families need.",
      author: "Michael Thompson",
      community: "Northbrook Commons"
    },
    {
      quote: "From snow removal to spring landscaping, they handle everything so our residents can just enjoy our beautiful community.",
      author: "Lisa Chang",
      community: "Lake Forest Estates"
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>North Suburbs Property Management Services | Stellar Property Management</title>
        <meta name="description" content="Premier HOA and community management for Chicago's North Suburbs. Specializing in suburban lifestyle preservation, landscaping, seasonal services, and family-oriented communities." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518495973542-4542c06a5843)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">North Suburbs Community Management</h1>
            <p className="text-xl mb-8">Preserving the suburban lifestyle you love with personalized management that understands family-oriented communities, beautiful landscapes, and seasonal needs.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Preserve Your Community
              </a>
              <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Request Suburban Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suburban Stats */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Home className="h-10 w-10 mx-auto mb-3" />
              <div className="text-sm">Suburban Communities</div>
            </div>
            <div>
              <Trees className="h-10 w-10 mx-auto mb-3" />
              <div className="text-sm">Landscape Satisfaction</div>
            </div>
            <div>
              <Calendar className="h-10 w-10 mx-auto mb-3" />
              <div className="text-sm">Seasonal Care</div>
            </div>
            <div>
              <Users className="h-10 w-10 mx-auto mb-3" />
              <div className="text-sm">Years Suburban Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburban Lifestyle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading 
              title="Understanding Suburban Community Life"
              subtitle="We know suburban communities are more than just properties—they're where families grow, neighbors become friends, and memories are made."
              center
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Beautiful Landscapes</h3>
                <p className="text-gray-600">Professional landscape design and maintenance that keeps your community looking pristine through every season.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Family-Focused</h3>
                <p className="text-gray-600">Management that prioritizes family safety, community events, and amenities that bring neighbors together.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Property Values</h3>
                <p className="text-gray-600">Proactive management that maintains and enhances your property values while preserving your investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Year-Round Suburban Care</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalServices.map((season, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold">{season.season}</h3>
                  </div>
                  <ul className="space-y-2">
                    {season.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">North Suburb Communities We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {northSuburbCommunities.map((community, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border-l-4 border-green-500">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold text-sm">{community}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburban Services */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Suburban Management Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {suburbanServices.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Happy Suburban Communities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {suburbanTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                  <div className="text-4xl text-green-300 mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.community}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburban FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">North Suburbs Management FAQ</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2">How do you handle seasonal landscaping changes?</h3>
                <p className="text-gray-700">Our seasonal programs include spring cleanup and planting, summer maintenance and irrigation, fall leaf removal and winterization, plus snow removal services. We coordinate all seasonal transitions seamlessly.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2">What's included in community amenity management?</h3>
                <p className="text-gray-700">We manage pools, playgrounds, walking trails, clubhouses, and common areas. This includes maintenance, safety inspections, seasonal opening/closing, and coordinating any repairs or improvements.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2">How do you support community events and activities?</h3>
                <p className="text-gray-700">We assist with event planning logistics, coordinate facility use, manage vendor relationships for community events, and help ensure all activities comply with HOA guidelines and local regulations.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2">What makes suburban management different from urban?</h3>
                <p className="text-gray-700">Suburban communities require more focus on landscaping, seasonal services, family amenities, and community building. We understand the pace is different and residents expect more personalized attention and community involvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Suburban Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the growing number of North Suburb communities that trust Stellar Property Management to preserve their lifestyle and enhance their property values.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Suburban Office
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Get Community Proposal
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
