
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
    submissionDate: new Date().toLocaleDateString()
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast.success('Nomination form submitted successfully');
    console.log('Nomination Form Data:', formData);
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
                <Label htmlFor="submissionDate">Date</Label>
                <Input 
                  id="submissionDate" 
                  name="submissionDate"
                  value={formData.submissionDate}
                  onChange={handleInputChange}
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
              Manage369 Property Management
              <br />
              Address: [Your Association Address]
              <br />
              Submission Deadline: [Specify Deadline]
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Nominations;
