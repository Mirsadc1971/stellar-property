
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { InsuranceProofFormData } from '../types';

interface InsuranceFormContextType {
  formData: InsuranceProofFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleFileUpload: (file: File | null) => void;
}

const InsuranceFormContext = createContext<InsuranceFormContextType | undefined>(undefined);

export const useInsuranceForm = () => {
  const context = useContext(InsuranceFormContext);
  if (!context) {
    throw new Error('useInsuranceForm must be used within an InsuranceFormProvider');
  }
  return context;
};

interface InsuranceFormProviderProps {
  children: ReactNode;
  initialData: InsuranceProofFormData;
}

export const InsuranceFormProvider: React.FC<InsuranceFormProviderProps> = ({ 
  children, 
  initialData 
}) => {
  const [formData, setFormData] = useState<InsuranceProofFormData>(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleFileUpload = (file: File | null) => {
    setFormData(prev => ({
      ...prev,
      pdfFile: file
    }));
  };

  const value = {
    formData,
    handleInputChange,
    handleCheckboxChange,
    handleFileUpload
  };

  return (
    <InsuranceFormContext.Provider value={value}>
      {children}
    </InsuranceFormContext.Provider>
  );
};
