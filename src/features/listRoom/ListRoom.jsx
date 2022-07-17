import React, { useState } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/Banner";
import ShowRoom from "./showRoom/ShowRoom";
import ListOption from "./listOption/ListOption";
import SlideHostel from "./slideHostel/SlideHostel";
import { useEffect } from "react";
import HostelAPI from "../../apis/hostelApi";

ListRoom.propTypes = {};

function ListRoom(props) {
  const [hostels, setHostels] = useState([]);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 9,
  });

  const fetchData = async () => {
    const hostelsApi = await HostelAPI.getHostels(filters);
    console.log("hostelsApi: ", hostelsApi);
    setHostels(hostelsApi.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, []);

  return (
    <div>
      <Banner />
      <div className="containers">
        <div className="row">
          <div className="col-12 col-md-9 order-last order-md-first">
            <ShowRoom />
          </div>
          <div className="col-12 col-md-3">
            <ListOption />
          </div>
        </div>
        <div className="row ml-2 mr-2 ml-md-0 mr-md-0">
          <SlideHostel hostels={hostels} />
        </div>
      </div>
    </div>
  );
}

export default ListRoom;
