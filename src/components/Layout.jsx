import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";

export default function Layout(){
    return(    
        <>
            <AppNavBar />
            <Outlet />
            <Footer />
        </>
    )
}