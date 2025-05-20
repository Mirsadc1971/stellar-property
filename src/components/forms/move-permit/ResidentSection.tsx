
import React from 'react';
import { useMovePermit } from './MovePermitContext';
import { Input } from "@/components/ui/input";

export const ResidentSection = () => {
  const { formData, handleInputChange } = useMovePermit();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 mb-6">
      <h3 className="text-lg font-semibold">Resident Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="associationName" className="block text-sm font-medium mb-1">
            Association Name
          </label>
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
          <label htmlFor="ownerName" className="block text-sm font-medium mb-1">
            Unit Owner Name
          </label>
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
          <label htmlFor="unitNumber" className="block text-sm font-medium mb-1">
            Unit Number
          </label>
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
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
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
