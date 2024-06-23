import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { ThreeCircles } from 'react-loader-spinner';
import { useEffect, useState } from "react";

export default function Layout(){
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return(
        (loading)?
            <div className='container-fluid container-full d-flex justify-content-center align-items-center'>
                        <ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#1663A7"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
            </div>
            :
            <>
                <AppNavBar />
                <Outlet />
                <Footer />
            </>
    )
}