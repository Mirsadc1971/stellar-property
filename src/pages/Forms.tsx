
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";

const Forms = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, requireAuth } = useAuth();
  const { toast } = useToast();
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access and submit forms",
        variant: "default",
      });
    }
  }, [loading, isAuthenticated, toast]);

  const handleFormNavigation = (path: string) => {
    if (requireAuth()) {
      navigate(path);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
          <p className="text-lg">Loading...</p>
        </div>
      </MainLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-darkBlue mb-8">Forms & Documents</h1>
          
          <Card className="p-6 text-center max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Authentication Required</h2>
            <p className="text-gray-600 mb-6">
              You must be signed in to access and submit forms. This helps us protect your data and ensure secure submissions.
            </p>
            <Button 
              onClick={() => navigate('/auth')}
              className="w-full flex items-center justify-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              Sign In / Register
            </Button>
          </Card>
        </div>
      </MainLayout>
    );
  }

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
