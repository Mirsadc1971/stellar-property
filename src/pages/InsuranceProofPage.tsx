
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { InsuranceProofForm } from '@/components/forms/InsuranceProofForm';

const InsuranceProofPage = () => {
  return (
    <MainLayout>
      <div className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">HO-6 Insurance Proof</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Submit your HO-6 insurance policy proof for association compliance
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <InsuranceProofForm />
      </div>
    </MainLayout>
  );
};

export default InsuranceProofPage;
