import React, { useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import Services from "./services";
import Blog from "./blog/Blog";
import Outline from "./outline/Outline";
import Hostel from "./hostel/Hostel";
import HostelAPI from "../../apis/hostel";

Home.propTypes = {};



function Home(props) {

  const [hostels, setHostels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    const  hostelsApi = await HostelAPI.getHostels();
    const  roomsApi = await HostelAPI.getHostels();
    // console.log("hostels:", hostels);
    // console.log("rooms:", rooms);

    setHostels(hostelsApi);
    setRooms(roomsApi);

  };
  useEffect( () => {
    try {
      // const hostels = await HostelAPI.getHostels();
      // console.log("hostels", hostels);
      fetchData();
    } catch (error) {
      console.log("fail to get hostel");
    }
  }, []);

  return (
    <div>
      <Carousel />
      <div className="containers">
        <Blog />
        <Services />
        <Outline />
        <Hostel hostels={hostels} rooms={rooms}/>
      </div>
    </div>
  );
}

export default Home;
