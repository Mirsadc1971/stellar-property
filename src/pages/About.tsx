import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";
import { CheckIcon } from "lucide-react";

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Manage369</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Chicago's premier property management company with a commitment to excellence and personalized service.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              alt="Professional Property Management Team in Modern Office Setting"
              className="w-full h-auto md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-12">
              At Manage369, our mission is to provide exceptional property management services that enhance property values, maximize returns, and create peace of mind for property owners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">✓</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from property maintenance to tenant relations, ensuring your property is always at its best.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">✓</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We operate with unwavering integrity, providing transparent communication and honest advice to all our clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">✓</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovative technologies and strategies to streamline property management and enhance the experience for owners and tenants alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-10 text-center">Why Choose Manage369?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-darkBlue rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Local Chicago Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of Chicago's neighborhoods and market trends.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-darkBlue rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Comprehensive Services</h3>
                  <p className="text-gray-600">End-to-end property management solutions tailored to your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-darkBlue rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Transparent Communication</h3>
                  <p className="text-gray-600">Regular updates and clear reporting on your property's performance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-darkBlue rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Technology-Driven</h3>
                  <p className="text-gray-600">Modern tools for efficient management and better decision-making.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-darkBlue rounded-full p-1">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">Responsive team available to address your questions and concerns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Contact Us Today</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our property management services? Reach out to us today and discover how we can help you maximize your investment.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-darkBlue hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-gray-100 p-8 md:p-12">
                <h3 className="font-heading text-xl font-bold mb-4">Our Office Location</h3>
                <p className="text-gray-600 mb-6">
                  5107 North Western Avenue Ste 1S<br />
                  Chicago, Illinois 60625
                </p>
                
                <div className="h-48 bg-gray-300 mb-6">
                  {/* Map placeholder - would be replaced with actual map integration */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Map Loading...</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
