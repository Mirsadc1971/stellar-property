
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
    </div>
  );
};
