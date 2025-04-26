import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import MapComponent from "@/components/ui/MapComponent";
import Gpt4ChatBox from "@/components/home/Gpt4ChatBox";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      
      {/* AI Property Assistant Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
              Your AI Property Management Assistant
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Get instant insights, answers, and guidance about property management directly from our advanced AI assistant.
            </p>
            <Gpt4ChatBox />
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Location Section */}
      <section className="py-16 bg-gray-100" aria-labelledby="location-heading">
        <div className="container mx-auto px-4">
          <h2 id="location-heading" className="font-heading text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="max-w-3xl mx-auto">
            <MapComponent 
              latitude={41.975938} 
              longitude={-87.691592}
              className="h-[400px] rounded-lg shadow-lg overflow-hidden"
            />
            <div className="text-center mt-6">
              <address className="text-gray-600 not-italic">
                5107 North Western Avenue Ste 1S<br />
                Chicago, Illinois 60625
              </address>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  );
};

export default Index;
