
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CarFront } from 'lucide-react';
import { SectionProps } from './FormTypes';

export const VehicleSection: React.FC<SectionProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <CarFront className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Vehicle Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="vehicleMake">Make</Label>
          <Input
            id="vehicleMake"
            name="vehicleMake"
            value={formData.vehicleMake}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <Label htmlFor="vehicleModel">Model</Label>
          <Input
            id="vehicleModel"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <Label htmlFor="licensePlate">License Plate</Label>
          <Input
            id="licensePlate"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
