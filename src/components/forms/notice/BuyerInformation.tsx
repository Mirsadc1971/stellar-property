
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
    </div>
  );
};
