import React, { useEffect, useState } from "react";

function FetchWP() {
  const [data, setData] = useState({ posts: [], pages: [], media: [] });

  useEffect(() => {
    const baseUrl = "https://mcpdigital.com/main/wp-json/wp/v2";
    const endpoints = ["posts", "pages", "media"];

    Promise.all(
      endpoints.map((endpoint) =>
        fetch(`${baseUrl}/${endpoint}`).then((response) => response.json())
      )
    )
      .then((data) => {
        const [posts, pages, media] = data;
        setData({ posts, pages, media });
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>WordPress Data:</h1>
      <h2>Posts:</h2>
      {data.posts.map((post) => (
        <div key={post.id}>{post.title.rendered}</div>
      ))}
      <h2>Pages:</h2>
      {data.pages.map((page) => (
        <div key={page.id}>{page.title.rendered}</div>
      ))}
      <h2>Media:</h2>
      {data.media.map((item) => (
        <div key={item.id}>{item.title.rendered}</div>
      ))}
    </div>
  );
}

export default FetchWP;
