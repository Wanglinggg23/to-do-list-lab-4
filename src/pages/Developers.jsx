import React from 'react';

export default function Developers() {
  // UPDATE THESE NAMES
    const members = [
        "Jove Tristan Pelones",
            "Cyron James Polias",
                "Mike Rain Advincula",
                    "Kyle John Flores"
                      ];

                        return (
                            <div className="bg-white p-8 rounded-apple shadow-soft text-center">
                                  <h1 className="text-2xl font-bold text-gray-800 mb-6">Development Team</h1>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {members.map((name, index) => (
                                                          <div key={index} className="bg-pastel-yellow p-4 rounded-xl shadow-sm">
                                                                      <p className="font-semibold text-gray-800">{name}</p>
                                                                                </div>
                                                                                        ))}
                                                                                              </div>
                                                                                                  </div>
                                                                                                    );
                                                                                                    }