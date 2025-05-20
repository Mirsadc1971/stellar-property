
import React from 'react';
import { ElectronicConsentFormData } from '../types';

interface PropertySectionProps {
  formData: ElectronicConsentFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PropertySection = ({ formData, handleInputChange }: PropertySectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Property & Owner Information</h3>
      
      <div className="mb-4">
        <label htmlFor="propertyAddress" className="block text-sm font-medium mb-1">Property Address</label>
        <input
          id="propertyAddress"
          name="propertyAddress"
          type="text"
          value={formData.propertyAddress}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter full property address"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="ownerNames" className="block text-sm font-medium mb-1">Owner Name(s)</label>
        <input
          id="ownerNames"
          name="ownerNames"
          type="text"
          value={formData.ownerNames}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter all owner names"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="emailAddress" className="block text-sm font-medium mb-1">Email Address</label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          value={formData.emailAddress}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your phone number"
          required
        />
      </div>
    </div>
  );
};
