
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
        <label htmlFor="unitOwnerInfo" className="block text-sm font-medium mb-1">From (Unit Owner Information)</label>
        <Input
          id="unitOwnerInfo"
          name="unitOwnerInfo"
          value={formData.unitOwnerInfo}
          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
};
