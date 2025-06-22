import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  title: string;
  description: string;
  path: string;
  category: 'neighborhood' | 'service' | 'area';
}

interface InternalLinksSectionProps {
  title: string;
  links: InternalLink[];
  className?: string;
}

export default function InternalLinksSection({ title, links, className = "" }: InternalLinksSectionProps) {
  return (
    <section className={`py-8 ${className}`}>
      <h3 className="text-2xl font-semibold mb-6 text-darkBlue">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2">
              <Link to={link.path} className="text-darkBlue hover:underline">
                {link.title}
              </Link>
            </h4>
            <p className="text-gray-600 text-sm mb-4">{link.description}</p>
            <Link 
              to={link.path} 
              className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center text-sm"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}