import React from 'react';
import './style.css';

function Header(props) {

    return (
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <a href="#" className="navbar-brand">
                <img src="./images/logo_white.png" alt height={70} width={70} /><span> HOM</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active mr-md-5">
                        <a href="#" className="nav-link home-active">Home</a>
                    </li>
                    <li className="nav-item mr-md-5">
                        <a href="#" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item mr-md-5">
                        <a href="#hostel" className="nav-link">Our Hostels</a>
                    </li>
                    <li className="nav-item mr-md-5">
                        <a href="#" className="nav-link">Reviews</a>
                    </li>
                </ul>
                <a className="nav-link text-white btn d-inline-block"><span className="fa fa-book fa-lg" /> Booking</a>
                <a className="nav-link text-white btn d-inline-block"><span className="fa fa-sign-in fa-lg" /> Sign in</a>
            </div>
        </nav>
    );
}

export default Header;