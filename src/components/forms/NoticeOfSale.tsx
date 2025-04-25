
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { FileText } from "lucide-react";

interface NoticeFormData {
  currentDate: string;
  associationName: string;
  unitOwnerInfo: string;
  // Section 1
  unitNumber: string;
  ownerName: string;
  // Section 2 - Summary of Terms
  listingFirm: string;
  agentOrOwner: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  listingPrice: string;
  listingTerms: string;
  // Purchaser Information when obtained
  purchaserName: string;
  purchaserPhone: string;
  purchaserEmail: string;
  // Attorney Information
  attorneyName: string;
  attorneyPhone: string;
  attorneyEmail: string;
  proposedClosingDate: string;
  signature: string;
  signatureDate: string;
}

export const NoticeOfSale = () => {
  const [formData, setFormData] = useState<NoticeFormData>({
    currentDate: '',
    associationName: '',
    unitOwnerInfo: '',
    unitNumber: '',
    ownerName: '',
    listingFirm: '',
    agentOrOwner: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    listingPrice: '',
    listingTerms: '3 months',
    purchaserName: '',
    purchaserPhone: '',
    purchaserEmail: '',
    attorneyName: '',
    attorneyPhone: '',
    attorneyEmail: '',
    proposedClosingDate: '',
    signature: '',
    signatureDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailContent = `
NOTICE OF INTENT TO SELL UNIT

Date: ${formData.currentDate}

To: Board of Directors
${formData.associationName}

From: ${formData.unitOwnerInfo}

SECTION 1 - NOTICE OF INTENT TO SELL

In accordance with the requirements of ${formData.associationName}, I hereby submit this Notice of Intent to Sell.

Unit Owner Name: ${formData.ownerName}
Unit Number: ${formData.unitNumber}

SECTION 2 - SUMMARY OF TERMS OF SALE

Listing Real Estate Firm: ${formData.listingFirm}
Agent/Owner: ${formData.agentOrOwner}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
ZIP: ${formData.zip}
Phone: ${formData.phone}
Listing Price: ${formData.listingPrice}
Listing Terms: ${formData.listingTerms}

WHEN A BUYER IS OBTAINED:

Purchaser Information:
Name: ${formData.purchaserName}
Phone: ${formData.purchaserPhone}
Email: ${formData.purchaserEmail}

Attorney Information:
Name: ${formData.attorneyName}
Phone: ${formData.attorneyPhone}
Email: ${formData.attorneyEmail}

Proposed Closing Date: ${formData.proposedClosingDate}

Signature: ${formData.signature}
Date: ${formData.signatureDate}
    `;

    const mailtoLink = `mailto:service@manage369.com?subject=Notice of Intent to Sell Unit - ${formData.unitNumber}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Notice form prepared for email submission');
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Notice of Intent to Sell Unit
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="currentDate" className="block text-sm font-medium mb-1">Date</label>
            <Input
              id="currentDate"
              name="currentDate"
              type="date"
              value={formData.currentDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="associationName" className="block text-sm font-medium mb-1">Association Name</label>
            <Input
              id="associationName"
              name="associationName"
              value={formData.associationName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="unitOwnerInfo" className="block text-sm font-medium mb-1">From (Unit Owner Information)</label>
          <Input
            id="unitOwnerInfo"
            name="unitOwnerInfo"
            value={formData.unitOwnerInfo}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h3 className="font-medium">Section 1 - Notice of Intent to Sell</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium mb-1">Unit Owner Name</label>
              <Input
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="unitNumber" className="block text-sm font-medium mb-1">Unit Number</label>
              <Input
                id="unitNumber"
                name="unitNumber"
                value={formData.unitNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2 - Summary of Terms */}
        <div className="space-y-4">
          <h3 className="font-medium">Section 2 - Summary of Terms of Sale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="listingFirm" className="block text-sm font-medium mb-1">Listing Real Estate Firm</label>
              <Input
                id="listingFirm"
                name="listingFirm"
                value={formData.listingFirm}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="agentOrOwner" className="block text-sm font-medium mb-1">Agent/Owner</label>
              <Input
                id="agentOrOwner"
                name="agentOrOwner"
                value={formData.agentOrOwner}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP</label>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="listingPrice" className="block text-sm font-medium mb-1">Listing Price</label>
              <Input
                id="listingPrice"
                name="listingPrice"
                value={formData.listingPrice}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="listingTerms" className="block text-sm font-medium mb-1">Listing Terms</label>
              <Input
                id="listingTerms"
                name="listingTerms"
                value={formData.listingTerms}
                onChange={handleInputChange}
                placeholder="3 months, 6 months, or other"
                required
              />
            </div>
          </div>
        </div>

        {/* When a Buyer is Obtained Section */}
        <div className="space-y-4">
          <h3 className="font-medium">When a Buyer is Obtained</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="purchaserName" className="block text-sm font-medium mb-1">Name</label>
              <Input
                id="purchaserName"
                name="purchaserName"
                value={formData.purchaserName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="purchaserPhone" className="block text-sm font-medium mb-1">Phone</label>
              <Input
                id="purchaserPhone"
                name="purchaserPhone"
                type="tel"
                value={formData.purchaserPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="purchaserEmail" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="purchaserEmail"
                name="purchaserEmail"
                type="email"
                value={formData.purchaserEmail}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Attorney Information */}
        <div className="space-y-4">
          <h3 className="font-medium">Attorney Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="attorneyName" className="block text-sm font-medium mb-1">Name</label>
              <Input
                id="attorneyName"
                name="attorneyName"
                value={formData.attorneyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="attorneyPhone" className="block text-sm font-medium mb-1">Phone</label>
              <Input
                id="attorneyPhone"
                name="attorneyPhone"
                type="tel"
                value={formData.attorneyPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="attorneyEmail" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="attorneyEmail"
                name="attorneyEmail"
                type="email"
                value={formData.attorneyEmail}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Closing Date */}
        <div>
          <label htmlFor="proposedClosingDate" className="block text-sm font-medium mb-1">Proposed Closing Date</label>
          <Input
            id="proposedClosingDate"
            name="proposedClosingDate"
            type="date"
            value={formData.proposedClosingDate}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Signature and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="signature" className="block text-sm font-medium mb-1">Signature</label>
            <Input
              id="signature"
              name="signature"
              value={formData.signature}
              onChange={handleInputChange}
              required
              placeholder="Type your full name as signature"
            />
          </div>
          <div>
            <label htmlFor="signatureDate" className="block text-sm font-medium mb-1">Date</label>
            <Input
              id="signatureDate"
              name="signatureDate"
              type="date"
              value={formData.signatureDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Submit Notice
          </Button>
        </div>
      </form>
    </Card>
  );
};

