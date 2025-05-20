
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { FileText } from "lucide-react";
import { HeaderSection } from './notice/HeaderSection';
import { Section1 } from './notice/Section1';
import { Section2 } from './notice/Section2';
import { BuyerInformation } from './notice/BuyerInformation';
import { NoticeFormData } from './types';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';

export const NoticeOfSale = () => {
  const [formData, setFormData] = useState<NoticeFormData>({
    currentDate: '',
    associationName: '',
    ownerName: '',
    unitNumber: '',
    associationAddress: '',
    listingFirm: '',
    agentOrOwner: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    listingPrice: '',
    listingTerms: '',
    signature: ''
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    const emailContent = `
NOTICE OF INTENT TO SELL UNIT

Date: ${formData.currentDate}

To: Board of Directors
${formData.associationName}
${formData.associationAddress}

From: ${formData.ownerName}
Unit Number: ${formData.unitNumber}

SECTION 1 - NOTICE OF INTENT TO SELL

In accordance with the requirements of ${formData.associationName}, I hereby submit this Notice of Intent to Sell.

SECTION 2 - SUMMARY OF TERMS OF SALE

Listing Real Estate Firm: ${formData.listingFirm}
Agent/Owner: ${formData.agentOrOwner}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
ZIP: ${formData.zip}
Phone: ${formData.phone}
Listing Price: ${formData.listingPrice}
Listing Duration: ${formData.listingTerms} month(s)

Signature: ${formData.signature}
CAPTCHA Verified: Yes
    `;

    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Notice of Intent to Sell Unit&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Notice form prepared for email submission');
    
    // Reset the CAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Notice of Intent to Sell Unit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <HeaderSection formData={formData} handleInputChange={handleInputChange} />
        <Section1 formData={formData} handleInputChange={handleInputChange} />
        <Section2 formData={formData} handleInputChange={handleInputChange} />
        <BuyerInformation formData={formData} handleInputChange={handleInputChange} />
        
        <div className="mb-4">
          <label htmlFor="signature" className="block text-sm font-medium mb-1">Signature</label>
          <input
            id="signature"
            name="signature"
            type="text"
            value={formData.signature}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your signature"
            required
          />
        </div>
        
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
            Submit Notice
          </Button>
        </div>
      </form>
    </Card>
  );
};
