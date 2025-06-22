import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    // Close the menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Navigate to the path
    navigate(path);
    
    // Ensure we scroll to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  const handleExternalNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}>
          <h1 className="text-2xl font-bold font-heading text-darkBlue">Stellar Property Management</h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Home</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/about');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">About</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/services');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Services</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/properties');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Communities</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/contact');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Contact</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/faqs');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">FAQs</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/blog');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Blog</a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium hover:text-darkBlue">
              Payments
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem onClick={() => handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/')}>
                Pay Dues
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation('/payments')}>
                Payment Options
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/forms');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Forms</a>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-darkBlue">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Home</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">About</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/services');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Services</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/properties');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Communities</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/contact');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Contact</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/faqs');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">FAQs</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/blog');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Blog</a>
            
            <div className="space-y-2 pl-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/');
                }}
                className="block px-3 py-2 text-sm font-medium hover:text-darkBlue"
              >
                Pay Dues
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/payments');
                }}
                className="block px-3 py-2 text-sm font-medium hover:text-darkBlue"
              >
                Payment Options
              </a>
            </div>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/forms');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Forms</a>
          </div>
        </div>
      )}
    </header>
  );
}