import React from "react";
import PropTypes from "prop-types";
import "./hostelDetail.scss";
import { useNavigate } from "react-router-dom";

HostelDetail.propTypes = {
  hostel: PropTypes.object,
};

function HostelDetail({ hostel }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listRoom/${hostel.id}`);
  };

  return (
    <div className="infor">
      <div className="image">
        <img src="./images/show1.png" alt="demo" className="img-fluid" />
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

export default HostelDetail;
