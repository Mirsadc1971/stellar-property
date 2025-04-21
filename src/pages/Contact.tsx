
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you! For questions, service requests, or to learn more about Manage369, use the details below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-darkBlue mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      5107 North Western Avenue Ste 1S<br />
                      Chicago, Illinois 60625
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-darkBlue mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:7737280652" className="hover:text-darkBlue">773.728.0652</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-darkBlue mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:service@manage369.com" className="hover:text-darkBlue">service@manage369.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-darkBlue mr-4 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:30 AM - 4:30 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold mb-4">We Are Here</h3>
                <div className="h-60 rounded mb-4 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.1713100591656!2d-87.6915915!3d41.97593810000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1fba4324187%3A0xaf90935c99bcf873!2s5107%20N%20Western%20Ave%20%231s%2C%20Chicago%2C%20IL%2060625!5e0!3m2!1sen!2sus!4v1713880082800!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Manage369 Office Location"
                  ></iframe>
                </div>
                <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                  <a href="https://maps.google.com/?q=5107+North+Western+Avenue+Chicago+Illinois+60625" target="_blank" rel="noopener noreferrer">
                    View Larger Map
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-darkBlue hover:bg-blue-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and property assessment.
          </p>
          <Button className="bg-darkBlue hover:bg-blue-800">
            <a href="tel:7737280652">Call Us: 773.728.0652</a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
