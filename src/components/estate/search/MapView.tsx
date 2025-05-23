import { Property } from '@/interfaces/estate.interfaces';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

export default function MapView({
  properties,
  point = false,
}: {
  properties: Property[];
  point?: boolean;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      // Initialize map
      if (mapRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [34.0522, -118.2437],
          10,
        );
      } else {
        console.error('mapRef.current is null');
      }

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current!);
    }

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
    // Add property markers
    properties.forEach((property) => {
      if (property.coordinates) {
        // Create custom icon
        const icon = L.divIcon({
          className: 'custom-marker',
          html: point
            ? `<div class="marker-point" style="font-size: 36px">📍</div>`
            : `<div class="marker-price">${property.price}</div>`,
          iconSize: [80, 30],
        });
        // Create marker
        const marker = L.marker(
          [property.coordinates.lat, property.coordinates.lng],
          {
            icon,
          },
        ).addTo(mapInstanceRef.current!);

        if (!point) {
          marker.bindPopup(`
              <div class="map-popup">
                <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px;">
                <h3 style="font-weight: bold; margin: 8px 0;">${property.title}</h3>
                <p style="color: #3b82f6; font-weight: bold;">${property.price}</p>
                <p>${property.location}</p>
                <a href="/estate/property/${property.id}" 
                  style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 8px; cursor: pointer;"
                >
                  View Details
                </a>
              </div>
            `);
        }

        markersRef.current.push(marker);
      }
    });

    // Make the map fit all markers
    if (markersRef.current.length > 0) {
      const group = L.featureGroup(markersRef.current);
      mapInstanceRef.current!.fitBounds(group.getBounds().pad(0.1));
    }
  }, [properties, point]);
  // Add CSS for custom markers
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-marker {
        background: transparent;
      } 
      .marker-point {
        font-size: 24px;
        color: #3b82f6;
      }
      .marker-price {
        background: #3b82f6;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        font-size: 12px;
        white-space: nowrap;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .leaflet-popup-content-wrapper {
        padding: 10px;
        overflow: hidden;
      }
      .map-popup {
        padding: 0;
        width: 220px;
      }
      .leaflet-popup-content {
        margin: 0;
        width: 220px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div ref={mapRef} className="h-full w-full overflow-hidden rounded-xl" />
  );
}
