import React from "react";
import PropTypes from "prop-types";
import "./oneRoom.scss";
import { useNavigate } from "react-router";

OneRoom.propTypes = {
  room: PropTypes.object,
};

function OneRoom({ room }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/room", {
      state: { roomId: room?.id, hostelId: room?.hostelId },
    });
  };

  return (
    <div className="col-12 col-md-6 p-0">
      <div className="rooms row">
        <div className="col-12 col-md-5">
          <div className="image">
            <img src="./images/room1.png" className="img-fluid img1" />
            <img src="./images/room2.png" className="img-fluid img2" />
          </div>
        </div>
        <div className="col-12 col-md-7 pl-0">
          <div className="content mt-2 mt-md-0">
            <h3>Deluxe Queen Room With Street View</h3>
            <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half" />
            <p>Thanh pho Ho Chi Minh</p>
            <div className="house-price">
              <p>30 m2</p>
              <p className="red">
                &amp; 100 <span>/ day</span>
              </p>
            </div>
            <div className="text-center text-md-left">
              <button onClick={handleClick} className="btn">
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneRoom;
