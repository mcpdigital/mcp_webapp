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
    <div className="text-slate-300 overflow-hidden min-w-min text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#06011b_14.06%,#103f57_51.02%,#030e2d_79.09%)] bg-zinc-900 hover:bg-zinc-800 p-4 w-full">
      <p className="leading-[30px] flex text-xl sm:text-xl md:text-3xl lg:text-3xl justify-center font-bold mb-4">
        An&nbsp;
        <span className="leading-[30px] text-xl text-orange-600 italic sm:text-xl md:text-3xl lg:text-3xl ">
          useState
        </span>
        &nbsp;example.
      </p>
      <p className="flex sm.leading-[2rem] text-xl sm:text-xl md:text-3xl lg:text-3xl justify-center font-bold mb-4">
        The counter is at: &nbsp;
        <span className=" sm-leading-[2rem] flex justify-center text-center text-blue-500">
          {steps}&nbsp;now!
        </span>
      </p>

      <p className="min-w-32 flex flex-row mt-18 gap-4 justify-center">
        <button
          className="w-16 border-4 p-2 rounded-lg  border-zinc-500 hover:border-sky-500"
          onClick={increment}
        >
          +
        </button>
        <button
          className="w-16 border-4 p-2 rounded-lg  border-zinc-500 hover:border-violet-500"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="w-32 border-4 p-2 rounded-lg  border-zinc-500 hover:border-red-400"
          onClick={reset}
        >
          Reset
        </button>
      </p>
      <p className="text-red-500 flex justify-center leading-[30px] text-sm mt-3">
        used (leading-[2rem ou 30px]) to valign fonts
      </p>
    </div>
  );
}
