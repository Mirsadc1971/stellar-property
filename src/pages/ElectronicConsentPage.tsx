
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ElectronicConsent } from '@/components/forms/ElectronicConsent';

const ElectronicConsentPage = () => {
  return (
    <MainLayout>
      <div className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Consent to Electronic Notices</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Submit your consent to receive association communications electronically
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <ElectronicConsent />
      </div>
    </MainLayout>
  );
};

export default ElectronicConsentPage;
