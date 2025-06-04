
import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Wrench, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { RepairRequestFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';
import { OwnerInfoSection } from './repair-request/OwnerInfoSection';
import { RepairDetailsSection } from './repair-request/RepairDetailsSection';
import { ContractorSection } from './repair-request/ContractorSection';
import { AccessSection } from './repair-request/AccessSection';
import { AgreementSection } from './repair-request/AgreementSection';

export const RepairRequestForm = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
  const [formData, setFormData] = useState<RepairRequestFormData>({
    ownerName: '',
    unitNumber: '',
    phone: '',
    email: '',
    repairDescription: '',
    scopeOfWork: '',
    contractorName: '',
    contractorLicense: '',
    contractorContact: '',
    contractorPhone: '',
    contractorEmail: '',
    insuranceCertificate: false,
    needsRoofAccess: false,
    roofAccessDate: '',
    needsElevator: false,
    elevatorDate: '',
    ownerSignature: '',
    signatureDate: currentDate
  });

  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-repair-request',
    successMessage: 'Repair request submitted successfully!'
  });
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
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
            Thank you for submitting your repair request. 
            We have received your submission and will review it shortly.
          </p>
          {submissionId && (
            <p className="text-sm text-gray-500 mb-6">
              Submission ID: {submissionId}
            </p>
          )}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-amber-800">
                IMPORTANT: No work may begin until you receive written approval from the Board.
              </p>
            </div>
          </div>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
          >
            Submit Another Request
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Repair Request Form</h2>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
        <div className="flex items-start gap-2">
          <FileCheck className="h-5 w-5 text-yellow-700 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-yellow-800 mb-1">This form is for repair work only — not construction or remodeling.</p>
            <p className="text-sm text-yellow-700 mb-2">
              Repairs involve licensed trades (e.g., plumbing, electrical, HVAC) but do not include any structural or material changes to the unit.
              All repairs involving licensed trades must be reviewed by the Association to ensure safety, compliance, and minimal disruption to common elements.
            </p>
            <div className="flex items-start mt-2 gap-2 bg-amber-100 p-2 rounded-md">
              <AlertTriangle className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-semibold text-amber-800">
                IMPORTANT: Submission of this form does not constitute approval. Work may not begin until the Board has reviewed and explicitly approved the request in writing.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <OwnerInfoSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <RepairDetailsSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <ContractorSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AccessSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AgreementSection 
          formData={formData} 
          handleInputChange={handleInputChange}
        />
        
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
            {isSubmitting ? 'Submitting...' : 'Submit Repair Request'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
