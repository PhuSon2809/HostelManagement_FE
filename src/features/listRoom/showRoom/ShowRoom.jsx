import React from "react";
import PropTypes from "prop-types";
import Title from "./title/Title";
import Room from "./room/Room";

ShowRoom.propTypes = {};

function ShowRoom(props) {
  return (
    <div className="listRoom">
      <div className="row mt-4 ml-4">
        <Title />
      </div>
      <div className="row">
        <Room />
      </div>
    </div>
  );
}

export default ShowRoom;
