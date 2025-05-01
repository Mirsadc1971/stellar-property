
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, AlertCircle } from "lucide-react";

interface ApiKeyFormProps {
  apiKeyInput: string;
  onInputChange: (value: string) => void;
  onSave: () => void;
  storageAvailable?: boolean;
}

export function ApiKeyForm({ 
  apiKeyInput, 
  onInputChange, 
  onSave,
  storageAvailable = true
}: ApiKeyFormProps) {
  return (
    <section className="py-8">
      <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-6 text-center">
        <h3 className="font-semibold text-lg text-darkBlue mb-2">Connect Your OpenAI API Key</h3>
        <p className="text-sm text-gray-500 mb-4">
          For demo/testing only. Your API key is {storageAvailable ? "temporarily saved in your browser's localStorage" : "used for this session only"}.
          <br />You can obtain your key from&nbsp;
          <a 
            href="https://platform.openai.com/api-keys" 
            className="underline text-blue-500" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            platform.openai.com/api-keys
          </a>
          .
        </p>
        
        {!storageAvailable && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-4 flex items-start">
            <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-700">
              Browser storage is unavailable. Your API key will only work for this session and will need to be entered again when you reload the page.
            </p>
          </div>
        )}
        
        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKeyInput}
            className="flex-grow"
            placeholder="sk-... OpenAI API Key"
            onChange={e => onInputChange(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && apiKeyInput.trim().length >= 20) {
                onSave();
              }
            }}
          />
          <Button
            className="bg-darkBlue hover:bg-blue-800"
            disabled={apiKeyInput.trim().length < 20}
            onClick={onSave}
            aria-label="Save API Key"
          >
            <KeyRound className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </section>
  );
}
