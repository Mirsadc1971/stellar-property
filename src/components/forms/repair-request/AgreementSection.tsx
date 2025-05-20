
import React from 'react';
import { RepairRequestFormData } from '../types';
import { Input } from "@/components/ui/input";

interface AgreementSectionProps {
  formData: RepairRequestFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AgreementSection = ({ formData, handleInputChange }: AgreementSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Owner Agreement</h3>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-4">
        <p className="text-sm text-gray-700 mb-2 font-medium">I acknowledge and agree to the following:</p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>No structural or material changes will be made.</li>
          <li>No work will begin until written approval is received.</li>
          <li>A Certificate of Insurance has been submitted.</li>
          <li>Access has been requested, and no contractor will be scheduled until confirmed.</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ownerSignature" className="block text-sm font-medium mb-1">Owner Signature</label>
          <Input
            id="ownerSignature"
            name="ownerSignature"
            value={formData.ownerSignature}
            onChange={handleInputChange}
            placeholder="Type your full name as signature"
            required
          />
        </div>
        
        <div>
          <label htmlFor="signatureDate" className="block text-sm font-medium mb-1">Date</label>
          <Input
            id="signatureDate"
            name="signatureDate"
            type="date"
            value={formData.signatureDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};
