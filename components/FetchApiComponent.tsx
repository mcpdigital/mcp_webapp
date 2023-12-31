import React, { useState, useEffect } from "react";
// Define the type for the items in the data array
// Define the type for the items in the data array
interface Item {
  id: number;
  title: string;
  // Add other properties as needed
}

// Use this type for the data prop
interface DataDisplayProps {
  data: Item[];
}

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

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FetchApiComponent;
