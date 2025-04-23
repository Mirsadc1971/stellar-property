
import { useNavigate } from "react-router-dom";

interface AreaCardProps {
  title: string;
  areas: string[];
}

export default function AreaCard({ title, areas }: AreaCardProps) {
  const navigate = useNavigate();
  
  const getNeighborhoodPath = (area: string) => {
    const slugs: { [key: string]: string } = {
      "The Loop": "/neighborhoods/the-loop",
      "River North": "/neighborhoods/river-north",
      "Streeterville": "/neighborhoods/streeterville",
      "Lincoln Park": "/neighborhoods/lincoln-park",
      "Lakeview": "/neighborhoods/lakeview",
      "West Loop": "/neighborhoods/west-loop",
      "South Loop": "/neighborhoods/south-loop",
      "Gold Coast": "/neighborhoods/gold-coast",
      "Old Town": "/neighborhoods/old-town",
      "Wicker Park": "/neighborhoods/wicker-park",
      "Bucktown": "/neighborhoods/bucktown",
      "Logan Square": "/neighborhoods/logan-square",
      "Wrigleyville": "/neighborhoods/wrigleyville",
      "Ukrainian Village": "/neighborhoods/ukrainian-village",
      "Hyde Park": "/neighborhoods/hyde-park",
      "Uptown": "/neighborhoods/uptown",
      "Andersonville": "/neighborhoods/andersonville",
      "Edgewater": "/neighborhoods/edgewater",
      "Rogers Park": "/neighborhoods/rogers-park",
      "Ravenswood": "/neighborhoods/ravenswood"
    };
    return slugs[area];
  };
  
  const handleNavigation = (path: string | undefined) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-heading text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {areas.map((area, index) => {
          const path = getNeighborhoodPath(area);
          return (
            <li key={index} className="flex items-center">
              <span className="text-darkBlue mr-2">•</span>
              {path ? (
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(path);
                  }} 
                  className="hover:text-darkBlue"
                >
                  {area}
                </a>
              ) : (
                <span>{area}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
