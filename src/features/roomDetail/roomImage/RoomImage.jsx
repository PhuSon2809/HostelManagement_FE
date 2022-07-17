import PropTypes from "prop-types";
import React from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import "./roomImage.scss";

RoomImage.propTypes = {
  roomDetail: PropTypes.object,
};

function RoomImage({ roomDetail }) {
  return (
    <div className="roomImage">
      <div className="nameTitle">
        <h3>{roomDetail.name} Room</h3>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
      </div>
      <div>
        <ImageSlider imageList={roomDetail.images} />
      </div>
    </div>
  );
}

export default RoomImage;
