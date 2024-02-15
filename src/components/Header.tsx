import { FC, memo } from "react";

import { constants } from "../constants";

const Header: FC = () => (
  <header className="flex items-center gap-500 fixed  z-50  w-full pt-1 pb-6 border-b-4 border-orange-600 bg-header-gray  text-white">
    <img
      src="/hacker.svg"
      alt="logo"
      width="70px"
      height="70px"
      className="ml-20"
    />

    <h1 className="font-bold text-3xl tracking-wider opacity-90">
      {constants.APP_TITLE}
    </h1>
  </header>
);

export const MemoizedHeader = memo(Header);
