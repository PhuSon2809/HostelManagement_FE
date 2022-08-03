import React, { useState } from "react";
import "./menu.scss";
import Booking from "../booking/Booking";

function Menu({ roomDetail }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="menu">
      <ul className="nav align-s">
        <li className="nav-item">
          <a className="nav-link active" href="#overview">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#utilities">
            Utilities
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#anotherRoom">
            Similar room
          </a>
        </li>
      </ul>
      <a className="btn d-block" onClick={toggle}>
        <span className="fa fa-book fa-lg" /> Booking
      </a>
      <Booking toggle={toggle} modal={modal} roomDetail={roomDetail} />
    </div>
  );
}

export default Menu;
