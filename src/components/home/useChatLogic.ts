
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendMessageToOpenAI } from "./openAiService";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function useChatLogic(apiKey: string | null) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm the Manage369 GPT-4o assistant. Ask me anything about property management, condos, or HOA.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      const reply = await sendMessageToOpenAI(apiKey, updatedMessages);
      
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

  return {
    messages,
    userInput,
    isLoading,
    bottomRef,
    setUserInput,
    handleSend
  };
}
