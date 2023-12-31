"use client";

import React, { useState, useEffect } from "react";

function FetchApiComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>My Data:</h1>
      <DataDisplay data={data} />
    </div>
  );
}

function DataDisplay({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
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
