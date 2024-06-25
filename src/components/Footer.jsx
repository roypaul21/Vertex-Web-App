import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <section className="container-fluid " id="footer-section">
            <div className="row">
                <div className="col-lg-6 col-md-auto row justify-content-center">
                    <div className="p-5 d-flex flex-column gap-4" id="contact-us">
                        <h1 className="text-white"><strong>GET IN TOUCH</strong></h1>
                        <div>
                            <p className="text-white"><span className="me-1" id="contact-icon"><IoLocation/></span>Address: Abu Dhabi, United Arab Emirates, P.O. Box 294149</p>
                            <p className="text-white"><span className="me-1" id="contact-icon"><MdEmail/></span>Email: info@vertex-med.com</p>
                            <p className="text-white"><span className="me-1" id="contact-icon"><FaPhone/></span>Phone: +971 2 887 0667</p>
                            <p className="text-white"><span className="me-1" id="contact-icon"><FaFax/></span>FAX: +971 2 887 06 67</p>
                        </div>
                        <div className="d-flex gap-4" id="footer-icons">
                            <a href="" className="text-white"><FaFacebookSquare /></a>
                            <a href="" className="text-white"><FaLinkedin /></a>
                            <a href="" className="text-white"><FaSquareXTwitter /></a>
                            <a href="" className="text-white"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-auto row justify-content-center">
                    <div className=" p-5 d-flex flex-column gap-2" id="contact-us">
                        <input type="text" placeholder="Name" className="p-2 rounded" />
                        <input type="text" placeholder="Mobile Number" className="p-2 rounded" />
                        <input type="text" placeholder="Email Address" className="p-2 rounded" />
                        <input type="text" placeholder="Inquiry" className="p-2 rounded" />
                        <textarea type="text" rows="6" placeholder="Message" className="p-2 rounded"></textarea> 
                        <button className="bg-white text-dark py-2 rounded"><strong>SEND</strong></button>
                  
                    </div>
                </div>
            </div>
            <hr className="text-white m-0"/>
            <div className="px-5 py-2 text-white d-flex">
                <span>Copyright &#169; 2024 Vertex</span>
                <a href="" className="ms-auto text-decoration-none text-white"><span>Privacy and Security Statement</span></a>
            </div>
        </section>
    )
}