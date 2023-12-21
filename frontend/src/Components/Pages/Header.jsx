import React from "react";
import '../CSS/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../Images/logo-test.png';

function Header() {
    return(
        <div className="header">
                    <div className="container">  
        <div className="header-wrapper">
            <div className="logo">
                <img src={Logo} alt="logo"></img>
            </div>
            <div className="navbar">
                <ul className="header-navigation__list">
                    <Link to = "/" className="li">Home</Link>
                    <Link to = "/services" className="li">Services</Link>
                    <Link to = "/careers" className="li">Careers</Link>
                    <Link to = "/about" className="li">About</Link>
                </ul>
            </div>
            <div className="registration">
                <Link to = "/bookus" className="user-signup__btn">Book Us</Link>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Header