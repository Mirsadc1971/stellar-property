
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/proposal/HeroSection';
import { ResidentInfoContainer } from '@/components/resident-info/ResidentInfoContainer';

const ResidentInfo = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <ResidentInfoContainer />
      </div>
    </MainLayout>
  );
};

export default ResidentInfo;
