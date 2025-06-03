
import { Button } from '@/components/ui/button';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  handleNavigation: (path: string) => void;
  handleExternalNavigation: (url: string) => void;
}

export default function MobileNavigation({ 
  isMenuOpen, 
  handleNavigation, 
  handleExternalNavigation 
}: MobileNavigationProps) {
  if (!isMenuOpen) return null;

  return (
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
  );
}
