import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/section-heading";
import { 
  Building,
  ClipboardList,
  Wrench,
  LineChart,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const featuredNeighborhoods = [
    { name: "Lincoln Park", path: "/neighborhoods/lincoln-park" },
    { name: "Lakeview", path: "/neighborhoods/lakeview" },
    { name: "River North", path: "/neighborhoods/river-north" },
    { name: "Gold Coast", path: "/neighborhoods/gold-coast" },
    { name: "Wicker Park", path: "/neighborhoods/wicker-park" },
    { name: "Old Town", path: "/neighborhoods/old-town" },
    { name: "West Loop", path: "/neighborhoods/west-loop" },
    { name: "Streeterville", path: "/neighborhoods/streeterville" },
    { name: "The Loop", path: "/neighborhoods/the-loop" },
    { name: "Bucktown", path: "/neighborhoods/bucktown" },
    { name: "Hyde Park", path: "/neighborhoods/hyde-park" },
    { name: "Uptown", path: "/neighborhoods/uptown" }
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center">
          Professional Property Management Services in Chicago
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From luxury <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link> high-rises 
          to historic <Link to="/neighborhoods/old-town" className="text-darkBlue hover:underline">Old Town</Link> buildings, 
          our comprehensive services are tailored to each Chicago neighborhood's unique character and requirements.
        </p>
        
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
              We offer complete HOA management for <Link to="/service-areas/chicago" className="text-darkBlue hover:underline">Chicago communities</Link>, 
              including board meeting support, maintenance oversight, vendor management, and covenant enforcement. Our expertise extends 
              to prestigious neighborhoods like <Link to="/neighborhoods/lincoln-park" className="text-darkBlue hover:underline">Lincoln Park</Link> 
              and <Link to="/neighborhoods/gold-coast" className="text-darkBlue hover:underline">Gold Coast</Link>, where we understand 
              the unique requirements of luxury lakefront properties and historic preservation standards.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              Learn More About HOA Services
              <ArrowRight className="ml-2 h-4 w-4" />
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
              Our condo management services include financial reporting, homeowner communication, maintenance coordination, 
              and administrative support for <Link to="/service-areas/north-suburbs" className="text-darkBlue hover:underline">Chicago and North Suburbs</Link>. 
              We specialize in high-rise buildings in areas like <Link to="/neighborhoods/river-north" className="text-darkBlue hover:underline">River North</Link> 
              and <Link to="/neighborhoods/streeterville" className="text-darkBlue hover:underline">Streeterville</Link>, 
              managing everything from doorman services to luxury amenities with professional excellence.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              Explore Condo Management
              <ArrowRight className="ml-2 h-4 w-4" />
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
              We deliver accurate budgeting, monthly financial reporting, assessment collections, and delinquency tracking 
              to keep your Chicago community's finances strong and transparent. Our <Link to="/about" className="text-darkBlue hover:underline">experienced team</Link> 
              understands the financial complexities of managing diverse property types, from 
              <Link to="/neighborhoods/west-loop" className="text-darkBlue hover:underline mx-1">West Loop</Link> 
              converted lofts to traditional <Link to="/neighborhoods/lakeview" className="text-darkBlue hover:underline">Lakeview</Link> buildings.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              View Financial Services
              <ArrowRight className="ml-2 h-4 w-4" />
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
              From routine repairs to emergency services, we coordinate trusted local Chicago vendors to protect your 
              property investments and maintain community standards. Our 24/7 support covers everything from modern 
              <Link to="/neighborhoods/west-loop" className="text-darkBlue hover:underline mx-1">West Loop</Link> 
              lofts to vintage <Link to="/neighborhoods/lakeview" className="text-darkBlue hover:underline">Lakeview</Link> buildings, 
              with specialized knowledge of historic preservation requirements in neighborhoods like 
              <Link to="/neighborhoods/wicker-park" className="text-darkBlue hover:underline mx-1">Wicker Park</Link>.
            </p>
            <Link 
              to="/services" 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              See Maintenance Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-darkBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All Property Management Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Enhanced internal linking section for neighborhoods */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-4">Proudly Serving Chicago's Most Distinctive Communities</h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Stellar Property Group brings deep local expertise to some of Chicago's most sought-after neighborhoods and surrounding suburbs. 
            We provide tailored solutions for property management in Lincoln Park, where historic buildings and high-rise condos demand 
            detailed oversight and proactive maintenance. In Skokie, our HOA management services are customized to meet the needs of 
            quiet residential communities with a focus on financial transparency and responsive communication.
          </p>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We also specialize in condo management in Evanston, supporting vibrant, mixed-use associations with a balance of commercial 
            and residential units. In Rogers Park, our team understands the unique dynamics of multi-unit buildings and provides hands-on 
            management that keeps communities thriving.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {featuredNeighborhoods.map((neighborhood, index) => (
              <Link 
                key={index}
                to={neighborhood.path} 
                className="text-darkBlue hover:underline hover:bg-gray-50 p-3 rounded transition-colors text-sm font-medium"
              >
                {neighborhood.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/service-areas/chicago" 
                className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center"
              >
                Explore All Chicago Areas <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link 
                to="/service-areas/north-suburbs" 
                className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center"
              >
                North Suburbs Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link to="/contact" className="text-darkBlue hover:underline">Contact us</Link> to discuss your specific neighborhood needs or 
              <Link to="/request-proposal" className="text-darkBlue hover:underline ml-1">request a free proposal</Link> 
              tailored to your Chicago property.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}