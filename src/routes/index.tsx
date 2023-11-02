import { lazy, ReactNode, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import RecommendComponent from "~/pages/Recommend/Recommend";
const Home = lazy(() => import("~/pages/Home"));
const Hot = lazy(() => import("~/pages/Hot"));
const Game = lazy(() => import("~/pages/Game"));
// const Recommend = lazy(() => import("~/pages/Recommend/Recommend"));
const MyHome = lazy(() => import("~pages/MyHome/MyHome"));
const withLoading = (component: ReactNode): ReactNode => {
  return <Suspense fallback={<div>loading</div>}>{component}</Suspense>;
};
console.log("hello")
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
        element: <RecommendComponent />,
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
        element: <RecommendComponent />,
      },
    ],
  },

 
];
