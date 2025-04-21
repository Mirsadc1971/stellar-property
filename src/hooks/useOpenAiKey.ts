
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export function useOpenAiKey() {
  const [apiKey, setApiKey] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("OPENAI_API_KEY") || "";
    }
    return "";
  });
  const [apiKeyInput, setApiKeyInput] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("OPENAI_API_KEY", apiKey);
    }
  }, [apiKey]);

  const clearApiKey = () => {
    setApiKey("");
    localStorage.removeItem("OPENAI_API_KEY");
  };

  const validateApiKey = (key: string) => {
    return key.startsWith('sk-') && key.length >= 50;
  };

  const handleSaveApiKey = () => {
    if (validateApiKey(apiKeyInput)) {
      setApiKey(apiKeyInput);
      setApiKeyInput("");
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved successfully.",
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-'.",
        variant: "destructive",
      });
    }
  };

  return {
    apiKey,
    apiKeyInput,
    setApiKeyInput,
    clearApiKey,
    handleSaveApiKey
  };
}
