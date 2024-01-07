// app/gradients/gradients.tsx

import React from "react";
import {
  GRAD_HYPER,
  GRAD_OCEAN,
  GRAD_CTNCANDY,
  GRAD_GOTHAN,
  GRAD_SUNSET,
  GRAD_BEACHSIDE,
  GRAD_GUNMETAL,
  GRAD_PEACHY,
  GRAD_SEAFOAM,
  GRAD_PANDORA,
  GRAD_LAVENDER,
  GRAD_HUCKLEBERRY,
  GRAD_BLUESTEEL,
  GRAD_ARENDELLE,
  GRAD_PARADISE,
  GRAD_MIDNIGHT,
  GRAD_BLUECYAN,
  RAD_PURPLE,
  RAD_PP,
  RAD_PURPLE1,
  RAD_PURPLE2,
  RAD_PURPLE3,
} from "../../tw_gradients";

const GradientsPage = () => {
  return (
    <div className={GRAD_GOTHAN + " p-4"}>
      <div className="pd-4 boder  borderborder-wihte rounded-lg  border-slate-500 border-2 mx-[5%] sm:mx-[33%] min-w-[400px] text-center p-4">
        <div
          className={
            GRAD_PANDORA + " text-4xl text-transparent bg-clip-text mb-[10px]"
          }
        >
          <h2 className=" text-[1.5rem] border rounded-md">
            {" "}
            Selected Gradients and Radials from HYPERCOLOR
          </h2>
          <h1>GRADIENTS</h1>
        </div>

        <div
          className={
            GRAD_OCEAN +
            " shadow-inner min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_OCEAN</p>
          <p>{GRAD_OCEAN}</p>
        </div>
        <div
          className={
            GRAD_HYPER +
            " shadow-inner min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_HYPER</p>
          <p>{GRAD_HYPER}</p>
        </div>
        <div
          className={
            GRAD_CTNCANDY +
            "  min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-900">GRAD_CTNCANDY</p>
          <p>{GRAD_CTNCANDY}</p>
        </div>
        <div
          className={
            GRAD_GOTHAN +
            " min-h-[100px] p-1 text-slate-100 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-100">GRAD_GOTHAN</p>
          <p>{GRAD_GOTHAN}</p>
        </div>
        <div
          className={
            GRAD_SUNSET +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_SUNSET</p>
          <p>{GRAD_SUNSET}</p>
        </div>
        <div
          className={
            GRAD_BEACHSIDE +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_BEACHSIDE</p>
          <p>{GRAD_BEACHSIDE}</p>
        </div>
        <div
          className={
            GRAD_GUNMETAL +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_GUNMETAL</p>
          <p>{GRAD_GUNMETAL}</p>
        </div>
        <div
          className={
            GRAD_PEACHY +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_PEACHY</p>
          <p>{GRAD_PEACHY}</p>
        </div>
        <div
          className={
            GRAD_SEAFOAM +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_SEAFOAM</p>
          <p>{GRAD_SEAFOAM}</p>
        </div>
        <div
          className={
            GRAD_PANDORA +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_PANDORA</p>
          <p>{GRAD_PANDORA}</p>
        </div>
        <div
          className={
            GRAD_LAVENDER +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_LAVENDER</p>
          <p>{GRAD_LAVENDER}</p>
        </div>
        <div
          className={
            GRAD_HUCKLEBERRY +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_HUCKLEBERRY</p>
          <p>{GRAD_HUCKLEBERRY}</p>
        </div>
        <div
          className={
            GRAD_BLUESTEEL +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_BLUESTEEL</p>
          <p>{GRAD_BLUESTEEL}</p>
        </div>
        <div
          className={
            GRAD_ARENDELLE +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_ARENDELLE</p>
          <p>{GRAD_ARENDELLE}</p>
        </div>
        <div
          className={
            GRAD_PARADISE +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_PARADISE</p>
          <p>{GRAD_PARADISE}</p>
        </div>
        <div
          className={
            GRAD_MIDNIGHT +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_MIDNIGHT</p>
          <p>{GRAD_MIDNIGHT}</p>
        </div>
        <div
          className={
            GRAD_BLUECYAN +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">GRAD_BLUECYAN</p>
          <p>{GRAD_BLUECYAN}</p>
        </div>
        <div
          className={
            RAD_PURPLE + " text-4xl text-transparent bg-clip-text mb-[10px]"
          }
        >
          <h1>RADIALS</h1>
        </div>
        <div
          className={
            RAD_PURPLE +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-950">RAD_PURPLE</p>
          <p>{RAD_PURPLE}</p>
        </div>
        <div
          className={
            RAD_PP +
            " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-100">RAD_PP</p>
          <p>{RAD_PP}</p>
        </div>
        <div
          className={
            RAD_PURPLE1 +
            " min-h-[100px] p-1 text-slate-100 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-400">RAD_PURPLE1</p>
          <p>{RAD_PURPLE1}</p>
        </div>
        <div
          className={
            RAD_PURPLE2 +
            " min-h-[100px] p-1 text-slate-100 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-100">RAD_PURPLE1</p>
          <p>{RAD_PURPLE2}</p>
        </div>
        <div
          className={
            RAD_PURPLE3 +
            " min-h-[100px] p-1 text-slate-100 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
          }
        >
          <p className="bold text-slate-100">RAD_PURPLE1</p>
          <p>{RAD_PURPLE3}</p>
        </div>
      </div>
    </div>
  );
};

export default GradientsPage;
