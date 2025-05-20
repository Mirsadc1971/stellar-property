
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

export interface InsuranceProofFormData {
  associationName: string;
  ownerNames: string;
  unitAddress: string;
  email: string;
  phone: string;
  insuranceCarrier: string;
  policyNumber: string;
  policyStartDate: string;
  policyEndDate: string;
  agentInfo: string;
  declarationAttached: boolean;
  interiorCoverageAttached: boolean;
  liabilityCoverageAttached: boolean;
  propertyCoverageAttached: boolean;
  pdfFile: File | null;
  signature: string;
  signatureDate: string;
}

export interface MovePermitFormData {
  associationName: string;
  ownerName: string;
  unitNumber: string;
  phone: string;
  email: string;
  moveDate: string;
  moveType: 'moveIn' | 'moveOut';
  movingCompanyName: string;
  elevatorUseRequired: boolean;
  elevatorStartTime: string;
  elevatorEndTime: string;
  moveDay: 'weekday' | 'saturday' | 'sunday';
  signature: string;
  signatureDate: string;
  elevatorKeyRequired: boolean;
  depositAmount: number;
  depositPaid: boolean;
  depositRefundType: 'refundable' | 'nonRefundable' | 'partial';
  additionalNotes: string;
}
