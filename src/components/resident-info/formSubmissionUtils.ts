
import { FormData } from './FormTypes';

export const generateEmailContent = (formData: FormData): string => {
  const submissionDate = new Date().toLocaleDateString();
  
  return `
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
};
