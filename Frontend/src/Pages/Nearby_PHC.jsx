// src/pages/NearbyPHC.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const NearbyPHC = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  const GOOGLE_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY_HERE"; // ← Replace this!

  // Get user's current location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = [pos.coords.latitude, pos.coords.longitude];
          setUserLocation(coords);
          fetchNearbyPlaces(coords);
        },
        (err) => {
          console.error(err);
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation not supported by your browser.");
    }
  }, []);

  // Fetch nearby hospitals/medical centers using Google Places API
  const fetchNearbyPlaces = async ([lat, lng]) => {
    try {
      const radius = 5000; // 5 km radius
      const type = "hospital"; // or "health" for clinics

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            location: `${lat},${lng}`,
            radius,
            type,
            key: GOOGLE_API_KEY,
          },
        }
      );

      setPlaces(response.data.results);
    } catch (err) {
      console.error("Error fetching places:", err);
      setError("Failed to fetch nearby hospitals.");
    }
  };

  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!userLocation) return <p className="text-center">Fetching your location...</p>;

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={userLocation}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Map base layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User marker */}
        <Marker position={userLocation}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Nearby hospitals markers */}
        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={[
              place.geometry.location.lat,
              place.geometry.location.lng,
            ]}
          >
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.vicinity}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NearbyPHC;
