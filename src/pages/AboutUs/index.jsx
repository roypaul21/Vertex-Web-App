import AboutVertex from "./AboutVertex";
import HeroSection from "./HeroSection";
import MissionVision from "./MissionVision";

export default function AboutUs(){
    return(
        <>
            <HeroSection />
            <AboutVertex />
            <hr className="m-0"/>
            <MissionVision />
        </>
    )
}