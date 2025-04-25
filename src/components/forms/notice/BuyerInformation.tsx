
import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface BuyerInformationProps {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BuyerInformation = ({ formData, handleInputChange }: BuyerInformationProps) => {
  return (
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
  );
};
