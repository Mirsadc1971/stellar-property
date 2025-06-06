
import { useToast } from "@/hooks/use-toast";

const OPENAI_MODEL = "gpt-4o";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

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

export async function sendMessageToOpenAI(apiKey: string, messages: ChatMessage[]): Promise<string> {
  const apiMessages = messages.map(msg => ({
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
          // We'll handle the key clearing in the component
          break;
        default:
          errorMessage = `OpenAI Error: ${errorData.error.message}`;
      }
    }
    
    throw new Error(errorMessage);
  }
  
  return data?.choices?.[0]?.message?.content?.trim() || 
    "I'm having trouble generating a response. Please try again.";
}
