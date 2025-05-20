
import React from 'react';
import { Shield, FileCheck } from "lucide-react";

export const FormIntro: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-5 w-5" />
        <h2 className="text-xl font-semibold">HO-6 Insurance Proof Submission Form</h2>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-6">
        <div className="flex items-start gap-2">
          <FileCheck className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-800 mb-1">Illinois law requires all condominium unit owners to maintain HO-6 insurance.</p>
            <p className="text-sm text-blue-700 mb-2">
              Your insurance policy must cover your unit's interior elements (walls, floors, fixtures) and provide liability protection.
              The association requires annual proof of compliance with these requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
