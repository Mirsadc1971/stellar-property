
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import Gpt4ChatBox from "@/components/home/Gpt4ChatBox";
import MapComponent from "@/components/ui/MapComponent";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProperties />
      <Testimonials />
      
      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="max-w-3xl mx-auto">
            <MapComponent 
              latitude={41.975938} 
              longitude={-87.691592}
              className="h-[400px] rounded-lg shadow-lg overflow-hidden"
            />
            <div className="text-center mt-6">
              <p className="text-gray-600">
                5107 North Western Avenue Ste 1S<br />
                Chicago, Illinois 60625
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gpt4ChatBox />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
