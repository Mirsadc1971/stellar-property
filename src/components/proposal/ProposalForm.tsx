
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Recaptcha } from "@/components/ui/recaptcha";
import { useRecaptcha } from "@/hooks/use-recaptcha";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  propertyAddress: string;
  units: string;
  needs: string;
  timeline: string;
  consent: boolean;
}

export const ProposalForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyAddress: "",
    units: "",
    needs: "",
    timeline: "",
    consent: false
  });
  
  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    if (!formData.consent) {
      toast.error('Please provide consent to contact you');
      return;
    }
    
    const emailContent = `
    PROPERTY MANAGEMENT PROPOSAL REQUEST
    
    CONTACT INFORMATION
    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    
    PROPERTY DETAILS
    Property Type: ${formData.propertyType}
    Property Address: ${formData.propertyAddress}
    Number of Units: ${formData.units}
    
    ADDITIONAL INFORMATION
    Specific Management Needs: ${formData.needs}
    Timeline: ${formData.timeline}
    
    CAPTCHA Verified: Yes
    Consent Provided: Yes
    `;
    
    // Open default email client with pre-filled content
    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Property Management Proposal Request&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Proposal request prepared for email');
  };

  return (
    <>
      <h2 className="font-heading text-2xl font-bold mb-6">Tell Us About Your Property</h2>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type*
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
            required
          >
            <option value="">Select a property type</option>
            <option value="condo">Condominium Association</option>
            <option value="hoa">HOA</option>
            <option value="commercial">Commercial Property</option>
            <option value="apartment">Apartment Building</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Property Address
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
          />
        </div>
        
        <div>
          <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Units (if applicable)
          </label>
          <input
            type="number"
            id="units"
            name="units"
            value={formData.units}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
          />
        </div>
        
        <div>
          <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">
            Specific Management Needs/Concerns
          </label>
          <textarea
            id="needs"
            name="needs"
            rows={5}
            value={formData.needs}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
            placeholder="Please describe any specific requirements or challenges you're facing with your property..."
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
            When are you looking to start property management services?
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
          >
            <option value="">Select a timeframe</option>
            <option value="immediately">Immediately</option>
            <option value="1-3months">Within 1-3 months</option>
            <option value="3-6months">Within 3-6 months</option>
            <option value="6+months">6+ months from now</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
        
        <div className="my-6">
          <Recaptcha 
            onChange={handleCaptchaChange}
            onError={handleCaptchaError}
          />
          {captchaError && (
            <p className="text-sm text-red-500 mt-1">{captchaError}</p>
          )}
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-darkBlue focus:ring-darkBlue"
            required
          />
          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
            I consent to Stellar Property Management contacting me about my property management needs.*
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-3 bg-darkBlue hover:bg-blue-800"
          disabled={!captchaToken || !formData.consent}
        >
          Submit Proposal Request
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          * Required fields. We respect your privacy and will never share your information with third parties.
        </p>
      </form>
    </>
  );
};
