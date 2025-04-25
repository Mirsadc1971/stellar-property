
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { NoticeOfSale } from "@/components/forms/NoticeOfSale";

const NoticePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <NoticeOfSale />
      </div>
    </MainLayout>
  );
};

export default NoticePage;
