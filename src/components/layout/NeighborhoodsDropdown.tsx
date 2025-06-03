
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NeighborhoodsDropdownProps {
  handleNavigation: (path: string) => void;
}

export default function NeighborhoodsDropdown({ handleNavigation }: NeighborhoodsDropdownProps) {
  const neighborhoodsItems = [
    { label: 'The Loop', path: '/neighborhoods/the-loop' },
    { label: 'River North', path: '/neighborhoods/river-north' },
    { label: 'Streeterville', path: '/neighborhoods/streeterville' },
    { label: 'South Loop', path: '/neighborhoods/south-loop' },
    { label: 'West Loop', path: '/neighborhoods/west-loop' },
    { label: 'Lincoln Park', path: '/neighborhoods/lincoln-park' },
    { label: 'Lakeview', path: '/neighborhoods/lakeview' },
    { label: 'Gold Coast', path: '/neighborhoods/gold-coast' },
    { label: 'Old Town', path: '/neighborhoods/old-town' },
    { label: 'Wicker Park', path: '/neighborhoods/wicker-park' },
    { label: 'Bucktown', path: '/neighborhoods/bucktown' },
    { label: 'Logan Square', path: '/neighborhoods/logan-square' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-darkBlue font-normal text-base transition-colors focus:outline-none">
        Neighborhoods <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px] max-h-[400px] overflow-y-auto z-[100] p-0">
        {neighborhoodsItems.map((item, index) => (
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
