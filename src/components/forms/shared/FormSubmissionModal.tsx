
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Copy, Mail, Download } from 'lucide-react';

interface FormSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailContent: string;
  subject: string;
  recipientEmail?: string;
}

export const FormSubmissionModal: React.FC<FormSubmissionModalProps> = ({
  isOpen,
  onClose,
  emailContent,
  subject,
  recipientEmail = 'service@stellarpropertygroup.com'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      toast.success('Email content copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleMailtoLink = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
    toast.success('Opening email client...');
  };

  const handleDownload = () => {
    const blob = new Blob([emailContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Form content downloaded!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Form Submission Ready</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p className="mb-2">Your form has been prepared for submission to: <strong>{recipientEmail}</strong></p>
            <p>Choose one of the options below to submit your form:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button onClick={handleMailtoLink} className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Open Email
            </Button>
            
            <Button onClick={handleCopyToClipboard} variant="outline" className="flex items-center gap-2">
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy Content'}
            </Button>
            
            <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Content Preview:</label>
            <Textarea
              value={emailContent}
              readOnly
              className="min-h-[300px] text-sm"
            />
          </div>

          <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800">
            <p><strong>Manual submission instructions:</strong></p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Copy the content above or download it as a file</li>
              <li>Open your email client (Gmail, Outlook, etc.)</li>
              <li>Create a new email to: {recipientEmail}</li>
              <li>Use subject: {subject}</li>
              <li>Paste the content and send</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
