
import React from 'react';
import { useMovePermit } from './MovePermitContext';
import { Input } from "@/components/ui/input";

export const MoveDetailsSection = () => {
  const { formData, handleInputChange, handleRadioChange } = useMovePermit();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 mb-6">
      <h3 className="text-lg font-semibold">Move Details</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="moveDate" className="block text-sm font-medium mb-1">
            Date of Move Requested
          </label>
          <Input
            type="date"
            id="moveDate"
            name="moveDate"
            value={formData.moveDate}
            onChange={handleInputChange}
            required
          />
          <p className="text-xs text-amber-600 mt-1">
            Must be requested at least 10 days in advance
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Type of Move</label>
          <div className="flex gap-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="moveIn"
                name="moveType"
                value="moveIn"
                checked={formData.moveType === 'moveIn'}
                onChange={() => handleRadioChange('moveType', 'moveIn')}
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="moveIn" className="ml-2 block text-sm text-gray-700">
                Move-In
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                id="moveOut"
                name="moveType"
                value="moveOut"
                checked={formData.moveType === 'moveOut'}
                onChange={() => handleRadioChange('moveType', 'moveOut')}
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="moveOut" className="ml-2 block text-sm text-gray-700">
                Move-Out
              </label>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="movingCompanyName" className="block text-sm font-medium mb-1">
            Moving Company Name (if applicable)
          </label>
          <Input
            type="text"
            id="movingCompanyName"
            name="movingCompanyName"
            value={formData.movingCompanyName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Preferred Move Day</label>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="flex items-center p-3 border rounded-md bg-white">
            <input
              type="radio"
              id="weekday"
              name="moveDay"
              value="weekday"
              checked={formData.moveDay === 'weekday'}
              onChange={() => handleRadioChange('moveDay', 'weekday')}
              className="h-4 w-4 border-gray-300"
            />
            <label htmlFor="weekday" className="ml-2 block text-sm text-gray-700">
              Weekday (Monday-Friday)
            </label>
          </div>
          
          <div className="flex items-center p-3 border rounded-md bg-white">
            <input
              type="radio"
              id="saturday"
              name="moveDay"
              value="saturday"
              checked={formData.moveDay === 'saturday'}
              onChange={() => handleRadioChange('moveDay', 'saturday')}
              className="h-4 w-4 border-gray-300"
            />
            <label htmlFor="saturday" className="ml-2 block text-sm text-gray-700">
              Saturday (Higher Fee)
            </label>
          </div>
          
          <div className="flex items-center p-3 border rounded-md bg-white">
            <input
              type="radio"
              id="sunday"
              name="moveDay"
              value="sunday"
              checked={formData.moveDay === 'sunday'}
              onChange={() => handleRadioChange('moveDay', 'sunday')}
              className="h-4 w-4 border-gray-300"
            />
            <label htmlFor="sunday" className="ml-2 block text-sm text-gray-700">
              Sunday (Emergency Only)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
