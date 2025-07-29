import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const allLocations = [
  {
    name: "Delhi Office",
    address: "Connaught Place",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    image: "/office1.png",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    name: "Mumbai Office",
    address: "Bandra Kurla Complex",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    image: "/office1.png",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    name: "Chennai Office",
    address: "Tidel Park",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    image: "/office1.png",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    name: "Bengaluru Office",
    address: "Electronic City",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    image: "/office1.png",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    name: "Hyderabad Office",
    address: "HITEC City",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    image: "/office1.png",
    lat: 17.385,
    lng: 78.4867,
  },

];

const LocationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const center = [22.5937, 78.9629];

  const filteredLocations = allLocations.filter((loc) =>
    `${loc.name} ${loc.address} ${loc.city} ${loc.state}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 mt-15 px-4 bg-gradient-to-br from-blue-900 via-indigo-600 to-orange-500 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-6 space-y-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Locations</h1>
         
            <button className="bg-[#ff6531] text-white px-5 py-2 rounded text-sm font-medium">add Location</button>
        </div>

        <input
          type="text"
          placeholder="🔍 Search locations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
        />

        <div>
          <h2 className="font-bold text-2xl mb-2 text-gray-800">Office List</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 font-semibold">Name</th>
                  <th className="p-3 font-semibold">Address</th>
                  <th className="p-3 font-semibold">City</th>
                  <th className="p-3 font-semibold">State</th>
                  <th className="p-3 font-semibold">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredLocations.map((loc, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
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

        <div>
          <h2 className="font-semibold text-xl mb-3 text-gray-800">Map</h2>
          <MapContainer
            center={center}
            zoom={5}
            className="w-full h-80 rounded-lg z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=zP9LUNbnAnf8nd9A7dT7"
            />
            {filteredLocations.map((loc, idx) => (
              <Marker key={idx} position={[loc.lat, loc.lng]}>
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.city}, {loc.state}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-4 text-gray-800">Office Locations</h2>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {filteredLocations.map((loc, index) => (
              <div
                key={index}
                className="min-w-[200px] bg-white border rounded-xl shadow-md"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-24 w-full object-cover rounded-t-xl"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-md">{loc.name}</h3>
                  <p className="text-sm text-gray-600">
                    {loc.address}, {loc.city}, {loc.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
