
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQCategory {
  title: string;
  faqs: {
    question: string;
    answer: React.ReactNode;
  }[];
}

export default function FAQs() {
  const faqCategories: FAQCategory[] = [
    {
      title: "Quick Answers",
      faqs: [
        {
          question: "What does Manage369 Do?",
          answer: "We provide property management for condo/HOA associations, commercial property, and investment real estate, with a focus on operational support, financial management, and maintenance coordination."
        },
        {
          question: "How do I make a maintenance request?",
          answer: "All requests should be submitted via your online Owner or Tenant Portal. For emergency issues (like flooding, fire risk, gas leaks), call us 24/7 at 773.728.0652."
        },
        {
          question: "Where can I access my account or documents?",
          answer: "Owners and tenants can log in to their portal (link at the top of our website) to access statements, documents, maintenance requests, and more."
        }
      ]
    },
    {
      title: "For Tenants & Residents",
      faqs: [
        {
          question: "Do you manage rental units or leases?",
          answer: "We do not manage leases directly. Lease agreements are between tenants and their unit owner. Contact your landlord for lease renewals, terms, or move-out."
        },
        {
          question: "How do I report a maintenance issue?",
          answer: "Please use your Tenant Portal for all non-emergency requests. For true emergencies (no heat, water leak, fire/gas risk) call 773.728.0652."
        },
        {
          question: "Who do I contact about utility outages?",
          answer: (
            <div>
              <ul className="list-disc ml-6 space-y-2">
                <li>For in-unit electrical issues: Contact your landlord.</li>
                <li>
                  Building-wide/outdoor outages:
                  <ul className="list-disc ml-6 mt-1">
                    <li>ComEd: 1-800-334-7661 | <a href="https://www.comed.com" className="text-darkBlue hover:underline">www.comed.com</a></li>
                  </ul>
                </li>
                <li>
                  For gas leaks, leave the building and call:
                  <ul className="list-disc ml-6 mt-1">
                    <li>Peoples Gas: 866-556-6002 (Chicago)</li>
                    <li>NICOR Gas: 1-888-642-6748</li>
                  </ul>
                  Notify us after the gas company responds.
                </li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: "For Property Owners",
      faqs: [
        {
          question: "What are my maintenance responsibilities vs. the association?",
          answer: (
            <div>
              <p className="mb-2"><strong>Owners:</strong> Responsible for all interior repairs (plumbing, appliances, electrical, flooring, windows, etc.) within your unit.</p>
              <p className="mb-2"><strong>Association:</strong> Typically covers building structure, roof, common areas, common mechanicals, and exterior.</p>
              <p>Refer to your association documents or contact us for clarification.</p>
            </div>
          )
        },
        {
          question: "What financial/accounting support do you provide?",
          answer: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Monthly and annual financial statements</li>
              <li>Collection of assessments</li>
              <li>Bill payment and vendor management</li>
              <li>Budget preparation & reserve planning</li>
            </ul>
          )
        },
        {
          question: "How do I access my owner portal?",
          answer: "Login via the portal link at the top of our website. Access financials, documents, and submit requests."
        },
        {
          question: "Do you manage rental/leasing for owners?",
          answer: "We do not negotiate leases or collect rent. Owners are responsible for leasing and must provide us with a copy of any new lease."
        }
      ]
    },
    {
      title: "Documents & Policies",
      faqs: [
        {
          question: "Where do I find association rules or governing documents?",
          answer: "All relevant documents (bylaws, rules, meeting minutes, policies) are available in your Owner Portal. If you can't find something, email us at service@manage369.com."
        },
        {
          question: "How are violations handled?",
          answer: "We follow each association's adopted policy. Typically notice is sent to the owner, and fines (if any) are determined by the Board as outlined in your governing documents."
        },
        {
          question: "Where are meeting agendas or minutes posted?",
          answer: "These are posted in your Owner Portal and often emailed to owners prior to meetings."
        },
        {
          question: "What are the rules about construction or renovation work?",
          answer: "Structural changes, electrical work, plumbing, or any other work that requires a permit and licensed contractors must have the full scope of work submitted for approval before starting. Fines for non-compliance can be up to $1,000."
        }
      ]
    },
    {
      title: "Contact & Emergencies",
      faqs: [
        {
          question: "How do I contact Manage369?",
          answer: (
            <div>
              <p className="mb-1">773.728.0652 | service@manage369.com</p>
              <p className="mb-1"><strong>Office Hours:</strong> Mon–Fri, 9:30AM–4:30PM (closed weekends/holidays)</p>
              <p><strong>After-hours:</strong> For emergencies only, call the number above.</p>
            </div>
          )
        },
        {
          question: "What is considered an emergency?",
          answer: (
            <div>
              <p className="mb-2">Emergencies are situations that pose immediate risk or cause property damage: fire, major flooding, gas leaks, no heat in winter, building-wide outages, or property security issues.</p>
              <p>For emergencies, call us 24/7 at 773.728.0652.</p>
            </div>
          )
        },
        {
          question: "Who do I call for power outages, gas leaks, or city issues?",
          answer: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Power outage (ComEd): 1-800-334-7661</li>
              <li>Gas leak (Peoples Gas): 866-556-6002 • NICOR Gas: 1-888-642-6748</li>
              <li>City Services (Chicago 311): Call 311 for sanitation, snow, graffiti, etc.</li>
            </ul>
          )
        }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter FAQs based on search term
  const filteredCategories = searchTerm 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              🏢 Manage369 – Frequently Asked Questions
            </h1>
            <p className="text-gray-600">
              📍 5107 N Western Ave Suite 1S, Chicago, IL 60625<br />
              773.728.0652 | service@manage369.com
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkBlue"
            />
          </div>
          
          {/* FAQ Categories */}
          <div className="max-w-3xl mx-auto">
            {filteredCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="font-heading text-2xl font-bold mb-6">{category.title}</h2>
                
                <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="px-6 hover:text-darkBlue">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Need More Help */}
            <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="font-heading text-xl font-bold mb-4">Need More Help?</h2>
              <p className="mb-2">Email: <a href="mailto:service@manage369.com" className="text-darkBlue hover:underline">service@manage369.com</a></p>
              <p>Office Hours: Mon–Fri, 9:30AM–4:30PM</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
