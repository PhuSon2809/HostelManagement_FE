import React, { useState, useEffect } from "react";
import Title from "./title/Title";
import Rooms from "./rooms/Rooms";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router";
import RoomAPI from "../../../apis/roomApi";
import { styled } from "@mui/material/styles";

const PaginationStyle = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  marginTop: "1.5rem",
  marginBottom: "1.4rem",
}));

function ShowRoom(props) {
  const { hostelId } = useParams(); //lấy ID truyền tới
  console.log("id from router: ", hostelId);

  const [rooms, setRooms] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const fetchData = async () => {
    const responseRoom = await RoomAPI.getRoomByIdFilter(hostelId, filters);
    console.log("responseRoom: ", responseRoom);
    console.log("room state: ", rooms);
    setRooms(responseRoom?.data);
    setCount(responseRoom?.totalRecord);
  };
  console.log("rooms: ", rooms);

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
    <div className="listRoom">
      <div className="row mt-4 ml-4">
        <Title hostelId={hostelId} count={count} />
      </div>
      <div>
        <Rooms rooms={rooms} />
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

export default ShowRoom;
