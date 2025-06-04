
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
    console.log('Received repair request submission:', formData);

    const { data: submission, error: dbError } = await supabase
      .from('repair_request_submissions')
      .insert({
        submission_data: formData,
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
REPAIR REQUEST FORM

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

UNIT OWNER INFORMATION
Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}
Phone: ${formData.phone}
Email: ${formData.email}

DESCRIPTION OF REPAIR WORK
${formData.repairDescription}

Scope of Work:
${formData.scopeOfWork}

CONTRACTOR INFORMATION
Company Name: ${formData.contractorName}
License Number: ${formData.contractorLicense}
Contact Name: ${formData.contractorContact}
Phone: ${formData.contractorPhone}
Email: ${formData.contractorEmail}

Certificate of Insurance provided: ${formData.insuranceCertificate ? 'Yes' : 'No'}

ACCESS REQUESTS
${formData.needsRoofAccess ? `Roof Access Date: ${formData.roofAccessDate}` : 'No roof access needed'}
${formData.needsElevator ? `Elevator Reservation Date: ${formData.elevatorDate}` : 'No elevator reservation needed'}

OWNER AGREEMENT
Owner Signature: ${formData.ownerSignature}
Date: ${formData.signatureDate}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    if (resend) {
      await resend.emails.send({
        from: 'Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `Repair Request Form - Unit ${formData.unitNumber}`,
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
    console.error('Error in submit-repair-request function:', error);
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
