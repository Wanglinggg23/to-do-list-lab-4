
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTaskStore from "../store/taskStore";

function GroupDetail() {
  const { groupId } = useParams();
  const [taskText, setTaskText] = useState("");

  const groups = useTaskStore((state) => state.groups);
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const clearGroupTasks = useTaskStore((state) => state.clearGroupTasks);

  const group = groups.find((item) => item.id === groupId);
  const groupTasks = tasks.filter((task) => task.groupId === groupId);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText.trim(), groupId);
    setTaskText("");
  };

  if (!group) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Group not found.</h1>
        <Link to="/groups" className="text-purple-600 underline">
          Back to Groups
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/groups" className="text-purple-600 underline">
          ← Back to Groups
        </Link>

        <h1 className="my-5 text-3xl font-bold">{group.name}</h1>

        <form onSubmit={handleAddTask} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a new task..."
            className="min-w-0 flex-1 rounded-xl border p-3"
          />

          <button className="rounded-xl bg-purple-600 px-5 py-3 text-white">
            Add Task
          </button>
        </form>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Tasks</h2>

          <button
            onClick={() => {
              if (window.confirm("Clear all tasks in this group?")) {
                clearGroupTasks(groupId);
              }
            }}
            className="rounded-lg bg-red-100 px-3 py-2 text-sm"
          >
            Clear Group Tasks
          </button>
        </div>

        {groupTasks.length === 0 ? (
          <p className="text-gray-500">No tasks in this group yet.</p>
        ) : (
          <div className="space-y-3">
            {groupTasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-soft"
              >
                <span className={task.completed ? "line-through text-gray-400" : ""}>
                  {task.text}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="rounded-lg bg-green-100 px-3 py-2"
                  >
                    {task.completed ? "Not Done" : "Done"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="rounded-lg bg-red-100 px-3 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default GroupDetail;