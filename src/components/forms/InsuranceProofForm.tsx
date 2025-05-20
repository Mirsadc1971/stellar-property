
import React from 'react';
import { Card } from "@/components/ui/card";
import { InsuranceProofFormData } from './types';
import { AssociationSection } from './insurance-proof/AssociationSection';
import { OwnerSection } from './insurance-proof/OwnerSection';
import { InsuranceDetailsSection } from './insurance-proof/InsuranceDetailsSection';
import { AttachmentSection } from './insurance-proof/AttachmentSection';
import { AcknowledgementSection } from './insurance-proof/AcknowledgementSection';
import { FormIntro } from './insurance-proof/FormIntro';
import { FormSubmission } from './insurance-proof/FormSubmission';
import { InsuranceFormProvider } from './insurance-proof/InsuranceFormContext';

export const InsuranceProofForm = () => {
  // Get current date in YYYY-MM-DD format for the date field
  const currentDate = new Date().toISOString().split('T')[0];
  
  const initialFormData: InsuranceProofFormData = {
    associationName: '',
    ownerNames: '',
    unitAddress: '',
    email: '',
    phone: '',
    insuranceCarrier: '',
    policyNumber: '',
    policyStartDate: '',
    policyEndDate: '',
    agentInfo: '',
    declarationAttached: false,
    interiorCoverageAttached: false,
    liabilityCoverageAttached: false,
    propertyCoverageAttached: false,
    pdfFile: null,
    signature: '',
    signatureDate: currentDate
  };

  return (
    <Card className="p-6">
      <FormIntro />
      
      <InsuranceFormProvider initialData={initialFormData}>
        <AssociationSection />
        <OwnerSection />
        <InsuranceDetailsSection />
        <AttachmentSection />
        <AcknowledgementSection />
        <FormSubmission />
      </InsuranceFormProvider>
    </Card>
  );
};
