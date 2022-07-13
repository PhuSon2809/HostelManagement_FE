import React from "react";
import PropTypes from "prop-types";
import "./room.scss";
import { useNavigate } from "react-router-dom";

Room.propTypes = {
  room: PropTypes.object,
};

function Room({ room }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/room", {
      state: { roomId: room?.id, hostelId: room?.hostelId },
    });
  };

  return (
    <div className="room row ml-2 mr-2">
      <div className="col-12 col-md-5">
        <div className="image">
          <img src="./images/room1.png" className="img-fluid img1" />
          <img src="./images/room2.png" className="img-fluid img2" />
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="content mt-2 mt-md-0">
          <h3>{room.name}</h3>
          {/* <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p> */}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half" />
          {/* <p className="mb-0 mt-2">Thanh pho Ho Chi Minh</p> */}
          {room.roomType.map((roomType) => (
            <div className="house-price" key={roomType.id}>
              <p>{roomType.acreage} m2</p>

              <p className="red">
                &amp; {roomType.price} <span>/ month</span>
              </p>
            </div>
          ))}
          <div className="text-center text-md-left">
            <button onClick={handleClick} className="btn">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
