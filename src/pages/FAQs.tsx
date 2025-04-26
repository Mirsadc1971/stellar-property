
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "What types of properties does Manage369 specialize in managing?",
      answer: "Manage369 specializes in managing homeowner associations (HOAs), condominium associations, and multi-unit residential communities throughout the Chicago area. Our expertise in Chicago property management makes us a trusted partner for communities seeking professional management solutions."
    },
    {
      question: "What services are included in your property management packages?",
      answer: "Our comprehensive HOA and condo management services in Chicago include:\n\n" +
        "• Professional board meeting support and governance\n" +
        "• Detailed financial reporting and budgeting\n" +
        "• Vendor management and contract negotiations\n" +
        "• 24/7 maintenance coordination\n" +
        "• Proactive homeowner communication\n" +
        "• Association compliance enforcement\n\n" +
        "We also offer customized management packages tailored to your community's specific needs."
    },
    {
      question: "How much does HOA or condo management cost?",
      answer: "Chicago HOA and condo management fees are customized based on your community's size and service requirements. Contact Manage369 for a detailed management proposal tailored to your association's needs. We pride ourselves on providing transparent pricing and exceptional value."
    },
    {
      question: "How does Manage369 handle maintenance and repairs?",
      answer: "As your Chicago property management company, Manage369 coordinates all maintenance and repairs through our extensive network of licensed and insured vendors. We ensure high-quality work is completed on time and within budget, managing everything from routine maintenance to emergency repairs for your association."
    },
    {
      question: "Can board members and homeowners easily access financial reports?",
      answer: "Yes. As part of our commitment to transparent HOA management in Chicago, we provide comprehensive monthly financial reports through our secure online portal. Board members can access detailed financial statements, and additional custom reports are available upon request to ensure complete transparency in your association's financial management."
    },
    {
      question: "How does Manage369 communicate with boards and homeowners?",
      answer: "Effective communication is central to our Chicago property management approach. We provide regular updates through multiple channels:\n\n" +
        "• Dedicated online owner portals\n" +
        "• Prompt email responses\n" +
        "• Professional phone support\n" +
        "• Regular community newsletters\n" +
        "• Emergency 24/7 contact options"
    },
    {
      question: "How do we get started with Manage369?",
      answer: "Getting started with professional Chicago HOA management is simple. Contact us to schedule a consultation, and we'll assess your community's needs to create a customized property management plan. Our team will guide you through every step of the transition process to ensure a smooth handover of management responsibilities."
    }
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Common questions about our Chicago HOA and condo management services
            </p>

            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="px-4 border-b last:border-b-0">
                  <AccordionTrigger className="py-4 text-left font-medium hover:text-darkBlue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600 whitespace-pre-wrap">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm text-center">
              <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-4">
                Contact our Chicago property management team for answers specific to your community's needs.
              </p>
              <p className="font-medium">
                Call us at: (773) 728-0652<br />
                Email: service@manage369.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
