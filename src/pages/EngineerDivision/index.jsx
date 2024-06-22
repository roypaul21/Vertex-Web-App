import Engineer from "./Engineer";
import EngineerServiceSection from "./EngineerServiceSection";
import EngineerStandards from "./EngineerStandards";
import HeroSection from "./HeroSection";

export default function EngineerDivision(){
    return(
        <>
            <HeroSection />
            <EngineerServiceSection />
            <Engineer />
            <EngineerStandards />
        </>
    )
}