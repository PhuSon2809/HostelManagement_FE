import React from "react";
import PropTypes from "prop-types";
import Room from "../room/Room";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./rooms.scss";

Rooms.propTypes = {
  rooms: PropTypes.array,
};

function Rooms({ rooms }) {
  return (
    <div>
      {rooms.length <= 0 ? (
        <h2 className="Opps">
          <span>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70 }} />
            Opps
          </span>{" "}
          - hostel have no rooms here
        </h2>
      ) : (
        <div>
          {rooms?.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Rooms;
