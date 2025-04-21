
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import Gpt4ChatBox from "@/components/home/Gpt4ChatBox";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProperties />
      <Testimonials />
      <Gpt4ChatBox /> {/* Default: No admin controls */}
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
