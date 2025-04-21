
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useOpenAiKey } from "@/hooks/useOpenAiKey";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ApiKeyForm } from "./ApiKeyForm";

// Constants
const OPENAI_MODEL = "gpt-4o";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// Types
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface OpenAIError {
  error: {
    code: string;
    message: string;
  };
}

export default function Gpt4ChatBox({ showAdminControls = false }: { showAdminControls?: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm the Manage369 GPT-4o assistant. Ask me anything about property management, condos, or HOA.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { apiKey, apiKeyInput, setApiKeyInput, clearApiKey, handleSaveApiKey } = useOpenAiKey();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!userInput.trim() || isLoading || !apiKey) return;

    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userInput },
    ];
    setMessages(updatedMessages);
    setIsLoading(true);
    setUserInput("");

    try {
      const apiMessages = updatedMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      console.log(`Sending request to OpenAI with model: ${OPENAI_MODEL}`);
      
      const response = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: apiMessages,
          max_tokens: 300, // Limit response length
        }),
      });

      const data = await response.json();
      console.log("OpenAI API response status:", response.status);
      
      if (!response.ok) {
        const errorData = data as OpenAIError;
        console.error("OpenAI API error:", errorData);
        
        // Detailed error handling
        let errorMessage = "There was an error contacting the assistant. Please try again.";
        
        if (errorData.error) {
          switch (errorData.error.code) {
            case "insufficient_quota":
              errorMessage = "Your API key's quota has been exceeded. Please check your billing details.";
              break;
            case "invalid_api_key":
              errorMessage = "Invalid API key. Please check and try again.";
              clearApiKey();
              toast({
                title: "Invalid API Key",
                description: "Please enter a valid OpenAI API key.",
              });
              break;
            default:
              errorMessage = `OpenAI Error: ${errorData.error.message}`;
          }
        }
        
        throw new Error(errorMessage);
      }
      
      const reply = data?.choices?.[0]?.message?.content?.trim() || 
        "I'm having trouble generating a response. Please try again.";

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: error instanceof Error ? error.message : 
            "There was an error processing your request.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  if (!apiKey) {
    return (
      <ApiKeyForm 
        apiKeyInput={apiKeyInput}
        onInputChange={setApiKeyInput}
        onSave={handleSaveApiKey}
      />
    );
  }

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
          
          {showAdminControls && (
            <div className="px-4 pb-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs text-gray-500 border-gray-300 mt-2"
                onClick={() => {
                  clearApiKey();
                  toast({
                    title: "API Key Removed",
                    description: "Your OpenAI API key has been removed from browser storage.",
                  });
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Remove API Key
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
