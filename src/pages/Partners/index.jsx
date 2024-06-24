import HeroSection from "./HeroSection";
import OurPartners from "./OurPartners";
import PartnersIntro from "./PartnersIntro";

export default function Partners(){
    return(
        <>
            <HeroSection />
            <PartnersIntro />
            <hr className="m-0"/>
            <OurPartners />
        </>
    )
}