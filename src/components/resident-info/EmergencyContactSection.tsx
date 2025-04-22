
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { SectionProps } from './FormTypes';

export const EmergencyContactSection: React.FC<SectionProps> = ({ 
  formData, 
  handleInputChange,
  handleRadioChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Emergency Contact Information</h2>
      
      <div>
        <Label>Will you need special help in case of emergency? (elderly, disabled)</Label>
        <RadioGroup
          value={formData.needsSpecialHelp}
          onValueChange={(value) => handleRadioChange?.('needsSpecialHelp', value)}
          className="flex space-x-4 mt-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="help-yes" />
            <Label htmlFor="help-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="help-no" />
            <Label htmlFor="help-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
          <Input
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="emergencyContactPhone">Emergency Contact Phone</Label>
          <Input
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};
