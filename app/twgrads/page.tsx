import React from "react";
import ShowGrads from "@/components/ui/ShowGrads";
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

const twgrads = () => {
  return (
    <div className={GRAD_GOTHAN + " p-4"}>
      <div className="pd-4 boder  borderborder-wihte rounded-lg  border-slate-500 border-2 mx-[5%] sm:mx-[33%] min-w-[400px] text-center p-4">
        <ShowGrads />
      </div>
    </div>
  );
};
export default twgrads;
