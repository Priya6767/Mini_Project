import React, { useEffect, useState } from "react";

export const Nearby_PHC = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(fetchHospitals, handleLocationError);
  }, []);

  const fetchHospitals = async (position) => {
    const { latitude, longitude } = position.coords;
    // Overpass API query: search for hospitals within 5km radius
    const overpassQuery = `
      [out:json][timeout:25];
      (
        node["amenity"="hospital"](around:5000,${latitude},${longitude});
        way["amenity"="hospital"](around:5000,${latitude},${longitude});
        relation["amenity"="hospital"](around:5000,${latitude},${longitude});
      );
      out center;
    `;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.elements || data.elements.length === 0) {
        setError("No hospitals found nearby.");
        setLoading(false);
        return;
      }

      // Map data into a simple array with name and coordinates
      const hospitalList = data.elements.map((el) => {
        const lat = el.lat || (el.center && el.center.lat);
        const lon = el.lon || (el.center && el.center.lon);
        const name = el.tags && el.tags.name ? el.tags.name : "Unnamed Hospital";
        return { name, lat, lon };
      });

      setHospitals(hospitalList);
    } catch (err) {
      console.error(err);
      setError("Error fetching hospitals.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocationError = () => {
    setError("Unable to get your location.");
    setLoading(false);
  };

  if (loading) return <p>Loading nearby hospitals...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏥 Nearby Hospitals</h2>
      <ul className="space-y-3">
        {hospitals.map((hospital, idx) => (
          <li
            key={idx}
            className="border p-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lon}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              {hospital.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
