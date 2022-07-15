import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./anotherRoom.scss";
import RoomAPI from "../../../apis/roomApi";
import OneRoom from "../oneRoom/OneRoom";

AnotherRoom.propTypes = {};

function AnotherRoom({ hostelId }) {
  const [rooms, setRooms] = useState([]);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const fetchData = async () => {
    const roomsApi = await RoomAPI.getRoomByIdFilter(hostelId, filters);
    setRooms(roomsApi?.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [hostelId, filters]);

  return (
    <div className="anotherRoom" id="anotherRoom">
      <div className="another">
        <h3>Another Room</h3>
      </div>
      <div className="row">
        {rooms.map((room) => (
          <OneRoom room={room}/>
        ))}
      </div>
    </div>
  );
}

export default AnotherRoom;
