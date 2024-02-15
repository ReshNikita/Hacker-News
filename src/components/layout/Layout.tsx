import { FC } from "react";
import { Outlet } from "react-router-dom";

import { MemoizedHeader } from "../Header";
import { MemoizedCopyright } from "../Copyright";

export const Layout: FC = () => (
  <>
    <MemoizedHeader />
    <Outlet />
    <MemoizedCopyright />
  </>
);
