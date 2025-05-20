
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { MovePermitForm } from '@/components/forms/MovePermitForm';

const MovePermitPage = () => {
  return (
    <MainLayout>
      <div className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Move-In / Move-Out Permit</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Request permission for your upcoming move at least 10 days in advance
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <MovePermitForm />
      </div>
    </MainLayout>
  );
};

export default MovePermitPage;
