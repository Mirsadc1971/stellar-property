import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileCheck, Shield } from "lucide-react";
import { InsuranceProofFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { AssociationSection } from './insurance-proof/AssociationSection';
import { OwnerSection } from './insurance-proof/OwnerSection';
import { InsuranceDetailsSection } from './insurance-proof/InsuranceDetailsSection';
import { AttachmentSection } from './insurance-proof/AttachmentSection';
import { AcknowledgementSection } from './insurance-proof/AcknowledgementSection';

export const InsuranceProofForm = () => {
  // Get current date in YYYY-MM-DD format for the date field
  const currentDate = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState<InsuranceProofFormData>({
    associationName: '',
    ownerNames: '',
    unitAddress: '',
    email: '',
    phone: '',
    insuranceCarrier: '',
    policyNumber: '',
    policyStartDate: '',
    policyEndDate: '',
    agentInfo: '',
    declarationAttached: false,
    interiorCoverageAttached: false,
    liabilityCoverageAttached: false,
    propertyCoverageAttached: false,
    pdfFile: null,
    signature: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleFileUpload = (file: File | null) => {
    setFormData(prev => ({
      ...prev,
      pdfFile: file
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    // Validate that at least one checkbox is checked
    if (!formData.declarationAttached && 
        !formData.interiorCoverageAttached && 
        !formData.liabilityCoverageAttached && 
        !formData.propertyCoverageAttached) {
      toast.error('Please select at least one attachment option');
      return;
    }
    
    // Validate that a PDF file is uploaded
    if (!formData.pdfFile) {
      toast.error('Please upload your HO-6 insurance policy PDF');
      return;
    }
    
    const emailContent = `
HO-6 INSURANCE PROOF SUBMISSION FORM

ASSOCIATION INFORMATION
Association Name: ${formData.associationName}

UNIT OWNER INFORMATION
Owner Name(s): ${formData.ownerNames}
Unit Address: ${formData.unitAddress}
Email Address: ${formData.email}
Phone Number: ${formData.phone}

HO-6 INSURANCE POLICY DETAILS
Insurance Carrier: ${formData.insuranceCarrier}
Policy Number: ${formData.policyNumber}
Policy Effective Date: ${formData.policyStartDate} to ${formData.policyEndDate}
Agent Name / Contact Info: ${formData.agentInfo || 'Not provided'}

REQUIRED ATTACHMENTS
☐ Copy of Current HO-6 Policy Declaration Page: ${formData.declarationAttached ? 'Included' : 'Not included'}
☐ Proof that policy includes building interior: ${formData.interiorCoverageAttached ? 'Included' : 'Not included'}
☐ Minimum liability coverage per governing documents: ${formData.liabilityCoverageAttached ? 'Included' : 'Not included'}
☐ Personal property coverage: ${formData.propertyCoverageAttached ? 'Included' : 'Not included'}

PDF Document attached: ${formData.pdfFile?.name || 'None'}

ACKNOWLEDGEMENT
I understand that it is my responsibility, per association rules and Illinois law, to maintain HO-6 insurance and provide proof annually or upon request.

Signature: ${formData.signature}
Date: ${formData.signatureDate}

CAPTCHA Verified: Yes

Note: This form has been submitted electronically. Please find the attached PDF for the complete insurance documentation.
    `;

    const mailtoLink = `mailto:insurance@stellarpropertygroup.com?subject=HO-6 Insurance Proof - ${formData.unitAddress}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Insurance proof submission prepared. Please attach your PDF file to the email before sending.');
    
    // Reset the CAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <Card className="p-6">
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
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <AssociationSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <OwnerSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <InsuranceDetailsSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <AttachmentSection 
          formData={formData}
          handleFileUpload={handleFileUpload}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <AcknowledgementSection 
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
          <Button type="submit" disabled={!captchaToken || !formData.pdfFile}>
            Submit Insurance Proof
          </Button>
        </div>
      </form>
    </Card>
  );
};
