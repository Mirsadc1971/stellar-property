
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
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
      
      {/* Modern Building Showcase */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Modern glass building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-8">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Modern Property Management Excellence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We manage some of Chicago's most prestigious modern properties, bringing professional expertise to every building we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Gpt4ChatBox />
      
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

      <CtaSection />
    </MainLayout>
  );
};

export default Index;
