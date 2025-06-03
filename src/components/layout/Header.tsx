
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}>
          <h1 className="text-2xl font-bold font-heading text-darkBlue tracking-tight">Stellar Property Management</h1>
        </Link>
        
        {/* Desktop Navigation - Cleaner & More Spaced */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }} className="text-gray-700 hover:text-darkBlue font-medium transition-colors">Home</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/about');
          }} className="text-gray-700 hover:text-darkBlue font-medium transition-colors">About</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/services');
          }} className="text-gray-700 hover:text-darkBlue font-medium transition-colors">Services</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/contact');
          }} className="text-gray-700 hover:text-darkBlue font-medium transition-colors">Contact</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/faqs');
          }} className="text-gray-700 hover:text-darkBlue font-medium transition-colors">FAQs</a>
          
          <Button 
            onClick={() => handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/')}
            className="bg-darkBlue hover:bg-blue-800 text-white px-6 py-2 font-medium"
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
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }} className="text-gray-700 hover:text-darkBlue font-medium">Home</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }} className="text-gray-700 hover:text-darkBlue font-medium">About</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/services');
            }} className="text-gray-700 hover:text-darkBlue font-medium">Services</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/contact');
            }} className="text-gray-700 hover:text-darkBlue font-medium">Contact</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/faqs');
            }} className="text-gray-700 hover:text-darkBlue font-medium">FAQs</a>
            
            <Button 
              onClick={() => handleExternalNavigation('https://stellarpropertygrp.appfolio.com/connect/')}
              className="bg-darkBlue hover:bg-blue-800 text-white w-full"
            >
              Pay Dues
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
