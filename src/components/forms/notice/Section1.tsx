
import { NoticeFormData } from "../types";

interface Section1Props {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Section1 = ({ formData, handleInputChange }: Section1Props) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Section 1 - Notice of Intent to Sell</h3>
      <p className="text-sm text-gray-600">
        In accordance with the requirements of the association, I hereby submit this Notice of Intent to Sell.
      </p>
    </div>
  );
};
