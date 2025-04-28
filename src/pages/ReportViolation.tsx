
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";

export default function ReportViolation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      reporterName: formData.get('reporterName'),
      reporterEmail: formData.get('reporterEmail'),
      reporterPhone: formData.get('reporterPhone'),
      relationship: formData.get('relationship'),
      propertyAddress: formData.get('propertyAddress'),
      violationType: formData.get('violationType'),
      violationDate: formData.get('violationDate'),
      violationDescription: formData.get('violationDescription'),
      evidenceDescription: formData.get('evidenceDescription'),
      priorAttempts: formData.get('priorAttempts')
    };

    try {
      // Send email using mailto link
      const subject = `Violation Report - ${data.violationType}`;
      const body = `
Reporter Information:
Name: ${data.reporterName}
Email: ${data.reporterEmail}
Phone: ${data.reporterPhone}
Relationship to Property: ${data.relationship}

Property Information:
Address: ${data.propertyAddress}
Violation Type: ${data.violationType}
Date of Violation: ${data.violationDate}

Violation Description:
${data.violationDescription}

Evidence Description:
${data.evidenceDescription}

Prior Attempts to Resolve:
${data.priorAttempts}
      `;

      window.location.href = `mailto:service@stellarpropertygroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast({
        title: "Form submitted successfully",
        description: "Your email client should open with the violation report details.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-darkBlue" />
            <h1 className="font-heading text-4xl font-bold mb-4">Report a Violation</h1>
            <p className="text-lg text-gray-600">
              Submit information about potential violations according to Illinois Ombudsman Act requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-700">
                <strong>Important:</strong> This form is for reporting potential violations related to property management in accordance with 
                the Illinois Common Interest Community Association Act and Condominium Property Act. For emergencies, please call 911.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-heading text-xl font-semibold">Reporter Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reporterName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="reporterName"
                      name="reporterName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reporterPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="reporterPhone"
                    name="reporterPhone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                  />
                </div>
                
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Relationship to Property/Association*
                  </label>
                  <select
                    id="relationship"
                    name="relationship"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  >
                    <option value="">Select your relationship</option>
                    <option value="owner">Unit Owner</option>
                    <option value="tenant">Tenant</option>
                    <option value="board">Board Member</option>
                    <option value="management">Property Management</option>
                    <option value="neighbor">Neighbor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-heading text-xl font-semibold">Violation Information</h2>
                
                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Property/Association Address*
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="violationType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Violation*
                  </label>
                  <select
                    id="violationType"
                    name="violationType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    required
                  >
                    <option value="">Select violation type</option>
                    <option value="rules">Association Rules Violation</option>
                    <option value="financial">Financial Mismanagement</option>
                    <option value="maintenance">Maintenance Issue</option>
                    <option value="board">Board Member Misconduct</option>
                    <option value="meetings">Meeting Procedure Violation</option>
                    <option value="records">Records Access Issue</option>
                    <option value="harassment">Harassment/Discrimination</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="violationDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Violation (if known)
                  </label>
                  <input
                    type="date"
                    id="violationDate"
                    name="violationDate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                  />
                </div>
                
                <div>
                  <label htmlFor="violationDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Detailed Description of the Violation*
                  </label>
                  <textarea
                    id="violationDescription"
                    name="violationDescription"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    placeholder="Please provide as much detail as possible about what happened, when it happened, who was involved, and the impact of the violation..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="evidenceDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Evidence Description (if any)
                  </label>
                  <textarea
                    id="evidenceDescription"
                    name="evidenceDescription"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    placeholder="Describe any evidence you have of the violation (documents, photos, emails, etc.). Do not attach evidence to this form."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="priorAttempts" className="block text-sm font-medium text-gray-700 mb-1">
                    Prior Attempts to Resolve
                  </label>
                  <textarea
                    id="priorAttempts"
                    name="priorAttempts"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkBlue focus:border-darkBlue"
                    placeholder="Have you taken any steps to resolve this issue? If so, please describe them and any responses received."
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-heading text-xl font-semibold">Acknowledgements</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      name="consentCheck"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-darkBlue focus:ring-darkBlue"
                      required
                    />
                    <label htmlFor="consentCheck" className="ml-2 block text-sm text-gray-700">
                      I understand that this report may be shared with the association board, management company, or other relevant parties as part of the investigation process.*
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="accuracyCheck"
                      name="accuracyCheck"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-darkBlue focus:ring-darkBlue"
                      required
                    />
                    <label htmlFor="accuracyCheck" className="ml-2 block text-sm text-gray-700">
                      I certify that the information provided in this report is true and accurate to the best of my knowledge.*
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="followUpCheck"
                      name="followUpCheck"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-darkBlue focus:ring-darkBlue"
                      required
                    />
                    <label htmlFor="followUpCheck" className="ml-2 block text-sm text-gray-700">
                      I understand that I may be contacted for additional information regarding this report.*
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-darkBlue hover:bg-blue-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Violation Report"}
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  * Required fields. All information submitted will be treated confidentially in accordance with our privacy policy.
                </p>
              </div>
            </form>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-heading text-xl font-semibold mb-4">Illinois Ombudsman Act Information</h3>
              <p className="text-gray-700 mb-4">
                The Condominium and Common Interest Community Ombudsperson Act (765 ILCS 615/) provides a means by which unit owners can report
                potential violations of the Condominium Property Act or the Common Interest Community Association Act.
              </p>
              <p className="text-gray-700">
                For more information about the Illinois Ombudsman Act or to file a complaint directly with the state, visit
                the <a href="https://www.idfpr.com/CCICO/" target="_blank" rel="noopener noreferrer" className="text-darkBlue hover:underline">Illinois Department of Financial and Professional Regulation website</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
