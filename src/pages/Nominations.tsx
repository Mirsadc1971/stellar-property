
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Nominations = () => {
  const [formData, setFormData] = useState({
    associationName: '',
    candidateName: '',
    candidateUnit: '',
    qualifications: '',
    goals: '',
    signature: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submissionDate = new Date().toLocaleDateString();
    
    // This would ideally be handled by a backend service
    const emailContent = `
      Association Name: ${formData.associationName}
      Candidate Name: ${formData.candidateName}
      Unit Number: ${formData.candidateUnit}
      Qualifications: ${formData.qualifications}
      Goals: ${formData.goals}
      Signature: ${formData.signature}
      Submission Date: ${submissionDate}
    `;

    // Open default email client with pre-filled content
    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Board Nomination Form&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Form ready to be sent via email');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Nomination Application for Board of Directors</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Association Information</h2>
              
              <div>
                <Label htmlFor="associationName">Association Name</Label>
                <Input 
                  id="associationName" 
                  name="associationName" 
                  value={formData.associationName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <h2 className="text-xl font-semibold mt-6">Candidate Information</h2>
              
              <div>
                <Label htmlFor="candidateName">Full Name</Label>
                <Input 
                  id="candidateName" 
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="candidateUnit">Unit Number</Label>
                <Input 
                  id="candidateUnit" 
                  name="candidateUnit"
                  value={formData.candidateUnit}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="qualifications">Qualifications / Relevant Experience</Label>
                <Textarea 
                  id="qualifications" 
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  placeholder="Describe your qualifications and relevant experience"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="goals">Goals as a Board Member</Label>
                <Textarea 
                  id="goals" 
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="Describe your goals and vision for the association"
                  required
                />
              </div>

              <div>
                <Label htmlFor="signature">Digital Signature</Label>
                <Input 
                  id="signature" 
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  placeholder="Type your full name as signature"
                  required 
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit Nomination
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-700">
              Please return the completed Nomination Application Form to:
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
      </div>
    </MainLayout>
  );
};

export default Nominations;
