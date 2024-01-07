"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/pages/GithubUsers/GHUserCard"; // Import the newly created UserCard component
import { GHApiResponse } from "../../types/types"; // Import ApiResponse interface from a shared types file

import { GRAD_GOTHAN, GRAD_GOTHAN_TB } from "../../tw_gradients";

const API_ENDPOINT_URL = "https://api.github.com/users";

const ApiData = () => {
  const [data, setData] = useState<GHApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: GHApiResponse[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={GRAD_GOTHAN_TB + "container  p-4 text-slate-300"}>
      <h1 className="text-2xl font-bold mb-4">COMPONENT MODE- GitHub Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ApiData;
