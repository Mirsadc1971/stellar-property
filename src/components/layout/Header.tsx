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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}>
          <h1 className="text-2xl font-bold font-heading text-darkBlue">Manage369</h1>
        </Link>
        
        {/* Desktop Navigation */}
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
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/payments');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Payments</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/report-violation');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">File Violation</a>
          
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/forms');
          }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Forms</a>
          
          <Button variant="default" className="ml-2 bg-darkBlue hover:bg-blue-800" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/request-proposal');
          }}>
            <span className="text-white">Request Proposal</span>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-darkBlue">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
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
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/payments');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Payments</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/report-violation');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">File Violation</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/forms');
            }} className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Forms</a>
            
            <a href="#" onClick={(e) => {
              e.preventDefault();
              handleNavigation('/request-proposal');
            }} className="px-3 py-2 bg-darkBlue hover:bg-blue-800 text-white rounded text-center">Request Proposal</a>
          </div>
        </div>
      )}
    </header>
  );
}
