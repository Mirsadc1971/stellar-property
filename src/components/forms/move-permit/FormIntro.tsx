
import React from 'react';
import { TruckIcon, CalendarIcon } from "lucide-react";

export const FormIntro: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <TruckIcon className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Move-In / Move-Out Permit Request</h2>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-6">
        <div className="flex items-start gap-2">
          <CalendarIcon className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-800 mb-1">Please submit at least 10 days before your planned move date</p>
            <p className="text-sm text-blue-700">
              To ensure proper scheduling and availability of resources, all move requests must be submitted at least 10 days prior to your desired move date.
              Requests submitted with less notice may not be accommodated or may incur additional rush fees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
