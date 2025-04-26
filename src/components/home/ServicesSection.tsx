
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
        <h2 className="text-3xl font-bold mb-12 font-heading text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">HOA Management Services</h3>
            <p className="text-gray-600 mb-4">
              We offer complete HOA management, including board meeting support, maintenance oversight, vendor management, and covenant enforcement.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <ClipboardList className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Condo Association Management</h3>
            <p className="text-gray-600 mb-4">
              Our condo management services include financial reporting, homeowner communication, maintenance coordination, and administrative support.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <LineChart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Financial & Accounting Services</h3>
            <p className="text-gray-600 mb-4">
              We deliver accurate budgeting, monthly financial reporting, assessment collections, and delinquency tracking to keep your community's finances strong.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-darkBlue mb-4">
              <Wrench className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Maintenance Coordination</h3>
            <p className="text-gray-600 mb-4">
              From routine repairs to emergency services, we coordinate trusted vendors to protect your property investments.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/services" 
            className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center"
          >
            View All Services
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
