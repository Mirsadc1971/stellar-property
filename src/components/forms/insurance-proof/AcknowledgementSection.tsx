
import React from 'react';
import { InsuranceProofFormData } from '../types';

interface AcknowledgementSectionProps {
  formData: InsuranceProofFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AcknowledgementSection = ({ formData, handleInputChange }: AcknowledgementSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold">Acknowledgement</h3>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
        <p className="text-sm text-blue-700 mb-2">
          I understand that it is my responsibility, per association rules and Illinois law, to maintain HO-6 insurance and provide proof annually or upon request.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="signature" className="block text-sm font-medium mb-1">
            Owner Signature
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            placeholder="Type your full name as signature"
          />
        </div>
        
        <div>
          <label htmlFor="signatureDate" className="block text-sm font-medium mb-1">
            Date
          </label>
          <input
            type="date"
            id="signatureDate"
            name="signatureDate"
            value={formData.signatureDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>

      <div className="mt-4 bg-gray-50 border border-gray-200 p-4 rounded text-sm">
        <h4 className="font-medium text-gray-700 mb-2">Important Notes</h4>
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>The association's master policy does NOT cover personal items, interior flooring, cabinetry, appliances, or wall finishes.</li>
          <li>Owners are responsible for damage caused inside their unit, including water backups or leaks.</li>
          <li>Contact your insurance agent to ensure adequate coverage for interior improvements and personal liability.</li>
        </ul>
      </div>
    </div>
  );
};
