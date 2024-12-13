
// Functional Component
const HelloWorldFunctionComponent = () => <h1>Hello, World!</h1>;

// Class Component
class HelloWorldClassComponent extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

//HelloComponent has a prop called name
const HelloComponent = ({ name }) => <h1>Hello, {name}!</h1>;

//call HelloComponent and set the name prop
<HelloComponent name="Yasmin" /> 


//import useState hook from react
import { useState } from 'react';

//Counter component
const Counter = () => {
    /**
     * The argument passed to useState(0) is the initial state value.
     * Destructure the returned array to count which represents the current state value, and
     * setCount which is a functionn to update the state.
     */
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


import React from 'react';

//Parent Component
function App() {
  const userData = { name: "Yasmin Rady", email: "yasmin.rady@valeo.com" };
  return <ProfilePage userData={userData} />;
}

//Intermediate Component 1
function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

//Intermediate Component 2
function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

//Target Component
function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
//export default App;


import React, { createContext, useContext } from "react"; //import createContext function and useContext hook from react

const UserContext = createContext(); // Create a context to share userData

// Parent Component
function App() {
  const userData = { name: "Yasmin Rady", email: "yasmin.rady@valeo.com" };
  return (
    // Provide userData to all descendants
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

// Intermediate Components 1 & 2
function ProfilePage() {
  return <UserInfo />;
}
function UserInfo() {
  return <UserDetails />;
}

// Target Component
function UserDetails() {
  const userData = useContext(UserContext); // Retrieves UserContext, so that UserDetails can consume userData

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
//export default App;

import {create} from 'zustand'; //import create function from zustand

//create store that includes state 'tasks' and actions 'addTask' and 'removeTask'
const useTaskStore = create((set) => ({
  tasks: [ 
    { id: 1, title: 'Introduce State Management', completed: false },
    { id: 2, title: 'Introduce Zustand', completed: true }
],
  addTask: (task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
  },
}));
export default useTaskStore;

//TaskList Component
const TaskList = () => {
    const { removeTask } = useTaskStore();
    removeTask(0); //Action call

    //selector to select addTask only
    const addTask = useTaskStore((state) => state.addTask);

    return <></>;
}


import create from 'zustand';
import { logger, devtools, persist } from 'zustand/middleware'; //import built-in middlewares

/**
 * Call create() which will create the store, then pass a middleware, logger, which 
 * wraps the state initializer
 */
const useTaskStoreWrapped = create(
  logger((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  }))
);

//export default useTaskStoreWrapped;

import create from 'zustand';

/**
 * roleMiddleware is a custom middleware function that receives a state initializer function,
 * It returns a function that takes the 3 built-in function which can set, get the state and attach additional behaviors.
 */
const roleMiddleware = (config) => (set, get, api) => 
  config((args) => {
    const state = get(); //get the current state
    if (state.isAuthenticated) {
      set(args); //allow state update, only if isAuthenticated. Otherwise, block the state update.
    } else {
      console.warn('Error: User is not authenticated');
    }
  }, get, api);

const useAuthStore = create(roleMiddleware((set) => ({
  isAuthenticated: false,
  userRole: null,
  userName: null,
  
  login: (role, name) => set({ isAuthenticated: true, userRole: role, userName: name }),
  logout: () => set({ isAuthenticated: false, userRole: null, userName: null }),
})));

