import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set) => ({
      groups: [
        { id: "1", name: "Personal", color: "bg-pastel-pink" },
        { id: "2", name: "School", color: "bg-pastel-blue" },
        { id: "3", name: "Work", color: "bg-pastel-green" },
      ],

      tasks: [
        { id: 1, text: "Buy groceries", groupId: "1", completed: false },
        { id: 2, text: "Finish React Lab 3", groupId: "2", completed: false },
        { id: 3, text: "Reply to emails", groupId: "3", completed: true },
      ],

      addTask: (text, groupId) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              text,
              groupId,
              completed: false,
            },
          ],
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, completed: !task.completed }
              : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      addGroup: (name, color) =>
        set((state) => ({
          groups: [
            ...state.groups,
            {
              id: Date.now().toString(),
              name,
              color,
            },
          ],
        })),

      deleteGroup: (id) =>
        set((state) => ({
          groups: state.groups.filter((group) => group.id !== id),
          tasks: state.tasks.filter((task) => task.groupId !== id),
        })),

      clearGroupTasks: (groupId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.groupId !== groupId),
        })),
    }),
    {
      name: "todo-list-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTaskStore;