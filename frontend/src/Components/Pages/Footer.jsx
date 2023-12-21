import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/footer-logo.png';
import '../CSS/Footer.css';

function Footer() {
    return(
        <>
        <footer>
        <div className="footer">
            <div className="footer-container">
                <div className="logo-section">
                    <img src={logo} alt="" className="footer-logo"/>
                    <ul className="sci">
                        <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </ul>
                </div>
                <div className="quicklinks">
                    <h2 className="support-heading">Support</h2>
                    <ul className="support-list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="test-quicklinks">
                    <h2>Extras</h2>
                    <ul className="test-list">
                        <li><a href="#">Why us</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2 className="contact-heading">Contact Us</h2>
                    <ul className="info">
                        <span><FontAwesomeIcon icon={faPhone} className="icons" /><a href="#" className="contact-info">+ 383 49 000 000</a></span>
                        <span><FontAwesomeIcon icon={faEnvelope} className="icons" /><a href="#" className="contact-info">alphalabsrks@gmail.com</a></span>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt} className="icons" /><a href="#" className="contact-info">Prishtinë, Kosovë</a></span>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
        <div className="copyright-text">
            <p className="copyright-text"><strong>Copyright © 2023 Alpha Labs. All rights reserved</strong></p>
        </div>
        </>
    )
}

export default Footer