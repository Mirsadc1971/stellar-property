
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ResourcesDropdownProps {
  handleNavigation: (path: string) => void;
}

export default function ResourcesDropdown({ handleNavigation }: ResourcesDropdownProps) {
  const resourcesItems = [
    { label: 'Forms', path: '/forms' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Blog', path: '/blog' },
    { label: 'Payment Instructions', path: '/payments' },
    { label: 'Move Permit', path: '/move-permit' },
    { label: 'Insurance Proof', path: '/insurance-proof' },
    { label: 'Construction Request', path: '/construction-request' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-darkBlue font-normal text-base transition-colors focus:outline-none">
        Resources <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px] z-[100] p-0">
        {resourcesItems.map((item, index) => (
          <DropdownMenuItem 
            key={index} 
            onClick={() => handleNavigation(item.path)}
            className="cursor-pointer hover:bg-gray-50 px-4 py-3 text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
