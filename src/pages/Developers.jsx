import React from "react";

const developers = [
  { name: "Jove Tristan Pelones" },
  { name: "Cyron James Polias" },
  { name: "Mike Rain Advincula" },
  { name: "Kyle John Flores" },
];

export default function Developers() {
  return (
    <div className="bg-white p-8 rounded-apple shadow-soft text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Development Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="bg-pastel-yellow p-4 rounded-xl shadow-sm"
          >
            <p className="font-semibold text-gray-800">
              {developer.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}