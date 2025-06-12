
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Building, Phone, MapPin } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { title: "Property Management Services", path: "/services", description: "Comprehensive HOA and condo management" },
    { title: "Chicago Service Areas", path: "/service-areas/chicago", description: "Professional management across Chicago" },
    { title: "Request a Proposal", path: "/request-proposal", description: "Get your free management proposal" },
    { title: "Contact Us", path: "/contact", description: "Speak with our local experts" },
    { title: "About Us", path: "/about", description: "Learn about our Chicago team" },
    { title: "Lincoln Park Management", path: "/neighborhoods/lincoln-park", description: "Expert management in Lincoln Park" }
  ];

  const chicagoNeighborhoods = [
    "Lincoln Park", "River North", "Gold Coast", "West Loop", 
    "Lakeview", "Old Town", "Streeterville", "Bucktown"
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found - Stellar Property Management Chicago"
        description="The page you're looking for doesn't exist. Find Chicago property management services, neighborhood information, and contact details for Stellar Property Management."
        canonical="/404"
        noindex={true}
      />
      
      <SchemaMarkup type="website" />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Section */}
            <div className="mb-12">
              <h1 className="text-6xl font-bold text-darkBlue mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
              <p className="text-lg text-gray-600 mb-8">
                Sorry, the page you're looking for doesn't exist. But we're here to help you find what you need for your Chicago property management needs.
              </p>
            </div>

            {/* Search Section */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Search className="mr-2" /> Search Our Site
              </h3>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input placeholder="Search for services, neighborhoods..." className="flex-1" />
                <Button className="bg-darkBlue hover:bg-blue-800">Search</Button>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Popular Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularPages.map((page, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Link to={page.path} className="block">
                      <h4 className="font-semibold text-darkBlue mb-2 hover:underline">{page.title}</h4>
                      <p className="text-gray-600 text-sm">{page.description}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Chicago Neighborhoods */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Chicago Neighborhoods We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chicagoNeighborhoods.map((neighborhood, index) => (
                  <Link 
                    key={index}
                    to={`/neighborhoods/${neighborhood.toLowerCase().replace(' ', '-')}`}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-darkBlue hover:underline"
                  >
                    {neighborhood}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-darkBlue text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Still Can't Find What You're Looking For?</h3>
              <p className="text-white/80 mb-6">
                Our Chicago property management experts are here to help. Contact us directly for personalized assistance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="mr-2" />
                  <span>(773) 728-0652</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="mr-2" />
                  <span>Chicago, IL</span>
                </div>
                <div className="flex items-center justify-center">
                  <Building className="mr-2" />
                  <span>HOA & Condo Management</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue" asChild>
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue" asChild>
                  <Link to="/request-proposal">Get Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
