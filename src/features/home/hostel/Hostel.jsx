import React from "react";
import PropTypes from "prop-types";
import "./hostel.scss";
import { Link, useNavigate } from "react-router-dom";

Hostel.propTypes = {
    hostel: PropTypes.object,
};

function Hostel({ hostel }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Hostels/${hostel.id}`)
  }

  return (
    <div className="infor" key={hostel.id}>
      <div className="image">
        <img src="./images/show1.jfif" alt="hostel" className="img-fluid" />
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

        {hostel.roomTypes.map((roomType) => (
          <div className="d-flex mb-2" key={roomType.id}>
            <span className="mr-auto">{roomType.acreage} m2</span>
            <span>{roomType.price} VNĐ</span>
          </div>
        ))}

        <div className="col-12 text-center">
          <Link to="/listRoom" onClick={handleClick} className="btn">
            View room
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
