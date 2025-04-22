
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Nominations = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission - will be implemented later
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Nomination Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nominee Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Nominee Information</h2>
              
              <div>
                <Label htmlFor="nomineeName">Full Name</Label>
                <Input id="nomineeName" name="nomineeName" required />
              </div>
              
              <div>
                <Label htmlFor="nomineeEmail">Email</Label>
                <Input type="email" id="nomineeEmail" name="nomineeEmail" required />
              </div>
              
              <div>
                <Label htmlFor="nomineePhone">Phone Number</Label>
                <Input type="tel" id="nomineePhone" name="nomineePhone" required />
              </div>
              
              <div>
                <Label htmlFor="position">Position Being Nominated For</Label>
                <Input id="position" name="position" required />
              </div>
              
              <div>
                <Label htmlFor="qualifications">Qualifications</Label>
                <Textarea 
                  id="qualifications" 
                  name="qualifications" 
                  placeholder="Please describe your qualifications for this position"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="statement">Statement of Interest</Label>
                <Textarea 
                  id="statement" 
                  name="statement" 
                  placeholder="Why are you interested in this position?"
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Nominations;
