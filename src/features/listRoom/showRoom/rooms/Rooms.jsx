import React from "react";
import PropTypes from "prop-types";
import Room from "../room/Room";

Rooms.propTypes = {
  rooms: PropTypes.array,
};

function Rooms({ rooms }) {
  return (
    <div>
      {rooms?.map((room) => (
        <Room room={room} key={room.id} />
      ))}
    </div>
  );
}

export default Rooms;
