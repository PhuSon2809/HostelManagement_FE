import React from "react";
import PropTypes from "prop-types";
import "./hostel.scss";
import { useNavigate } from "react-router-dom";

Hostel.propTypes = {
  hostel: PropTypes.object,
};

function Hostel({ hostel }) {
  console.log(hostel);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listRoom/${hostel.id}`);
  };

  return (
    <div className="infor">
      <div className="image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Hostels%2Fh2.jpg?alt=media&token=4c5da274-9413-49a0-a202-145c38fb293a"
          alt="hostel"
          className="img-fluid"
        />
        <div className="icons">
          <a href="#">
            <i className="fa fa-user" /> by {hostel.account.name}
          </a>
        </div>
      </div>
      <div className="content">
        <div className="h3">
          <h3>{hostel.name}</h3>
        </div>

        <p>{hostel.address}</p>

        <div className="d-flex mb-2">
          <i className="fa fa-phone" id="phone"/>
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
