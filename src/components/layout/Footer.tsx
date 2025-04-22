
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-heading font-bold text-xl mb-4">Manage369</h2>
            <p className="text-gray-300 mb-4">Chicago's leading property management for commercial, associations, and investors.</p>
          </div>
          
          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/request-proposal" className="text-gray-300 hover:text-white">Request Proposal</Link></li>
              <li><Link to="/report-violation" className="text-gray-300 hover:text-white">File Violation</Link></li>
              <li><Link to="/payments" className="text-gray-300 hover:text-white">Payments</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">What We Do</Link></li>
              <li><Link to="/services/nominations" className="text-gray-300 hover:text-white">Board Nominations</Link></li>
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
                <a href="mailto:service@manage369.com" className="text-gray-300 hover:text-white">service@manage369.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:7737280652" className="text-gray-300 hover:text-white">773.728.0652</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Manage369. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/report-violation" className="text-gray-300 hover:text-white text-sm">Report Violation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
