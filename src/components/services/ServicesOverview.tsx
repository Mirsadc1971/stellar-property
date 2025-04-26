
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-heading">
              Chicago's Premier HOA Management Services
            </h2>
            
            <h3 className="text-xl font-semibold mb-4 font-heading text-gray-800">
              Why Choose Manage369?
            </h3>
            
            <p className="mb-6 text-gray-700">
              At Manage369, we offer comprehensive property management services designed to protect your investment, maximize returns, and minimize your involvement in day-to-day operations in Chicago and surrounding areas.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 font-heading text-gray-800">
              Full-Service Property Management Solutions
            </h3>
            
            <p className="mb-6 text-gray-700">
              Whether you own a single property or manage multiple HOAs across Chicago's neighborhoods, our experienced team delivers exceptional results through professional management services.
            </p>
            
            <p className="mb-6 text-gray-700">
              We understand that each property and association has unique needs, which is why we offer <Link to="/services" className="text-darkBlue hover:underline">customized property management services</Link> to ensure you receive exactly the support you require.
            </p>
            
            <div className="bg-darkBlue text-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="font-heading text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="mb-4">Contact us for a free consultation and property assessment.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              alt="Professional Chicago property management team providing HOA and condo services"
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
              onError={(e) => {
                console.error('Image failed to load', e);
                e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                e.currentTarget.alt = "Chicago property management services";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
