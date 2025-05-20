
import React from 'react';
import { InsuranceProofFormData } from '../types';

interface AssociationSectionProps {
  formData: InsuranceProofFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AssociationSection = ({ formData, handleInputChange }: AssociationSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold">Association Information</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="associationName" className="block text-sm font-medium mb-1">
            Association Name
          </label>
          <input
            type="text"
            id="associationName"
            name="associationName"
            value={formData.associationName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>
    </div>
  );
};
