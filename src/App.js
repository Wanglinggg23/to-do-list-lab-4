
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";
import Guide from "./pages/Guide";
import Developers from "./pages/Developers";
import Users from "./pages/Users";

import useTaskStore from "./store/taskStore";
import "./index.css";

function App() {
  const groups = useTaskStore((state) => state.groups);
  const tasks = useTaskStore((state) => state.tasks);

  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const addGroup = useTaskStore((state) => state.addGroup);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-800"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/groups"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-800"
              }
            >
              Groups
            </NavLink>

            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-800"
              }
            >
              Users
            </NavLink>

            <NavLink
              to="/guide"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-800"
              }
            >
              Guide
            </NavLink>

            <NavLink
              to="/developers"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                  : "hover:text-gray-800"
              }
            >
              Developers
            </NavLink>
          </div>
        </nav>

        <main className="flex-grow max-w-3xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  addTask={addTask}
                  groups={groups}
                />
              }
            />

            <Route
              path="/groups"
              element={
                <Groups
                  groups={groups}
                  addGroup={addGroup}
                  tasks={tasks}
                />
              }
            />

            <Route
              path="/groups/:groupId"
              element={
                <GroupDetail
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  addTask={addTask}
                  groups={groups}
                />
              }
            />

            <Route path="/users" element={<Users />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;