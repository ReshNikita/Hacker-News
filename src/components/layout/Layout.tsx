import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Copyright } from "../Copyright";

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Copyright />
  </>
);
