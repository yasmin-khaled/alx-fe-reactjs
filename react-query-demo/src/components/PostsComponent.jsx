import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
const PostsComponent = () => {
  const { data, error, isError, isLoading, refetch } = useQuery("fetchPosts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true, 
    keepPreviousData: true
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
