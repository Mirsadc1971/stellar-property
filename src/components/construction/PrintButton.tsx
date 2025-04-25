
import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button 
      onClick={handlePrint}
      variant="outline"
      className="print:hidden"
    >
      <Printer className="mr-2 h-4 w-4" />
      Print Form
    </Button>
  );
};
