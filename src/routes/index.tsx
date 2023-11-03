import { lazy, ReactNode, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home"));
const Hot = lazy(() => import("~/pages/Hot"));
const Game = lazy(() => import("~/pages/Game"));
const RecommendComponent = lazy(() => import("~/pages/Recommend/Recommend"));
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
        path: '/home',
        element: <Navigate to="/home/recommend" />
      },
      {
        path: "/home/recommend",
        element: withLoading(<RecommendComponent />,)
      },
      {
        path: "/home/my-home/:id",
        element: withLoading(<MyHome />),
      },
      {
        path: "/home/hot",
        element: withLoading(<Hot />),
      },
      {
        path: "/home/game",
        element: withLoading(<Game />),
      }
    ],
  },


];
