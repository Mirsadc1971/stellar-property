
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-heading text-gray-900">Chicago's Trusted Property Management Partner</h2>
            
            <p className="mb-6 text-gray-700">
              At Manage369, we bring over two decades of Chicago property management expertise to your HOA or condo association. Our locally-based team understands the unique challenges of managing properties in Chicago's diverse neighborhoods.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Our Leadership Team</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• David Chen - CEO, Licensed Property Manager</li>
                <li>• Sarah Rodriguez - Operations Director</li>
                <li>• Michael Kim - Association Services Manager</li>
              </ul>
            </div>
            
            <Button className="mt-2 bg-darkBlue hover:bg-blue-800" asChild>
              <Link to="/about">Meet Our Full Team</Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              alt="Manage369 Chicago property management team" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                e.currentTarget.alt = "Chicago property management services";
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-darkBlue text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold font-heading">20+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
