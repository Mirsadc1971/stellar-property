
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
}

export default function MapComponent({ 
  latitude, 
  longitude, 
  zoom = 15,
  className = "h-60 rounded mb-4 overflow-hidden"
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  // This is a placeholder for the token input
  const [showTokenInput, setShowTokenInput] = useState(true);
  
  const handleTokenSubmit = (token: string) => {
    setMapboxToken(token);
    localStorage.setItem('mapbox_token', token);
    setShowTokenInput(false);
  };

  useEffect(() => {
    // Try to get token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    if (map.current) return; // prevents map from being initialized multiple times
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for office location
    const marker = new mapboxgl.Marker({ color: '#0147AB' })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, zoom, mapboxToken]);

  if (showTokenInput) {
    return (
      <div className={className}>
        <div className="p-4 bg-gray-100 rounded h-full flex flex-col justify-center items-center">
          <p className="mb-4 text-center text-sm">Please enter your Mapbox public token to view the map</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.elements.namedItem('token') as HTMLInputElement;
            handleTokenSubmit(input.value);
          }}>
            <input 
              type="text"
              name="token"
              placeholder="Enter Mapbox public token" 
              className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            />
            <button 
              type="submit" 
              className="w-full bg-darkBlue hover:bg-blue-800 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-500">
            Get your token at <a href="https://mapbox.com/" className="text-darkBlue hover:underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      </div>
    );
  }

  return <div ref={mapContainer} className={className} />;
}
