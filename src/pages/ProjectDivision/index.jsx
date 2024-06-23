import GasProject from "./GasProject";
import HeroSection from "./HeroSection";
import TurnkeyProjects from "./TurnkeyProjects";

export default function ProjectDivision(){
    return(
        <>
            <HeroSection />
            <TurnkeyProjects />
            <hr className="m-0"/>
            <GasProject />
        </>
    )
}