import React from "react";
import PropTypes from "prop-types";
import "./boxContent.scss";
import { Link } from "react-router-dom";

ListBox.propTypes = {
  hostels: PropTypes.object,
};

function ListBox({ hostels }) {
  console.log("hostel page: ", hostels);

  return (
    <div className="box-content justify-content-center">
      {hostels.data?.map((hostel) => (
        <div className="infor" key={hostel.id}>
          <div className="image">
            <img src="./images/show1.jfif" className="img-fluid" />
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
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListBox;
