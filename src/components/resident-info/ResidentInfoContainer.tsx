
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AssociationSection } from './AssociationSection';
import { OwnerSection } from './OwnerSection';
import { OccupantSection } from './OccupantSection';
import { VehicleSection } from './VehicleSection';
import { EmergencyContactSection } from './EmergencyContactSection';
import { CommunicationSection } from './CommunicationSection';
import { FormSubmissionModal } from '@/components/forms/shared/FormSubmissionModal';
import { useResidentForm } from './useResidentForm';
import { generateEmailContent } from './formSubmissionUtils';

export const ResidentInfoContainer = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  
  const {
    formData,
    handleInputChange,
    handleRadioChange,
    handleCheckboxChange
  } = useResidentForm();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = generateEmailContent(formData);
    setEmailContent(content);
    setShowSubmissionModal(true);
  };

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
          <Button type="submit" className="w-full md:w-auto">
            Submit Form
          </Button>
        </div>
      </form>

      <FormSubmissionModal
        isOpen={showSubmissionModal}
        onClose={() => setShowSubmissionModal(false)}
        emailContent={emailContent}
        subject="Resident Information Sheet"
      />

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-700">
          Please return the completed Resident Information Sheet to:
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
