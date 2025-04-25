
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

interface ProjectDetailsProps {
  formData: {
    workDescription: string;
    startDate: string;
    completionDate: string;
    roofAccess: boolean;
    roofAccessDateTime: string;
    elevatorUse: boolean;
    debrisRemoval: boolean;
    permitRequired: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (name: string) => void;
}

export const ProjectDetails = ({ formData, handleInputChange, handleCheckboxChange }: ProjectDetailsProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Construction Project Details</h2>
      
      <div>
        <label htmlFor="workDescription" className="block mb-2">
          Work Description
          <span className="block text-sm text-gray-500 mt-1">
            Please provide a clear summary of the work to be done. Include materials, location(s) within the unit, 
            type of work (e.g., painting, cabinet installation), and any relevant contractors involved.
          </span>
        </label>
        <Textarea 
          id="workDescription" 
          name="workDescription"
          value={formData.workDescription}
          onChange={handleInputChange}
          required 
          className="min-h-[120px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block mb-2">Start Date</label>
          <Input 
            type="date" 
            id="startDate" 
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="completionDate" className="block mb-2">Completion Date</label>
          <Input 
            type="date" 
            id="completionDate" 
            name="completionDate"
            value={formData.completionDate}
            onChange={handleInputChange}
            required 
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="roofAccess" 
            checked={formData.roofAccess}
            onCheckedChange={() => handleCheckboxChange('roofAccess')}
          />
          <label htmlFor="roofAccess">Will roof access be needed?</label>
        </div>
        
        {formData.roofAccess && (
          <div>
            <label htmlFor="roofAccessDateTime" className="block mb-2">Specify date and time for roof access</label>
            <Input 
              type="datetime-local" 
              id="roofAccessDateTime" 
              name="roofAccessDateTime"
              value={formData.roofAccessDateTime}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="elevatorUse" 
            checked={formData.elevatorUse}
            onCheckedChange={() => handleCheckboxChange('elevatorUse')}
          />
          <label htmlFor="elevatorUse">Will elevator be used for transporting materials or tools?</label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="debrisRemoval" 
            checked={formData.debrisRemoval}
            onCheckedChange={() => handleCheckboxChange('debrisRemoval')}
          />
          <label htmlFor="debrisRemoval">Will all construction debris be removed at owner's expense?</label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="permitRequired" 
            checked={formData.permitRequired}
            onCheckedChange={() => handleCheckboxChange('permitRequired')}
          />
          <label htmlFor="permitRequired">Does the scope of work require a permit?</label>
        </div>
      </div>
    </div>
  );
};
