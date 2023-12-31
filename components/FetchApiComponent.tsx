"use client";

import React, { useState, useEffect } from "react";

function FetchApiComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      // fetch("https://jsonplaceholder.typicode.com/posts")
      // fetch("https://www.mcpdigital.com/main/wp-json/wp/v2/pages/816")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>My Data or No Data:</h1>
      <DataDisplay data={data} />
    </div>
  );
}

function DataDisplay({ data }) {
  if (!Array.isArray(data)) {
    return null;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.rendered}
          <p>UserID: {item.userId}</p>
          <h1>Title</h1>
          {item.title}
          <p>Body</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchApiComponent;
