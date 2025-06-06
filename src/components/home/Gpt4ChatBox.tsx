
import React from "react";
import { MessageCircle } from "lucide-react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { useChatLogic } from "./useChatLogic";

export default function Gpt4ChatBox() {
  const {
    messages,
    userInput,
    isLoading,
    bottomRef,
    setUserInput,
    handleSend
  } = useChatLogic();

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border-2 border-darkBlue/10 animate-fade-in">
          <div className="bg-darkBlue text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <h3 className="font-bold text-lg">AI Property Assistant</h3>
            </div>
            <span className="text-xs bg-blue-600 px-2 py-1 rounded-full">GPT-4o</span>
          </div>
          
          <ChatMessages 
            messages={messages}
            isLoading={isLoading}
            bottomRef={bottomRef}
          />
          
          <ChatInput
            userInput={userInput}
            isLoading={isLoading}
            onInputChange={setUserInput}
            onSend={handleSend}
          />
        </div>
      </div>
    </section>
  );
}
