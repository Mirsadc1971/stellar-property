
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";

interface ApiKeyFormProps {
  apiKeyInput: string;
  onInputChange: (value: string) => void;
  onSave: () => void;
}

export function ApiKeyForm({ apiKeyInput, onInputChange, onSave }: ApiKeyFormProps) {
  return (
    <section className="py-8">
      <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-6 text-center">
        <h3 className="font-semibold text-lg text-darkBlue mb-2">Connect Your OpenAI API Key</h3>
        <p className="text-sm text-gray-500 mb-4">
          For demo/testing only. Your API key is temporarily saved in your browser's localStorage.
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
        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKeyInput}
            className="flex-grow"
            placeholder="sk-... OpenAI API Key"
            onChange={e => onInputChange(e.target.value)}
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
