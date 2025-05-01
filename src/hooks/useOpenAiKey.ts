
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export function useOpenAiKey() {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [storageAvailable, setStorageAvailable] = useState<boolean>(true);
  const [storageError, setStorageError] = useState<string | null>(null);
  const { toast } = useToast();

  // Check if localStorage is available and working
  const checkLocalStorage = (): boolean => {
    try {
      // Test if localStorage is available and working
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      console.log("localStorage is available and working");
      return true;
    } catch (e) {
      console.error("localStorage is not available:", e);
      setStorageError(`Storage error: ${e instanceof Error ? e.message : 'Unknown error'}`);
      return false;
    }
  };

  // Load API key from localStorage on initial render
  useEffect(() => {
    const isStorageAvailable = checkLocalStorage();
    setStorageAvailable(isStorageAvailable);

    if (isStorageAvailable) {
      try {
        const savedKey = localStorage.getItem("OPENAI_API_KEY");
        console.log("Retrieved API key from localStorage:", savedKey ? "Key exists" : "No key found");
        if (savedKey) {
          setApiKey(savedKey);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Error retrieving API key from localStorage:", error);
        setStorageError(`Error retrieving key: ${errorMessage}`);
        toast({
          title: "Storage Error",
          description: "Unable to retrieve your saved API key. Browser storage may be disabled.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Browser Storage Unavailable",
        description: "Local storage is disabled or not available in your browser. Your API key cannot be saved between sessions.",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Save API key to localStorage whenever it changes
  useEffect(() => {
    if (apiKey && storageAvailable) {
      try {
        localStorage.setItem("OPENAI_API_KEY", apiKey);
        console.log("API key saved to localStorage successfully");
        // Clear any previous storage errors
        setStorageError(null);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Error saving API key to localStorage:", error);
        setStorageError(`Error saving key: ${errorMessage}`);
        toast({
          title: "Storage Error",
          description: "Unable to save your API key. Browser storage may be disabled.",
          variant: "destructive",
        });
      }
    }
  }, [apiKey, storageAvailable, toast]);

  const clearApiKey = () => {
    setApiKey("");
    if (storageAvailable) {
      try {
        localStorage.removeItem("OPENAI_API_KEY");
        console.log("API key removed from localStorage");
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Error removing API key from localStorage:", error);
        setStorageError(`Error removing key: ${errorMessage}`);
      }
    }
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed.",
    });
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
        description: storageAvailable 
          ? "Your OpenAI API key has been saved successfully."
          : "Your OpenAI API key has been saved for this session only. It will not persist after you close the page.",
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
    storageAvailable,
    storageError,
    setApiKeyInput,
    clearApiKey,
    handleSaveApiKey
  };
}
