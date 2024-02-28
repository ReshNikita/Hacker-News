import { FC, memo } from "react";

import { constants } from "../constants";

export const Header: FC = memo(() => (
  <header className="flex items-center gap-500 max-md:gap-200 max-sm:gap-10 fixed  z-50  w-full pt-1 pb-6 border-b-4 border-orange-600 bg-header-gray  text-white">
    <img
      src={constants.IMAGE}
      alt={constants.HEADER_IMG_ALT}
      className="ml-20 w-[70px] h-[70px]"
    />

    <h1 className="font-bold text-3xl tracking-wider opacity-90">
      {constants.APP_TITLE}
    </h1>
  </header>
));
