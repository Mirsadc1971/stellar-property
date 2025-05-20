
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useMovePermit } from './MovePermitContext';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { Recaptcha } from '@/components/ui/recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormSubmission: React.FC = () => {
  const { formData } = useMovePermit();
  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    // Validate that a move date is set
    if (!formData.moveDate) {
      toast.error('Please select a move date');
      return;
    }
    
    // Calculate if move date is at least 10 days from now
    const moveDate = new Date(formData.moveDate);
    const today = new Date();
    const dayDifference = Math.floor((moveDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (dayDifference < 10) {
      toast.error('Move date must be at least 10 days from today');
      return;
    }
    
    // Check that signature is provided
    if (!formData.signature.trim()) {
      toast.error('Please provide your signature');
      return;
    }
    
    const emailContent = `
MOVE-IN / MOVE-OUT PERMIT REQUEST

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
Security Deposit Amount: $${formData.depositAmount}

ADDITIONAL NOTES
${formData.additionalNotes || 'None provided'}

ACKNOWLEDGEMENT
I acknowledge that I have read and agree to abide by all move rules and regulations and accept responsibility for any damages.

Signature: ${formData.signature}
Date: ${formData.signatureDate}

CAPTCHA Verified: Yes

This request requires management approval. You will receive confirmation once approved.
    `;

    const mailtoLink = `mailto:management@stellarpropertygroup.com?subject=Move Permit Request - ${formData.unitNumber}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Move permit request prepared. Please attach any additional documents to the email before sending.');
    
    // Reset the CAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="my-6">
        <label className="block text-sm font-medium mb-1">Verification</label>
        <Recaptcha 
          onChange={handleCaptchaChange}
          onError={handleCaptchaError}
          className="mt-2"
        />
        {captchaError && (
          <p className="text-sm text-red-500 mt-1">{captchaError}</p>
        )}
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={!captchaToken}>
          Submit Move Permit Request
        </Button>
      </div>
    </form>
  );
};
