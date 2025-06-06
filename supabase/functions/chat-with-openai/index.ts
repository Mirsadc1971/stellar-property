
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// FAQ Knowledge Base
const faqKnowledge = `
STELLAR PROPERTY MANAGEMENT FAQ KNOWLEDGE BASE:

=== GENERAL SERVICES ===

Q: What types of properties does Stellar Property Management specialize in managing?
A: Stellar Property Management specializes in managing homeowner associations (HOAs), condominium associations, and multi-unit residential communities throughout the Chicago area. Our expertise in Chicago property management makes us a trusted partner for communities seeking professional management solutions.

Q: What services are included in your property management packages?
A: Our comprehensive HOA and condo management services in Chicago include:
• Professional board meeting support and governance
• Detailed financial reporting and budgeting
• Vendor management and contract negotiations
• 24/7 maintenance coordination
• Proactive homeowner communication
• Association compliance enforcement
We also offer customized management packages tailored to your community's specific needs.

Q: How much does HOA or condo management cost?
A: Chicago HOA and condo management fees are customized based on your community's size and service requirements. Contact Stellar Property Management for a detailed management proposal tailored to your association's needs. We pride ourselves on providing transparent pricing and exceptional value.

Q: How does Stellar Property Management handle maintenance and repairs?
A: As your Chicago property management company, Stellar Property Management coordinates all maintenance and repairs through our extensive network of licensed and insured vendors. We ensure high-quality work is completed on time and within budget, managing everything from routine maintenance to emergency repairs for your association.

Q: Can board members and homeowners easily access financial reports?
A: Yes. As part of our commitment to transparent HOA management in Chicago, we provide comprehensive monthly financial reports through our secure online portal. Board members can access detailed financial statements, and additional custom reports are available upon request to ensure complete transparency in your association's financial management.

Q: How does Stellar Property Management communicate with boards and homeowners?
A: Effective communication is central to our Chicago property management approach. We provide regular updates through multiple channels:
• Dedicated online owner portals
• Prompt email responses
• Professional phone support
• Regular community newsletters
• Emergency 24/7 contact options

Q: How do we get started with Stellar Property Management?
A: Getting started with professional Chicago HOA management is simple. Contact us to schedule a consultation, and we'll assess your community's needs to create a customized property management plan. Our team will guide you through every step of the transition process to ensure a smooth handover of management responsibilities.

=== PAYMENTS ===

Q: When are payments due?
A: Monthly payments are typically due on the 1st of each month, with a grace period until the 5th. Please check your specific agreement for your property's due dates.

Q: Is there a fee for online payments?
A: Credit card payments incur a processing fee of 3.5% per transaction. ACH/eCheck payments from your bank account are free.

Q: What if my payment is late?
A: Late fees vary by association and are outlined in your governing documents. Typically, payments received after the grace period incur a late fee as determined by your association's rules.

Q: How can I check my account balance?
A: You can view your current balance by logging into your owner portal. If you haven't set up portal access, please contact our office for assistance.

=== PROPOSALS ===

Q: How quickly will I receive a proposal?
A: We typically respond to all proposal requests within 1-2 business days. For complex properties, a site visit may be required before we can provide a comprehensive proposal.

Q: Is there a fee for receiving a proposal?
A: No, all of our property management proposals are provided free of charge with no obligation.

Q: What information will be included in the proposal?
A: Our proposals include detailed service offerings, management fees, recommended services for your specific property, and an implementation timeline.

Q: Can the proposal be customized to my specific needs?
A: Absolutely! We tailor each proposal to the unique needs of your property. The more details you provide in your request, the more customized your proposal will be.

=== CONTACT INFORMATION ===
Phone: (773) 728-0652
Email: service@stellarpropertygroup.com
Address: 5107 North Western Avenue, Suite 1S, Chicago, IL 60625
Online Portal: https://stellarpropertygrp.appfolio.com/connect/
`;

const systemPrompt = `You are the AI Property Assistant for Stellar Property Management, a professional HOA and condo management company in Chicago. You are knowledgeable, helpful, and focused on property management topics.

IMPORTANT INSTRUCTIONS:
1. ALWAYS check the FAQ knowledge base first when answering questions
2. When your answer comes from the FAQ, mention this and suggest they can find more details on the FAQ page
3. For questions about payments, proposals, or general services, use the specific information from the FAQ knowledge base
4. Stay focused on property management, HOA, and condo-related topics
5. Be conversational but professional
6. If someone asks about something not covered in the FAQ or property management, politely redirect them back to property management topics
7. Always provide helpful, accurate information based on Stellar Property Management's actual services

${faqKnowledge}

Remember: When referencing FAQ content, always provide accurate information and suggest users can find comprehensive details in the FAQ section of the website.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    console.log('Received chat request with messages:', messages.length);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Prepare messages with enhanced system prompt
    const enhancedMessages = [
      { role: "system", content: systemPrompt },
      ...messages
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: enhancedMessages,
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log('OpenAI API response status:', response.status);

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      throw new Error(data.error?.message || 'OpenAI API request failed');
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() || 
      "I'm having trouble generating a response. Please try again.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-with-openai function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An unexpected error occurred' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
