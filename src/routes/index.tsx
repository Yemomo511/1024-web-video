import React,{ lazy, ReactNode, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom'
import { Navigate } from "react-router-dom";

const Home = lazy(()=>import('~/pages/Home'))
const My = lazy(()=>import('~/pages/My'))
const withLoading = (component: ReactNode): ReactNode => {
    return <Suspense fallback={<div>loading</div>}>{component}</Suspense>
}

export const route: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='home' />
    },
    {
        path:'/home',
        element: withLoading(<Home />)
    },
    {
        path:'/my',
        element: withLoading(<My />)
    }
]
