
import React from 'react';
import { RepairRequestFormData } from '../types';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface ContractorSectionProps {
  formData: RepairRequestFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

export const ContractorSection = ({ formData, handleInputChange, handleCheckboxChange }: ContractorSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Contractor Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contractorName" className="block text-sm font-medium mb-1">Company Name</label>
          <Input
            id="contractorName"
            name="contractorName"
            value={formData.contractorName}
            onChange={handleInputChange}
            placeholder="Contractor company name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="contractorLicense" className="block text-sm font-medium mb-1">License Number</label>
          <Input
            id="contractorLicense"
            name="contractorLicense"
            value={formData.contractorLicense}
            onChange={handleInputChange}
            placeholder="Contractor license number"
            required
          />
        </div>
        
        <div>
          <label htmlFor="contractorContact" className="block text-sm font-medium mb-1">Contact Name</label>
          <Input
            id="contractorContact"
            name="contractorContact"
            value={formData.contractorContact}
            onChange={handleInputChange}
            placeholder="Contractor contact person"
            required
          />
        </div>
        
        <div>
          <label htmlFor="contractorPhone" className="block text-sm font-medium mb-1">Phone</label>
          <Input
            id="contractorPhone"
            name="contractorPhone"
            type="tel"
            value={formData.contractorPhone}
            onChange={handleInputChange}
            placeholder="Contractor phone number"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="contractorEmail" className="block text-sm font-medium mb-1">Email</label>
          <Input
            id="contractorEmail"
            name="contractorEmail"
            type="email"
            value={formData.contractorEmail}
            onChange={handleInputChange}
            placeholder="Contractor email address"
            required
          />
        </div>
      </div>
      
      <div className="mt-4 flex items-center space-x-2">
        <Checkbox 
          id="insuranceCertificate" 
          checked={formData.insuranceCertificate}
          onCheckedChange={(checked) => handleCheckboxChange('insuranceCertificate', checked as boolean)}
        />
        <label
          htmlFor="insuranceCertificate"
          className="text-sm font-medium leading-none"
        >
          A Certificate of Insurance naming the Association as an Additional Insured is attached
        </label>
      </div>
    </div>
  );
};
