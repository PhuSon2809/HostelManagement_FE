import React, { useEffect, useState } from "react";
import HostelAPI from "../../apis/hostelApi";
import Banner from "../../components/banner/Banner";
import ShowRoom from "./showRoom/ShowRoom";
import SlideHostel from "./slideHostel/SlideHostel";

function ListRoom(props) {
  const [hostels, setHostels] = useState([]);
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 9,
  });

  const fetchData = async () => {
    const hostelsApi = await HostelAPI.getHostels(filters);
    setHostels(hostelsApi.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [filters])

  return (
    <div>
      <Banner />
      <div className="containers">
        <div>
          <ShowRoom />
        </div>
        <div className="row ml-2 mr-2 ml-md-0 mr-md-0">
          <SlideHostel hostels={hostels} />
        </div>
      </div>
    </div>
  );
}

export default ListRoom;
