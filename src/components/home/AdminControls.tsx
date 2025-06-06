
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface AdminControlsProps {
  onClearApiKey: () => void;
  storageMethod: 'localStorage' | 'sessionStorage' | 'none';
  storageError: string | null;
}

export function AdminControls({ onClearApiKey, storageMethod, storageError }: AdminControlsProps) {
  return (
    <div className="px-4 pb-2">
      <Button
        size="sm"
        variant="outline"
        className="text-xs text-gray-500 border-gray-300 mt-2"
        onClick={onClearApiKey}
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Remove API Key
      </Button>
      
      <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
        Storage: {storageMethod === 'localStorage' ? 'Persistent' : 
                 storageMethod === 'sessionStorage' ? 'Session only' : 'Unavailable'}
        {storageError && ` (${storageError})`}
      </div>
    </div>
  );
}
