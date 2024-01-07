// GradientDivs.js
import React from "react";
import * as allgradients from "../../tw_gradients";
import { GRAD_GOTHAN, GRAD_PANDORA } from "../../tw_gradients";
const ShowGrads = () => (
  <div className={GRAD_GOTHAN + " p-4 "}>
    <div className="static grid grid-flow-col  grid-cols-1  ">
      <div className="absolute mt-0 border border-slate-400 p-2 rounded-lg invisible max-w-[10%] sm:visible sm:max-w-[26%] overflow-hidden text-center">
        <p className=" font-extrabold p-1">
          This page shows some gradients selected from{" "}
          <a
            href="https://hypercolor.dev"
            className={
              GRAD_PANDORA +
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
          GRAD_PANDORA + " text-4xl text-transparent bg-clip-text mb-[10px]"
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
