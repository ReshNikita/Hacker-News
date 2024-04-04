import { FC, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./layout/Layout";
import { MainPage } from "./pages/MainPage";
import { withWrapper } from "./hoc/withWrapper";

import { constants } from "./constants";

const NotFound = lazy(() =>
  import("./pages/NotFound").then(module => {
    return { default: module.NotFound };
  })
);

const ArticlePage = lazy(() =>
  import("./pages/ArticlePage").then(module => {
    return { default: module.ArticlePage };
  })
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={`${constants.BASE_URL}`} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path={`${constants.BASE_URL}/article/:id`}
          element={withWrapper(<ArticlePage />)}
        />
        <Route path="*" element={withWrapper(<NotFound />)} />
      </Route>
    </Route>
  )
);

export const App: FC = () => <RouterProvider router={router} />;
