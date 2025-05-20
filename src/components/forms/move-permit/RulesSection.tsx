
import React from 'react';
import { useMovePermit } from './MovePermitContext';
import { Input } from "@/components/ui/input";

export const RulesSection = () => {
  const { formData, handleInputChange, handleCheckboxChange } = useMovePermit();
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 mb-6">
      <h3 className="text-lg font-semibold">Building Rules & Requirements</h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="elevatorUseRequired"
            name="elevatorUseRequired"
            checked={formData.elevatorUseRequired}
            onChange={(e) => handleCheckboxChange('elevatorUseRequired', e.target.checked)}
            className="h-4 w-4 border-gray-300 rounded mt-1"
          />
          <div>
            <label htmlFor="elevatorUseRequired" className="block text-sm font-medium">
              Elevator Usage Required
            </label>
            <p className="text-xs text-gray-500">
              Check if your move requires the use of the building elevator
            </p>
            
            {formData.elevatorUseRequired && (
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="elevatorStartTime" className="block text-sm font-medium mb-1">
                    Start Time
                  </label>
                  <Input
                    type="time"
                    id="elevatorStartTime"
                    name="elevatorStartTime"
                    value={formData.elevatorStartTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="elevatorEndTime" className="block text-sm font-medium mb-1">
                    End Time
                  </label>
                  <Input
                    type="time"
                    id="elevatorEndTime"
                    name="elevatorEndTime"
                    value={formData.elevatorEndTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="elevatorKeyRequired"
            name="elevatorKeyRequired"
            checked={formData.elevatorKeyRequired}
            onChange={(e) => handleCheckboxChange('elevatorKeyRequired', e.target.checked)}
            className="h-4 w-4 border-gray-300 rounded mt-1"
          />
          <div>
            <label htmlFor="elevatorKeyRequired" className="block text-sm font-medium">
              Elevator Key Required
            </label>
            <p className="text-xs text-gray-500">
              Elevator key deposit may be required and must be returned after move
            </p>
          </div>
        </div>
        
        <div>
          <label htmlFor="depositAmount" className="block text-sm font-medium mb-1">
            Security Deposit Amount ($)
          </label>
          <Input
            type="number"
            id="depositAmount"
            name="depositAmount"
            value={formData.depositAmount.toString()}
            onChange={handleInputChange}
            min="0"
            step="50"
            className="w-full md:w-1/3"
          />
          <p className="text-xs text-gray-500 mt-1">
            This deposit may be fully or partially refundable depending on building policy and any damages
          </p>
        </div>
        
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">
            Additional Notes or Special Instructions
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 p-4 rounded mt-6">
        <h4 className="font-medium text-amber-800 mb-2">Important Move Rules</h4>
        <ul className="list-disc ml-5 space-y-2 text-sm text-amber-700">
          <li>Buildings without elevators: Move must be conducted via back doors only</li>
          <li>Deposit must be provided before move is approved</li>
          <li>Moves are generally allowed during business hours (9am-5pm) on weekdays</li>
          <li>Saturday and Sunday moves are subject to additional fees and limited availability</li>
          <li>Elevator key must be returned to management after the move</li>
          <li>All fees must be paid before move is permitted</li>
          <li>Protective coverings for floors/walls must be used during move</li>
        </ul>
      </div>
    </div>
  );
};
