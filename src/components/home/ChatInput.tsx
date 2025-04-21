
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  userInput: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInput({ userInput, isLoading, onInputChange, onSend }: ChatInputProps) {
  return (
    <div className="p-3 border-t flex gap-2">
      <Input
        className="flex-1"
        placeholder="Ask something..."
        value={userInput}
        disabled={isLoading}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && userInput.trim()) onSend();
        }}
        aria-label="Type your message"
      />
      <Button
        type="button"
        disabled={!userInput.trim() || isLoading}
        className="bg-darkBlue hover:bg-blue-800 px-4"
        onClick={onSend}
        aria-label="Send message"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
}
