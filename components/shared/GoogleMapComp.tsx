import React, { useCallback, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.507351,
  lng: -0.127758,
};

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  styles: [
    {
      featureType: "road",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "water",
      stylers: [{ color: "#bde5f6" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#f2f2f2" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#FF7550" }],
    },
    {
      featureType: "poi",
      stylers: [{ color: "#e2f0cd" }],
    },
    {
      elementType: "labels.text",
      stylers: [{ saturation: 2 }, { weight: 0.3 }, { color: "#a8a8a8" }],
    },
  ],
};

const GoogleMapComponent: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Set your API key in .env
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="aspect-auto rounded-lg overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
