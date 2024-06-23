import { FcNext } from "react-icons/fc";

export default function HeroSection(){
    return(
        <section id="hero-sales" className="container-fluid container-full align-items-center d-flex">
            <div id="hero-content">
                <h1 className="text-white header-one">Comprehensive<span className="d-block">Solutions Delivered</span></h1>
                <h1 className="text-white">Innovative Medical Equipment</h1>
                <p className="text-white"><strong>Home <FcNext /> Sales Division</strong></p>
            </div>
        </section>
    )
}