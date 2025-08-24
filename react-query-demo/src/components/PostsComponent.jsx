import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
  const { isLoading, error, data, refetch, isFetching } = useQuery(
    "repoData", 
    () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    {
      staleTime: 5000,        // Data stays "fresh" for 5s
      cacheTime: 1000 * 60 * 5, // Data is cached in memory for 5 minutes
    }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="mb-4 p-3 border rounded">
          <h1 className="font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}

      <button
        onClick={() => refetch()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
    </div>
  );
}

export default PostsComponent;
