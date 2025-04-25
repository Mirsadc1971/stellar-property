
import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface Section1Props {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Section1 = ({ formData, handleInputChange }: Section1Props) => {
  return (
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
  );
};
