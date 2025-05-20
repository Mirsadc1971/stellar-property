
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// For Google reCAPTCHA V2
// Replace with your actual site key when deploying
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export interface RecaptchaProps {
  onChange?: (token: string | null) => void;
  onError?: () => void;
  className?: string;
}

export const Recaptcha = ({ onChange, onError, className }: RecaptchaProps) => {
  const [verified, setVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (token: string | null) => {
    setVerified(!!token);
    if (onChange) {
      onChange(token);
    }
  };

  const handleError = () => {
    setVerified(false);
    if (onError) {
      onError();
    }
  };

  return (
    <div className={className}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={handleChange}
        onError={handleError}
      />
      {verified && (
        <div className="text-green-600 text-sm mt-1">Verification successful</div>
      )}
    </div>
  );
};

export const resetRecaptcha = (recaptchaRef: React.RefObject<ReCAPTCHA>) => {
  if (recaptchaRef.current) {
    recaptchaRef.current.reset();
  }
};
