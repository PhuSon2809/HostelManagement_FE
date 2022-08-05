import React from "react";
import PropTypes from "prop-types";
import "./host.scss";
import { useSelector } from "react-redux";

Host.propTypes = {
  roomDetail: PropTypes.object,
};

function Host({ roomDetail }) {
  return (
    <div className="host" key={roomDetail.id}>
      <div className="hostItem">
        <h3>Host</h3>
        <div className="row information">
          {!roomDetail.hostel?.account?.avatar ? (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Avatar%2Fimages.png?alt=media&token=9db5a385-f427-471e-a78f-8dc776fb03a3"
              alt="avatar"
              className="img-fluid"
            />
          ) : (
            <img src={roomDetail.hostel?.account?.avatar} className="img-fluid" />
          )}
          <div className="col">
            <h5>{roomDetail.hostel?.account?.name}</h5>
            <div>
              <i className="fa fa-phone mr-2"></i>
              {roomDetail.hostel?.account?.phone}
            </div>
          </div>
        </div>
        <div className="about">
          <p>View 1 more newsss</p>
          <div>
            <i className="fa fa-tag"></i> Quick response in minutes
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host;
