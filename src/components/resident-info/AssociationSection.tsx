
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SectionProps } from './FormTypes';

export const AssociationSection: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Association Information</h2>
      </div>
      
      <div>
        <Label htmlFor="associationName">Association Name</Label>
        <Input
          id="associationName"
          name="associationName"
          value={formData.associationName}
          onChange={handleInputChange}
          placeholder="Enter your association name"
          required
        />
      </div>
    </div>
  );
};
