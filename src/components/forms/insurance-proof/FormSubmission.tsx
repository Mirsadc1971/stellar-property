
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle } from 'lucide-react';
import { useInsuranceForm } from './InsuranceFormContext';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormSubmission: React.FC = () => {
  const { formData } = useInsuranceForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-insurance-proof',
    successMessage: 'Insurance proof submitted successfully!'
  });
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    if (!formData.declarationAttached && 
        !formData.interiorCoverageAttached && 
        !formData.liabilityCoverageAttached && 
        !formData.propertyCoverageAttached) {
      toast.error('Please select at least one attachment option');
      return;
    }
    
    if (!formData.pdfFile) {
      toast.error('Please upload your HO-6 insurance policy PDF');
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
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-green-800">Insurance Proof Submitted!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for submitting your HO-6 insurance proof. 
          We have received your submission and will review it shortly.
        </p>
        {submissionId && (
          <p className="text-sm text-gray-500 mb-6">
            Submission ID: {submissionId}
          </p>
        )}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
          <ul className="text-left text-green-700 space-y-2">
            <li>• Your insurance documentation has been received</li>
            <li>• Our team will review your policy details</li>
            <li>• You will be contacted if additional information is needed</li>
            <li>• Thank you for maintaining proper insurance coverage</li>
          </ul>
        </div>
        
        <Button 
          onClick={() => window.location.reload()} 
          className="mt-6"
          variant="outline"
        >
          Submit Another Form
        </Button>
      </div>
    );
  }

  return (
    <>
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
          <Button 
            type="submit" 
            disabled={!captchaToken || !formData.pdfFile || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Insurance Proof'}
          </Button>
        </div>
      </form>
    </>
  );
};
