
import { supabase } from "@/integrations/supabase/client";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendMessageToOpenAI(messages: ChatMessage[]): Promise<string> {
  console.log('Sending request to Supabase edge function');
  
  const { data, error } = await supabase.functions.invoke('chat-with-openai', {
    body: { messages }
  });

  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(error.message || 'Failed to get response from AI assistant');
  }

  if (data.error) {
    console.error('OpenAI error from edge function:', data.error);
    throw new Error(data.error);
  }

  return data.reply;
}
