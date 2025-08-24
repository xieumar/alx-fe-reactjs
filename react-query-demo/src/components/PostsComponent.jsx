import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
  // Fetch function extracted for clarity
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const { 
    isLoading, 
    isError, 
    error, 
    data, 
    refetch, 
    isFetching 
  } = useQuery("postsData", fetchPosts, {
    staleTime: 5000,          // Data stays fresh for 5s
    cacheTime: 1000 * 60 * 5, // Cache persists for 5 minutes
    refetchOnWindowFocus: true,  // Refetch when user focuses window/tab
    keepPreviousData: true       // Keep old data while fetching new one
  });

  if (isLoading) return "Loading...";

  if (isError) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded">
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
