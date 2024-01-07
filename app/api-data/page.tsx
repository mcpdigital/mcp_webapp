// pages/api-data.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  GRAD_GOTHAN,
  GRAD_GOTHAN_TB,
  RAD_PURPLE2,
  RAD_PURPLE1,
  RAD_PURPLE,
} from "../../tw_gradients";

const API_ENDPOINT_URL = "https://api.github.com/users";
interface ApiResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const ApiData = () => {
  const [data, setData] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'API_ENDPOINT_URL' with your API endpoint
        const response = await fetch(API_ENDPOINT_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={GRAD_GOTHAN_TB + "container  p-4 text-slate-300"}>
      <h1 className="text-2xl font-bold mb-4">PAGE MODE - GITHUB users</h1>
      <div
        className={
          " col-span-full grid cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        }
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={
              "mb-4 break-inside-avoid p-6 rounded-xl bg-white dark:bg-slate-800  w-[250px] h-[350px] break-words text-center m-auto shadow-lg"
            }
          >
            <h2 className=" text-lg font-semibold mb-2  ">{item.login}</h2>
            <Image
              src={item.avatar_url}
              alt={`Image for ${item.login}`}
              className="   rounded-full"
              objectPosition="fill"
              width="250"
              height={1200}
            />

            <a
              href={item.html_url}
              className="text-sm break-words text-blue-600 hover:underline break-inside-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.html_url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
