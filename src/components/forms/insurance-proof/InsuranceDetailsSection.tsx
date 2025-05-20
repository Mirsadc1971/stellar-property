
import React from 'react';
import { useInsuranceForm } from './InsuranceFormContext';

export const InsuranceDetailsSection = () => {
  const { formData, handleInputChange } = useInsuranceForm();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold">HO-6 Insurance Policy Details</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="insuranceCarrier" className="block text-sm font-medium mb-1">
            Insurance Carrier
          </label>
          <input
            type="text"
            id="insuranceCarrier"
            name="insuranceCarrier"
            value={formData.insuranceCarrier}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="policyNumber" className="block text-sm font-medium mb-1">
            Policy Number
          </label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="policyStartDate" className="block text-sm font-medium mb-1">
            Policy Effective Date (Start)
          </label>
          <input
            type="date"
            id="policyStartDate"
            name="policyStartDate"
            value={formData.policyStartDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="policyEndDate" className="block text-sm font-medium mb-1">
            Policy End Date
          </label>
          <input
            type="date"
            id="policyEndDate"
            name="policyEndDate"
            value={formData.policyEndDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="agentInfo" className="block text-sm font-medium mb-1">
            Agent Name / Contact Info (optional)
          </label>
          <input
            type="text"
            id="agentInfo"
            name="agentInfo"
            value={formData.agentInfo}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};
