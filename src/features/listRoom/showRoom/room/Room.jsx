import React from "react";
import PropTypes from "prop-types";
import "./room.scss";
import { useNavigate } from "react-router-dom";
import currencyFormat from "../../../../utils/formatPrize";

Room.propTypes = {
  room: PropTypes.object,
};

function Room({ room }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/room/${room.id}/${room.roomType.hostelId}`);
  };
  
  return (
    <div className="room row ml-2 mr-2">
      <div className="col-12 col-md-5">
        <div className="image">
          <img src={room.images[2].url} className="img-fluid img1" />
          <img src={room.images[4].url} className="img-fluid img2" />
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="content mt-2 mt-md-0">
          <h3>Room name: {room.name}</h3>
          {room.roomType.furniture ? (
            <div>
              <p className="mb-1">2 Bed room / 1 Bath room / Wifi / Kitchen</p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half" />
            </div>
          ) : (
            <div>
              <p> Mezzanine / 1 Bath room / Wifi / Kitchen</p>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half" />
            </div>
          )}

          <div key={room.roomType.id}>
            <h5 className="d-block mt-1">
              <span>Room: </span>
              {room.roomType.name}
            </h5>
            <div className="house-price">
              <p>{room.roomType.acreage} m2</p>
              <p className="red">
                {currencyFormat(room.roomType.price)} <span>/month</span>
              </p>
            </div>
          </div>

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
