import React, { useState, useRef } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { Recaptcha } from '@/components/ui/recaptcha';
import { useRecaptcha } from '@/hooks/use-recaptcha';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import ReCAPTCHA from 'react-google-recaptcha';

const Nominations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  
  const [formData, setFormData] = useState({
    associationName: '',
    candidateName: '',
    candidateUnit: '',
    qualifications: '',
    goals: '',
    signature: ''
  });
  
  const {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha
  } = useRecaptcha();

  const { submitForm, isSubmitting } = useFormSubmission({
    functionName: 'submit-board-nomination',
    successMessage: 'Board nomination submitted successfully!'
  });
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }
    
    const result = await submitForm(formData);
    
    if (result.success) {
      setIsSubmitted(true);
      setSubmissionId(result.submissionId || '');
      
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  if (isSubmitted) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-green-800">Nomination Submitted Successfully!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for submitting your board nomination application. 
              We have received your submission and will review it during the nomination process.
            </p>
            {submissionId && (
              <p className="text-sm text-gray-500 mb-6">
                Submission ID: {submissionId}
              </p>
            )}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
              <ul className="text-left text-green-700 space-y-2">
                <li>• Your nomination has been securely stored in our system</li>
                <li>• The board will review your application</li>
                <li>• You will be contacted regarding the election process</li>
                <li>• Thank you for your interest in serving the community</li>
              </ul>
            </div>
            
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-6"
              variant="outline"
            >
              Submit Another Nomination
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Nomination Application for Board of Directors</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Association Information</h2>
              
              <div>
                <Label htmlFor="associationName">Association Name</Label>
                <Input 
                  id="associationName" 
                  name="associationName" 
                  value={formData.associationName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <h2 className="text-xl font-semibold mt-6">Candidate Information</h2>
              
              <div>
                <Label htmlFor="candidateName">Full Name</Label>
                <Input 
                  id="candidateName" 
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="candidateUnit">Unit Number</Label>
                <Input 
                  id="candidateUnit" 
                  name="candidateUnit"
                  value={formData.candidateUnit}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="qualifications">Qualifications / Relevant Experience</Label>
                <Textarea 
                  id="qualifications" 
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  placeholder="Describe your qualifications and relevant experience"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="goals">Goals as a Board Member</Label>
                <Textarea 
                  id="goals" 
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="Describe your goals and vision for the association"
                  required
                />
              </div>

              <div>
                <Label htmlFor="signature">Digital Signature</Label>
                <Input 
                  id="signature" 
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  placeholder="Type your full name as signature"
                  required 
                />
              </div>
              
              <div className="my-6">
                <Label>Verification</Label>
                <Recaptcha 
                  onChange={handleCaptchaChange}
                  onError={handleCaptchaError}
                  className="mt-2"
                />
                {captchaError && (
                  <p className="text-sm text-red-500 mt-1">{captchaError}</p>
                )}
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={!captchaToken || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-700">
              Please return the completed Nomination Application Form to:
              <br />
              Stellar Property Management
              <br />
              5107 North Western Avenue Ste 1S
              <br />
              Chicago, IL 60625
              <br />
              Email: service@stellarpropertygroup.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Nominations;
