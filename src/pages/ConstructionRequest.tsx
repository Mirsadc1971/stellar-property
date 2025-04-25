
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

const ConstructionRequest = () => {
  const [formData, setFormData] = useState({
    associationName: '', // New field for association name
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
    
    const emailContent = `
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
      
      OWNER CERTIFICATION
      By submitting this form, I confirm that all information provided is accurate. I agree to comply with all construction policies and understand that violations may result in fines or suspension of construction access.
    `;

    // Create form data for files
    const formDataWithFiles = new FormData();
    documents.forEach(file => {
      formDataWithFiles.append('documents', file);
    });

    // For now, we'll use mailto for the email content
    const mailtoLink = `mailto:service@manage369.com?subject=Construction Request Form - Unit ${formData.unitNumber}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Construction request form prepared for email submission');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Condominium Construction Request Form</h1>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
            <p className="text-sm text-yellow-800">
              This form must be submitted to Management for Board approval prior to the start of any construction work in the unit. 
              Owners must upload all required documents using the form below.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Unit Owner Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="associationName" className="block mb-2">Association Name</label>
                  <Input 
                    type="text" 
                    id="associationName" 
                    name="associationName"
                    value={formData.associationName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="ownerName" className="block mb-2">Owner Name</label>
                  <Input 
                    type="text" 
                    id="ownerName" 
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="unitNumber" className="block mb-2">Unit Number</label>
                  <Input 
                    type="text" 
                    id="unitNumber" 
                    name="unitNumber"
                    value={formData.unitNumber}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                  <Input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Construction Project Details</h2>
              
              <div>
                <label htmlFor="workDescription" className="block mb-2">
                  Work Description
                  <span className="block text-sm text-gray-500 mt-1">
                    Please provide a clear summary of the work to be done. Include materials, location(s) within the unit, 
                    type of work (e.g., painting, cabinet installation), and any relevant contractors involved.
                  </span>
                </label>
                <Textarea 
                  id="workDescription" 
                  name="workDescription"
                  value={formData.workDescription}
                  onChange={handleInputChange}
                  required 
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block mb-2">Start Date</label>
                  <Input 
                    type="date" 
                    id="startDate" 
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="completionDate" className="block mb-2">Completion Date</label>
                  <Input 
                    type="date" 
                    id="completionDate" 
                    name="completionDate"
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="roofAccess" 
                    checked={formData.roofAccess}
                    onCheckedChange={() => handleCheckboxChange('roofAccess')}
                  />
                  <label htmlFor="roofAccess">Will roof access be needed?</label>
                </div>
                
                {formData.roofAccess && (
                  <div>
                    <label htmlFor="roofAccessDateTime" className="block mb-2">Specify date and time for roof access</label>
                    <Input 
                      type="datetime-local" 
                      id="roofAccessDateTime" 
                      name="roofAccessDateTime"
                      value={formData.roofAccessDateTime}
                      onChange={handleInputChange}
                    />
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="elevatorUse" 
                    checked={formData.elevatorUse}
                    onCheckedChange={() => handleCheckboxChange('elevatorUse')}
                  />
                  <label htmlFor="elevatorUse">Will elevator be used for transporting materials or tools?</label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="debrisRemoval" 
                    checked={formData.debrisRemoval}
                    onCheckedChange={() => handleCheckboxChange('debrisRemoval')}
                  />
                  <label htmlFor="debrisRemoval">Will all construction debris be removed at owner's expense?</label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="permitRequired" 
                    checked={formData.permitRequired}
                    onCheckedChange={() => handleCheckboxChange('permitRequired')}
                  />
                  <label htmlFor="permitRequired">Does the scope of work require a permit?</label>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
              
              {formData.permitRequired && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-4">
                  <p className="text-sm text-blue-800">
                    Please upload the following required documents:
                    <ul className="list-disc ml-5 mt-2">
                      <li>A copy of the contractor's license</li>
                      <li>A certificate of insurance naming the Condominium Association and Managing Agent as Additional Insured</li>
                      <li>A copy of the official work permit</li>
                    </ul>
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="documents" className="block mb-2">Upload Documents</label>
                <div className="flex items-center gap-4">
                  <Input 
                    type="file" 
                    id="documents" 
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('documents')?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Select Files
                  </Button>
                </div>
                {documents.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Selected files:</p>
                    <ul className="text-sm space-y-1">
                      {documents.map((doc, index) => (
                        <li key={index} className="text-gray-600">{doc.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Construction Guidelines</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-red-600 font-medium">Important Notice:</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>No work involving structural changes, plumbing, electrical, flooring, drywall, unit exterior doors, windows, terrace doors, HVAC systems, or any permit-required work may proceed without prior Board approval and documentation.</li>
                  <li>Work must comply with all House Rules.</li>
                  <li>
                    Work Hours:
                    <ul className="list-disc ml-5 mt-2">
                      <li>Monday–Friday: 8:00 AM – 5:00 PM</li>
                      <li>Saturday: 8:00 AM – 1:00 PM (light work only – no substantial noise)</li>
                      <li>Sunday: No construction allowed</li>
                      <li>Exception: painting using tools already on site, allowed 8:00 AM – 1:00 PM</li>
                    </ul>
                  </li>
                </ul>
                
                <p className="font-medium mt-4 text-red-600">Violations and Penalties:</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Unapproved construction will result in immediate work stoppage and project delays.</li>
                  <li>Penalties for failing to report construction may be up to $1,000.</li>
                  <li>Improper disposal of construction debris or unauthorized bulk waste pickup may result in a $1,000 fine plus cleanup charges.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Owner Certification</h2>
              <p className="text-sm text-gray-700 mb-6">
                By submitting this form, I confirm that all information provided is accurate. I agree to upload all required documents, 
                comply with all construction policies, and understand that violations may result in fines or suspension of construction access.
              </p>
              <Button type="submit" className="w-full">
                Submit Construction Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConstructionRequest;

