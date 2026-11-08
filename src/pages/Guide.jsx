
import React from "react";
import { Link } from "react-router-dom";

export default function Guide() {
  return (
    <div className="bg-white p-8 rounded-apple shadow-soft space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        User Guide
      </h1>

      <div className="space-y-4 text-gray-600">
        <p>
          <strong>1. Adding Tasks:</strong> On the{" "}
          <Link to="/" className="text-purple-600 font-semibold hover:underline">
            Home page
          </Link>
          , type your task in the input field. Select a category from the
          dropdown and click "Add".
        </p>

        <p>
          <strong>2. Managing Tasks:</strong> On the{" "}
          <Link to="/" className="text-purple-600 font-semibold hover:underline">
            Home page
          </Link>
          , click "Done" to mark a task as completed or "Not Done" to
          mark it as pending. Click "Delete" to remove a task.
        </p>

        <p>
          <strong>3. Categories:</strong> Visit the{" "}
          <Link to="/groups" className="text-purple-600 font-semibold hover:underline">
            Groups page
          </Link>
          {" "}to see all categories. You can also create new categories
          with custom pastel colors.
        </p>

        <p>
          <strong>4. Filtering:</strong> Visit the{" "}
          <Link to="/groups" className="text-purple-600 font-semibold hover:underline">
            Groups page
          </Link>
          {" "}and click any Group card to view only the tasks belonging
          to that category.
        </p>

        <p>
          <strong>5. Saving Tasks:</strong> Tasks and groups are saved in
          your browser using Local Storage, so they remain after refreshing
          the page on the same browser and device.
        </p>

        <p>
          <strong>6. User Information:</strong> Open the{" "}
          <Link to="/users" className="text-purple-600 font-semibold hover:underline">
            Users page
          </Link>
          {" "}to view sample user information retrieved using Axios
          from DummyJSON.
        </p>

        <p>
          <strong>7. Navigation:</strong> Use the navigation bar or these
          links to move between pages:
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/"
            className="rounded-lg bg-pastel-yellow px-4 py-2 text-gray-800 hover:shadow-sm"
          >
            Home
          </Link>

          <Link
            to="/groups"
            className="rounded-lg bg-pastel-yellow px-4 py-2 text-gray-800 hover:shadow-sm"
          >
            Groups
          </Link>

          <Link
            to="/users"
            className="rounded-lg bg-pastel-yellow px-4 py-2 text-gray-800 hover:shadow-sm"
          >
            Users
          </Link>

          <Link
            to="/developers"
            className="rounded-lg bg-pastel-yellow px-4 py-2 text-gray-800 hover:shadow-sm"
          >
            Developers
          </Link>
        </div>
      </div>
    </div>
  );
}