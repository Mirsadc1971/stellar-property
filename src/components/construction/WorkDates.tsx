
import React from 'react';
import { Input } from '@/components/ui/input';

interface WorkDatesProps {
  startDate: string;
  completionDate: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WorkDates = ({ startDate, completionDate, handleInputChange }: WorkDatesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="startDate" className="block mb-2">Start Date</label>
        <Input 
          type="date" 
          id="startDate" 
          name="startDate"
          value={startDate}
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
          value={completionDate}
          onChange={handleInputChange}
          required 
        />
      </div>
    </div>
  );
};
