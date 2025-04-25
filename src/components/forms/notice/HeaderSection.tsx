
import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface HeaderSectionProps {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeaderSection = ({ formData, handleInputChange }: HeaderSectionProps) => {
  return (
    <>
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
        <label htmlFor="associationAddress" className="block text-sm font-medium mb-1">Association Address</label>
        <Input
          id="associationAddress"
          name="associationAddress"
          value={formData.associationAddress}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">From (Unit Owner Information)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium mb-1">Owner Name</label>
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
        <div>
          <label htmlFor="unitOwnerInfo" className="block text-sm font-medium mb-1">Additional Owner Information</label>
          <Input
            id="unitOwnerInfo"
            name="unitOwnerInfo"
            value={formData.unitOwnerInfo}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </>
  );
};
