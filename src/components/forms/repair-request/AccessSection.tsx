
import React from 'react';
import { RepairRequestFormData } from '../types';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface AccessSectionProps {
  formData: RepairRequestFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

export const AccessSection = ({ formData, handleInputChange, handleCheckboxChange }: AccessSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Access Requests (if needed)</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="needsRoofAccess" 
              checked={formData.needsRoofAccess}
              onCheckedChange={(checked) => handleCheckboxChange('needsRoofAccess', checked as boolean)}
            />
            <label
              htmlFor="needsRoofAccess"
              className="text-sm font-medium leading-none"
            >
              Roof Access Needed
            </label>
          </div>
          
          {formData.needsRoofAccess && (
            <div className="flex-grow">
              <Input
                id="roofAccessDate"
                name="roofAccessDate"
                type="date"
                value={formData.roofAccessDate}
                onChange={handleInputChange}
                placeholder="Select date"
                className="max-w-xs"
                required={formData.needsRoofAccess}
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="needsElevator" 
              checked={formData.needsElevator}
              onCheckedChange={(checked) => handleCheckboxChange('needsElevator', checked as boolean)}
            />
            <label
              htmlFor="needsElevator"
              className="text-sm font-medium leading-none"
            >
              Elevator Reservation Needed
            </label>
          </div>
          
          {formData.needsElevator && (
            <div className="flex-grow">
              <Input
                id="elevatorDate"
                name="elevatorDate"
                type="date"
                value={formData.elevatorDate}
                onChange={handleInputChange}
                placeholder="Select date"
                className="max-w-xs"
                required={formData.needsElevator}
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 italic">
        *Access must be requested at least 48 hours in advance.*<br />
        *No work may begin until elevator/roof access has been confirmed in writing.*
      </div>
    </div>
  );
};
