import React from "react";
import Image from "next/image";
import { GHApiResponse } from "../../../types/types"; // Import ApiResponse interface from a shared types file

interface UserCardProps {
  user: GHApiResponse; // Pass a single user data to the component
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="mb-4 break-inside-avoid p-6 rounded-xl bg-white dark:bg-slate-800 w-[250px] h-[350px] break-words text-center m-auto shadow-lg">
      <h2 className="text-lg font-semibold mb-2">{user.login}</h2>
      <Image
        src={user.avatar_url}
        alt={`Image for ${user.login}`}
        className="rounded-full"
        objectPosition="fill"
        width={250}
        height={1200}
      />
      <a
        href={user.html_url}
        className="text-sm break-words text-blue-600 hover:underline break-inside-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        {user.html_url}
      </a>
    </div>
  );
};

export default UserCard;
