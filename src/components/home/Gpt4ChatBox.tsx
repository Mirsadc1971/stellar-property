import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Use gpt-4o-mini as the recommended model
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_MODEL = "gpt-4o-mini";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface OpenAIError {
  error?: {
    message: string;
    type: string;
    code: string;
  };
}

// Util to persist API key in localStorage for demo purposes
function usePersistedApiKey() {
  const [apiKey, setApiKey] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("OPENAI_API_KEY") || "";
    }
    return "";
  });

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("OPENAI_API_KEY", apiKey);
    }
  }, [apiKey]);

  return [apiKey, setApiKey] as const;
}

export default function Gpt4ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Manage369 GPT-4o assistant. Ask me anything about property management, condos, or HOA.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = usePersistedApiKey();
  const [apiKeyInput, setApiKeyInput] = useState("");
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
              setApiKey("");
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

  // Scroll on initial mount and on each message
  useEffect(() => {
    if (!isLoading) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // UI to set API key (simple form above chat)
  if (!apiKey) {
    return (
      <section className="py-8">
        <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-6 text-center">
          <h3 className="font-semibold text-lg text-darkBlue mb-2">Connect Your OpenAI API Key</h3>
          <p className="text-sm text-gray-500 mb-4">
            For demo/testing only. Your API key is temporarily saved in your browser's localStorage.
            <br />You can obtain your key from&nbsp;
            <a href="https://platform.openai.com/api-keys" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">
              platform.openai.com/api-keys
            </a>
            .
          </p>
          <Input
            type="password"
            value={apiKeyInput}
            className="mb-2"
            placeholder="sk-... OpenAI API Key"
            onChange={e => setApiKeyInput(e.target.value)}
          />
          <Button
            className="bg-darkBlue hover:bg-blue-800 mb-2"
            disabled={apiKeyInput.trim().length < 20}
            onClick={() => {
              setApiKey(apiKeyInput.trim());
              setApiKeyInput("");
              toast({
                title: "API Key Saved",
                description: "Your OpenAI API key has been saved in your browser's localStorage.",
              });
            }}
            aria-label="Save API Key"
          >
            Save API Key
          </Button>
          <div className="text-xs text-gray-400 mt-2">
            <b>Tip:</b> Remove your key at any time by clearing your browser's storage.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-lg mx-auto bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg text-darkBlue flex items-center gap-2">
            <span>Chat with our AI Assistant</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Powered by OpenAI GPT-4o. Instant answers for property management!
          </p>
        </div>
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
        <div className="p-3 border-t flex gap-2">
          <Input
            className="flex-1"
            placeholder="Ask something..."
            value={userInput}
            disabled={isLoading}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && userInput.trim()) handleSend();
            }}
            aria-label="Type your message"
          />
          <Button
            type="button"
            disabled={!userInput.trim() || isLoading}
            className="bg-darkBlue hover:bg-blue-800 px-4"
            onClick={handleSend}
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="px-4 pb-2">
          <Button
            size="sm"
            variant="outline"
            className="text-xs text-gray-500 border-gray-300 mt-2"
            onClick={() => {
              setApiKey("");
              toast({
                title: "API Key Removed",
                description: "Your OpenAI API key has been removed from your browser's localStorage.",
              });
            }}
          >
            Remove API Key
          </Button>
        </div>
      </div>
    </section>
  );
}
