
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const OPENAI_API_KEY = "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";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export default function Gpt4ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Manage369 GPT-4 assistant. Ask me anything about property management, condos, or HOA.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!userInput.trim() || isLoading) return;

    const updatedMessages = [...messages, { role: "user", content: userInput }];
    setMessages(updatedMessages);
    setIsLoading(true);
    setUserInput("");

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: updatedMessages,
        }),
      });

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content?.trim();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            reply ||
            "Sorry, I couldn't respond at the moment. Please try again.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "There was an error contacting the assistant. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-lg mx-auto bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg text-darkBlue flex items-center gap-2">
            <span>Chat with our AI Assistant</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Powered by OpenAI GPT-4. Instant answers for property management!
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
              <span className="animate-spin w-5 h-5 border-b-2 border-blue-500 rounded-full"></span>
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
      </div>
    </section>
  );
}
