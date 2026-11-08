import { useState } from "react";
import useTaskStore from "../store/taskStore";
import UserInfoCard from "../components/UserInfoCard";

function Home() {
  const [taskText, setTaskText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("1");

  const groups = useTaskStore((state) => state.groups);
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!taskText.trim() || !selectedGroup) return;

    addTask(taskText.trim(), selectedGroup);
    setTaskText("");
  };

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl">

        {/* Dashboard Header */}
        <h1 className="mb-2 text-3xl font-bold">
          Welcome to Your To-Do List!
        </h1>

        <p className="mb-6 text-gray-500">
          Organize your tasks and stay productive.
        </p>

        {/* Dashboard Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-gray-500">Total Tasks</p>
            <h2 className="text-3xl font-bold">
              {tasks.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-gray-500">Completed</p>
            <h2 className="text-3xl font-bold text-green-600">
              {completed}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold text-orange-500">
              {pending}
            </h2>
          </div>

        </div>

        {/* Add Task */}
        <section className="mb-8 rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-xl font-bold">
            Add a Task
          </h2>

          <form
            onSubmit={handleAddTask}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Enter a task..."
              className="min-w-0 flex-1 rounded-xl border p-3"
            />

            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="rounded-xl border p-3"
            >
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="rounded-xl bg-purple-600 px-5 py-3 text-white"
            >
              Add Task
            </button>
          </form>
        </section>

        {/* Recent Tasks */}
        <section className="mb-8 rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-4 text-xl font-bold">
            Recent Tasks
          </h2>

          {tasks.length === 0 ? (
            <p className="text-gray-500">
              No tasks yet. Add your first task!
            </p>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-wrap items-center justify-between gap-3 border-b pb-3"
                >
                  <span
                    className={
                      task.completed
                        ? "text-gray-400 line-through"
                        : ""
                    }
                  >
                    {task.text}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="rounded-lg bg-green-100 px-3 py-2 text-sm"
                    >
                      {task.completed ? "Not Done" : "Done"}
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="rounded-lg bg-red-100 px-3 py-2 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* API User Information */}
        <UserInfoCard />

      </div>
    </main>
  );
}

export default Home;