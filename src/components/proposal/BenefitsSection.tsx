
import { CheckIcon, Shield } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <>
      <h2 className="font-heading text-2xl font-bold mb-6">Why Choose Stellar Property Management?</h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <div className="bg-darkBlue rounded-full p-1 mr-3 mt-1">
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Chicago Property Experts</h3>
            <p className="text-gray-600">Deep local knowledge of the Chicago property market</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-darkBlue rounded-full p-1 mr-3 mt-1">
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Tailored Solutions</h3>
            <p className="text-gray-600">Customized management plans for your specific needs</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-darkBlue rounded-full p-1 mr-3 mt-1">
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees or surprise charges</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-darkBlue rounded-full p-1 mr-3 mt-1">
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Responsive Communication</h3>
            <p className="text-gray-600">Always available to address your questions and concerns</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-heading font-semibold mb-2">Need immediate assistance?</h3>
        <p className="text-gray-600 mb-4">Call us directly to discuss your property management needs.</p>
        <p className="font-bold text-darkBlue text-lg">773.728.0652</p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-darkBlue" />
          <h3 className="font-semibold">Secure Submissions</h3>
        </div>
        <p className="text-sm text-gray-700">
          All forms on our website are protected with Google reCAPTCHA to prevent automated submissions and keep your information secure.
        </p>
      </div>
    </>
  );
};
