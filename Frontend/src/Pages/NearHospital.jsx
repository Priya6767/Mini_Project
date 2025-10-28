import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const userIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><path fill='%230059ff' d='M12 2a7 7 0 1 0 7 7c0 3.866-3.134 7-7 7s-7-3.134-7-7a7 7 0 0 0 7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z'/></svg>",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const hospitalIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><path fill='%23ef4444' d='M12 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5 5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm1 14h-2v-2H9v-2h2v-2h2v2h2v2h-2v2z'/></svg>",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

function RecenterAutomatically({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 14, { duration: 1.5 });
    }
  }, [lat, lng, map]);
  return null;
}

export default function NearHospital() {
  const [userPos, setUserPos] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [radius, setRadius] = useState(3000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (userPos) fetchHospitals(userPos.lat, userPos.lng);
  }, [userPos, radius]);

  async function fetchHospitals(lat, lng) {
    setLoading(true);
    setError(null);
    const query = `
      [out:json][timeout:25];
      (
        node["amenity"="hospital"](around:${radius},${lat},${lng});
        way["amenity"="hospital"](around:${radius},${lat},${lng});
        relation["amenity"="hospital"](around:${radius},${lat},${lng});
      );
      out center;
    `;

    try {
      const res = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body: new URLSearchParams({ data: query }),
      });
      const data = await res.json();
      const parsed = data.elements
        .map((el) => ({
          id: `${el.type}/${el.id}`,
          name: el.tags?.name || "Unnamed Hospital",
          lat: el.lat || el.center?.lat,
          lng: el.lon || el.center?.lon,
          tags: el.tags || {},
        }))
        .filter((p) => p.lat && p.lng);
      setHospitals(parsed);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const loc = data[0];
        setUserPos({ lat: parseFloat(loc.lat), lng: parseFloat(loc.lon) });
      } else {
        setError("Location not found");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  function handleLocateMe() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => alert("Unable to retrieve your location.")
    );
  }

  function openInGoogleMaps(h) {
    const url = userPos
      ? `https://www.google.com/maps/dir/?api=1&origin=${userPos.lat},${userPos.lng}&destination=${h.lat},${h.lng}&travelmode=driving`
      : `https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lng}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 p-6">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
          🏥 Hospital Locator
        </h1>
        <p className="text-gray-600">
          Find hospitals around your searched or current location easily.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your city or area..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 shadow-md transition"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleLocateMe}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 shadow-md transition"
        >
          📍 Locate Me
        </button>
      </motion.form>

      {error && <div className="text-red-600 text-center mb-3">{error}</div>}

      {userPos && (
        <div className="text-center text-gray-700 mb-3 font-medium">
          Found {hospitals.length} hospitals near this location
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5 max-w-7xl mx-auto">
        {/* Map Section */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <MapContainer
            center={userPos ? [userPos.lat, userPos.lng] : [20.5937, 78.9629]}
            zoom={userPos ? 14 : 5}
            style={{ height: "500px", width: "100%" }}
            className="rounded-2xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {userPos && (
              <>
                <Marker position={[userPos.lat, userPos.lng]} icon={userIcon}>
                  <Popup>Your location</Popup>
                </Marker>
                <Circle center={[userPos.lat, userPos.lng]} radius={radius} />
                <RecenterAutomatically lat={userPos.lat} lng={userPos.lng} />
              </>
            )}

            {hospitals.map((h) => (
              <Marker key={h.id} position={[h.lat, h.lng]} icon={hospitalIcon}>
                <Popup>
                  <div className="font-semibold">{h.name}</div>
                  <button
                    className="mt-2 text-sm text-blue-600 underline"
                    onClick={() => openInGoogleMaps(h)}
                  >
                    Open in Google Maps
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Sidebar Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg p-4 w-full md:w-80 overflow-auto max-h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-semibold text-lg text-blue-800 mb-3">
            Hospitals Nearby ({hospitals.length})
          </h3>
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <ul className="space-y-3">
            {hospitals.map((h) => (
              <motion.li
                key={h.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer border border-blue-100 rounded-xl p-3 bg-white/50 hover:bg-blue-50 shadow-sm transition"
                onClick={() => openInGoogleMaps(h)}
              >
                <div className="font-medium text-gray-800">{h.name}</div>
                <div className="text-xs text-gray-500">
                  {h.tags["addr:city"] || h.tags.operator || "Unknown area"}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
