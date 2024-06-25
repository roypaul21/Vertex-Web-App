import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Table from 'react-bootstrap/Table';
export  default function ContactInfo(){
    return(
        <section className="vertex-container p-5 container-fluid">
            <h1 className="text-center division-heading mt-5">Contact Information</h1> 
            <div className="row">
                <div className="col-md-6 col-auto p-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28236.01916984609!2d54.396628391021665!3d24.41868913358505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e69636b5d0203%3A0x8705cb07a8761d3f!2sEmirates%20Post%20PO%20Box%20Shelter%20-%20Al%20Qubaisat%20B!5e0!3m2!1sen!2sph!4v1719293969175!5m2!1sen!2sph" id="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6 col-auto p-5">
                    <div>
                        <p className="text-dark"><span className="me-1" id="contact-icon"><IoLocation/></span>Address: Abu Dhabi, United Arab Emirates, P.O. Box 294149</p>
                        <p className="text-dark"><span className="me-1" id="contact-icon"><MdEmail/></span>Email: info@vertex-med.com</p>
                        <p className="text-dark"><span className="me-1" id="contact-icon"><FaPhone/></span>Phone: +971 2 887 0667</p>
                        <p className="text-dark"><span className="me-1" id="contact-icon"><FaFax/></span>FAX: +971 2 887 06 67</p>
                    </div>
                    <div className="mt-5">
                        <p className="text-dark"><span className="me-1" id="contact-icon"><RiCalendarScheduleFill/></span><strong>Office Hours</strong></p>
                        <Table bordered size="sm" variant="white" id="office-hours">
                            <tbody>
                                <tr>
                                    <td>Saturday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>8AM - 5PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>Close</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}