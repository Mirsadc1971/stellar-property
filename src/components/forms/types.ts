

export interface NoticeFormData {
  currentDate: string;
  associationName: string;
  ownerName: string;
  unitNumber: string;
  associationAddress: string;
  listingFirm: string;
  agentOrOwner: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  listingPrice: string;
  listingTerms: string;
  signature: string; // Restored signature field
}

export interface ElectronicConsentFormData {
  propertyAddress: string;
  ownerNames: string;
  emailAddress: string;
  phoneNumber: string;
  agreesToConsent: boolean;
  ownerSignature: string;
  coOwnerSignature: string;
  ownerSignatureDate: string;
  coOwnerSignatureDate: string;
}

export interface RepairRequestFormData {
  ownerName: string;
  unitNumber: string;
  phone: string;
  email: string;
  repairDescription: string;
  scopeOfWork: string;
  contractorName: string;
  contractorLicense: string;
  contractorContact: string;
  contractorPhone: string;
  contractorEmail: string;
  insuranceCertificate: boolean;
  needsRoofAccess: boolean;
  roofAccessDate: string;
  needsElevator: boolean;
  elevatorDate: string;
  ownerSignature: string;
  signatureDate: string;
}

