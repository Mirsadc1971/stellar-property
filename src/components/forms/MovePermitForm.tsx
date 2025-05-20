
import React from 'react';
import { Card } from "@/components/ui/card";
import { MovePermitFormData } from './types';
import { MovePermitProvider } from './move-permit/MovePermitContext';
import { ResidentSection } from './move-permit/ResidentSection';
import { MoveDetailsSection } from './move-permit/MoveDetailsSection';
import { RulesSection } from './move-permit/RulesSection';
import { SignatureSection } from './move-permit/SignatureSection';
import { FormIntro } from './move-permit/FormIntro';
import { FormSubmission } from './move-permit/FormSubmission';

export const MovePermitForm = () => {
  // Get current date in YYYY-MM-DD format for the date field
  const currentDate = new Date().toISOString().split('T')[0];
  
  const initialFormData: MovePermitFormData = {
    associationName: '',
    ownerName: '',
    unitNumber: '',
    phone: '',
    email: '',
    moveDate: '',
    moveType: 'moveIn',
    movingCompanyName: '',
    elevatorUseRequired: false,
    elevatorStartTime: '09:00',
    elevatorEndTime: '17:00',
    moveDay: 'weekday',
    signature: '',
    signatureDate: currentDate,
    elevatorKeyRequired: false,
    depositAmount: 500,
    depositPaid: false,
    depositRefundType: 'refundable',
    additionalNotes: ''
  };

  return (
    <Card className="p-6">
      <FormIntro />
      
      <MovePermitProvider initialData={initialFormData}>
        <ResidentSection />
        <MoveDetailsSection />
        <RulesSection />
        <SignatureSection />
        <FormSubmission />
      </MovePermitProvider>
    </Card>
  );
};
