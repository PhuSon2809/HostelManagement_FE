import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <Navbar dark expand="md">
      <NavbarToggler onClick={toggleNav} />
      <NavbarBrand className="mr-md-auto" href="/">
        <img src="./images/logo_white.png" alt="logo" height={70} width={70} />
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
            <NavLink className="nav-link" to="/service">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/reviews">
              Reviews
            </NavLink>
          </NavItem>
        </Nav>

        <Dropdown isOpen={dropdown} toggle={toggleDropdown}>
          <DropdownToggle caret className="btn">
            <img src="./images/avatar.jpg" alt="avatar" className="img-fluid" />
            <span> Tran Phu Son</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/profile" className="nav-link">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span> Booking</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/profile" className="nav-link">
                <i className="fa fa-user"> </i>
                <span> Account</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/profile" className="nav-link">
                <i className="fa fa-money"> </i>
                <span> Bill</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/profile" className="nav-link">
                <i className="fa fa-power-off" aria-hidden="true"></i>
                <span> Logout</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Link to="/home" className="btn">
          <span className="fa fa-sign-in fa-lg" /> Sign in
        </Link>
      </Collapse>
    </Navbar>
  );
}

export default Header;