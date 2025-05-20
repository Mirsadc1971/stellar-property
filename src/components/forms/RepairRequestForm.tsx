
import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Wrench, FileCheck } from "lucide-react";
import { RepairRequestFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { OwnerInfoSection } from './repair-request/OwnerInfoSection';
import { RepairDetailsSection } from './repair-request/RepairDetailsSection';
import { ContractorSection } from './repair-request/ContractorSection';
import { AccessSection } from './repair-request/AccessSection';
import { AgreementSection } from './repair-request/AgreementSection';

export const RepairRequestForm = () => {
  // Get current date in YYYY-MM-DD format for the date field
  const currentDate = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState<RepairRequestFormData>({
    ownerName: '',
    unitNumber: '',
    phone: '',
    email: '',
    repairDescription: '',
    scopeOfWork: '',
    contractorName: '',
    contractorLicense: '',
    contractorContact: '',
    contractorPhone: '',
    contractorEmail: '',
    insuranceCertificate: false,
    needsRoofAccess: false,
    roofAccessDate: '',
    needsElevator: false,
    elevatorDate: '',
    ownerSignature: '',
    signatureDate: currentDate
  });

  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    const emailContent = `
REPAIR REQUEST FORM

UNIT OWNER INFORMATION
Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}
Phone: ${formData.phone}
Email: ${formData.email}

DESCRIPTION OF REPAIR WORK
${formData.repairDescription}

Scope of Work:
${formData.scopeOfWork}

CONTRACTOR INFORMATION
Company Name: ${formData.contractorName}
License Number: ${formData.contractorLicense}
Contact Name: ${formData.contractorContact}
Phone: ${formData.contractorPhone}
Email: ${formData.contractorEmail}

Certificate of Insurance provided: ${formData.insuranceCertificate ? 'Yes' : 'No'}

ACCESS REQUESTS
${formData.needsRoofAccess ? `Roof Access Date: ${formData.roofAccessDate}` : 'No roof access needed'}
${formData.needsElevator ? `Elevator Reservation Date: ${formData.elevatorDate}` : 'No elevator reservation needed'}

OWNER AGREEMENT
I acknowledge and agree to the terms specified in the repair request policy.

Owner Signature: ${formData.ownerSignature}
Date: ${formData.signatureDate}

CAPTCHA Verified: Yes
    `;

    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Repair Request Form - Unit ${formData.unitNumber}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Repair request form prepared for email submission');
    
    // Reset the CAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Repair Request Form</h2>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
        <div className="flex items-start gap-2">
          <FileCheck className="h-5 w-5 text-yellow-700 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-yellow-800 mb-1">This form is for repair work only — not construction or remodeling.</p>
            <p className="text-sm text-yellow-700">
              Repairs involve licensed trades (e.g., plumbing, electrical, HVAC) but do not include any structural or material changes to the unit.
              All repairs involving licensed trades must be reviewed by the Association to ensure safety, compliance, and minimal disruption to common elements.
            </p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <OwnerInfoSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <RepairDetailsSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <ContractorSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AccessSection 
          formData={formData} 
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AgreementSection 
          formData={formData} 
          handleInputChange={handleInputChange}
        />
        
        <div className="my-6">
          <label className="block text-sm font-medium mb-1">Verification</label>
          <Recaptcha 
            onChange={handleCaptchaChange}
            onError={handleCaptchaError}
            className="mt-2"
          />
          {captchaError && (
            <p className="text-sm text-red-500 mt-1">{captchaError}</p>
          )}
        </div>
        
        <div className="flex justify-end">
          <Button type="submit" disabled={!captchaToken}>
            Submit Repair Request
          </Button>
        </div>
      </form>
    </Card>
  );
};
