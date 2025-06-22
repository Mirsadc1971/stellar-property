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

  // Community data for footer links
  const chicagoNeighborhoods = [
    "Lincoln Park", "River North", "Gold Coast", "Lakeview", 
    "West Loop", "Wicker Park", "Streeterville", "The Loop"
  ];
  
  const northSuburbs = [
    "Evanston", "Wilmette", "Highland Park", "Northbrook", 
    "Glenview", "Deerfield", "Lake Forest"
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
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/services')}} className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/properties')}} className="text-gray-300 hover:text-white">Communities</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/blog')}} className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); handleNavigation('/contact')}} className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Communities */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Chicago Communities</h3>
            <ul className="space-y-2">
              {chicagoNeighborhoods.map(neighborhood => (
                <li key={neighborhood}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleNavigation(`/communities/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`)
                    }} 
                    className="text-gray-300 hover:text-white"
                  >
                    {neighborhood}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {e.preventDefault(); handleNavigation('/properties')}} 
                  className="text-blue-300 hover:text-white font-medium"
                >
                  View All Communities →
                </a>
              </li>
            </ul>
          </div>
          
          {/* Suburbs */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Suburban Communities</h3>
            <ul className="space-y-2">
              {northSuburbs.map(suburb => (
                <li key={suburb}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleNavigation(`/communities/${suburb.toLowerCase().replace(/\s+/g, '-')}`)
                    }} 
                    className="text-gray-300 hover:text-white"
                  >
                    {suburb}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {e.preventDefault(); handleNavigation('/properties')}} 
                  className="text-blue-300 hover:text-white font-medium"
                >
                  View All Suburbs →
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-2 mb-4 md:mb-0">
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
          
          <p className="text-gray-400 text-sm">&copy; {currentYear} Stellar Property Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}