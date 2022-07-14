import React from "react";
import PropTypes from "prop-types";
import "./box.scss";
import { useNavigate } from "react-router-dom";

Box.propTypes = {
  hostel: PropTypes.object,
};

function Box({ hostel }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listRoom/${hostel.id}`);
  };

  return (
    <div className="infor">
      <div className="image">
        <img src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Hostels%2Fh2.jpg?alt=media&token=4c5da274-9413-49a0-a202-145c38fb293a" className="img-fluid" />
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
          <div className="d-flex" key={roomType.id}>
            <span className="mr-auto">{roomType.acreage} m2</span>
            <span>{roomType.price} VNĐ</span>
          </div>
        ))}

        <div className="col-12 text-center">
          <button onClick={handleClick} className="btn">
            View room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
