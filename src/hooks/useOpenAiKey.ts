
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export function useOpenAiKey() {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [storageAvailable, setStorageAvailable] = useState<boolean>(true);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [storageMethod, setStorageMethod] = useState<'localStorage' | 'sessionStorage' | 'none'>('none');
  const { toast } = useToast();

  // Enhanced storage detection with persistence testing
  const detectBestStorageMethod = (): 'localStorage' | 'sessionStorage' | 'none' => {
    console.log('Testing storage methods...');
    
    // Test localStorage with persistence
    try {
      const testKey = 'lovable_storage_test_' + Date.now();
      const testValue = 'test_value';
      
      localStorage.setItem(testKey, testValue);
      const retrieved = localStorage.getItem(testKey);
      localStorage.removeItem(testKey);
      
      if (retrieved === testValue) {
        console.log('localStorage is working and persistent');
        return 'localStorage';
      }
    } catch (error) {
      console.log('localStorage failed:', error);
    }

    // Fallback to sessionStorage
    try {
      const testKey = 'lovable_session_test_' + Date.now();
      const testValue = 'test_value';
      
      sessionStorage.setItem(testKey, testValue);
      const retrieved = sessionStorage.getItem(testKey);
      sessionStorage.removeItem(testKey);
      
      if (retrieved === testValue) {
        console.log('sessionStorage is working (session-only storage)');
        return 'sessionStorage';
      }
    } catch (error) {
      console.log('sessionStorage failed:', error);
    }

    console.log('No storage method available');
    return 'none';
  };

  // Validate stored API key
  const validateStoredKey = (key: string): boolean => {
    return key && key.startsWith('sk-') && key.length >= 20;
  };

  // Get stored API key with fallback methods
  const getStoredApiKey = (): string | null => {
    const storage = storageMethod === 'localStorage' ? localStorage : 
                   storageMethod === 'sessionStorage' ? sessionStorage : null;
    
    if (!storage) return null;

    try {
      const storedKey = storage.getItem("OPENAI_API_KEY");
      if (storedKey && validateStoredKey(storedKey)) {
        console.log(`Retrieved valid API key from ${storageMethod}`);
        return storedKey;
      } else if (storedKey) {
        console.log('Found invalid API key in storage, removing it');
        storage.removeItem("OPENAI_API_KEY");
      }
    } catch (error) {
      console.error(`Error retrieving API key from ${storageMethod}:`, error);
      setStorageError(`Error retrieving key: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    return null;
  };

  // Store API key with validation
  const storeApiKey = (key: string): boolean => {
    if (!validateStoredKey(key)) {
      console.error('Attempted to store invalid API key');
      return false;
    }

    const storage = storageMethod === 'localStorage' ? localStorage : 
                   storageMethod === 'sessionStorage' ? sessionStorage : null;
    
    if (!storage) {
      console.log('No storage method available, key will only persist for this session');
      return false;
    }

    try {
      storage.setItem("OPENAI_API_KEY", key);
      
      // Verify storage worked
      const retrieved = storage.getItem("OPENAI_API_KEY");
      if (retrieved === key) {
        console.log(`API key successfully stored in ${storageMethod}`);
        setStorageError(null);
        return true;
      } else {
        throw new Error('Storage verification failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error storing API key in ${storageMethod}:`, error);
      setStorageError(`Error saving key: ${errorMessage}`);
      return false;
    }
  };

  // Initialize storage method and load API key
  useEffect(() => {
    const method = detectBestStorageMethod();
    setStorageMethod(method);
    setStorageAvailable(method !== 'none');

    if (method !== 'none') {
      const storedKey = getStoredApiKey();
      if (storedKey) {
        setApiKey(storedKey);
      }
    } else {
      setStorageError('Browser storage is not available or disabled');
      toast({
        title: "Storage Unavailable",
        description: "Your browser's storage is disabled. API key will only work for this session.",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Update storage method when it changes
  useEffect(() => {
    if (storageMethod !== 'none') {
      const storedKey = getStoredApiKey();
      if (storedKey && storedKey !== apiKey) {
        setApiKey(storedKey);
      }
    }
  }, [storageMethod]);

  // Save API key when it changes
  useEffect(() => {
    if (apiKey && storageMethod !== 'none') {
      const stored = storeApiKey(apiKey);
      if (!stored && storageMethod === 'localStorage') {
        // Try sessionStorage as fallback
        console.log('localStorage failed, trying sessionStorage as fallback');
        setStorageMethod('sessionStorage');
      }
    }
  }, [apiKey, storageMethod]);

  const clearApiKey = () => {
    setApiKey("");
    
    // Clear from all possible storage locations
    ['localStorage', 'sessionStorage'].forEach(method => {
      try {
        const storage = method === 'localStorage' ? localStorage : sessionStorage;
        storage.removeItem("OPENAI_API_KEY");
        console.log(`API key removed from ${method}`);
      } catch (error) {
        console.error(`Error removing API key from ${method}:`, error);
      }
    });

    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed from all storage.",
    });
  };

  const validateApiKey = (key: string) => {
    return key.startsWith('sk-') && key.length >= 50;
  };

  const handleSaveApiKey = () => {
    if (validateApiKey(apiKeyInput)) {
      setApiKey(apiKeyInput);
      setApiKeyInput("");
      
      const persistenceMessage = storageMethod === 'localStorage' 
        ? "Your API key has been saved and will persist between sessions."
        : storageMethod === 'sessionStorage'
        ? "Your API key has been saved for this session only. You'll need to re-enter it if you reload the page."
        : "Your API key is saved for this session only and will not persist.";

      toast({
        title: "API Key Saved",
        description: persistenceMessage,
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-' and at least 50 characters long.",
        variant: "destructive",
      });
    }
  };

  return {
    apiKey,
    apiKeyInput,
    storageAvailable,
    storageError,
    storageMethod,
    setApiKeyInput,
    clearApiKey,
    handleSaveApiKey
  };
}
