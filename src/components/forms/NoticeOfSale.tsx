
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { FileText, CheckCircle } from "lucide-react";
import { HeaderSection } from './notice/HeaderSection';
import { Section1 } from './notice/Section1';
import { Section2 } from './notice/Section2';
import { BuyerInformation } from './notice/BuyerInformation';
import { NoticeFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';

export const NoticeOfSale = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
  const [formData, setFormData] = useState<NoticeFormData>({
    currentDate: '',
    associationName: '',
    ownerName: '',
    unitNumber: '',
    associationAddress: '',
    listingFirm: '',
    agentOrOwner: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    listingPrice: '',
    listingTerms: '',
    signature: ''
  });

  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-notice-of-sale',
    successMessage: 'Notice of sale form submitted successfully!'
  });
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
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
            Thank you for submitting your notice of sale form. 
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
        Notice of Intent to Sell Unit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <HeaderSection formData={formData} handleInputChange={handleInputChange} />
        <Section1 formData={formData} handleInputChange={handleInputChange} />
        <Section2 formData={formData} handleInputChange={handleInputChange} />
        <BuyerInformation formData={formData} handleInputChange={handleInputChange} />
        
        <div className="mb-4">
          <label htmlFor="signature" className="block text-sm font-medium mb-1">Signature</label>
          <input
            id="signature"
            name="signature"
            type="text"
            value={formData.signature}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your signature"
            required
          />
        </div>
        
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
            disabled={!captchaToken || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Notice'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
