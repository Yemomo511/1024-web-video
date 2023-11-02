import React, { lazy, ReactNode, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home"));
const Follow = lazy(() => import("~/pages/Follow"));
const Hot = lazy(() => import("~/pages/Hot"));
const Game = lazy(() => import("~/pages/Game"));
const My = lazy(() => import("~/pages/My"));
const Recommend = lazy(() => import("~/pages/Recommend/Recommend"));
const MyHome = lazy(() => import("~pages/MyHome/MyHome"));
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
    children: [
      {
        path: "index",
        element: withLoading(<Recommend />),
      },
      {
        path: "my-home/:id",
        element: withLoading(<MyHome />),
      },
      {
        path: "hot",
        element: withLoading(<Hot />),
      },
      {
        path: "game",
        element: withLoading(<Game />),
      },
      {
        path: "",
        element: withLoading(<Recommend />),
      },
    ],
  },

 
];
