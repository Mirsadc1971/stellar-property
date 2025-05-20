
import React from 'react';
import { RepairRequestFormData } from '../types';
import { Input } from "@/components/ui/input";

interface OwnerInfoSectionProps {
  formData: RepairRequestFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OwnerInfoSection = ({ formData, handleInputChange }: OwnerInfoSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Unit Owner Information</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium mb-1">Name</label>
          <Input
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="unitNumber" className="block text-sm font-medium mb-1">Unit Number</label>
          <Input
            id="unitNumber"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleInputChange}
            placeholder="Your unit number"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone number"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            required
          />
        </div>
      </div>
    </div>
  );
};
