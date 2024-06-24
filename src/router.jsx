import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';



const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import('./components/Layout.jsx')),
        children: [
            {
                path: "",
                Component: lazy(() => import("./pages/Home"))
            },
            {
                path: "/engineer-division", 
                Component: lazy(() => import("./pages/EngineerDivision"))
            },
            {
                path: "/sales-division", 
                Component: lazy(() => import("./pages/SalesDivision"))
            },
            {
                path: "/project-division", 
                Component: lazy(() => import("./pages/ProjectDivision"))
            },
            {
                path: "/about-us", 
                Component: lazy(() => import("./pages/AboutUs"))
            },
            {
                path: "/reference", 
                Component: lazy(() => import("./pages/Reference"))
            },
            {
                path: "/partners", 
                Component: lazy(() => import("./pages/Partners"))
            }
        ]
    },
    
    {
        path: "*",
        Component: lazy(() => import('./pages/Error.jsx'))
    }
])

export default router; 