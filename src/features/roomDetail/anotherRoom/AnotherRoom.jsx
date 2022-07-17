import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./anotherRoom.scss";
import RoomAPI from "../../../apis/roomApi";
import OneRoom from "../oneRoom/OneRoom";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const PaginationStyle = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  marginTop: "0.6rem",
  marginBottom: "0.6rem",
}));

AnotherRoom.propTypes = {
  hostelId: PropTypes.string,
};

function AnotherRoom({ hostelId }) {
  const [rooms, setRooms] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const fetchData = async () => {
    const roomsApi = await RoomAPI.getRoomByIdFilter(hostelId, filters);
    setRooms(roomsApi?.data);
    setCount(roomsApi?.totalRecord);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [hostelId, filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  return (
    <div className="anotherRoom mb-5" id="anotherRoom">
      <div className="another">
        <h3>Another Room</h3>
      </div>
      <div>
        <div className="row">
          {rooms.map((room) => (
            <OneRoom room={room} key={room.id} />
          ))}
        </div>
        <PaginationStyle>
          <Pagination
            count={Math.ceil(count / filters.pageSize)}
            variant="outlined"
            color="error"
            page={filters.pageIndex}
            onChange={handlePageChange}
          />
        </PaginationStyle>
      </div>
    </div>
  );
}

export default AnotherRoom;
