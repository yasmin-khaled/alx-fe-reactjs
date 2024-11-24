import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery("fetchData", fetchData, {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

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
