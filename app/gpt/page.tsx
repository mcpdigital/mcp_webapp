"use client";

import { useState } from "react";
// This code snippet is a React functional component called GPT. It sets up a form with a textarea input and a button. When the form is submitted, it sends a POST request to the /api/OpenAI/openaiv4 endpoint with the value of the textarea as the request payload. If the response from the server is successful, it displays the response in a separate section below the form. The component manages the state of the prompt (input value), response (server response), and isLoading (whether the request is in progress) using the useState hook.
export default function GPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/OpenAI/openaiv4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data = await res.json();
        setResponse(data.response);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setResponse("Failed to fetch response.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          className="p-2 border border-gray-300 rounded dark:text-gray-200 text-gray-700"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Prompt"}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
