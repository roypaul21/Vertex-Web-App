import { GrNext } from "react-icons/gr";

export default function DivisionSection(){
    return(
        <section id="division-section" className="pt-5 container-fluid vertex-container">
            <div className="row">
                <div className="col-md-4 col-sm-auto p-0 border business-div" id="division--sales">
                    <div className="p-5 division--card">
                        <h4 className="division-subheader">Division</h4>
                        <h1 className="division-header">SALES</h1>
                        <h4 className="division-text">
                            In sales division vertex provides the most comprehensive and innovative  Medical Equipment and Technology that will meet every customer and  facility's high-standard requirement.
                        </h4>
                        <div className="my-5">
                            <button className="py-2 px-3" id="division-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-overlay"></div>
                </div>    
                <div className="col-md-4 col-sm-auto p-0 border business-div" id="division--eng">
                    <div className="p-5 division--card">
                        <h4 className="division-subheader">Division</h4>
                        <h1 className="division-header">ENGINEER</h1>
                        <h4 className="division-text">
                            Vertex provides a full complement of repair, maintenance &  life-cycle Management Services for most medical equipment located  throughout hospitals and ancillary healthcare facilities.                        </h4>
                        <div className="my-5">
                            <button className="py-2 px-3" id="division-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-overlay"></div>
                </div>          
                <div className="col-md-4 p-0 col-sm-auto border business-div" id="division--proj">
                    <div className="p-5 division--card">
                        <h4 className="division-subheader">Division</h4>
                        <h1 className="division-header">PROJECT</h1>
                        <h4 className="division-text">
                            In sales division vertex provides the most comprehensive and innovative  Medical Equipment and Technology that will meet every customer and  facility's high-standard requirement.
                        </h4>
                        <div className="my-5">
                            <button className="py-2 px-3" id="division-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-overlay"></div>
                </div>         
            </div>
        </section>
    )
}