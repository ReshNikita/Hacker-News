import { FC, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Loader } from "./components/Loader";
import { MainPage } from "./components/pages/MainPage";

const ErrorPage = lazy(() =>
  import("./components/pages/ErrorPage").then(module => {
    return { default: module.ErrorPage };
  })
);

const NotFound = lazy(() =>
  import("./components/pages/NotFound").then(module => {
    return { default: module.NotFound };
  })
);

const ArticlePage = lazy(() =>
  import("./components/pages/ArticlePage").then(module => {
    return { default: module.ArticlePage };
  })
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Hacker-News" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path="/Hacker-News/article/:id"
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
