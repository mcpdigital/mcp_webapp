// GradientDivs.js
import React from "react";
import * as allgradients from "../../tw_gradients";

const ShowGrads = () => (
  <div>
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
);
export default ShowGrads;
