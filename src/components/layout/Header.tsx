
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  const handleExternalNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  const servicesItems = [
    { label: 'HOA Management', path: '/services' },
    { label: 'Condo Management', path: '/services' },
    { label: 'Financial Services', path: '/services' },
    { label: 'Maintenance Coordination', path: '/services' },
    { label: 'Board Support', path: '/services' },
    { label: 'Compliance Management', path: '/services' },
  ];

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}>
          <h1 className="text-2xl font-bold font-heading text-darkBlue tracking-tight">Stellar Property Management</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }} className="text-gray-700 hover:text-darkBlue font-normal text-base transition-colors">Home</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/about');
          }} className="text-gray-700 hover:text-darkBlue font-normal text-base transition-colors">About</a>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-darkBlue font-normal text-base transition-colors focus:outline-none">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px] z-[100] p-0">
              {servicesItems.map((item, index) => (
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

          {/* Neighborhoods Dropdown */}
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

          {/* Resources Dropdown */}
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
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/contact');
          }} className="text-gray-700 hover:text-darkBlue font-normal text-base transition-colors">Contact</a>
          
          <Button 
            onClick={() => handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/')}
            className="bg-darkBlue hover:bg-blue-800 text-white px-8 py-3 font-normal text-base ml-6"
          >
            Pay Dues
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-darkBlue">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-8 py-6 flex flex-col space-y-6">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }} className="text-gray-700 hover:text-darkBlue font-normal text-base">Home</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }} className="text-gray-700 hover:text-darkBlue font-normal text-base">About</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/services');
            }} className="text-gray-700 hover:text-darkBlue font-normal text-base">Services</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/contact');
            }} className="text-gray-700 hover:text-darkBlue font-normal text-base">Contact</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/faqs');
            }} className="text-gray-700 hover:text-darkBlue font-normal text-base">FAQs</a>
            
            <Button 
              onClick={() => handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/')}
              className="bg-darkBlue hover:bg-blue-800 text-white w-full py-3 font-normal text-base"
            >
              Pay Dues
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
