import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Helper to re-center map
const ChangeMapView = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 10);
    }
  }, [coords, map]);
  return null;
};

const LocationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    lat: "",
    lng: "",
  });

  useEffect(() => {
    setLocations([
      {
        name: "Delhi Office",
        address: "Connaught Place",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        lat: 28.6139,
        lng: 77.209,
      },
      {
        name: "Mumbai Office",
        address: "Bandra Kurla Complex",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        lat: 19.076,
        lng: 72.8777,
      },
    ]);
  }, []);

  // 🔒 Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showForm]);

  const filteredLocations = locations.filter((loc) =>
    `${loc.name} ${loc.address} ${loc.city} ${loc.state}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const firstCoords =
    filteredLocations.length > 0
      ? [filteredLocations[0].lat, filteredLocations[0].lng]
      : [22.5937, 78.9629];

 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleAddLocation = async (e) => {
  e.preventDefault();
  const payload = {
    ...newLocation,
    lat: parseFloat(newLocation.lat),
    lng: parseFloat(newLocation.lng),
  };

  try {
    const res = await fetch(`${API_BASE_URL}/location/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to add location");

    const data = await res.json();
    setLocations((prev) => [...prev, data]);
    setShowForm(false);
    setNewLocation({
      name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      lat: "",
      lng: "",
    });
  } catch (err) {
    console.error("Error:", err);
    alert("Could not add location.");
  }
};


  return (
    <div className="min-h-screen mt-15 py-10 px-4 bg-gradient-to-br from-blue-900 via-indigo-600 to-orange-500 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-6 space-y-10 relative">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">🌍 Office Locations</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#ff6531] hover:bg-orange-600 cursor-pointer transition text-white px-5 py-2 rounded text-sm font-medium shadow"
          >
            ➕ Add Location
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
        />

        {/* Location Table */}
        <div>
          <h2 className="font-bold text-2xl text-gray-800 mb-3">🏢 Office List</h2>
          <div className="overflow-x-auto rounded border border-gray-300 shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left font-semibold">Name</th>
                  <th className="p-3 text-left font-semibold">Address</th>
                  <th className="p-3 text-left font-semibold">City</th>
                  <th className="p-3 text-left font-semibold">State</th>
                  <th className="p-3 text-left font-semibold">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredLocations.map((loc, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">{loc.name}</td>
                    <td className="p-3">{loc.address}</td>
                    <td className="p-3">{loc.city}</td>
                    <td className="p-3">{loc.state}</td>
                    <td className="p-3">{loc.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">🗺️ Map</h2>
          <MapContainer
            center={firstCoords}
            zoom={5}
            style={{ pointerEvents: showForm ? "none" : "auto" }}
            className="w-full h-96 rounded-lg shadow-md"
          >
            <TileLayer
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=zP9LUNbnAnf8nd9A7dT7"
              attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
            />
            <ChangeMapView coords={firstCoords} />
            {filteredLocations.map((loc, idx) => (
              <Marker key={idx} position={[loc.lat, loc.lng]}>
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.address}, {loc.city}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Add Location Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[1000]">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Location</h2>
            <form onSubmit={handleAddLocation} className="space-y-3">
              {["name", "address", "city", "state", "country", "lat", "lng"].map((field) => (
                <input
                  key={field}
                  type="text"
                  required
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={newLocation[field]}
                  onChange={(e) =>
                    setNewLocation({ ...newLocation, [field]: e.target.value })
                  }
                  className="w-full p-2 rounded border border-gray-300"
                />
              ))}
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsPage;
