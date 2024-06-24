import { FcNext } from "react-icons/fc";

export default function HeroSection(){
    return(
        <section id="hero-about" className="container-fluid container-full align-items-center d-flex">
            <div id="hero-content">
                <h1 className="text-white header-one mb-5">Quality Healthcare<span className="d-block">Equipment </span></h1>
                <p className="text-white"><strong>Home <FcNext /> About Us</strong></p>
            </div>
        </section>
    )
}