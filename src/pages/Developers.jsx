
import React from "react";

const developers = [
  { id: 1, name: "Jove Tristan Pelones" },
  { id: 2, name: "Cyron James Polias" },
  { id: 3, name: "Mike Rain Advincula" },
  { id: 4, name: "Kyle John Flores" },
];

export default function Developers() {
  return (
    <div className="bg-white p-8 rounded-apple shadow-soft text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Development Team
      </h1>

      <p className="text-gray-500 mb-6">
        Meet the members behind this To-Do List Application.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {developers.map((developer) => (
          <div
            key={developer.id}
            className="bg-pastel-yellow p-4 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <p className="font-semibold text-gray-800">
              {developer.name}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Total Developers: {developers.length}
      </p>
    </div>
  );
}