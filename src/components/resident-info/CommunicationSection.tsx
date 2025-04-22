
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, FileText } from 'lucide-react';
import { SectionProps } from './FormTypes';

export const CommunicationSection: React.FC<SectionProps> = ({ 
  formData, 
  handleInputChange,
  handleRadioChange,
  handleCheckboxChange 
}) => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Communication Preference</h2>
        </div>

        <div>
          <Label>Preferred method of correspondence</Label>
          <RadioGroup
            value={formData.preferredCommunication}
            onValueChange={(value) => handleRadioChange?.('preferredCommunication', value)}
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
    </>
  );
};
