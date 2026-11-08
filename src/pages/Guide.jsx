import React from "react";

export default function Guide() {
  return (
    <div className="bg-white p-8 rounded-apple shadow-soft space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        User Guide
      </h1>

      <div className="space-y-4 text-gray-600">
        <p>
          <strong>1. Adding Tasks:</strong> On the Home page, type your task
          in the input field. Select a category from the dropdown and click
          "Add".
        </p>

        <p>
          <strong>2. Managing Tasks:</strong> Click the checkbox next to a
          task to mark it as Done. Click the trash icon to delete it.
        </p>

        <p>
          <strong>3. Categories:</strong> Go to the Groups page to see all
          categories. You can also create new categories with custom pastel
          colors.
        </p>

        <p>
          <strong>4. Filtering:</strong> Click on any Group card to view
          only the tasks belonging to that category.
        </p>

        <p>
          <strong>5. Saving Tasks:</strong> Tasks and groups are saved in
          your browser using Local Storage, so they remain after refreshing
          the page on the same browser and device.
        </p>

        <p>
          <strong>6. User Information:</strong> Open the Users page to view
          sample user information retrieved using Axios from DummyJSON.
        </p>

        <p>
          <strong>7. Navigation:</strong> Use the navigation bar to move
          between Home, Groups, Users, Guide, and Developers.
        </p>
      </div>
    </div>
  );
}