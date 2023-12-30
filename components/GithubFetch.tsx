"use client";
import React from "react";
import Image from "next/image";
import { Space_Mono } from "next/font/google";

const FetchApi: React.FC = () => {
  const [userData, setUserData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mcpdigital");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>No data found</p>;
  }

  return (
    <div className=" flex flex-col content-center justify-center">
      <div className="bg-gray-900 text-zinc-200 min-h-16 text-center">
        <p className="uppercase ml-5 pt-3 align-bottom font-semibold text-2xl">
          {userData.login} -&gt;{" "}
          <span className="ml-5 normal-case text-xl">
            Fetched from GitHub API.
          </span>
        </p>
      </div>
      <div className="flex flex-col mb-10 bg-gray-800 p-4 mt-2 m-auto shadow-md rounded-lg text-center max-w-min justify-center">
        <h2 className="text-xl mb-2">User: {userData.login}</h2>
        <p className="text-gray-200">ID: {userData.id}</p>
        <p className="text-gray-300">Avatar Link: {userData.avatar_url}</p>
        <Image
          src={userData.avatar_url}
          alt="User Avatar"
          className="m-auto rounded-full mt-2"
          style={{ width: "100px" }}
          width="200"
          height="200"
        />
        <p className="text-gray-800 mt-2">Name: {userData.name}</p>
        <p className="text-blue-500 mt-2">
          GitHub Profile:{" "}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            {userData.html_url}
          </a>
        </p>
        <p className="text-gray-200 mt-2">
          Public Repos: {userData.public_repos}
        </p>
        <p className="text-gray-300 mt-2">Followers: {userData.followers}</p>
        <p className="text-gray-300 mt-2">Following: {userData.following}</p>
      </div>
    </div>
  );
};

export default FetchApi;
