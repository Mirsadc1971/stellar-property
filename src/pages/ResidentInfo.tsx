
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { CarFront, Mail, User, Users, FileText } from 'lucide-react';

const ResidentInfo = () => {
  const [formData, setFormData] = useState({
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
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submissionDate = new Date().toLocaleDateString();
    
    const emailContent = `
      RESIDENT INFORMATION SHEET
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

      OCCUPANT INFORMATION
      Owner Occupied: ${formData.isOwnerOccupied}
      Lease Holders: ${formData.leaseHolders}
      Lease Period: ${formData.leaseStart} to ${formData.leaseEnd}
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

    const mailtoLink = `mailto:service@manage369.com?subject=Resident Information Sheet&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    
    toast.success('Form ready to be sent via email');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Resident Information Sheet</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Owner Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Owner Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="homeowner1">Homeowner 1</Label>
                  <Input
                    id="homeowner1"
                    name="homeowner1"
                    value={formData.homeowner1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="homeowner1Cell">Cell #</Label>
                  <Input
                    id="homeowner1Cell"
                    name="homeowner1Cell"
                    value={formData.homeowner1Cell}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="homeowner2">Homeowner 2</Label>
                  <Input
                    id="homeowner2"
                    name="homeowner2"
                    value={formData.homeowner2}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="homeowner2Cell">Cell #</Label>
                  <Input
                    id="homeowner2Cell"
                    name="homeowner2Cell"
                    value={formData.homeowner2Cell}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="unit">Unit</Label>
                  <Input
                    id="unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="homePhone">Home Phone</Label>
                <Input
                  id="homePhone"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="homeowner1Email">Homeowner 1 Email</Label>
                  <Input
                    id="homeowner1Email"
                    name="homeowner1Email"
                    type="email"
                    value={formData.homeowner1Email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="homeowner2Email">Homeowner 2 Email</Label>
                  <Input
                    id="homeowner2Email"
                    name="homeowner2Email"
                    type="email"
                    value={formData.homeowner2Email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="parkingSpace">Parking Space #</Label>
                  <Input
                    id="parkingSpace"
                    name="parkingSpace"
                    value={formData.parkingSpace}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="lockerNumber">Locker #</Label>
                  <Input
                    id="lockerNumber"
                    name="lockerNumber"
                    value={formData.lockerNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="legalOwners">Legal and Beneficial Owner(s)</Label>
                <Input
                  id="legalOwners"
                  name="legalOwners"
                  value={formData.legalOwners}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="insuranceCompany">Homeowner's Insurance Company</Label>
                <Input
                  id="insuranceCompany"
                  name="insuranceCompany"
                  value={formData.insuranceCompany}
                  onChange={handleInputChange}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Please attach a copy of insurance declaration page when submitting</p>
              </div>
            </div>

            {/* Occupant Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Occupant Information</h2>
              </div>

              <div>
                <Label>Is Unit Currently Occupied by Owner?</Label>
                <RadioGroup
                  value={formData.isOwnerOccupied}
                  onValueChange={(value) => handleRadioChange('isOwnerOccupied', value)}
                  className="flex space-x-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="owner-yes" />
                    <Label htmlFor="owner-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="owner-no" />
                    <Label htmlFor="owner-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.isOwnerOccupied === 'no' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="leaseHolders">Names of Lease Holders</Label>
                    <Input
                      id="leaseHolders"
                      name="leaseHolders"
                      value={formData.leaseHolders}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="leaseStart">Lease Start Date</Label>
                      <Input
                        id="leaseStart"
                        name="leaseStart"
                        type="date"
                        value={formData.leaseStart}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="leaseEnd">Lease End Date</Label>
                      <Input
                        id="leaseEnd"
                        name="leaseEnd"
                        type="date"
                        value={formData.leaseEnd}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="occupantPhone">Home Phone</Label>
                      <Input
                        id="occupantPhone"
                        name="occupantPhone"
                        value={formData.occupantPhone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="occupantCell1">Cell Phone 1</Label>
                      <Input
                        id="occupantCell1"
                        name="occupantCell1"
                        value={formData.occupantCell1}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="occupantCell2">Cell Phone 2</Label>
                      <Input
                        id="occupantCell2"
                        name="occupantCell2"
                        value={formData.occupantCell2}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500">Note: Lease must be submitted to the managing agent.</p>
                </div>
              )}

              <div>
                <Label htmlFor="otherResidents">List all residents in your home not listed above</Label>
                <Input
                  id="otherResidents"
                  name="otherResidents"
                  value={formData.otherResidents}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="pets">List pets in your home (Breed, Name)</Label>
                <Input
                  id="pets"
                  name="pets"
                  value={formData.pets}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Vehicle Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CarFront className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Vehicle Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="vehicleMake">Make</Label>
                  <Input
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="vehicleModel">Model</Label>
                  <Input
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="licensePlate">License Plate</Label>
                  <Input
                    id="licensePlate"
                    name="licensePlate"
                    value={formData.licensePlate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Emergency Contact Information</h2>
              
              <div>
                <Label>Will you need special help in case of emergency? (elderly, disabled)</Label>
                <RadioGroup
                  value={formData.needsSpecialHelp}
                  onValueChange={(value) => handleRadioChange('needsSpecialHelp', value)}
                  className="flex space-x-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="help-yes" />
                    <Label htmlFor="help-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="help-no" />
                    <Label htmlFor="help-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContactName"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="emergencyContactPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    value={formData.emergencyContactPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Communication Preference */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Communication Preference</h2>
              </div>

              <div>
                <Label>Preferred method of correspondence</Label>
                <RadioGroup
                  value={formData.preferredCommunication}
                  onValueChange={(value) => handleRadioChange('preferredCommunication', value)}
                  className="flex space-x-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="comm-email" />
                    <Label htmlFor="comm-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mail" id="comm-mail" />
                    <Label htmlFor="comm-mail">Mail</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Electronic Communication Agreement */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Electronic Communication Agreement</h2>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreesToElectronicComm"
                  checked={formData.agreesToElectronicComm}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <Label htmlFor="agreesToElectronicComm" className="text-sm">
                  I agree to receive electronic communications from the management company and understand
                  that I may receive important notices, updates, and other communications via email.
                </Label>
              </div>

              <div>
                <Label htmlFor="signature">Digital Signature</Label>
                <Input
                  id="signature"
                  name="signature"
                  value={formData.signature}
                  onChange={handleInputChange}
                  placeholder="Type your full name as signature"
                  required
                />
              </div>
            </div>

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
              Manage369 Property Management
              <br />
              5107 North Western Avenue Ste 1S
              <br />
              Chicago, IL 60625
              <br />
              Email: service@manage369.com
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResidentInfo;
