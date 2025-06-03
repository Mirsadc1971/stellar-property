
import { useState } from 'react';
import { FormData } from './FormTypes';

export const useResidentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    // Association Information
    associationName: '',
    
    // Owner Information
    homeowner1: '',
    homeowner1Cell: '',
    homeowner2: '',
    homeowner2Cell: '',
    address: '',
    unit: '',
    homePhone: '',
    homeowner1Email: '',
    homeowner2Email: '',
    parkingSpace: '',
    lockerNumber: '',
    legalOwners: '',
    insuranceCompany: '',
    
    // Occupant Information
    isOwnerOccupied: 'yes',
    leaseHolders: '',
    leaseStart: '',
    leaseEnd: '',
    occupantPhone: '',
    occupantCell1: '',
    occupantCell2: '',
    
    // Additional Information
    otherResidents: '',
    pets: '',
    needsSpecialHelp: 'no',
    preferredCommunication: 'email',
    emergencyContactName: '',
    emergencyContactPhone: '',
    
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    licensePlate: '',
    
    // Agreement
    agreesToElectronicComm: false,
    signature: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file' && files) {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prevState => ({
      ...prevState,
      agreesToElectronicComm: checked
    }));
  };

  return {
    formData,
    handleInputChange,
    handleRadioChange,
    handleCheckboxChange
  };
};
