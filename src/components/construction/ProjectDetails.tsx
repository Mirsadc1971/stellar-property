
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { WorkDates } from './WorkDates';
import { ProjectOptions } from './ProjectOptions';

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

      <WorkDates 
        startDate={formData.startDate}
        completionDate={formData.completionDate}
        handleInputChange={handleInputChange}
      />

      <ProjectOptions 
        roofAccess={formData.roofAccess}
        roofAccessDateTime={formData.roofAccessDateTime}
        elevatorUse={formData.elevatorUse}
        debrisRemoval={formData.debrisRemoval}
        permitRequired={formData.permitRequired}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};
