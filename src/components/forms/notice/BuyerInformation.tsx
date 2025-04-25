
import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface BuyerInformationProps {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BuyerInformation = ({ formData, handleInputChange }: BuyerInformationProps) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">
        When the buyer is obtained, loan commitment, and/or sale, a copy of the contract must be submitted to the Board of Directors or its managing agent.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="purchaserPhone" className="block text-sm font-medium mb-1">Buyer Phone</label>
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
          <label htmlFor="purchaserEmail" className="block text-sm font-medium mb-1">Buyer Email</label>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label htmlFor="signature" className="block text-sm font-medium mb-1">Owner's Signature</label>
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
          <label htmlFor="signatureDate" className="block text-sm font-medium mb-1">Signature Date</label>
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
    </div>
  );
};
