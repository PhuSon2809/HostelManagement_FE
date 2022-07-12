import React, { useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import Services from "./services/Services";
import Blog from "./blog/Blog";
import Outline from "./outline/Outline";
import HostelAPI from "../../apis/hostel";
import HostelList from "./hostelList/HostelList";

Home.propTypes = {};

function Home(props) {
  const [hostels, setHostels] = useState([]);
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

  return (
    <div>
      <Carousel />
      <div className="containers">
        <Blog />
        <Services />
        <Outline />
        <HostelList hostels={hostels} />
      </div>
    </div>
  );
}

export default Home;
