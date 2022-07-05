import React from "react";
import PropTypes from "prop-types";
import "./host.scss";

Host.propTypes = {};

function Host(props) {
  return (
    <div className="host">
      <div className="hostItem">
        <h3>Host</h3>
        <div className="row information">
          <img src="./images/room1.png" className="img-fluid" />
          <div className="col">
            <h5>Tran Phu Son</h5>
            <div>
              <i className="fa fa-phone mr-2"></i>0914360736
            </div>
          </div>
        </div>
        <div className="about">
          <p>View 1 more news</p>
          <div><i className="fa fa-tag"></i> Quick response in minutes</div>
        </div>
      </div>
    </div>
  )
}

export default Host;
