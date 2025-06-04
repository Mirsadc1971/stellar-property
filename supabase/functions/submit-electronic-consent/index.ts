
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
    console.log('Received electronic consent submission:', formData);

    const { data: submission, error: dbError } = await supabase
      .from('electronic_consent_submissions')
      .insert({
        submission_data: formData,
        submitter_email: formData.emailAddress,
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
CONSENT TO ELECTRONIC NOTICES

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

Property Address: ${formData.propertyAddress}
Owner Name(s): ${formData.ownerNames}
Email Address: ${formData.emailAddress}
Phone Number: ${formData.phoneNumber}

CONSENT AGREEMENT:
Agrees to Electronic Communication: ${formData.agreesToConsent ? 'Yes' : 'No'}

Owner Signature: ${formData.ownerSignature}
Date: ${formData.ownerSignatureDate}

${formData.coOwnerSignature ? `Co-Owner Signature: ${formData.coOwnerSignature}
Date: ${formData.coOwnerSignatureDate}` : ''}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    if (resend) {
      await resend.emails.send({
        from: 'Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `Consent to Electronic Notices - ${formData.propertyAddress}`,
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
    console.error('Error in submit-electronic-consent function:', error);
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
