import { Input } from "@/components/ui/input";
import { NoticeFormData } from "../types";

interface Section2Props {
  formData: NoticeFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Section2 = ({ formData, handleInputChange }: Section2Props) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Section 2 - Summary of Terms of Sale</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="listingFirm" className="block text-sm font-medium mb-1">Listing Real Estate Firm</label>
          <Input
            id="listingFirm"
            name="listingFirm"
            value={formData.listingFirm}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="agentOrOwner" className="block text-sm font-medium mb-1">Agent/Owner</label>
          <Input
            id="agentOrOwner"
            name="agentOrOwner"
            value={formData.agentOrOwner}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP</label>
          <Input
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="listingPrice" className="block text-sm font-medium mb-1">Listing Price</label>
          <Input
            id="listingPrice"
            name="listingPrice"
            value={formData.listingPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="listingTerms" className="block text-sm font-medium mb-1">Listing Terms</label>
          <Input
            id="listingTerms"
            name="listingTerms"
            value={formData.listingTerms}
            onChange={handleInputChange}
            placeholder="Enter listing terms"
          />
        </div>
      </div>
    </div>
  );
};
