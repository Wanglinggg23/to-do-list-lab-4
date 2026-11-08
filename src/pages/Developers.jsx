
import React, { useState } from "react";

const developers = [
  {
    id: 1,
    name: "Jove Tristan Pelones",
    age: "23",
    gender: "Male",
    hobby: "Playing online games"
  },
  {
    id: 2,
    name: "Cyron James Polias",
    age: "22",
    gender: "Male",
    hobby: "Listening to music"
  },
  {
    id: 3,
    name: "Mike Rain Advincula",
    age: "24",
    gender: "Male",
    hobby: "Playing basketball"
  },
  {
    id: 4,
    name: "Kyle John Flores",
    age: "23",
    gender: "Male",
    hobby: "Watching movies"
  },
];

export default function Developers() {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <div className="bg-white p-8 rounded-apple shadow-soft text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Development Team
      </h1>

      <p className="text-gray-500 mb-6">
        Members who made this To-Do List Application.
        Click a name to view their information.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {developers.map((developer) => (
          <button
            key={developer.id}
            type="button"
            onClick={() =>
              setSelectedDeveloper(
                selectedDeveloper === developer.id
                  ? null
                  : developer.id
              )
            }
            className={`bg-pastel-yellow p-4 rounded-xl shadow-sm transition hover:shadow-md text-left ${
              selectedDeveloper === developer.id
                ? "ring-2 ring-purple-400"
                : ""
            }`}
          >
            <p className="font-semibold text-gray-800 text-center">
              {developer.name}
            </p>

            <p className="text-sm text-purple-700 text-center mt-2">
              {selectedDeveloper === developer.id
                ? "Hide Information ▲"
                : "View Information ▼"}
            </p>
          </button>
        ))}
      </div>

      {developers.map((developer) =>
        selectedDeveloper === developer.id ? (
          <div
            key={developer.id}
            className="mt-6 bg-purple-50 p-6 rounded-xl text-left"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {developer.name}
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Name:</strong> {developer.name}
              </p>

              <p>
                <strong>Age:</strong> {developer.age}
              </p>

              <p>
                <strong>Sex/Gender:</strong> {developer.gender}
              </p>

              <p>
                <strong>Hobby:</strong> {developer.hobby}
              </p>
            </div>
          </div>
        ) : null
      )}

      <p className="mt-6 text-sm text-gray-500">
        Total Developers: {developers.length}
      </p>
    </div>
  );
}