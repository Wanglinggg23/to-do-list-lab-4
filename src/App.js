import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import Guide from './pages/Guide';
import Developers from './pages/Developers';
import './index.css';

function App() {
  // --- GLOBAL STATE ---
    // Centralized state to share across routes
      const [groups, setGroups] = useState([
          { id: '1', name: 'Personal', color: 'bg-pastel-pink' },
              { id: '2', name: 'School', color: 'bg-pastel-blue' },
                  { id: '3', name: 'Work', color: 'bg-pastel-green' }
                    ]);

                      const [tasks, setTasks] = useState([
                          { id: 1, text: 'Buy groceries', groupId: '1', completed: false },
                              { id: 2, text: 'Finish React Lab 3', groupId: '2', completed: false },
                                  { id: 3, text: 'Reply to emails', groupId: '3', completed: true },
                                    ]);

                                      // --- HANDLERS ---
                                        const addTask = (text, groupId) => {
                                            const newTask = { id: Date.now(), text, groupId, completed: false };
                                                setTasks([...tasks, newTask]);
                                                  };

                                                    const toggleTask = (id) => {
                                                        setTasks(tasks.map(task => 
                                                              task.id === id ? { ...task, completed: !task.completed } : task
                                                                  ));
                                                                    };

                                                                      const deleteTask = (id) => {
                                                                          setTasks(tasks.filter(task => task.id !== id));
                                                                            };

                                                                              const addGroup = (name, color) => {
                                                                                  const newGroup = { id: Date.now().toString(), name, color };
                                                                                      setGroups([...groups, newGroup]);
                                                                                        };

                                                                                          return (
                                                                                              <BrowserRouter>
                                                                                                    <div className="min-h-screen flex flex-col">
                                                                                                            {/* NAVIGATION BAR */}
                                                                                                                    <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
                                                                                                                              <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
                                                                                                                                          <NavLink to="/" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "hover:text-gray-800"}>Home</NavLink>
                                                                                                                                                      <NavLink to="/groups" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "hover:text-gray-800"}>Groups</NavLink>
                                                                                                                                                                  <NavLink to="/guide" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "hover:text-gray-800"}>Guide</NavLink>
                                                                                                                                                                              <NavLink to="/developers" className={({isActive}) => isActive ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "hover:text-gray-800"}>Developers</NavLink>
                                                                                                                                                                                        </div>
                                                                                                                                                                                                </nav>

                                                                                                                                                                                                        {/* MAIN CONTENT AREA */}
                                                                                                                                                                                                                <main className="flex-grow max-w-3xl w-full mx-auto p-4 sm:p-6 lg:p-8">
                                                                                                                                                                                                                          <Routes>
                                                                                                                                                                                                                                      <Route path="/" element={<Home tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} addTask={addTask} groups={groups} />} />
                                                                                                                                                                                                                                                  <Route path="/groups" element={<Groups groups={groups} addGroup={addGroup} tasks={tasks} />} />
                                                                                                                                                                                                                                                              <Route path="/groups/:groupId" element={<GroupDetail tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} addTask={addTask} groups={groups} />} />
                                                                                                                                                                                                                                                                          <Route path="/guide" element={<Guide />} />
                                                                                                                                                                                                                                                                                      <Route path="/developers" element={<Developers />} />
                                                                                                                                                                                                                                                                                                </Routes>
                                                                                                                                                                                                                                                                                                        </main>
                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                  </BrowserRouter>
                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    export default App;