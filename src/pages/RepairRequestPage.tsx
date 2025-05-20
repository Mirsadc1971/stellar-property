
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { RepairRequestForm } from '@/components/forms/RepairRequestForm';

const RepairRequestPage = () => {
  return (
    <MainLayout>
      <div className="bg-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Repair Request Form</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Submit your request for property repairs requiring licensed contractors
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <RepairRequestForm />
      </div>
    </MainLayout>
  );
};

export default RepairRequestPage;
