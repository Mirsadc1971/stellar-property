
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Shield, Wrench, TruckIcon } from "lucide-react";

const Forms = () => {
  const navigate = useNavigate();
  
  const handleFormNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-darkBlue mb-8">Forms & Documents</h1>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-darkBlue" />
            <h2 className="font-semibold text-darkBlue">Protected with reCAPTCHA</h2>
          </div>
          <p className="text-sm text-gray-700">
            All our forms are now protected with Google reCAPTCHA to prevent spam submissions.
            You'll need to complete a quick verification before submitting any form.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Board Nominations */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Board Nominations
            </h2>
            <p className="text-gray-600 mb-4">
              Submit your nomination for the Board of Directors.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/services/nominations')}
              variant="outline" 
              className="w-full"
            >
              Submit Nomination
            </Button>
          </Card>

          {/* Construction Request */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Construction Request
            </h2>
            <p className="text-gray-600 mb-4">
              Submit a request for construction or renovation work.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/construction-request')}
              variant="outline" 
              className="w-full"
            >
              Submit Request
            </Button>
          </Card>

          {/* Repair Request */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Repair Request
            </h2>
            <p className="text-gray-600 mb-4">
              Submit a request for repairs requiring licensed contractors.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/repair-request')}
              variant="outline" 
              className="w-full"
            >
              Submit Request
            </Button>
          </Card>

          {/* HO-6 Insurance Proof */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              HO-6 Insurance Proof
            </h2>
            <p className="text-gray-600 mb-4">
              Submit your HO-6 insurance policy documentation for annual compliance.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/insurance-proof')}
              variant="outline" 
              className="w-full"
            >
              Submit Insurance Proof
            </Button>
          </Card>

          {/* Move Permit Request */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TruckIcon className="h-5 w-5" />
              Move Permit Request
            </h2>
            <p className="text-gray-600 mb-4">
              Request a permit for moving in or out of your unit (10 days notice required).
            </p>
            <Button 
              onClick={() => handleFormNavigation('/move-permit')}
              variant="outline" 
              className="w-full"
            >
              Request Move Permit
            </Button>
          </Card>

          {/* Notice of Intent to Sell */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Notice of Intent to Sell
            </h2>
            <p className="text-gray-600 mb-4">
              Submit a notice of intent to sell your unit.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/notice-of-sale')}
              variant="outline" 
              className="w-full"
            >
              Submit Notice
            </Button>
          </Card>

          {/* Resident Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resident Information
            </h2>
            <p className="text-gray-600 mb-4">
              Update your resident information and contact details.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/services/resident-info')}
              variant="outline" 
              className="w-full"
            >
              Update Info
            </Button>
          </Card>

          {/* Electronic Consent Form */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Electronic Consent
            </h2>
            <p className="text-gray-600 mb-4">
              Submit your consent to receive association notices electronically.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/electronic-consent')}
              variant="outline" 
              className="w-full"
            >
              Submit Consent
            </Button>
          </Card>

          {/* Violation Report */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Violation Report
            </h2>
            <p className="text-gray-600 mb-4">
              Submit a violation report for your property or community.
            </p>
            <Button 
              onClick={() => handleFormNavigation('/report-violation')}
              variant="outline" 
              className="w-full"
            >
              File Violation
            </Button>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Forms;
