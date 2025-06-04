
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle } from 'lucide-react';
import { useMovePermit } from './MovePermitContext';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormSubmission: React.FC = () => {
  const { formData } = useMovePermit();
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
    functionName: 'submit-move-permit',
    successMessage: 'Move permit request submitted successfully!'
  });
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    if (!formData.moveDate) {
      toast.error('Please select a move date');
      return;
    }
    
    const moveDate = new Date(formData.moveDate);
    const today = new Date();
    const dayDifference = Math.floor((moveDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (dayDifference < 10) {
      toast.error('Move date must be at least 10 days from today');
      return;
    }
    
    if (!formData.signature.trim()) {
      toast.error('Please provide your signature');
      return;
    }
    
    if (!formData.depositRefundType) {
      toast.error('Please select a deposit refund policy');
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
        <h2 className="text-2xl font-bold mb-4 text-green-800">Move Permit Request Submitted!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for submitting your move permit request. 
          We have received your submission and will review it shortly.
        </p>
        {submissionId && (
          <p className="text-sm text-gray-500 mb-6">
            Submission ID: {submissionId}
          </p>
        )}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">What happens next?</h3>
          <ul className="text-left text-blue-700 space-y-2">
            <li>• Your request has been submitted to management</li>
            <li>• You will receive approval confirmation via email</li>
            <li>• No moving activities may begin until approval is received</li>
            <li>• Please allow time for processing before your move date</li>
          </ul>
        </div>
        
        <Button 
          onClick={() => window.location.reload()} 
          className="mt-6"
          variant="outline"
        >
          Submit Another Request
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
            disabled={!captchaToken || isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Move Permit Request'}
          </Button>
        </div>
      </form>
    </>
  );
};
