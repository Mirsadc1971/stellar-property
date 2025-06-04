
import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileText, CheckCircle } from "lucide-react";
import { PropertySection } from "./electronic-consent/PropertySection";
import { ConsentSection } from "./electronic-consent/ConsentSection";
import { SignatureSection } from "./electronic-consent/SignatureSection";
import { ElectronicConsentFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';

export const ElectronicConsent = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
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

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-electronic-consent',
    successMessage: 'Electronic consent form submitted successfully!'
  });
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    if (!formData.agreesToConsent) {
      toast.error('You must agree to the consent terms to proceed');
      return;
    }
    
    const result = await submitForm(formData);
    
    if (result.success) {
      setIsSubmitted(true);
      setSubmissionId(result.submissionId || '');
      
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-6">
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-green-800">Form Submitted Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for submitting your electronic consent form. 
            We have received your submission and will process it shortly.
          </p>
          {submissionId && (
            <p className="text-sm text-gray-500 mb-6">
              Submission ID: {submissionId}
            </p>
          )}
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
          >
            Submit Another Form
          </Button>
        </div>
      </Card>
    );
  }

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
          <Button 
            type="submit" 
            disabled={!captchaToken || !formData.agreesToConsent || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Consent Form'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
