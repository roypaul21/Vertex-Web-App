import { Button } from "react-bootstrap"

export default function HeroSection(){
    return(
        <section id="hero-section" className="container-fluid container-full align-items-center d-flex">        
            <video src="videos/vertex.mp4" type="video" autoPlay loop muted className="background-video" />

            <div className="hero-bg-overlay"></div>

            <div id="hero-content">
                <h1 className="text-white header-one">Credibility and <span className="d-block">Reliability for</span></h1>
                <h1 className="text-white">Better Health Care</h1>
                <a href="#footer-section">
                    <Button variant="light" className="mt-2">Get in Touch</Button>
                </a>
            </div>
        </section>
    )
}