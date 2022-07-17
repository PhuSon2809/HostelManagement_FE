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
    navigate(`/room/${room.id}/${room.hostelId}`);
  };

  return (
    <div className="col-12 col-md-6 p-0">
      <div className="rooms row">
        <div className="col-12 col-md-5">
          <div className="image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Rooms%2Fh1-10.jpg?alt=media&token=62f826e7-00d2-465a-a7ec-f490edf2091c"
              className="img-fluid img1"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Rooms%2Fh1-11.jpg?alt=media&token=3ff1ca17-10cf-47d3-ae4c-c7aa5c23d826"
              className="img-fluid img2"
            />
          </div>
        </div>
        <div className="col-12 col-md-7 pl-0">
          <div className="content mt-2 mt-md-0">
            <h3>Room name: {room.name}</h3>
            {room.roomType.furniture ? (
              <div>
                <p className="mb-1">
                  2 Bed room / 1 Bath room / Wifi / Kitchen
                </p>
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
                  &amp; {room.roomType.price} <span>/ month</span>
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
    </div>
  );
}

export default OneRoom;
