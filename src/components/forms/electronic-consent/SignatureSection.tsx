
import React from 'react';
import { ElectronicConsentFormData } from '../types';

interface SignatureSectionProps {
  formData: ElectronicConsentFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignatureSection = ({ formData, handleInputChange }: SignatureSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Signatures</h3>
      
      <div className="mb-4">
        <label htmlFor="ownerSignature" className="block text-sm font-medium mb-1">Owner Signature</label>
        <input
          id="ownerSignature"
          name="ownerSignature"
          type="text"
          value={formData.ownerSignature}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Type your full name as signature"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="ownerSignatureDate" className="block text-sm font-medium mb-1">Date</label>
        <input
          id="ownerSignatureDate"
          name="ownerSignatureDate"
          type="date"
          value={formData.ownerSignatureDate}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="coOwnerSignature" className="block text-sm font-medium mb-1">Co-Owner Signature (if applicable)</label>
        <input
          id="coOwnerSignature"
          name="coOwnerSignature"
          type="text"
          value={formData.coOwnerSignature}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Type co-owner's full name as signature"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="coOwnerSignatureDate" className="block text-sm font-medium mb-1">Date</label>
        <input
          id="coOwnerSignatureDate"
          name="coOwnerSignatureDate"
          type="date"
          value={formData.coOwnerSignatureDate}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
    </div>
  );
};
