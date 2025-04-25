
export interface NoticeFormData {
  currentDate: string;
  associationName: string;
  unitOwnerInfo: string;
  // Section 1
  unitNumber: string;
  ownerName: string;
  // Section 2 - Summary of Terms
  listingFirm: string;
  agentOrOwner: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  listingPrice: string;
  listingTerms: string;
  // Purchaser Information when obtained
  purchaserPhone: string;
  purchaserEmail: string;
  signature: string;
  signatureDate: string;
}
