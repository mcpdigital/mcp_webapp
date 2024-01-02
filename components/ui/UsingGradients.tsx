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
} from "../../tw_gradients";
const hyper = GRAD_HYPER;
const UsingGradients = () => {
  return (
    <div className=" static mx-[33%] max-w-max text-center p-4">
      <div
        className={
          GRAD_OCEAN +
          " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
        }
      >
        <p className="bold text-slate-950">GRAD_OCEAN</p>
        <p>{GRAD_OCEAN}</p>
      </div>
      <div
        className={
          GRAD_HYPER +
          " min-h-[100px] p-1 text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
        }
      >
        <p className="bold text-slate-950">GRAD_HYPER</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_CTNCANDY + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_CTNCANDY</p>
        <p>{GRAD_CTNCANDY}</p>
      </div>
      <div className={GRAD_GOTHAN + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_GOTHAN</p>
        <p>{GRAD_GOTHAN}</p>
      </div>
      <div className={GRAD_SUNSET + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_SUNSET</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_BEACHSIDE + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRD_BEACHSIDE</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_GUNMETAL + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRD_GUNMETAL</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_PEACHY + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_PEACHY</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_SEAFOAM + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_SEAFOAM</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_PANDORA + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_PANDORA</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_LAVENDER + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_LAVENDER</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_HUCKLEBERRY + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_HUCKLEBERRY</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_BLUESTEEL + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_BLUESTEEL</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_ARENDELLE + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_ARENDELLE</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_PARADISE + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_PARADISE</p>
        <p>{GRAD_HYPER}</p>
      </div>
      <div className={GRAD_MIDNIGHT + " min-h-[100px]"}>
        <p className="bold text-slate-950">GRAD_MIDNIGHT</p>
        <p>{GRAD_HYPER}</p>
      </div>
    </div>
  );
};

export default UsingGradients;
