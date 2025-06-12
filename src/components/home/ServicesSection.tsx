
import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/section-heading";
import { 
  Building,
  ClipboardList,
  Wrench,
  LineChart
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 font-heading text-center">
          Professional Property Management Services in Chicago
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/services" className="hover:text-darkBlue transition-colors">
                HOA Management Services
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              We offer complete HOA management for <Link to="/service-areas/chicago" className="text-darkBlue hover:underline">Chicago communities</Link>, including board meeting support, maintenance oversight, vendor management, and covenant enforcement.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              Learn More About HOA Services
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <ClipboardList className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/services" className="hover:text-darkBlue transition-colors">
                Condo Association Management
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Our condo management services include financial reporting, homeowner communication, maintenance coordination, and administrative support for <Link to="/service-areas/north-suburbs" className="text-darkBlue hover:underline">Chicago and North Suburbs</Link>.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              Explore Condo Management
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <LineChart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/services" className="hover:text-darkBlue transition-colors">
                Financial & Accounting Services
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              We deliver accurate budgeting, monthly financial reporting, assessment collections, and delinquency tracking to keep your Chicago community's finances strong and transparent.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              View Financial Services
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <Wrench className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              <Link to="/services" className="hover:text-darkBlue transition-colors">
                Maintenance Coordination
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              From routine repairs to emergency services, we coordinate trusted local Chicago vendors to protect your property investments and maintain community standards.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              See Maintenance Solutions
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-darkBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Property Management Services
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Internal linking section for neighborhoods */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-8">Serving Chicago Neighborhoods</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link>
            <Link to="/neighborhoods/lakeview" className="text-darkBlue hover:underline">Lakeview</Link>
            <Link to="/neighborhoods/river-north" className="text-darkBlue hover:underline">River North</Link>
            <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link>
            <Link to="/neighborhoods/wicker-park" className="text-darkBlue hover:underline">Wicker Park</Link>
            <Link to="/neighborhoods/old-town" className="text-darkBlue hover:underline">Old Town</Link>
            <Link to="/neighborhoods/west-loop" className="text-darkBlue hover:underline">West Loop</Link>
            <Link to="/neighborhoods/streeterville" className="text-darkBlue hover:underline">Streeterville</Link>
            <Link to="/neighborhoods/the-loop" className="text-darkBlue hover:underline">The Loop</Link>
            <Link to="/neighborhoods/bucktown" className="text-darkBlue hover:underline">Bucktown</Link>
            <Link to="/neighborhoods/hyde-park" className="text-darkBlue hover:underline">Hyde Park</Link>
            <Link to="/neighborhoods/uptown" className="text-darkBlue hover:underline">Uptown</Link>
          </div>
          <div className="text-center mt-6">
            <Link 
              to="/service-areas/chicago" 
              className="text-darkBlue hover:text-blue-700 font-medium"
            >
              See All Chicago Service Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
