
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface NoticeFormData {
  sellerName: string;
  unitNumber: string;
  purchaserName: string;
  purchaserPhone: string;
  purchaserEmail: string;
  attorneyName: string;
  attorneyPhone: string;
  attorneyEmail: string;
  proposedClosingDate: string;
  signature: string;
  date: string;
}

export const NoticeOfSale = () => {
  const [formData, setFormData] = useState<NoticeFormData>({
    sellerName: '',
    unitNumber: '',
    purchaserName: '',
    purchaserPhone: '',
    purchaserEmail: '',
    attorneyName: '',
    attorneyPhone: '',
    attorneyEmail: '',
    proposedClosingDate: '',
    signature: '',
    date: ''
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
Notice of Intent to Sell Unit

Seller Information:
Name: ${formData.sellerName}
Unit Number: ${formData.unitNumber}

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
Date: ${formData.date}
    `;

    const mailtoLink = `mailto:service@manage369.com?subject=Notice of Intent to Sell Unit - ${formData.unitNumber}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Notice form prepared for email submission');
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Notice of Intent to Sell Unit</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seller Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Seller Information</h3>
            <div>
              <label htmlFor="sellerName" className="block text-sm font-medium mb-1">Current Owner Name</label>
              <Input
                id="sellerName"
                name="sellerName"
                value={formData.sellerName}
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

          {/* Purchaser Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Purchaser Information</h3>
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
            <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
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
