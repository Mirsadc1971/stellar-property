export interface FormData {
  // Association Information
  associationName: string;
  
  // Owner Information
  homeowner1: string;
  homeowner1Cell: string;
  homeowner2: string;
  homeowner2Cell: string;
  address: string;
  unit: string;
  homePhone: string;
  homeowner1Email: string;
  homeowner2Email: string;
  parkingSpace: string;
  lockerNumber: string;
  legalOwners: string;
  insuranceCompany: string;
  insuranceProof?: File;
  
  // Occupant Information
  isOwnerOccupied: string;
  leaseHolders: string;
  leaseStart: string;
  leaseEnd: string;
  occupantPhone: string;
  occupantCell1: string;
  occupantCell2: string;
  
  // Additional Information
  otherResidents: string;
  pets: string;
  needsSpecialHelp: string;
  preferredCommunication: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  
  // Vehicle Information
  vehicleMake: string;
  vehicleModel: string;
  licensePlate: string;
  
  // Agreement
  agreesToElectronicComm: boolean;
  signature: string;
}

export interface SectionProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioChange?: (name: string, value: string) => void;
  handleCheckboxChange?: (checked: boolean) => void;
}
