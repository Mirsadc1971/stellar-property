
import React from 'react';
import { Input } from '@/components/ui/input';

interface OwnerInformationProps {
  formData: {
    associationName: string;
    ownerName: string;
    unitNumber: string;
    phoneNumber: string;
    email: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OwnerInformation = ({ formData, handleInputChange }: OwnerInformationProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Unit Owner Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="associationName" className="block mb-2">Association Name</label>
          <Input 
            type="text" 
            id="associationName" 
            name="associationName"
            value={formData.associationName}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="ownerName" className="block mb-2">Owner Name</label>
          <Input 
            type="text" 
            id="ownerName" 
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="unitNumber" className="block mb-2">Unit Number</label>
          <Input 
            type="text" 
            id="unitNumber" 
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
          <Input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email Address</label>
          <Input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
      </div>
    </div>
  );
};
