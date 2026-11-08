import React from "react";
import UserInfoCard from "../components/UserInfoCard";

export default function Users() {
  return (
    <div className="space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          User Information
        </h1>
        <p className="text-gray-500 mt-2">
          Sample information retrieved from DummyJSON API.
        </p>
      </header>

      <UserInfoCard />
    </div>
  );
}