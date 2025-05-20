
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { ElectronicConsentFormData } from '../types';

interface ConsentSectionProps {
  formData: ElectronicConsentFormData;
  handleConsentChange: (checked: boolean) => void;
}

export const ConsentSection = ({ formData, handleConsentChange }: ConsentSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Consent Agreement</h3>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-6">
        <p className="text-sm text-gray-700 mb-4">
          By submitting this form, I consent to receive all official notices, announcements, and communications from
          the Association electronically via email at the email address provided. I understand that:
        </p>
        
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 mb-4">
          <li>This consent remains valid until revoked in writing to the Association</li>
          <li>I am responsible for maintaining a current email address with the Association</li>
          <li>I have the right to request any communication in paper form, though additional fees may apply</li>
          <li>The Association is not responsible for failed delivery due to incorrect email information</li>
          <li>Some emergency or time-sensitive notices may still be delivered via postal mail</li>
        </ul>
        
        <p className="text-sm text-gray-700">
          I confirm that I have the necessary hardware, software, and ability to receive and review electronic
          communications from the Association.
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="agreesToConsent" 
          checked={formData.agreesToConsent}
          onCheckedChange={handleConsentChange}
          required 
        />
        <label
          htmlFor="agreesToConsent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I have read and agree to the terms of the electronic consent
        </label>
      </div>
    </div>
  );
};
