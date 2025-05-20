
import React from 'react';
import { RepairRequestFormData } from '../types';
import { Textarea } from "@/components/ui/textarea";

interface RepairDetailsSectionProps {
  formData: RepairRequestFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const RepairDetailsSection = ({ formData, handleInputChange }: RepairDetailsSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Description of Repair Work</h3>
      
      <div className="mb-4">
        <label htmlFor="repairDescription" className="block text-sm font-medium mb-1">
          Provide detailed description of the repair (include room, fixture, or system affected)
        </label>
        <Textarea
          id="repairDescription"
          name="repairDescription"
          value={formData.repairDescription}
          onChange={handleInputChange}
          placeholder="Describe the repair needed"
          rows={3}
          required
        />
      </div>
      
      <div>
        <label htmlFor="scopeOfWork" className="block text-sm font-medium mb-1">
          Scope of Work (attach a detailed description if needed)
        </label>
        <Textarea
          id="scopeOfWork"
          name="scopeOfWork"
          value={formData.scopeOfWork}
          onChange={handleInputChange}
          placeholder="Describe the scope of work"
          rows={3}
          required
        />
      </div>
    </div>
  );
};
