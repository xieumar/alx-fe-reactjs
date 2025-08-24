import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const { 
    isLoading, 
    isError, 
    error, 
    data, 
    refetch, 
    isFetching 
  } = useQuery("repoData", fetchPosts, {
    staleTime: 5000,   // data considered fresh for 5s
    cacheTime: 1000 * 60 * 5, // keep in cache for 5 min
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="mb-4 border p-3 rounded-lg">
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
