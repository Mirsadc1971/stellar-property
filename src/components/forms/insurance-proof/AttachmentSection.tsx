
import React, { useRef } from 'react';
import { InsuranceProofFormData } from '../types';
import { Button } from '@/components/ui/button';
import { Paperclip, Check, File } from 'lucide-react';

interface AttachmentSectionProps {
  formData: InsuranceProofFormData;
  handleFileUpload: (file: File | null) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

export const AttachmentSection = ({ formData, handleFileUpload, handleCheckboxChange }: AttachmentSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Validate if file is PDF
      const file = files[0];
      if (file.type === 'application/pdf') {
        handleFileUpload(file);
      } else {
        alert('Please upload a PDF file');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    handleCheckboxChange(name, checked);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4">
      <h3 className="text-lg font-semibold">Required Attachments</h3>
      
      <p className="text-sm text-gray-600 mb-4">
        Please attach your HO-6 insurance policy documentation (PDF format only)
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="declarationAttached"
            name="declarationAttached"
            checked={formData.declarationAttached}
            onChange={handleCheckChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="declarationAttached" className="ml-2 block text-sm text-gray-700">
            Copy of Current HO-6 Policy Declaration Page
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="interiorCoverageAttached"
            name="interiorCoverageAttached"
            checked={formData.interiorCoverageAttached}
            onChange={handleCheckChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="interiorCoverageAttached" className="ml-2 block text-sm text-gray-700">
            Proof that policy includes building interior (walls, floors, fixtures)
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="liabilityCoverageAttached"
            name="liabilityCoverageAttached"
            checked={formData.liabilityCoverageAttached}
            onChange={handleCheckChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="liabilityCoverageAttached" className="ml-2 block text-sm text-gray-700">
            Minimum liability coverage of $300,000
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="propertyCoverageAttached"
            name="propertyCoverageAttached"
            checked={formData.propertyCoverageAttached}
            onChange={handleCheckChange}
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="propertyCoverageAttached" className="ml-2 block text-sm text-gray-700">
            Personal property coverage (optional but recommended)
          </label>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-start gap-4">
          <input
            ref={fileInputRef}
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2"
          >
            <Paperclip className="h-4 w-4" />
            Upload PDF File
          </Button>
        </div>
        
        {formData.pdfFile && (
          <div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded">
            <Check className="h-4 w-4" />
            <File className="h-4 w-4" />
            <span>{formData.pdfFile.name}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 bg-amber-50 border border-amber-200 p-3 rounded text-sm">
        <h4 className="font-medium text-amber-800 mb-2">Policy Renewal Reminder</h4>
        <p className="text-amber-700">
          Owners must submit updated proof of HO-6 insurance:
        </p>
        <ul className="list-disc ml-5 mt-1 text-amber-700">
          <li>Annually by June 1st, OR</li>
          <li>Any time the policy is renewed or replaced</li>
        </ul>
      </div>
    </div>
  );
};
