import React, { useState } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/Banner";
import ShowRoom from "./showRoom/ShowRoom";
import ListOption from "./listOption/ListOption";
import SlideRoom from "./slideHostel/SlideHostel";
import { useEffect } from "react";
import HostelAPI from "../../apis/hostel";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

ListRoom.propTypes = {};

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "3rem",
  },
}));

function ListRoom(props) {
  const classes = useStyles();

  const [hostels, setHostels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const fetchData = async () => {
    const hostelsApi = await HostelAPI.getHostels(filters);
    setHostels(hostelsApi);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, []);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      pageIndex: page,
    }));
  };

  return (
    <div>
      <Banner />
      <div className="containers">
        <div className="row">
          <div className="col-12 col-md-9 order-last order-md-first">
            <ShowRoom />
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
          <div className="col-12 col-md-3">
            <ListOption />
          </div>
        </div>
        <div className="row ml-2 mr-2 ml-md-0 mr-md-0">
          <SlideRoom hostels={hostels} />
        </div>
      </div>
    </div>
  );
}

export default ListRoom;
