
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { FormData } from '@/components/resident-info/FormTypes';
import { toast } from 'sonner';

export const useResidentFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('submit-resident-form', {
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
      toast.success('Form submitted successfully! You will receive a confirmation email shortly.');
      
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
