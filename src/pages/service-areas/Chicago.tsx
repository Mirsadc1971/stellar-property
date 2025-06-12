
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, Shield, Clock, Users, Phone, MapPin, Award, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Chicago() {
  const chicagoNeighborhoods = [
    "The Loop", "River North", "Streeterville", "West Loop", "South Loop",
    "Lincoln Park", "Lakeview", "Gold Coast", "Old Town", "Wicker Park",
    "Bucktown", "Logan Square", "Ukrainian Village", "Wrigleyville",
    "Uptown", "Andersonville", "Edgewater", "Rogers Park", "Hyde Park"
  ];

  const urbanServices = [
    "Chicago Municipal Code Compliance",
    "High-Rise Emergency Coordination", 
    "City Permit Navigation & Processing",
    "Multi-Unit Building Inspections",
    "Urban Vendor Network Management",
    "Downtown Parking Management",
    "Noise Ordinance Enforcement",
    "Elevator Maintenance Coordination",
    "Security System Management",
    "Waste Management for High-Density Buildings"
  ];

  const chicagoTestimonials = [
    {
      quote: "Managing our 40-unit building in River North was overwhelming until we found Stellar. Their understanding of Chicago regulations saved us thousands in potential violations.",
      author: "Maria Rodriguez",
      building: "River North Condominiums"
    },
    {
      quote: "The emergency response during the winter storm was incredible. Stellar had our heating restored in hours, not days like our previous management company.",
      author: "James Chen", 
      building: "Downtown High-Rise"
    },
    {
      quote: "Their expertise with Chicago Department of Buildings requirements made our major renovation project seamless.",
      author: "Sarah Johnson",
      building: "Lincoln Park Association"
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Chicago Property Management Services | Stellar Property Management</title>
        <meta name="description" content="Expert HOA and condo property management services throughout Chicago. Specialized in urban high-rise management, Chicago Municipal Code compliance, and city regulations." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1449157291145-7efd050a4d0e)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chicago's Premier Urban Property Management</h1>
            <p className="text-xl mb-8">Navigating the complexities of Chicago's urban landscape with expertise in high-rise management, city regulations, and downtown community needs.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="bg-darkBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Chicago Expertise
              </a>
              <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors">
                Request Urban Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Stats */}
      <section className="py-12 bg-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-bold">300+</div>
              <div className="text-sm">Chicago Properties</div>
            </div>
            <div>
              <Clock className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-bold">< 2 hrs</div>
              <div className="text-sm">Emergency Response</div>
            </div>
            <div>
              <Shield className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Code Compliant</div>
            </div>
            <div>
              <Users className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Downtown</div>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeading 
              title="Mastering Chicago's Urban Challenges"
              subtitle="From the bustling Loop to historic neighborhoods, we understand the unique demands of managing properties in America's third-largest city."
              center
            />
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-darkBlue">City Regulation Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Chicago Municipal Code compliance and interpretation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Department of Buildings permit coordination</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Fire Department inspection management</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Zoning and land use consultation</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-darkBlue">High-Rise Specialization</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Elevator maintenance and emergency protocols</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>High-rise security system coordination</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>Multi-floor emergency evacuation planning</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p>HVAC management for large buildings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Chicago Neighborhoods We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {chicagoNeighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-darkBlue" />
                  <h3 className="font-semibold text-sm">{neighborhood}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urban Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Specialized Urban Property Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {urbanServices.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-darkBlue mr-4 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Chicago Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {chicagoTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl text-gray-300 mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.building}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chicago FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Chicago Property Management FAQ</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-darkBlue pl-6">
                <h3 className="text-xl font-semibold mb-2">How do you handle Chicago Municipal Code compliance?</h3>
                <p className="text-gray-700">Our team stays current with all Chicago regulations, from building codes to zoning requirements. We proactively ensure your property meets all municipal standards and handle all permit applications and inspections.</p>
              </div>
              <div className="border-l-4 border-darkBlue pl-6">
                <h3 className="text-xl font-semibold mb-2">What's included in high-rise management services?</h3>
                <p className="text-gray-700">High-rise management includes elevator maintenance coordination, security system oversight, emergency evacuation planning, HVAC management for large buildings, and specialized vendor coordination for multi-story properties.</p>
              </div>
              <div className="border-l-4 border-darkBlue pl-6">
                <h3 className="text-xl font-semibold mb-2">How quickly can you respond to downtown emergencies?</h3>
                <p className="text-gray-700">Our Chicago emergency response team guarantees response within 2 hours for urgent situations. We maintain relationships with downtown vendors who can provide immediate assistance 24/7.</p>
              </div>
              <div className="border-l-4 border-darkBlue pl-6">
                <h3 className="text-xl font-semibold mb-2">Do you handle parking management in downtown buildings?</h3>
                <p className="text-gray-700">Yes, we coordinate parking management including permit enforcement, guest parking protocols, and coordination with Chicago parking authorities for any violations or disputes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Expert Chicago Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of Chicago property owners who trust Stellar Property Management with their urban communities. Get the city expertise your property deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-darkBlue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Chicago Office
            </a>
            <a href="/request-proposal" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-darkBlue transition-colors">
              Get Urban Proposal
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
