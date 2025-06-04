
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface UseFormSubmissionProps {
  functionName: string;
  successMessage?: string;
}

export const useFormSubmission = ({ functionName, successMessage = 'Form submitted successfully!' }: UseFormSubmissionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: any) => {
    setIsSubmitting(true);
    
    try {
      console.log(`Submitting form data to ${functionName}:`, formData);
      
      const { data, error } = await supabase.functions.invoke(functionName, {
        body: formData
      });

      if (error) {
        console.error('Submission error:', error);
        throw new Error(error.message);
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', data);
      toast.success(successMessage);
      
      return {
        success: true,
        submissionId: data.submissionId
      };
      
    } catch (error) {
      console.error('Form submission failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting
  };
};
