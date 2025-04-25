
import React from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

interface ProjectOptionsProps {
  roofAccess: boolean;
  roofAccessDateTime: string;
  elevatorUse: boolean;
  debrisRemoval: boolean;
  permitRequired: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: string) => void;
}

export const ProjectOptions = ({
  roofAccess,
  roofAccessDateTime,
  elevatorUse,
  debrisRemoval,
  permitRequired,
  handleInputChange,
  handleCheckboxChange
}: ProjectOptionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="roofAccess" 
          checked={roofAccess}
          onCheckedChange={() => handleCheckboxChange('roofAccess')}
        />
        <label htmlFor="roofAccess">Will roof access be needed?</label>
      </div>
      
      {roofAccess && (
        <div>
          <label htmlFor="roofAccessDateTime" className="block mb-2">Specify date and time for roof access</label>
          <Input 
            type="datetime-local" 
            id="roofAccessDateTime" 
            name="roofAccessDateTime"
            value={roofAccessDateTime}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="elevatorUse" 
          checked={elevatorUse}
          onCheckedChange={() => handleCheckboxChange('elevatorUse')}
        />
        <label htmlFor="elevatorUse">Will elevator be used for transporting materials or tools?</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="debrisRemoval" 
          checked={debrisRemoval}
          onCheckedChange={() => handleCheckboxChange('debrisRemoval')}
        />
        <label htmlFor="debrisRemoval">Will all construction debris be removed at owner's expense?</label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="permitRequired" 
          checked={permitRequired}
          onCheckedChange={() => handleCheckboxChange('permitRequired')}
        />
        <label htmlFor="permitRequired">Does the scope of work require a permit?</label>
      </div>
    </div>
  );
};
