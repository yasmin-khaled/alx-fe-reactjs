import React from 'react';
import UserContext from './../UserContext';

function UserDetails() {
    const data = React.useContext(UserContext);
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    );
  }
  
  export default UserDetails;