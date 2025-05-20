
import React from 'react';
import { useMovePermit } from './MovePermitContext';

export const SignatureSection = () => {
  const { formData, handleInputChange } = useMovePermit();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 mb-6">
      <h3 className="text-lg font-semibold">Acknowledgement & Signature</h3>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
        <p className="text-sm text-blue-700">
          By signing below, I acknowledge that I have read and agree to abide by all move rules and regulations. 
          I accept full responsibility for any damage to common areas or building property during my move and 
          agree to pay for repairs if needed. I understand that the security deposit may be used to cover damages.
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

      <div className="mt-8 pt-4 border-t border-gray-200">
        <h4 className="text-md font-medium mb-2">For Management Use Only:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Approved By:</label>
            <div className="h-8 border-b border-dashed border-gray-400"></div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date:</label>
            <div className="h-8 border-b border-dashed border-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
