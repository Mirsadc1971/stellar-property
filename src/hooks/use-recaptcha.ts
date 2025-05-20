
import { useState } from 'react';

export function useRecaptcha() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError(null);
    }
  };

  const handleCaptchaError = () => {
    setCaptchaToken(null);
    setCaptchaError("Failed to load reCAPTCHA. Please try again.");
  };

  const validateCaptcha = () => {
    if (!captchaToken) {
      setCaptchaError("Please verify you're not a robot.");
      return false;
    }
    return true;
  };

  const resetCaptcha = () => {
    setCaptchaToken(null);
    setCaptchaError(null);
  };

  return {
    captchaToken,
    captchaError,
    handleCaptchaChange,
    handleCaptchaError,
    validateCaptcha,
    resetCaptcha
  };
}
