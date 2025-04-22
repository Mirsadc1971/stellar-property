
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/services/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServicesOfferings from "@/components/services/ServicesOfferings";
import AreasSection from "@/components/services/AreasSection";
import CtaSection from "@/components/services/CtaSection";

export default function Services() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <ServicesOfferings />
      <AreasSection />
      <CtaSection />
    </MainLayout>
  );
}
