import React, { useState, useEffect } from "react";
import Title from "./title/Title";
import Rooms from "./rooms/Rooms";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useParams } from "react-router";
import RoomAPI from "../../../apis/roomApi";

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginBottom: "2rem",
  },
}));

function ShowRoom(props) {
  const classes = useStyles();

  const { hostelId } = useParams(); //lấy ID truyền tới

  console.log("id from router: ", hostelId);

  const [rooms, setRooms] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const fetchData = async () => {
    const roomsApi = await RoomAPI.getRoomByIdFilter(hostelId, filters);
    console.log("roomsApi: ", roomsApi);
    setRooms(roomsApi?.data);
    setCount(roomsApi?.count);
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
    <div className="listRoom">
      <div className="row mt-4 ml-4">
        <Title hostelId={hostelId} rooms={rooms} />
      </div>
      <div>
        <Rooms rooms={rooms} />
        <Box className={classes.pagination}>
          <Pagination
            count={Math.ceil(count / filters.pageSize)}
            variant="outlined"
            color="error"
            page={filters.pageIndex}
            onChange={handlePageChange}
          />
        </Box>
      </div>
    </div>
  );
}

export default ShowRoom;
