
import { useState } from "react";
import { Link } from "react-router-dom";
import useTaskStore from "../store/taskStore";

function Groups() {
  const [groupName, setGroupName] = useState("");

  const groups = useTaskStore((state) => state.groups);
  const tasks = useTaskStore((state) => state.tasks);
  const addGroup = useTaskStore((state) => state.addGroup);
  const deleteGroup = useTaskStore((state) => state.deleteGroup);

  const handleAddGroup = (e) => {
    e.preventDefault();

    if (!groupName.trim()) return;

    addGroup(groupName.trim());
    setGroupName("");
  };

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">Task Groups</h1>
        <p className="mb-6 text-gray-500">
          Create and organize your tasks into groups.
        </p>

        <form onSubmit={handleAddGroup} className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name..."
            className="min-w-0 flex-1 rounded-xl border p-3"
          />

          <button className="rounded-xl bg-purple-600 px-5 py-3 text-white">
            Create Group
          </button>
        </form>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const groupTasks = tasks.filter(
              (task) => task.groupId === group.id
            );

            return (
              <div
                key={group.id}
                className="rounded-2xl bg-white p-5 shadow-soft"
              >
                <h2 className="mb-2 text-xl font-bold">{group.name}</h2>

                <p className="mb-4 text-sm text-gray-500">
                  {groupTasks.length} task(s)
                </p>

                <div className="flex flex-wrap gap-2">
                  <Link
                    to={`/groups/${group.id}`}
                    className="rounded-lg bg-purple-100 px-4 py-2"
                  >
                    View Tasks
                  </Link>

                  <button
                    onClick={() => {
                      if (window.confirm("Delete this group and all its tasks?")) {
                        deleteGroup(group.id);
                      }
                    }}
                    className="rounded-lg bg-red-100 px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Groups;