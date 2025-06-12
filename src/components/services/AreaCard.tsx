
import { useNavigate } from "react-router-dom";

interface AreaCardProps {
  title: string;
  areas: string[];
  isMainArea?: boolean;
}

export default function AreaCard({ title, areas, isMainArea = false }: AreaCardProps) {
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

  const getMainAreaPath = (title: string) => {
    if (title.includes("Chicago Property Management")) {
      return "/service-areas/chicago";
    }
    if (title.includes("North Suburbs")) {
      return "/service-areas/north-suburbs";
    }
    return null;
  };
  
  const handleNavigation = (path: string | undefined) => {
    if (path) {
      navigate(path);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }
  };

  const handleTitleClick = () => {
    if (isMainArea) {
      const path = getMainAreaPath(title);
      handleNavigation(path);
    }
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${isMainArea ? 'border-2 border-darkBlue/20' : ''}`}>
      <h3 
        className={`font-heading text-xl font-semibold mb-4 ${isMainArea ? 'text-darkBlue cursor-pointer hover:text-blue-700' : ''}`}
        onClick={handleTitleClick}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {areas.map((area, index) => {
          const path = isMainArea ? null : getNeighborhoodPath(area);
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
      {isMainArea && (
        <div className="mt-4 pt-4 border-t">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleTitleClick();
            }}
            className="text-darkBlue hover:text-blue-700 font-medium inline-flex items-center"
          >
            Learn More
            <span className="ml-2">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
