function UserDetails() {
    const data = useContext(userData);
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    );
  }
  
  export default UserDetails;