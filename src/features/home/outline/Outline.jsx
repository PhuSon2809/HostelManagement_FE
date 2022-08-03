import React from "react";
import PropTypes from "prop-types";
import "./outline.scss";
import { Link } from "react-router-dom";

Outline.propTypes = {};

function Outline(props) {
  return (
    <div className="outline">
      <h2>Our Hostel Outline </h2>
      <Link to="/hostel" className="btn">
        View more
      </Link>
    </div>
  );
}

export default Outline;
