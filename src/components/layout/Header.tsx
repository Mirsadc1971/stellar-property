
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-heading text-darkBlue">Manage369</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Home</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">About</Link>
          <Link to="/services" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Services</Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Contact</Link>
          <Link to="/faqs" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">FAQs</Link>
          <Link to="/blog" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Blog</Link>
          <Link to="/payments" className="px-3 py-2 text-sm font-medium hover:text-darkBlue">Payments</Link>
          <Button variant="default" className="ml-2 bg-darkBlue hover:bg-blue-800">
            <Link to="/request-proposal" className="text-white">Request Proposal</Link>
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
            <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>Contact</Link>
            <Link to="/faqs" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>FAQs</Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>Blog</Link>
            <Link to="/payments" className="px-3 py-2 text-sm font-medium hover:text-darkBlue" onClick={toggleMenu}>Payments</Link>
            <Link to="/request-proposal" className="px-3 py-2 bg-darkBlue hover:bg-blue-800 text-white rounded text-center" onClick={toggleMenu}>Request Proposal</Link>
          </div>
        </div>
      )}
    </header>
  );
}
