import { FC, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Loader } from "./components/Loader";
import { MainPage } from "./pages/MainPage";

import { constants } from "./constants";

const ErrorPage = lazy(() =>
  import("./pages/ErrorPage").then(module => {
    return { default: module.ErrorPage };
  })
);

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
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Suspense fallback={<Loader />}>
                <ArticlePage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Route>
  )
);

export const App: FC = () => <RouterProvider router={router} />;
