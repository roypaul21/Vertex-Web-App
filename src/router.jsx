import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';



const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import("./pages/Home"))
    },
    {
        path: "*",
        Component: lazy(() => import('./pages/Error.jsx'))
    }
])

export default router; 