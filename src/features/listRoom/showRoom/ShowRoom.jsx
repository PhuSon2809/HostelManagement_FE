import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RoomAPI from "../../../apis/roomApi";
import ListOption from "./listOption/ListOption";
import Rooms from "./rooms/Rooms";
import Title from "./title/Title";

const PaginationStyle = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  marginTop: "1.5rem",
  marginBottom: "1.4rem",
}));

function ShowRoom(props) {
  const { hostelId } = useParams(); //lấy ID truyền tới
  console.log("hostelId: ", hostelId);

  const [rooms, setRooms] = useState([]);
  const [typeRoomName, setTypeRoomName] = useState(null);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  console.log("typeRoomName: ", typeRoomName);

  const fetchData = async () => {
    if (typeRoomName === null) {
      const responseRoom = await RoomAPI.getRoomByIdFilter(hostelId, filters);
      setRooms(responseRoom.data);
      setCount(responseRoom.totalRecord);
    } else {
      const params = new URLSearchParams(filters);
      const responseRoom = await RoomAPI.getRoomByTypeRoom(
        hostelId,
        typeRoomName + "&" + params
      );
      setRooms(responseRoom?.data);
      setCount(responseRoom?.totalRecord);
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [hostelId, filters, typeRoomName]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  const handleTypeRoom = (newTypeRoomName) => {
    setTypeRoomName(newTypeRoomName);
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: 1,
    }));
  };

  return (
    <div className="row listRoom">
      <div className="col-12 col-md-9 order-last order-md-first">
        <div className="mt-4 ml-4">
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
      <div className="col-12 col-md-3">
        <ListOption onChange={handleTypeRoom}/>
      </div>
    </div>
  );
}

export default ShowRoom;
