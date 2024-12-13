import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
// login
const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);
    try {

      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (username.trim()) handleSearch(username);
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target='_blank'>View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
