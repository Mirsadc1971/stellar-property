
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // General FAQs
  {
    question: "What types of properties does Stellar Property Management specialize in managing?",
    answer: "Stellar Property Management specializes in managing homeowner associations (HOAs), condominium associations, and multi-unit residential communities throughout the Chicago area. Our expertise in Chicago property management makes us a trusted partner for communities seeking professional management solutions.",
    category: "general"
  },
  {
    question: "What services are included in your property management packages?",
    answer: "Our comprehensive HOA and condo management services in Chicago include:\n\n• Professional board meeting support and governance\n• Detailed financial reporting and budgeting\n• Vendor management and contract negotiations\n• 24/7 maintenance coordination\n• Proactive homeowner communication\n• Association compliance enforcement\n\nWe also offer customized management packages tailored to your community's specific needs.",
    category: "general"
  },
  {
    question: "How much does HOA or condo management cost?",
    answer: "Chicago HOA and condo management fees are customized based on your community's size and service requirements. Contact Stellar Property Management for a detailed management proposal tailored to your association's needs. We pride ourselves on providing transparent pricing and exceptional value.",
    category: "general"
  },
  {
    question: "How does Stellar Property Management handle maintenance and repairs?",
    answer: "As your Chicago property management company, Stellar Property Management coordinates all maintenance and repairs through our extensive network of licensed and insured vendors. We ensure high-quality work is completed on time and within budget, managing everything from routine maintenance to emergency repairs for your association.",
    category: "general"
  },
  {
    question: "Can board members and homeowners easily access financial reports?",
    answer: "Yes. As part of our commitment to transparent HOA management in Chicago, we provide comprehensive monthly financial reports through our secure online portal. Board members can access detailed financial statements, and additional custom reports are available upon request to ensure complete transparency in your association's financial management.",
    category: "general"
  },
  {
    question: "How does Stellar Property Management communicate with boards and homeowners?",
    answer: "Effective communication is central to our Chicago property management approach. We provide regular updates through multiple channels:\n\n• Dedicated online owner portals\n• Prompt email responses\n• Professional phone support\n• Regular community newsletters\n• Emergency 24/7 contact options",
    category: "general"
  },
  {
    question: "How do we get started with Stellar Property Management?",
    answer: "Getting started with professional Chicago HOA management is simple. Contact us to schedule a consultation, and we'll assess your community's needs to create a customized property management plan. Our team will guide you through every step of the transition process to ensure a smooth handover of management responsibilities.",
    category: "general"
  },
  
  // Payment FAQs
  {
    question: "When are payments due?",
    answer: "Monthly payments are typically due on the 1st of each month, with a grace period until the 5th. Please check your specific agreement for your property's due dates.",
    category: "payments"
  },
  {
    question: "Is there a fee for online payments?",
    answer: "Credit card payments incur a processing fee of 3.5% per transaction. ACH/eCheck payments from your bank account are free.",
    category: "payments"
  },
  {
    question: "What if my payment is late?",
    answer: "Late fees vary by association and are outlined in your governing documents. Typically, payments received after the grace period incur a late fee as determined by your association's rules.",
    category: "payments"
  },
  {
    question: "How can I check my account balance?",
    answer: "You can view your current balance by logging into your owner portal. If you haven't set up portal access, please contact our office for assistance.",
    category: "payments"
  },
  
  // Proposal FAQs
  {
    question: "How quickly will I receive a proposal?",
    answer: "We typically respond to all proposal requests within 1-2 business days. For complex properties, a site visit may be required before we can provide a comprehensive proposal.",
    category: "proposals"
  },
  {
    question: "Is there a fee for receiving a proposal?",
    answer: "No, all of our property management proposals are provided free of charge with no obligation.",
    category: "proposals"
  },
  {
    question: "What information will be included in the proposal?",
    answer: "Our proposals include detailed service offerings, management fees, recommended services for your specific property, and an implementation timeline.",
    category: "proposals"
  },
  {
    question: "Can the proposal be customized to my specific needs?",
    answer: "Absolutely! We tailor each proposal to the unique needs of your property. The more details you provide in your request, the more customized your proposal will be.",
    category: "proposals"
  }
];

export const getFAQsByCategory = (category: string) => {
  return faqData.filter(faq => faq.category === category);
};

export const searchFAQs = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) || 
    faq.answer.toLowerCase().includes(lowerQuery)
  );
};
