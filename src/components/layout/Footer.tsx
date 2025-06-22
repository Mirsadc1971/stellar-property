import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  // Chicago neighborhoods for SEO-optimized interlinking
  const chicagoNeighborhoods = [
    { name: "The Loop", path: "/neighborhoods/the-loop" },
    { name: "River North", path: "/neighborhoods/river-north" },
    { name: "Gold Coast", path: "/neighborhoods/gold-coast" },
    { name: "Lincoln Park", path: "/neighborhoods/lincoln-park" },
    { name: "Lakeview", path: "/neighborhoods/lakeview" },
    { name: "Wicker Park", path: "/neighborhoods/wicker-park" },
    { name: "Bucktown", path: "/neighborhoods/bucktown" },
    { name: "Old Town", path: "/neighborhoods/old-town" },
    { name: "West Loop", path: "/neighborhoods/west-loop" },
    { name: "South Loop", path: "/neighborhoods/south-loop" },
    { name: "Streeterville", path: "/neighborhoods/streeterville" },
    { name: "Hyde Park", path: "/neighborhoods/hyde-park" },
    { name: "Uptown", path: "/neighborhoods/uptown" },
    { name: "Wrigleyville", path: "/neighborhoods/wrigleyville" },
    { name: "Rogers Park", path: "/neighborhoods/rogers-park" },
    { name: "Edgewater", path: "/neighborhoods/edgewater" },
    { name: "Andersonville", path: "/neighborhoods/andersonville" },
    { name: "Ravenswood", path: "/neighborhoods/ravenswood" },
    { name: "Logan Square", path: "/neighborhoods/logan-square" },
    { name: "Ukrainian Village", path: "/neighborhoods/ukrainian-village" }
  ];
  
  // Service areas for additional interlinking
  const serviceAreas = [
    { name: "Chicago", path: "/service-areas/chicago" },
    { name: "North Suburbs", path: "/service-areas/north-suburbs" }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-heading font-bold text-xl mb-4">Stellar Property Management</h2>
            <p className="text-gray-300 mb-4">Chicago's trusted Condominium and HOA Management Experts</p>
          </div>
          
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/')}} className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/about')}} className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/blog')}} className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/contact')}} className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/services')}} className="text-gray-300 hover:text-white">Condominium and HOA Management</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/request-proposal')}} className="text-gray-300 hover:text-white">Request Proposal</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/payments')}} className="text-gray-300 hover:text-white">Payments</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-300">
                  5107 North Western Avenue Ste 1S<br />
                  Chicago, IL 60625
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:service@stellarpropertygroup.com" className="text-gray-300 hover:text-white">service@stellarpropertygroup.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:7737280652" className="text-gray-300 hover:text-white">773.728.0652</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Communities Section - SEO Optimized */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chicago Neighborhoods */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Chicago Neighborhoods We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {chicagoNeighborhoods.map((neighborhood, index) => (
                  <div key={index}>
                    <a 
                      href="#" 
                      onClick={(e) => {e.preventDefault(); handleNavigation(neighborhood.path)}} 
                      className="text-gray-400 hover:text-white text-sm"
                      title={`${neighborhood.name} Property Management`}
                    >
                      {neighborhood.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Service Areas</h3>
              <div className="mb-6">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="mb-2">
                    <a 
                      href="#" 
                      onClick={(e) => {e.preventDefault(); handleNavigation(area.path)}} 
                      className="text-gray-400 hover:text-white text-sm"
                      title={`${area.name} Property Management Services`}
                    >
                      {area.name} Property Management
                    </a>
                  </div>
                ))}
              </div>
              
              <h3 className="font-heading font-semibold text-lg mb-4">Popular Services</h3>
              <div>
                <div className="mb-2">
                  <a 
                    href="#" 
                    onClick={(e) => {e.preventDefault(); handleNavigation('/services')}} 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    HOA Management Services
                  </a>
                </div>
                <div className="mb-2">
                  <a 
                    href="#" 
                    onClick={(e) => {e.preventDefault(); handleNavigation('/services')}} 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Condo Association Management
                  </a>
                </div>
                <div className="mb-2">
                  <a 
                    href="#" 
                    onClick={(e) => {e.preventDefault(); handleNavigation('/services')}} 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Financial Management Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Stellar Property Management. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}