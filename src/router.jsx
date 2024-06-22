import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';



const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import("./pages/Home"))
    },
    {
        path: "/engineer-division", 
        Component: lazy(() => import("./pages/EngineerDivision"))
    },
    {
        path: "*",
        Component: lazy(() => import('./pages/Error.jsx'))
    }
])

export default router; 