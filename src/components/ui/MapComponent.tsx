
import React, { useEffect, useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  latitude: number;
  longitude: number;
  className?: string;
  mapType?: 'leaflet' | 'google';
}

const GoogleMap: React.FC<{ 
  latitude: number; 
  longitude: number; 
  className?: string 
}> = ({ latitude, longitude, className }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'Manage369 Property Management'
    });
  }, [latitude, longitude]);

  return <div ref={mapRef} className={`w-full h-full ${className}`} />;
};

const LeafletMap: React.FC<MapComponentProps> = ({ 
  latitude, 
  longitude, 
  className = "" 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100`}>
        <div className="text-center p-4">
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <MapContainer 
        style={{ height: '100%', width: '100%' }}
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            Manage369 Property Management<br />
            5107 North Western Avenue, Suite 1S<br />
            Chicago, IL 60625
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default function MapComponent({ 
  latitude, 
  longitude, 
  className = "",
  mapType = 'leaflet'
}: MapComponentProps) {
  if (mapType === 'google') {
    return (
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap 
          latitude={latitude} 
          longitude={longitude} 
          className={className} 
        />
      </Wrapper>
    );
  }

  return (
    <LeafletMap 
      latitude={latitude} 
      longitude={longitude} 
      className={className} 
      mapType={mapType}
    />
  );
}

