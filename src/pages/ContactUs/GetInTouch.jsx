import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export  default function GetInTouch(){
    return(
        <section className="vertex-container p-5 d-flex flex-column align-items-center">
            <h1 className="text-center header-color">Get In Touch</h1>
            <div className="p-5 d-flex flex-column gap-2" id="get-in-touch">
                    <input type="text" placeholder="Name" className="p-2 border rounded" />
                    <input type="text" placeholder="Mobile Number" className="p-2 border rounded" />
                    <input type="text" placeholder="Email Address" className="p-2 border rounded" />
                    <input type="text" placeholder="Inquiry" className="p-2 border rounded" />
                    <textarea type="text" rows="6" placeholder="Message" className="p-2 border rounded"></textarea> 
                    <button className="bg-primary text-white py-2 rounded"><strong>SEND</strong></button>
            </div>
            <div className="d-flex gap-5" id="footer-icons">
                <a href="" className="header-color"><FaFacebookSquare /></a>
                <a href="" className="header-color"><FaLinkedin /></a>
                <a href="" className="header-color"><FaSquareXTwitter /></a>
                <a href="" className="header-color"><FaYoutube /></a>
            </div>
        </section>
    )
}