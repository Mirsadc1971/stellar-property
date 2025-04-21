
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function OpenAIChatbot() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "Hello! I'm the Manage369 virtual assistant. How can I help you with your property management needs today?" }
  ]);
  
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This is a placeholder for the actual OpenAI API integration
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    
    // Add user message to chat
    const updatedMessages = [...messages, { role: "user", content: userInput }];
    setMessages(updatedMessages);
    setIsLoading(true);
    setUserInput("");
    
    // In a real implementation, this would call the OpenAI API
    // For now, we'll simulate a response
    setTimeout(() => {
      setMessages([
        ...updatedMessages,
        { 
          role: "assistant", 
          content: "Thank you for your question. This is a placeholder response. In the live version, this would be powered by OpenAI's GPT model with custom training on Manage369's property management services and FAQs." 
        }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ask Our Virtual Assistant
            </h2>
            <p className="text-gray-600">
              Get quick answers about our property management services, fees, and more.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-4 md:p-6">
            <div className="mb-4 h-80 overflow-y-auto bg-white rounded border p-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-3 ${msg.role === "user" ? "text-right" : ""}`}
                >
                  <div 
                    className={`inline-block rounded-lg p-3 max-w-[80%] ${
                      msg.role === "user" 
                        ? "bg-darkBlue text-white" 
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-center py-2">
                  <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-darkBlue transition ease-in-out duration-150">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Input
                placeholder="Type your question..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!userInput.trim() || isLoading}
                className="bg-darkBlue hover:bg-blue-800"
              >
                Send
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
              This assistant is powered by OpenAI and trained on Manage369's property management services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
