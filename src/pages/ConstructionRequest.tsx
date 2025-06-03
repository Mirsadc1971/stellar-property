import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { OwnerInformation } from '@/components/construction/OwnerInformation';
import { ProjectDetails } from '@/components/construction/ProjectDetails';
import { DocumentUpload } from '@/components/construction/DocumentUpload';
import { Guidelines } from '@/components/construction/Guidelines';
import { PrintButton } from '@/components/construction/PrintButton';
import { FormSubmissionModal } from '@/components/forms/shared/FormSubmissionModal';

const ConstructionRequest = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  
  const [formData, setFormData] = useState({
    associationName: '',
    ownerName: '',
    unitNumber: '',
    phoneNumber: '',
    email: '',
    workDescription: '',
    startDate: '',
    completionDate: '',
    roofAccess: false,
    roofAccessDateTime: '',
    elevatorUse: false,
    debrisRemoval: false,
    permitRequired: false,
  });

  const [documents, setDocuments] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: !prevState[name as keyof typeof prevState]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setDocuments(prev => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const content = `
CONDOMINIUM CONSTRUCTION REQUEST FORM

UNIT OWNER INFORMATION
Association Name: ${formData.associationName}
Owner Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}
Phone Number: ${formData.phoneNumber}
Email Address: ${formData.email}

CONSTRUCTION PROJECT DETAILS
Work Description:
${formData.workDescription}

Start Date: ${formData.startDate}
Completion Date: ${formData.completionDate}

Roof Access Needed: ${formData.roofAccess ? 'Yes' : 'No'}
${formData.roofAccess ? `Roof Access Date/Time: ${formData.roofAccessDateTime}` : ''}
Elevator Use for Materials/Tools: ${formData.elevatorUse ? 'Yes' : 'No'}
Construction Debris Removal at Owner's Expense: ${formData.debrisRemoval ? 'Yes' : 'No'}

Permit Required: ${formData.permitRequired ? 'Yes' : 'No'}

Documents Attached: ${documents.map(doc => doc.name).join(', ')}
    `;

    setEmailContent(content);
    setShowSubmissionModal(true);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 print:px-0 print:py-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Condominium Construction Request Form</h1>
            <PrintButton />
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6 print:bg-transparent print:border-none">
            <p className="text-sm text-yellow-800 print:text-black">
              This form must be submitted to Management for Board approval prior to the start of any construction work in the unit. 
              Owners must upload all required documents using the form below.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <OwnerInformation 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            
            <ProjectDetails 
              formData={formData}
              handleInputChange={handleInputChange}
              handleCheckboxChange={handleCheckboxChange}
            />

            <DocumentUpload 
              documents={documents}
              permitRequired={formData.permitRequired}
              handleFileUpload={handleFileUpload}
              className="print:hidden"
            />

            <Guidelines />

            <div className="bg-white p-6 rounded-lg border border-gray-200 print:border-none">
              <h2 className="text-xl font-semibold mb-4">Owner Certification</h2>
              <p className="text-sm text-gray-700 mb-6">
                By submitting this form, I confirm that all information provided is accurate. I agree to upload all required documents, 
                comply with all construction policies, and understand that violations may result in fines or suspension of construction access.
              </p>
              <Button type="submit" className="w-full print:hidden">
                Submit Construction Request
              </Button>
            </div>
          </form>

          <FormSubmissionModal
            isOpen={showSubmissionModal}
            onClose={() => setShowSubmissionModal(false)}
            emailContent={emailContent}
            subject={`Construction Request Form - Unit ${formData.unitNumber}`}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ConstructionRequest;
