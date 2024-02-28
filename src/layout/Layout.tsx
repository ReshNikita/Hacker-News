import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Copyright } from "../components/Copyright";

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Copyright />
  </>
);
