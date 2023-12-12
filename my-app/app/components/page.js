'use client'

import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Task from './components/task'
import MyLayout from './components/MyLayout';

const AuthContext = React.createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    // login logic
  }

  const logout = () => {
    // logout logic
  }

  const value = {
    currentUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default function Home() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id))
  }
  const updateTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? task : t))
  }
  const toggleTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? { ...task, complete: !task.complete } : t))
  }
  const clearTasks = () => setTasks([])
  const markAllComplete = () => setTasks(tasks.map((t) => ({ ...t, complete: true })))
  const markAllIncomplete = () => setTasks(tasks.map((t) => ({ ...t, complete: false })))

  useEffect(() => {
    const tasks = [
      new Task('Learn React', 1),
      new Task('Learn Next.js', 2),
      new Task('Learn GraphQL', 3),
      new Task('Learn TypeScript', 4)
    ]
    setTasks(tasks)
  }, [])

  return (
    <MyLayout>
      <div className='flex bg-pink-900 flex-col'>
        <MyContext.Provider value='Hello World'>
          <MyComponent />
        </MyContext.Provider>
        {/* header */}
        <div className='flex w-100'>
          <h1 className='text-3xl'>Personal To Do App</h1>
        </div>
        {/* new task form */}
        <div className='flex flex-col bg-pink-700 p-5'>
              <h2 className='text-xl flex w-100 justify-center'>
                  Add Task
              </h2>
              <div className='flex flex-col bg-pink-400 p-5'>
                  <form className='flex flex-row justify-between' 
                        onSubmit={(e) => { e.preventDefault() 
                                                  const name = e.currentTarget.name.value
                                                  const id = tasks.length + 1 
                                                  addTask(new Task(name, id)) }}>
                      <div>
                        <label htmlFor='name' className='m-2' ><b>Task Name: </b></label>
                        <input id='name' name='name' type='text' className='m-2 rounded-2xl p-1 p-l-2'/>
                      </div>
                      <div>
                        <button type='submit' className='bg-green-700 p-2 rounded-2xl w-64'>Add Task</button>
                      </div>
                  </form>
              </div>
          </div>
        {/* task list */}
        <div className='flex flex-col bg-pink-700 p-5'>
              <h2 className='text-xl flex w-100 justify-center'>
                  My Tasks
              </h2>
              <div className='flex flex-col bg-pink-400 p-5'>
                  {tasks.map((task) => (
                      <div key={task.id} className='m-5 p-5 bg-yellow-700'>
                          <div>
                            <p>
                                <b>Task id:</b> {task.id}
                            </p>
                            <p>
                                <b>Task name:</b> {task.name}
                            </p>
                            <p>
                                <b>Task complete:</b> {task.complete ? 'Yes' : 'No'}
                            </p>
                          </div>
                          <div>
                            <button onClick={() => toggleTask(task)}>
                                Toggle Task
                            </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
      </div>
    </MyLayout>
  )
}