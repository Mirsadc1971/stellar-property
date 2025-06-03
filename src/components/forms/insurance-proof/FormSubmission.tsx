
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useInsuranceForm } from './InsuranceFormContext';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { Recaptcha } from '@/components/ui/recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormSubmission: React.FC = () => {
  const { formData } = useInsuranceForm();
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
    
    // Validate that at least one checkbox is checked
    if (!formData.declarationAttached && 
        !formData.interiorCoverageAttached && 
        !formData.liabilityCoverageAttached && 
        !formData.propertyCoverageAttached) {
      toast.error('Please select at least one attachment option');
      return;
    }
    
    // Validate that a PDF file is uploaded
    if (!formData.pdfFile) {
      toast.error('Please upload your HO-6 insurance policy PDF');
      return;
    }
    
    const emailContent = `
HO-6 INSURANCE PROOF SUBMISSION FORM

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
☐ Copy of Current HO-6 Policy Declaration Page: ${formData.declarationAttached ? 'Included' : 'Not included'}
☐ Proof that policy includes building interior: ${formData.interiorCoverageAttached ? 'Included' : 'Not included'}
☐ Minimum liability coverage per governing documents: ${formData.liabilityCoverageAttached ? 'Included' : 'Not included'}
☐ Personal property coverage: ${formData.propertyCoverageAttached ? 'Included' : 'Not included'}

PDF Document attached: ${formData.pdfFile?.name || 'None'}

ACKNOWLEDGEMENT
I understand that it is my responsibility, per association rules and Illinois law, to maintain HO-6 insurance and provide proof annually or upon request.

Signature: ${formData.signature}
Date: ${formData.signatureDate}

CAPTCHA Verified: Yes

Note: This form has been submitted electronically. Please find the attached PDF for the complete insurance documentation.
    `;

    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=HO-6 Insurance Proof - ${formData.unitAddress}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Insurance proof submission prepared. Please attach your PDF file to the email before sending.');
    
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
        <Button type="submit" disabled={!captchaToken || !formData.pdfFile}>
          Submit Insurance Proof
        </Button>
      </div>
    </form>
  );
};
