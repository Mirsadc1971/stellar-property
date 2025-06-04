
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { OwnerInformation } from '@/components/construction/OwnerInformation';
import { ProjectDetails } from '@/components/construction/ProjectDetails';
import { DocumentUpload } from '@/components/construction/DocumentUpload';
import { Guidelines } from '@/components/construction/Guidelines';
import { PrintButton } from '@/components/construction/PrintButton';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const ConstructionRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
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

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-construction-request',
    successMessage: 'Construction request submitted successfully!'
  });

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
    
    const submissionData = {
      ...formData,
      documents: documents
    };
    
    const result = await submitForm(submissionData);
    
    if (result.success) {
      setIsSubmitted(true);
      setSubmissionId(result.submissionId || '');
    }
  };

  if (isSubmitted) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-green-800">Construction Request Submitted!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for submitting your construction request. 
              We have received your submission and will review it for board approval.
            </p>
            {submissionId && (
              <p className="text-sm text-gray-500 mb-6">
                Submission ID: {submissionId}
              </p>
            )}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Reminder</h3>
              <ul className="text-left text-amber-700 space-y-2">
                <li>• Your request has been submitted for Board review</li>
                <li>• NO CONSTRUCTION WORK MAY BEGIN until written approval is received</li>
                <li>• You will be notified of the Board's decision via email</li>
                <li>• Please allow adequate time for review before your planned start date</li>
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
        </div>
      </MainLayout>
    );
  }

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
              <Button 
                type="submit" 
                className="w-full print:hidden"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Construction Request'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConstructionRequest;
