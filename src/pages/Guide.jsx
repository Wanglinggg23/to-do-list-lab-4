import { Link } from "react-router-dom";

function Guide() {
  const sections = [
    {
      title: "1. How to Create a Task Group",
      description:
        "Go to the Task Groups page. Enter your desired group name in the input field and click the Add Group button. Your new group will appear in the list and can be used to organize your tasks.",
    },
    {
      title: "2. How to Add a Task to a Selected Group",
      description:
        "Go to the Dashboard and enter your task in the input field. Select the group where you want to save the task, then click Add Task. Your task will be added to the selected group.",
    },
    {
      title: "3. How to Mark a Task as Done or Not Done",
      description:
        "Each task has a button that allows you to change its status. Click Done to mark a task as completed. If you want to make it pending again, click Not Done.",
    },
    {
      title: "4. How to Delete a Task",
      description:
        "Find the task you want to remove and click its Delete button. The selected task will be removed from the task list.",
    },
    {
      title: "5. How to Navigate Between Pages and Task Groups",
      description:
        "Use the navigation bar, buttons, or links to move between the Dashboard, Task Groups, User Information, User Guide, and Developers pages. To view tasks in a specific group, click the group name or its View Category link.",
    },
    {
      title: "6. How to Retrieve User Information Using Axios and DummyJSON",
      description:
        "The application uses Axios to send a GET request to https://dummyjson.com/users/1. The API provides sample user information, including the full name, email address, username, and profile picture. A loading indicator appears while retrieving the information, and an error message appears if the request fails.",
    },
    {
      title: "7. How Zustand Manages and Shares Task Data Across Components",
      description:
        "Zustand manages and shares task and group data throughout the application. Different components, such as the Dashboard and Task Groups pages, can access and update the same information. When a user adds, completes, or deletes a task, the changes are reflected in the components that use the Zustand store. The persist feature saves the data in the browser's local storage so tasks and groups remain after refreshing the page.",
    },
  ];

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            User Guide
          </h1>
          <p className="text-gray-500">
            Learn how to use the To-Do List Application.
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={index}
              className="rounded-2xl bg-white p-6 shadow-soft"
            >
              <h2 className="mb-3 text-xl font-bold text-purple-700">
                {section.title}
              </h2>
              <p className="leading-7 text-gray-600">
                {section.description}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl bg-purple-600 px-5 py-3 text-white hover:bg-purple-700"
          >
            Dashboard
          </Link>

          <Link
            to="/groups"
            className="rounded-xl bg-purple-100 px-5 py-3 text-purple-800 hover:bg-purple-200"
          >
            Task Groups
          </Link>

          <Link
            to="/users"
            className="rounded-xl bg-purple-100 px-5 py-3 text-purple-800 hover:bg-purple-200"
          >
            User Information
          </Link>

          <Link
            to="/developers"
            className="rounded-xl bg-purple-100 px-5 py-3 text-purple-800 hover:bg-purple-200"
          >
            Developers
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Guide;