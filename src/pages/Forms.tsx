
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

const Forms = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-darkBlue mb-8">Forms & Documents</h1>
        
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
              onClick={() => navigate('/services/nominations')}
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
              onClick={() => navigate('/construction-request')}
              variant="outline" 
              className="w-full"
            >
              Submit Request
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
              onClick={() => navigate('/notice-of-sale')}
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
              onClick={() => navigate('/services/resident-info')}
              variant="outline" 
              className="w-full"
            >
              Update Info
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
              onClick={() => navigate('/report-violation')}
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
