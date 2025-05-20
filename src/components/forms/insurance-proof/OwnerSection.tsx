
import React from 'react';
import { useInsuranceForm } from './InsuranceFormContext';

export const OwnerSection = () => {
  const { formData, handleInputChange } = useInsuranceForm();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold">Unit Owner Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ownerNames" className="block text-sm font-medium mb-1">
            Owner Name(s)
          </label>
          <input
            type="text"
            id="ownerNames"
            name="ownerNames"
            value={formData.ownerNames}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="unitAddress" className="block text-sm font-medium mb-1">
            Unit Address
          </label>
          <input
            type="text"
            id="unitAddress"
            name="unitAddress"
            value={formData.unitAddress}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>
    </div>
  );
};
