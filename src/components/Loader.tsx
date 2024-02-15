import { FC } from "react";

import { constants } from "../constants";

export const Loader: FC = () => (
  <div className="flex justify-center mt-10">
    <div
      className="float-left inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        {constants.LOADING}
      </span>
    </div>
  </div>
);
