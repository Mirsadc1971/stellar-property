
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, AlertCircle, Info, HelpCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ApiKeyFormProps {
  apiKeyInput: string;
  onInputChange: (value: string) => void;
  onSave: () => void;
  storageAvailable?: boolean;
  storageError?: string | null;
  storageMethod?: 'localStorage' | 'sessionStorage' | 'none';
}

export function ApiKeyForm({ 
  apiKeyInput, 
  onInputChange, 
  onSave,
  storageAvailable = true,
  storageError = null,
  storageMethod = 'none'
}: ApiKeyFormProps) {
  const getStorageStatusMessage = () => {
    switch (storageMethod) {
      case 'localStorage':
        return "Your API key will be saved and persist between browser sessions.";
      case 'sessionStorage':
        return "Your API key will be saved for this session only. You'll need to re-enter it if you reload the page.";
      case 'none':
        return "Browser storage is unavailable. Your API key will only work for this session.";
      default:
        return "Checking storage availability...";
    }
  };

  const getStorageRecommendations = () => {
    if (storageMethod === 'none' || storageError) {
      return (
        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
          <h4 className="text-sm font-medium text-amber-800 mb-2 flex items-center">
            <HelpCircle className="w-4 h-4 mr-1" />
            Storage Troubleshooting
          </h4>
          <ul className="text-xs text-amber-700 space-y-1">
            <li>• Check if your browser is in private/incognito mode</li>
            <li>• Ensure cookies and site data are enabled</li>
            <li>• Try disabling browser extensions that block storage</li>
            <li>• Clear your browser cache and try again</li>
            <li>• Try a different browser if issues persist</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-8">
      <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-6 text-center">
        <h3 className="font-semibold text-lg text-darkBlue mb-2">Connect Your OpenAI API Key</h3>
        <p className="text-sm text-gray-500 mb-4">
          For demo/testing only. {getStorageStatusMessage()}
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
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Browser storage is unavailable. Your API key will only work for this session and will need to be entered again when you reload the page.
            </AlertDescription>
          </Alert>
        )}
        
        {storageMethod === 'sessionStorage' && (
          <Alert className="mb-4 border-amber-200 bg-amber-50">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              Using session-only storage. Your API key will not persist after closing the browser.
            </AlertDescription>
          </Alert>
        )}
        
        {storageError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {storageError}
            </AlertDescription>
          </Alert>
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
        
        <div className="mt-4 text-xs text-gray-500 flex items-center justify-center">
          <Info className="w-3 h-3 mr-1" />
          <span>
            Storage method: {storageMethod === 'localStorage' ? 'Persistent' : 
                           storageMethod === 'sessionStorage' ? 'Session only' : 'None'}
          </span>
        </div>
        
        {getStorageRecommendations()}
      </div>
    </section>
  );
}
