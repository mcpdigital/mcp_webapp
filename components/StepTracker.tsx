"use client";

import React, { useState } from "react";

export default function StepTracker() {
  const [steps, setSteps] = useState<number>(0);

  function increment() {
    setSteps((prevState) => prevState + 1);
  }

  function decrement() {
    setSteps((prevState) => Math.max(0, prevState - 1));
  }

  function reset() {
    setSteps(0);
  }

  return (
    <div className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#031b01_14.06%,#103f57_51.02%,#030e2d_79.09%)] bg-zinc-900 hover:bg-zinc-800 p-4 w-full">
      <p className="leading-[30px] flex text-3xl justify-center font-bold mb-4">
        An&nbsp;
        <span className="leading-[30px]  text-orange-600 italic text-3xl">
          useState
        </span>
        &nbsp;example.
      </p>
      <p className="flex leading-[30px] text-3xl justify-center font-bold mb-4">
        The counter is at: &nbsp;
        <span className="leading-[30px]  flex justify-center text-center text-4xl text-blue-500">
          {steps}&nbsp;now!
        </span>
      </p>

      <p className="flex flex-row mt-18 gap-4 justify-center">
        <button
          className="w-44 width-2 border-4 p-2  border-zinc-500 hover:border-sky-500"
          onClick={increment}
        >
          Add one
        </button>
        <button
          className="min-w-44 border-4 p-2 border-zinc-500 hover:border-violet-500"
          onClick={decrement}
        >
          Subtract one
        </button>
        <button
          className="w-44 border-4 p-2 border-zinc-500 hover:border-red-400"
          onClick={reset}
        >
          Reset counter
        </button>
      </p>
      <p className="text-red-500 flex justify-center leading-[30px] text-sm mt-3">
        To change font size and color in the middle of a p I used
        (leading-[30px])
      </p>
    </div>
  );
}
