import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { fetchAdvancedSearch } from '../services/githubService'; 

function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query && !isAdvancedSearch) return;

    setLoading(true);

    try {
      let data;
      if (isAdvancedSearch) {
        data = await fetchAdvancedSearch(query, location, minRepos, currentPage);
        setUsers(data);
      } else {
        data = await fetchUserData(query, currentPage);
        setUsers([data]);
      }

      setTotalCount(data.totalCount || 1);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    setLoading(true);
    try {
      let data;
      if (isAdvancedSearch) {
        data = await fetchAdvancedSearch(query, location, minRepos, page);
      } else {
        data = await fetchUsers(query, page);
      }
      setUsers(data.users);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Enter GitHub username" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <div>
          <label>
            <input 
              type="radio" 
              name="searchMode" 
              checked={!isAdvancedSearch}
              onChange={() => setIsAdvancedSearch(false)}
            /> Standard Search
          </label>
          <label>
            <input 
              type="radio" 
              name="searchMode" 
              checked={isAdvancedSearch}
              onChange={() => setIsAdvancedSearch(true)}
            /> Advanced Search
          </label>
        </div>

        {isAdvancedSearch && (
          <div>
            <input 
              type="text" 
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 mb-2"
            />
            <input 
              type="number" 
              placeholder="Min Repos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="border p-2 mb-2"
            />
          </div>
        )}
        
        <button type="submit">{isAdvancedSearch ? 'Search with Advanced Criteria' : 'Search'}</button>
      </form>

      {loading && <p>Loading...</p>}

      <div>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
              </li>
            ))}
          </ul>
        )}
        {!loading && users.length === 0 && <p>No results found</p>}
      </div>

      {totalCount > 0 && (
        <div>
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span> Page {currentPage} </span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage * 10 >= totalCount}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
