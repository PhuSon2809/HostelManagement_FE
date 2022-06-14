import React from 'react';
import './header.scss';

function Header(props) {

    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark ">
            <a href="#" className="navbar-brand">
                <img src="./images/logo_white.png" alt height={70} width={70} /><span> HOM</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active mr-md-5">
                        <a href="/home" className="nav-link home-active">Home</a>
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

                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="./images/avatar.jpg" alt="avatar" className="img-fluid" /> <span> Tran Phu Son</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">
                            <i class="fa fa-calendar" aria-hidden="true"></i><span> Booking</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fa fa-user"> </i><span> Account</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <i class="fa fa-power-off" aria-hidden="true"> </i><span> Logout</span>
                        </a>
                    </div>
                </div>

                <a className="nav-link text-white btn d-inline-block"><span className="fa fa-sign-in fa-lg" /> Sign in</a>
            </div>
        </nav>
    );
}

export default Header;