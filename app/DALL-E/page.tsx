"use client";
import Image from "next/image";
import { useState } from "react";
import { RAD_PURPLE4 } from "../../tw_gradients";

// This code defines a React component called "DallE". It renders a form with a textarea and a submit button. When the form is submitted, it sends a POST request to "/api/OpenAI/dallev3" with the prompt text from the textarea. If the response is successful, it updates the state with the response data. If there is an error, it sets the response to "Failed to fetch response." The component also displays the response if it exists.
// app/fetch-db/page.tsx file

export default function DallE() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  var image_url = "";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/OpenAI/dallev3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data = await res.json(); // keep using await res.json()
        setResponse(data.data); // changed from setResponse(data.data[0].url.response)
        console.log("RESPONSE IS:", data.data);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setResponse("Failed to fetch response.");
    }
    setIsLoading(false);
  };

  return (
    <div className={RAD_PURPLE4 + "container mx-auto p-4 text-slate-300"}>
      <h1>Ask DALL-E</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          className="p-2 border border-gray-300 rounded dark:text-gray-200 text-gray-700"
          placeholder="Enter your prompt for Dall-E"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
          // className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Prompt"}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>{prompt}</p>

          <Image src={response} width={1792} height={1024} alt={response} />
        </div>
      )}
    </div>
  );
}
