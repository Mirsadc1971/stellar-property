
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AssociationSection } from './AssociationSection';
import { OwnerSection } from './OwnerSection';
import { OccupantSection } from './OccupantSection';
import { VehicleSection } from './VehicleSection';
import { EmergencyContactSection } from './EmergencyContactSection';
import { CommunicationSection } from './CommunicationSection';
import { useResidentForm } from './useResidentForm';
import { useResidentFormSubmission } from '@/hooks/useResidentFormSubmission';
import { CheckCircle } from 'lucide-react';

export const ResidentInfoContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
  const {
    formData,
    handleInputChange,
    handleRadioChange,
    handleCheckboxChange
  } = useResidentForm();

  const { submitForm, isSubmitting } = useResidentFormSubmission();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = await submitForm(formData);
    
    if (result.success) {
      setIsSubmitted(true);
      setSubmissionId(result.submissionId || '');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-green-800">Form Submitted Successfully!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for submitting your resident information sheet. 
          We have received your submission and will process it shortly.
        </p>
        {submissionId && (
          <p className="text-sm text-gray-500 mb-6">
            Submission ID: {submissionId}
          </p>
        )}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
          <ul className="text-left text-green-700 space-y-2">
            <li>• Your information has been securely stored in our system</li>
            <li>• A copy has been sent to our management team</li>
            <li>• You should receive a confirmation email shortly</li>
            <li>• We will contact you if any additional information is needed</li>
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
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resident Information Sheet</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <AssociationSection formData={formData} handleInputChange={handleInputChange} />
        <OwnerSection formData={formData} handleInputChange={handleInputChange} />
        <OccupantSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleRadioChange={handleRadioChange}
        />
        <VehicleSection formData={formData} handleInputChange={handleInputChange} />
        <EmergencyContactSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleRadioChange={handleRadioChange}
        />
        <CommunicationSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleRadioChange={handleRadioChange}
          handleCheckboxChange={handleCheckboxChange}
        />

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </Button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-700">
          Your information will be submitted directly to:
          <br />
          Stellar Property Management
          <br />
          5107 North Western Avenue Ste 1S
          <br />
          Chicago, IL 60625
          <br />
          Email: service@stellarpropertygroup.com
        </p>
      </div>
    </div>
  );
};
