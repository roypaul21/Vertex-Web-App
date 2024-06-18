import Lottie from "lottie-react";
import animationData from "../../assets/home-gif.json"
export default function WhoWeAre(){
    return(
        <section id="who-we-are" className="container-fluid d-flex justify-content-center vertex-container">
            <div className="row">
                <div className="col-md-auto col-lg-6 d-flex flex-column justify-content-center">
                    <h1 className="wwa-heading">Who we are</h1>
                    <h2 className="wwa-subheading">
                        Vertex Medical Equipment Supplies and Maintenance  Services is an  eminent company located in Abu Dhabi, UAE, that has been serving the  needs of the healthcare community. Upon its existence for more than 10 years, Vertex has proven to be one of the leading providers of High-Quality Medical Equipment and Maintenance Services to the customers.
                    </h2>
                </div>
                <div className="col-md-auto col-lg-6 ">
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>
        </section>
    )
}