import missionData from "../../assets/missionData.json";
import visionData from "../../assets/visionData.json";
import Lottie from "lottie-react";

export default function MissionVision(){
    return(
        <section className="p-5 vertex-container container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <Lottie animationData={missionData} loop={true}/>
                </div>
                <div className="col-lg-6 p-lg-5 d-flex flex-column justify-content-center">
                    <h1 className="wwa-heading">Mission</h1>
                    <h2 className="wwa-subheading text-lighter text-justify-content">
                        Vertex aims to provide an excellent quality healthcare equipment supplies and management for Medical Companies and facilities in the Middle East through provision of extensive medical equipment information, a sustainable and paramount maintenance and services, and an effective and powerful communication.
                    </h2>
                </div>
            </div>
            <hr className="m-lg-0"/>
            <div className="row">   
                <div className="col-lg-6 p-lg-5
                 d-flex flex-column justify-content-center">
                    <h1 className="wwa-heading">Vision</h1>
                    <h2 className="wwa-subheading text-lighter text-justify-content">
                        To be a world-class Medical Equipment Supplies and Maintenance Services  Company renowned for its excellence in producing high-quality equipment  and qualified biomedical technicians and engineers, for a positive  impact on healthcare technology and for its commitment to a high-safety  level and quality healthcare equipment maintenance and services.
                    </h2>
                </div>
                <div className="col-lg-6">
                    <Lottie animationData={visionData} loop={true}/>
                </div>
            </div>
        </section>
    )
}