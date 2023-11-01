import React, { lazy, ReactNode, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home"));
const Follow = lazy(() => import("~/pages/Follow"))
const Hot = lazy( () => import("~/pages/Hot"))
const Game = lazy( () => import("~/pages/Game"))
const My = lazy(() => import("~/pages/My"));
const withLoading = (component: ReactNode): ReactNode => {
  return <Suspense fallback={<div>loading</div>}>{component}</Suspense>;
};

export const route: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/home",
    element: withLoading(<Home />),
  },
  {
    path: "/follow",
    element: withLoading(<Follow />),
  },
  {
    path: "/hot",
    element: withLoading(<Hot />),
  },
  {
    path: "/game",
    element: withLoading(<Game />),
  },
  {
    path: "/my",
    element: withLoading(<My />),
  },
];
