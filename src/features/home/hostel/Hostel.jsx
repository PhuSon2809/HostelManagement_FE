import React from "react";
import PropTypes from "prop-types";
import "./hostel.scss";
import { useNavigate } from "react-router-dom";

Hostel.propTypes = {
  hostel: PropTypes.object,
};

function Hostel({ hostel }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listRoom/${hostel.id}`);
  };

  return (
    <div className="infors">
      <div className="image">
        {hostel.images?.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="hostel"
            className="img-fluid"
          />
        ))}
        <div className="icons">
          <a href="#">
            <i className="fa fa-user" /> by {hostel.account.name}
          </a>
        </div>
      </div>
      <div className="content">
        <h3>{hostel.name}</h3>

        <p>{hostel.address}</p>

        <div className="d-flex mb-2">
          <i className="fa fa-phone" id="phone" />
          <span className="d-inline">{hostel.account.phone}</span>
        </div>

        <div className="col-12 text-center">
          <button onClick={handleClick} className="btn">
            View room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
