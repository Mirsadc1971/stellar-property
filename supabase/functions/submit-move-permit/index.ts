
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
    console.log('Received move permit submission:', formData);

    const { data: submission, error: dbError } = await supabase
      .from('move_permit_submissions')
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
    const getDepositRefundTypeText = () => {
      switch (formData.depositRefundType) {
        case 'refundable': return 'Fully Refundable';
        case 'nonRefundable': return 'Non-refundable';
        case 'partial': return 'Partially Refundable';
        default: return 'Not specified';
      }
    };

    const emailContent = `
MOVE-IN / MOVE-OUT PERMIT REQUEST

Submission ID: ${submission.id}
Submission Date: ${submissionDate}

RESIDENT INFORMATION
Association Name: ${formData.associationName}
Unit Owner Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}
Phone Number: ${formData.phone}
Email Address: ${formData.email}

MOVE DETAILS
Date of Move: ${formData.moveDate}
Type of Move: ${formData.moveType === 'moveIn' ? 'Move-In' : 'Move-Out'}
Moving Company: ${formData.movingCompanyName || 'Not specified'}
Day of Week: ${formData.moveDay === 'weekday' ? 'Weekday (Monday-Friday)' : 
              formData.moveDay === 'saturday' ? 'Saturday' : 'Sunday (Emergency)'}

ELEVATOR REQUIREMENTS
Elevator Required: ${formData.elevatorUseRequired ? 'Yes' : 'No'}
${formData.elevatorUseRequired ? `Elevator Time: ${formData.elevatorStartTime} to ${formData.elevatorEndTime}` : ''}
Elevator Key Required: ${formData.elevatorKeyRequired ? 'Yes' : 'No'}

DEPOSIT DETAILS
Security Deposit Amount: $${formData.depositAmount}
Deposit Refund Type: ${getDepositRefundTypeText()}

ADDITIONAL NOTES
${formData.additionalNotes || 'None provided'}

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
        subject: `Move Permit Request - ${formData.unitNumber}`,
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
    console.error('Error in submit-move-permit function:', error);
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
