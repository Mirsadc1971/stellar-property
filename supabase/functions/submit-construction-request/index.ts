
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
    console.log('Received construction request submission:', formData);

    // Handle file uploads if present
    const fileUrls: string[] = [];
    if (formData.documents && formData.documents.length > 0) {
      for (const doc of formData.documents) {
        const fileName = `construction-${Date.now()}-${doc.name}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('form-attachments')
          .upload(fileName, doc, {
            contentType: doc.type
          });

        if (uploadError) {
          console.error('File upload error:', uploadError);
        } else {
          fileUrls.push(`${Deno.env.get('SUPABASE_URL')}/storage/v1/object/public/form-attachments/${fileName}`);
        }
      }
    }

    const { data: submission, error: dbError } = await supabase
      .from('construction_request_submissions')
      .insert({
        submission_data: { ...formData, fileUrls },
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
CONDOMINIUM CONSTRUCTION REQUEST FORM

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

UNIT OWNER INFORMATION
Association Name: ${formData.associationName}
Owner Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}
Phone Number: ${formData.phoneNumber}
Email Address: ${formData.email}

CONSTRUCTION PROJECT DETAILS
Work Description:
${formData.workDescription}

Start Date: ${formData.startDate}
Completion Date: ${formData.completionDate}

Roof Access Needed: ${formData.roofAccess ? 'Yes' : 'No'}
${formData.roofAccess ? `Roof Access Date/Time: ${formData.roofAccessDateTime}` : ''}
Elevator Use for Materials/Tools: ${formData.elevatorUse ? 'Yes' : 'No'}
Construction Debris Removal at Owner's Expense: ${formData.debrisRemoval ? 'Yes' : 'No'}

Permit Required: ${formData.permitRequired ? 'Yes' : 'No'}

${fileUrls.length > 0 ? `Documents Attached: ${fileUrls.join(', ')}` : 'No documents attached'}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    if (resend) {
      await resend.emails.send({
        from: 'Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `Construction Request Form - Unit ${formData.unitNumber}`,
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
    console.error('Error in submit-construction-request function:', error);
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
