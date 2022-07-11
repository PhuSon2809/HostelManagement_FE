import React from "react";
import PropTypes from "prop-types";
import "./hostel.scss";
import { Link } from "react-router-dom";

Hostel.propTypes = {
  hostels: PropTypes.object,
};

function Hostel({ hostels }) {
  console.log("hostels props: ", hostels);

  return (
    <div className="hostel" id="hostel">
      <div className="row row-content align-self-center head">
        <div className="col-12 col-md-3">
          <h3>Hostels</h3>
        </div>
        <div className="col col-md align-self-center">
          <p>
            Among going manor who did. Do ye is celebrated it sympathize
            considered. May ecstatic did surprise elegance the ignorant age. Own
            her miss cold last. It so numerous if he outlived disposal. How but
            sons mrs lady when. Her especially are unpleasant out.
          </p>
        </div>
      </div>

      <div className="box-content">
        {hostels.data?.map((hostel) => (
          <div className="infor" key={hostel.id}>
            <div className="image">
              <img
                src="./images/show1.jfif"
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

              <p>{hostel.address}. </p>

              {hostel.roomTypes.map((roomType) => (
                <div className="d-flex mb-2" key={roomType.id}>
                  <span className="mr-auto">{roomType.acreage} m2</span>
                  <span>{roomType.price} VNĐ</span>
                </div>
              ))}

              <div className="col-12 text-center">
                <Link to="/listRoom" className="btn">
                  View room
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-12 text-center list_more">
        <Link to="/hostel" className="btn">
          View more
        </Link>
      </div>
    </div>
  );
}

export default Hostel;
