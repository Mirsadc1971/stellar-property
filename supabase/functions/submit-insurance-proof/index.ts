
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
    console.log('Received insurance proof submission:', formData);

    // Handle file upload if present
    let fileUrl = null;
    if (formData.pdfFile) {
      const fileData = formData.pdfFile;
      const fileName = `insurance-${Date.now()}.pdf`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('form-attachments')
        .upload(fileName, fileData, {
          contentType: 'application/pdf'
        });

      if (uploadError) {
        console.error('File upload error:', uploadError);
      } else {
        fileUrl = `${Deno.env.get('SUPABASE_URL')}/storage/v1/object/public/form-attachments/${fileName}`;
      }
    }

    const { data: submission, error: dbError } = await supabase
      .from('insurance_proof_submissions')
      .insert({
        submission_data: { ...formData, fileUrl },
        submitter_email: formData.email,
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
HO-6 INSURANCE PROOF SUBMISSION FORM

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

ASSOCIATION INFORMATION
Association Name: ${formData.associationName}

UNIT OWNER INFORMATION
Owner Name(s): ${formData.ownerNames}
Unit Address: ${formData.unitAddress}
Email Address: ${formData.email}
Phone Number: ${formData.phone}

HO-6 INSURANCE POLICY DETAILS
Insurance Carrier: ${formData.insuranceCarrier}
Policy Number: ${formData.policyNumber}
Policy Effective Date: ${formData.policyStartDate} to ${formData.policyEndDate}
Agent Name / Contact Info: ${formData.agentInfo || 'Not provided'}

REQUIRED ATTACHMENTS
Copy of Current HO-6 Policy Declaration Page: ${formData.declarationAttached ? 'Included' : 'Not included'}
Proof that policy includes building interior: ${formData.interiorCoverageAttached ? 'Included' : 'Not included'}
Minimum liability coverage per governing documents: ${formData.liabilityCoverageAttached ? 'Included' : 'Not included'}
Personal property coverage: ${formData.propertyCoverageAttached ? 'Included' : 'Not included'}

${fileUrl ? `PDF Document: ${fileUrl}` : 'No PDF attached'}

Signature: ${formData.signature}
Date: ${formData.signatureDate}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    if (resend) {
      await resend.emails.send({
        from: 'Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `HO-6 Insurance Proof - ${formData.unitAddress}`,
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
    console.error('Error in submit-insurance-proof function:', error);
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
