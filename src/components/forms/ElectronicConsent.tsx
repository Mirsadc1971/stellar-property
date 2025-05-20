
import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileText } from "lucide-react";
import { PropertySection } from "./electronic-consent/PropertySection";
import { ConsentSection } from "./electronic-consent/ConsentSection";
import { SignatureSection } from "./electronic-consent/SignatureSection";
import { ElectronicConsentFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';

export const ElectronicConsent = () => {
  // Get current date in YYYY-MM-DD format for the date fields
  const currentDate = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState<ElectronicConsentFormData>({
    propertyAddress: '',
    ownerNames: '',
    emailAddress: '',
    phoneNumber: '',
    agreesToConsent: false,
    ownerSignature: '',
    coOwnerSignature: '',
    ownerSignatureDate: currentDate,
    coOwnerSignatureDate: currentDate
  });

  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreesToConsent: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    // Validate consent checkbox
    if (!formData.agreesToConsent) {
      toast.error('You must agree to the consent terms to proceed');
      return;
    }
    
    const emailContent = `
CONSENT TO ELECTRONIC NOTICES

Property Address: ${formData.propertyAddress}
Owner Name(s): ${formData.ownerNames}
Email Address: ${formData.emailAddress}
Phone Number: ${formData.phoneNumber}

CONSENT AGREEMENT:
I have read and agreed to receive all official notices, announcements, and communications 
from the Association electronically via email at the provided email address.

Owner Signature: ${formData.ownerSignature}
Date: ${formData.ownerSignatureDate}

${formData.coOwnerSignature ? `Co-Owner Signature: ${formData.coOwnerSignature}
Date: ${formData.coOwnerSignatureDate}` : ''}

CAPTCHA Verified: Yes
    `;

    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Consent to Electronic Notices&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Consent form prepared for email submission');
    
    // Reset the CAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Consent to Electronic Notices Form
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <PropertySection formData={formData} handleInputChange={handleInputChange} />
        <ConsentSection formData={formData} handleConsentChange={handleConsentChange} />
        <SignatureSection formData={formData} handleInputChange={handleInputChange} />
        
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
          <Button type="submit" disabled={!captchaToken || !formData.agreesToConsent}>
            Submit Consent Form
          </Button>
        </div>
      </form>
    </Card>
  );
};
