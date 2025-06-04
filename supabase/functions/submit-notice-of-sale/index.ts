
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.4';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? ''
);

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    console.log('Received notice of sale submission:', formData);

    const { data: submission, error: dbError } = await supabase
      .from('notice_of_sale_submissions')
      .insert({
        submission_data: formData,
        submitter_email: formData.ownerName,
        status: 'submitted'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save submission');
    }

    const submissionDate = new Date().toLocaleDateString();
    const emailContent = `
NOTICE OF INTENT TO SELL UNIT

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

Date: ${formData.currentDate}

To: Board of Directors
${formData.associationName}
${formData.associationAddress}

From: ${formData.ownerName}
Unit Number: ${formData.unitNumber}

SECTION 1 - NOTICE OF INTENT TO SELL
In accordance with the requirements of ${formData.associationName}, I hereby submit this Notice of Intent to Sell.

SECTION 2 - SUMMARY OF TERMS OF SALE
Listing Real Estate Firm: ${formData.listingFirm}
Agent/Owner: ${formData.agentOrOwner}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
ZIP: ${formData.zip}
Phone: ${formData.phone}
Listing Price: ${formData.listingPrice}
Listing Duration: ${formData.listingTerms} month(s)

Signature: ${formData.signature}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    if (resend) {
      await resend.emails.send({
        from: 'Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `Notice of Intent to Sell Unit - ${formData.unitNumber}`,
        text: emailContent,
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: submission.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in submit-notice-of-sale function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to submit form'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
