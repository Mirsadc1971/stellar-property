
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FormData } from '@/components/resident-info/FormTypes';
import { AssociationSection } from '@/components/resident-info/AssociationSection';
import { OwnerSection } from '@/components/resident-info/OwnerSection';
import { OccupantSection } from '@/components/resident-info/OccupantSection';
import { VehicleSection } from '@/components/resident-info/VehicleSection';
import { EmergencyContactSection } from '@/components/resident-info/EmergencyContactSection';
import { CommunicationSection } from '@/components/resident-info/CommunicationSection';

const ResidentInfo = () => {
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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submissionDate = new Date().toLocaleDateString();
    
    const emailContent = `
      RESIDENT INFORMATION SHEET
      Association Name: ${formData.associationName}
      Submission Date: ${submissionDate}

      OWNER INFORMATION
      Homeowner 1: ${formData.homeowner1}
      Homeowner 1 Cell: ${formData.homeowner1Cell}
      Homeowner 2: ${formData.homeowner2}
      Homeowner 2 Cell: ${formData.homeowner2Cell}
      Address: ${formData.address}
      Unit: ${formData.unit}
      Home Phone: ${formData.homePhone}
      Homeowner 1 Email: ${formData.homeowner1Email}
      Homeowner 2 Email: ${formData.homeowner2Email}
      Parking Space #: ${formData.parkingSpace}
      Locker #: ${formData.lockerNumber}
      Legal and Beneficial Owner(s): ${formData.legalOwners}
      Insurance Company: ${formData.insuranceCompany}
      Insurance Declaration Page: ${formData.insuranceProof ? 'Attached' : 'Not provided'}

      OCCUPANT INFORMATION
      Owner Occupied: ${formData.isOwnerOccupied}
      Lease Holders: ${formData.leaseHolders}
      Lease Period: ${formData.leaseStart} to ${formData.leaseEnd}
      Lease Document: ${formData.leaseDocument ? 'Attached' : 'Not provided'}
      Occupant Phone: ${formData.occupantPhone}
      Occupant Cell Phones: ${formData.occupantCell1}, ${formData.occupantCell2}

      ADDITIONAL INFORMATION
      Other Residents: ${formData.otherResidents}
      Pets (Breed, Name): ${formData.pets}
      Needs Special Help: ${formData.needsSpecialHelp}
      Preferred Communication: ${formData.preferredCommunication}
      
      VEHICLE INFORMATION
      Make: ${formData.vehicleMake}
      Model: ${formData.vehicleModel}
      License Plate: ${formData.licensePlate}

      EMERGENCY CONTACT
      Name: ${formData.emergencyContactName}
      Phone: ${formData.emergencyContactPhone}

      ELECTRONIC COMMUNICATION AGREEMENT
      Agrees to Electronic Communication: ${formData.agreesToElectronicComm ? 'Yes' : 'No'}
      Digital Signature: ${formData.signature}
    `;

    const mailtoLink = `mailto:service@stellarpropertygroup.com?subject=Resident Information Sheet&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Form ready to be sent via email');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Resident Information Sheet</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <AssociationSection formData={formData} handleInputChange={handleInputChange} />
            <OwnerSection formData={formData} handleInputChange={handleInputChange} />
            <OccupantSection 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleRadioChange={handleRadioChange}
            />
            <VehicleSection formData={formData} handleInputChange={handleInputChange} />
            <EmergencyContactSection 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleRadioChange={handleRadioChange}
            />
            <CommunicationSection 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleRadioChange={handleRadioChange}
              handleCheckboxChange={handleCheckboxChange}
            />

            <div className="pt-4">
              <Button type="submit" className="w-full md:w-auto">
                Submit Form
              </Button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-700">
              Please return the completed Resident Information Sheet to:
              <br />
              Stellar Property Management
              <br />
              5107 North Western Avenue Ste 1S
              <br />
              Chicago, IL 60625
              <br />
              Email: service@stellarpropertygroup.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResidentInfo;
