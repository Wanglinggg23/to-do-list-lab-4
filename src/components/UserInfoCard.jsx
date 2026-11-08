import React, { useEffect, useState } from "react";
import axios from "axios";

function UserInfoCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users/1");
        setUser(response.data);
      } catch (error) {
        setError("Unable to load user information. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <div className="bg-white p-6 rounded-apple shadow-soft">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Sample User Information
      </h2>

      {loading && (
        <p className="text-gray-500">Loading user information...</p>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.image}
            alt="User"
            className="w-16 h-16 rounded-full"
          />

          <div className="text-gray-600 text-sm space-y-1">
            <p className="font-semibold text-gray-800">
              {user.firstName} {user.lastName}
            </p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfoCard;