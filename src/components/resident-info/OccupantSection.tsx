
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Users, FileText } from 'lucide-react';
import { SectionProps } from './FormTypes';

export const OccupantSection: React.FC<SectionProps> = ({ 
  formData, 
  handleInputChange, 
  handleRadioChange 
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Users className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Occupant Information</h2>
      </div>

      <div>
        <Label>Is Unit Currently Occupied by Owner?</Label>
        <RadioGroup
          value={formData.isOwnerOccupied}
          onValueChange={(value) => handleRadioChange?.('isOwnerOccupied', value)}
          className="flex space-x-4 mt-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="owner-yes" />
            <Label htmlFor="owner-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="owner-no" />
            <Label htmlFor="owner-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      {formData.isOwnerOccupied === 'no' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="leaseHolders">Names of Lease Holders</Label>
            <Input
              id="leaseHolders"
              name="leaseHolders"
              value={formData.leaseHolders}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="leaseStart">Lease Start Date</Label>
              <Input
                id="leaseStart"
                name="leaseStart"
                type="date"
                value={formData.leaseStart}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="leaseEnd">Lease End Date</Label>
              <Input
                id="leaseEnd"
                name="leaseEnd"
                type="date"
                value={formData.leaseEnd}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="occupantPhone">Home Phone</Label>
              <Input
                id="occupantPhone"
                name="occupantPhone"
                value={formData.occupantPhone}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="occupantCell1">Cell Phone 1</Label>
              <Input
                id="occupantCell1"
                name="occupantCell1"
                value={formData.occupantCell1}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <Label htmlFor="occupantCell2">Cell Phone 2</Label>
              <Input
                id="occupantCell2"
                name="occupantCell2"
                value={formData.occupantCell2}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <FileText className="h-4 w-4 text-gray-500" />
            <Label htmlFor="leaseDocument" className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              Attach lease document (PDF)
            </Label>
            <Input
              type="file"
              id="leaseDocument"
              name="leaseDocument"
              accept=".pdf"
              className="hidden"
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="otherResidents">List all residents in your home not listed above</Label>
        <Input
          id="otherResidents"
          name="otherResidents"
          value={formData.otherResidents}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="pets">List pets in your home (Breed, Name)</Label>
        <Input
          id="pets"
          name="pets"
          value={formData.pets}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
