
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MovePermitFormData } from '../types';

interface MovePermitContextType {
  formData: MovePermitFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleRadioChange: (name: string, value: string) => void;
}

const MovePermitContext = createContext<MovePermitContextType | undefined>(undefined);

export const useMovePermit = () => {
  const context = useContext(MovePermitContext);
  if (!context) {
    throw new Error('useMovePermit must be used within a MovePermitProvider');
  }
  return context;
};

interface MovePermitProviderProps {
  children: ReactNode;
  initialData: MovePermitFormData;
}

export const MovePermitProvider: React.FC<MovePermitProviderProps> = ({ 
  children, 
  initialData 
}) => {
  const [formData, setFormData] = useState<MovePermitFormData>(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const value = {
    formData,
    handleInputChange,
    handleCheckboxChange,
    handleRadioChange
  };

  return (
    <MovePermitContext.Provider value={value}>
      {children}
    </MovePermitContext.Provider>
  );
};
