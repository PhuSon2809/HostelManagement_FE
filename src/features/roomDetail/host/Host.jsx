import React from "react";
import PropTypes from "prop-types";
import "./host.scss";
import { useSelector } from "react-redux";

Host.propTypes = {};

function Host(props) {
  const current = useSelector((state) => state.login.infoUser);
  return (
    <div className="host" key={current.id}>
      <div className="hostItem">
        <h3>Host</h3>
        <div className="row information">
          <img src={current.avatar} className="img-fluid" />
          <div className="col">
            <h5>{current.name}</h5>
            <div>
              <i className="fa fa-phone mr-2"></i>{current.phone}
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
