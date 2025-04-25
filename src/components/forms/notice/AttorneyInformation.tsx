
import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface AttorneyInformationProps {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AttorneyInformation = ({ formData, handleInputChange }: AttorneyInformationProps) => {
  return (
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
  );
};
