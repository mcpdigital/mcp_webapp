// GradientDivs.js
import React from "react";
import * as allgradients from "../../tw_gradients";
import { GRAD_GOTHAN, GRAD_OCEANIC } from "../../tw_gradients";
//Component to Show the complete page of gradients with extras
/* This code snippet defines a React functional component called ShowGrads. It renders a page displaying gradients and additional information. The component uses Tailwind CSS classes for styling. The page includes a text box that appears only on large screens, a section displaying selected gradients and radials, and some explanatory text. The gradients and radials are rendered dynamically using the Object.entries method to iterate over an object called allgradients. Each gradient is rendered as a div element with a unique key and a combination of Tailwind CSS classes for styling. */
const ShowGrads = () => (
  <div className={GRAD_GOTHAN + " p-4 "}>
    <div className="static grid grid-flow-col  grid-cols-1 ">
      <div className="absolute mt-0 grid border border-slate-400 p-2 rounded-lg invisible max-w-[10%] sm:visible sm:max-w-[26%] overflow-hidden text-center ">
        <p className=" font-extrabold p-1">
          This page shows some gradients selected from{" "}
          <a
            href="https://hypercolor.dev"
            className={
              GRAD_OCEANIC +
              " underline bg-orange-600  text-transparent bg-clip-text test-center"
            }
          >
            HYPERCOLOR.DEV
          </a>
        </p>{" "}
        <p className="text-justify p-1">
          There is an extensive use of tailwindcss gradients and correct
          positioning to keep it as responsive as possible.
        </p>{" "}
        <p className="text-justify p-1">
          For this textbox, a single column {"grid"} is created, with a father
          div defined as {"static"} and the children as {"absolute"}
          {"."}
        </p>{" "}
        <p className="text-justify p-1">
          This text div only appears when the display is small or greater:{" "}
          sm:max-w-[400px] sm:min-w-[400px] min-w[360px].
        </p>
        <p className="text-justify p-1">
          Using a single column grid enabled the gradients div to not be
          bothered by this textbox.
        </p>
        <p className="text-justify p-1">
          When the screen is too small, this textbox simply disappears using
          inivisble.
        </p>
        <p className="text-justify p-1">
          It does not matter how many child divs I add it is an ABSOLUTE CHILD !
        </p>
      </div>
    </div>

    <div className="border-wihte rounded-lg  border-slate-500 border-2  mx-[5%] sm:mx-[33%] min-w-[360px] sm:min-w-[400px] sm:max-w-[33%] text-center p-4">
      <div
        className={
          GRAD_OCEANIC + " text-4xl text-transparent bg-clip-text mb-[10px]"
        }
      >
        <h2 className=" text-[1.5rem] border rounded-md">
          {" "}
          Selected Gradients and Radials from HYPERCOLOR.DEV
        </h2>
        <h1>GRADIENTS</h1>
      </div>

      {Object.entries(allgradients).map(([key, value]) => (
        <div
          key={key}
          className={
            value +
            " shadow-inner min-h-[100px] p-1   text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          {key}
          <p className="">{value}</p>
        </div>
      ))}
    </div>
  </div>
);
export default ShowGrads;
