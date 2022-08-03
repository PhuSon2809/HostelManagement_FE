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
    <div className="inforSlide">
      <div className="image">
        <img src={hostel.images[0].url} alt="demo" className="img-fluid" />
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

export default HostelDetail;
