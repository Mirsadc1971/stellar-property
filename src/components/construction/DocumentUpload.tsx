
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

interface DocumentUploadProps {
  documents: File[];
  permitRequired: boolean;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const DocumentUpload = ({ documents, permitRequired, handleFileUpload, className }: DocumentUploadProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-200 space-y-6 ${className || ''}`}>
      <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
      
      {permitRequired && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-4">
          <p className="text-sm text-blue-800">
            Please upload the following required documents:
            <ul className="list-disc ml-5 mt-2">
              <li>A copy of the contractor's license</li>
              <li>A certificate of insurance naming the Condominium Association and Managing Agent as Additional Insured</li>
              <li>A copy of the official work permit</li>
            </ul>
          </p>
        </div>
      )}

      <div>
        <label htmlFor="documents" className="block mb-2">Upload Documents</label>
        <div className="flex items-center gap-4">
          <Input 
            type="file" 
            id="documents" 
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('documents')?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Select Files
          </Button>
        </div>
        {documents.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Selected files:</p>
            <ul className="text-sm space-y-1">
              {documents.map((doc, index) => (
                <li key={index} className="text-gray-600">{doc.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
