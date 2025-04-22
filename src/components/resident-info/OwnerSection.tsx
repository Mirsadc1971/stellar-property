import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, FileText } from 'lucide-react';
import { SectionProps } from './FormTypes';

export const OwnerSection: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Owner Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="homeowner1">Homeowner 1</Label>
          <Input
            id="homeowner1"
            name="homeowner1"
            value={formData.homeowner1}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="homeowner1Cell">Cell #</Label>
          <Input
            id="homeowner1Cell"
            name="homeowner1Cell"
            value={formData.homeowner1Cell}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="homeowner2">Homeowner 2</Label>
          <Input
            id="homeowner2"
            name="homeowner2"
            value={formData.homeowner2}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <Label htmlFor="homeowner2Cell">Cell #</Label>
          <Input
            id="homeowner2Cell"
            name="homeowner2Cell"
            value={formData.homeowner2Cell}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="unit">Unit</Label>
          <Input
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="homePhone">Home Phone</Label>
        <Input
          id="homePhone"
          name="homePhone"
          value={formData.homePhone}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="homeowner1Email">Homeowner 1 Email</Label>
          <Input
            id="homeowner1Email"
            name="homeowner1Email"
            type="email"
            value={formData.homeowner1Email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="homeowner2Email">Homeowner 2 Email</Label>
          <Input
            id="homeowner2Email"
            name="homeowner2Email"
            type="email"
            value={formData.homeowner2Email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="parkingSpace">Parking Space #</Label>
          <Input
            id="parkingSpace"
            name="parkingSpace"
            value={formData.parkingSpace}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <Label htmlFor="lockerNumber">Locker #</Label>
          <Input
            id="lockerNumber"
            name="lockerNumber"
            value={formData.lockerNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="legalOwners">Legal and Beneficial Owner(s)</Label>
        <Input
          id="legalOwners"
          name="legalOwners"
          value={formData.legalOwners}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="insuranceCompany">Homeowner's Insurance Company</Label>
        <Input
          id="insuranceCompany"
          name="insuranceCompany"
          value={formData.insuranceCompany}
          onChange={handleInputChange}
          required
        />
        
        <div className="flex items-center gap-2 mt-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <Label htmlFor="insuranceProof" className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
            Attach insurance declaration page (PDF)
          </Label>
          <Input
            type="file"
            id="insuranceProof"
            name="insuranceProof"
            accept=".pdf"
            className="hidden"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
