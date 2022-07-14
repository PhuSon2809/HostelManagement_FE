import React, { useState } from "react";

import "./header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { logoutAccount } from "../../redux/actions/login";
import { useSelector } from "react-redux";

function Header(props) {
  const current = useSelector((state) => state.login.infoUser);
  console.log("current: ", current);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    dispatch(logoutAccount(true));
  };

  const handleClickBill = () => {
    navigate("/profile/bill");
  };

  const handleClickAccount = () => {
    navigate("/profile/account");
  };

  const handleClickBooking = () => {
    navigate("/profile/booking");
  };

  return (
    <Navbar dark expand="md">
      <NavbarToggler onClick={toggleNav} />
      <NavbarBrand className="mr-md-auto" href="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/logo_white.png?alt=media&token=64caa8ff-0a85-4130-a3c8-405eb031572f"
          alt="logo"
          height={70}
          width={70}
        />
        <span className="text-white"> HOM</span>
      </NavbarBrand>
      <Collapse isOpen={isNavOpen} navbar>
        <Nav navbar className="navbar m-auto">
          <NavItem className="text-left">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/hostel">
              Our Hostels
            </NavLink>
          </NavItem>
          <NavItem>
            <a href="#services" className="nav-link">
              Services
            </a>
          </NavItem>
          <NavItem>
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </NavItem>
        </Nav>

        <Dropdown isOpen={dropdown} toggle={toggleDropdown}>
          <DropdownToggle caret className="btn">
            <img src={current.avatar} alt="avatar" className="img-fluid" />
            <span>{current.name}</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <span onClick={handleClickBooking} className="nav-link">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span> Booking</span>
              </span>
            </DropdownItem>
            <DropdownItem>
              <span onClick={handleClickAccount} className="nav-link">
                <i className="fa fa-user"> </i>
                <span> Account</span>
              </span>
            </DropdownItem>
            <DropdownItem>
              <span onClick={handleClickBill} className="nav-link">
                <i className="fa fa-money"> </i>
                <span> Bill</span>
              </span>
            </DropdownItem>
            <DropdownItem onClick={handleLogout}>
              <Link to="/" className="nav-link">
                <i className="fa fa-power-off" aria-hidden="true"></i>
                <span> Logout</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
}

export default Header;
