import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";
import MapComponent from "@/components/ui/MapComponent";
import { Recaptcha } from "@/components/ui/recaptcha";
import { useRecaptcha } from "@/hooks/use-recaptcha";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import SEOHead from "@/components/seo/SEOHead";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import LocalSEOTags from "@/components/seo/LocalSEOTags";
import { NAPConsistency } from "@/components/seo/NAPConsistency";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    const emailContent = `
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Subject: ${formData.subject}
    Message: ${formData.message}
    CAPTCHA Verified: Yes
    `;
    
    // Open default email client with pre-filled content
    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Contact message prepared for email');
  };

  return (
    <MainLayout>
      <SEOHead
        title="Contact Stellar Property Management | Chicago Property Experts"
        description="Contact Chicago's trusted property management company. Reach our team for HOA management, condo association services, and property maintenance solutions."
        canonical="/contact"
        keywords="contact property management Chicago, Chicago HOA management contact, condo association management contact, property management phone number Chicago"
      />
      
      <LocalBusinessSchema />
      <LocalSEOTags />
      
      {/* Hero Section */}
      <section className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you! For questions, service requests, or to learn more about Stellar Property Management, use the details below.
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
                <NAPConsistency showTitle={false} />
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold mb-4">We Are Here</h3>
                <MapComponent 
                  latitude={41.975938} 
                  longitude={-87.691592}
                  className="h-60 rounded mb-4 overflow-hidden"
                />
                <Button variant="outline" className="w-full border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white">
                  <a href="https://maps.google.com/?q=5107+North+Western+Avenue+Chicago+Illinois+60625" target="_blank" rel="noopener noreferrer">
                    View Larger Map
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-darkBlue" />
                  <p className="text-sm text-gray-700">
                    Protected with Google reCAPTCHA to prevent spam
                  </p>
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-4">
                  <Recaptcha 
                    onChange={handleCaptchaChange}
                    onError={handleCaptchaError}
                  />
                  {captchaError && (
                    <p className="text-sm text-red-500 mt-1">{captchaError}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-darkBlue hover:bg-blue-800"
                  disabled={!captchaToken}
                >
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