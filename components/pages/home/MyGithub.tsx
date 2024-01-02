"use client";
import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import UserCard from "@/components/pages/GithubUsers/GHUserCard";
import { GRAD_GOTHAN_TB } from "@/tw_gradients";
const FetchApi: React.FC = () => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mcpdigital");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No data found</p>;
  }
  // The key bellow is needed when maping multiple users REACT maps it, so since each user have an id, a single user can pass it too anyway
  return (
    <div className={GRAD_GOTHAN_TB + "container items-center p-4"}>
      <div className=" shadow-lg gap-4">
        <UserCard key={data.id} user={data} />
      </div>
    </div>
  );
};

export default FetchApi;
