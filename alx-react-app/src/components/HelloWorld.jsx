
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
export default App;
