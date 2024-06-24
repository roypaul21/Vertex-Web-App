import { FcNext } from "react-icons/fc";

export default function HeroSection(){
    return(
        <section id="hero-ref" className="container-fluid container-full align-items-center d-flex">
            <div id="hero-content">
                <h1 className="text-white header-one mb-5">Our Prestigious<span className="d-block">References</span></h1>
                <p className="text-white"><strong>Home <FcNext /> Reference</strong></p>
            </div>
        </section>
    )
}