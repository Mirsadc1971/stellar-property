
import MainLayout from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/proposal/HeroSection";
import { BenefitsSection } from "@/components/proposal/BenefitsSection";
import { ProposalForm } from "@/components/proposal/ProposalForm";
import { FaqSection } from "@/components/proposal/FaqSection";

export default function RequestProposal() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left - Benefits */}
            <div className="lg:col-span-1">
              <BenefitsSection />
            </div>
            
            {/* Right - Form */}
            <div className="lg:col-span-2">
              <ProposalForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </MainLayout>
  );
}
