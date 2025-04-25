
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ConstructionRequest = () => {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    ownerName: '',
    contactPhone: '',
    contactEmail: '',
    projectDescription: '',
    estimatedStartDate: '',
    estimatedEndDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const emailContent = `
      CONSTRUCTION REQUEST FORM
      
      Property Address: ${formData.propertyAddress}
      Owner Name: ${formData.ownerName}
      Contact Phone: ${formData.contactPhone}
      Contact Email: ${formData.contactEmail}
      
      Project Description:
      ${formData.projectDescription}
      
      Estimated Start Date: ${formData.estimatedStartDate}
      Estimated End Date: ${formData.estimatedEndDate}
    `;

    const mailtoLink = `mailto:service@manage369.com?subject=Construction Request Form&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Construction request form prepared for email submission');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Construction Request Form</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="propertyAddress" className="block mb-2">Property Address</label>
              <Input 
                type="text" 
                id="propertyAddress" 
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div>
              <label htmlFor="ownerName" className="block mb-2">Property Owner Name</label>
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
              <label htmlFor="contactPhone" className="block mb-2">Contact Phone</label>
              <Input 
                type="tel" 
                id="contactPhone" 
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div>
              <label htmlFor="contactEmail" className="block mb-2">Contact Email</label>
              <Input 
                type="email" 
                id="contactEmail" 
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div>
              <label htmlFor="projectDescription" className="block mb-2">Project Description</label>
              <Textarea 
                id="projectDescription" 
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required 
                className="min-h-[120px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="estimatedStartDate" className="block mb-2">Estimated Start Date</label>
                <Input 
                  type="date" 
                  id="estimatedStartDate" 
                  name="estimatedStartDate"
                  value={formData.estimatedStartDate}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <label htmlFor="estimatedEndDate" className="block mb-2">Estimated End Date</label>
                <Input 
                  type="date" 
                  id="estimatedEndDate" 
                  name="estimatedEndDate"
                  value={formData.estimatedEndDate}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="pt-4">
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
