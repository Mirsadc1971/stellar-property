
import { MapContainer as MapContainerOriginal, TileLayer as TileLayerOriginal } from 'react-leaflet';

declare module 'react-leaflet' {
  // Extend the original MapContainer component to include the center prop
  export interface MapContainerProps {
    center?: [number, number];
    zoom?: number;
    scrollWheelZoom?: boolean;
  }
  
  // Extend the original TileLayer component to include the attribution and url props
  export interface TileLayerProps {
    attribution?: string;
    url: string;
  }
  
  // Re-export the components with the extended prop types
  export const MapContainer: typeof MapContainerOriginal;
  export const TileLayer: typeof TileLayerOriginal;
}
