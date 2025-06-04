
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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    console.log('Received form submission:', formData);

    // Store submission in database
    const { data: submission, error: dbError } = await supabase
      .from('resident_submissions')
      .insert({
        submission_data: formData,
        submitter_email: formData.homeowner1Email || formData.homeowner2Email,
        status: 'submitted'
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save submission');
    }

    console.log('Submission saved with ID:', submission.id);

    // Generate email content
    const submissionDate = new Date().toLocaleDateString();
    const emailContent = `
RESIDENT INFORMATION SHEET SUBMISSION
Submission ID: ${submission.id}
Submission Date: ${submissionDate}

ASSOCIATION INFORMATION
Association Name: ${formData.associationName}

OWNER INFORMATION
Homeowner 1: ${formData.homeowner1}
Homeowner 1 Cell: ${formData.homeowner1Cell}
Homeowner 2: ${formData.homeowner2}
Homeowner 2 Cell: ${formData.homeowner2Cell}
Address: ${formData.address}
Unit: ${formData.unit}
Home Phone: ${formData.homePhone}
Homeowner 1 Email: ${formData.homeowner1Email}
Homeowner 2 Email: ${formData.homeowner2Email}
Parking Space #: ${formData.parkingSpace}
Locker #: ${formData.lockerNumber}
Legal and Beneficial Owner(s): ${formData.legalOwners}
Insurance Company: ${formData.insuranceCompany}

OCCUPANT INFORMATION
Owner Occupied: ${formData.isOwnerOccupied}
Lease Holders: ${formData.leaseHolders}
Lease Period: ${formData.leaseStart} to ${formData.leaseEnd}
Occupant Phone: ${formData.occupantPhone}
Occupant Cell Phones: ${formData.occupantCell1}, ${formData.occupantCell2}

ADDITIONAL INFORMATION
Other Residents: ${formData.otherResidents}
Pets (Breed, Name): ${formData.pets}
Needs Special Help: ${formData.needsSpecialHelp}
Preferred Communication: ${formData.preferredCommunication}

VEHICLE INFORMATION
Make: ${formData.vehicleMake}
Model: ${formData.vehicleModel}
License Plate: ${formData.licensePlate}

EMERGENCY CONTACT
Name: ${formData.emergencyContactName}
Phone: ${formData.emergencyContactPhone}

ELECTRONIC COMMUNICATION AGREEMENT
Agrees to Electronic Communication: ${formData.agreesToElectronicComm ? 'Yes' : 'No'}
Digital Signature: ${formData.signature}

--
This submission was automatically processed and stored in the system.
Submission ID: ${submission.id}
    `;

    // Send email notification
    if (resend) {
      const emailResponse = await resend.emails.send({
        from: 'Resident Forms <noreply@stellarpropertygroup.com>',
        to: ['service@stellarpropertygroup.com'],
        subject: `New Resident Information Sheet - ${formData.associationName}`,
        text: emailContent,
      });

      console.log('Email sent successfully:', emailResponse);
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
    console.error('Error in submit-resident-form function:', error);
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
