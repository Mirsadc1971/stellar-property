
import React from 'react';
import { LoaderCircle } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  bottomRef: React.RefObject<HTMLDivElement>;
}

export function ChatMessages({ messages, isLoading, bottomRef }: ChatMessagesProps) {
  return (
    <div className="p-4 h-80 overflow-y-auto bg-gray-50">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-2 flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`rounded px-3 py-2 max-w-[75%] whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-darkBlue text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-center items-center gap-2 text-sm text-blue-600 py-2">
          <LoaderCircle className="w-5 h-5 animate-spin" />
          Thinking...
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
