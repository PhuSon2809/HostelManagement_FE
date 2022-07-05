import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./features/home/Home";
import Hostel from "./features/hostels/Hostels";
import ListRoom from "./features/listRoom/ListRoom";
import RoomDetail from "./features/roomDetail/RoomDetail";
import Profile from "./features/profile/Profile";
import { useEffect } from "react";
import HostelAPI from "./apis/hostel";

function Main() {
  // const fetchData = async () => {
  //   const { data: hostels } = await HostelAPI.getHostels();
  //   const { data: rooms} = await HostelAPI.getHostels();
  //   console.log(hostels);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/hostel" exact element={<Hostel />} />
        <Route path="/listRoom" exact element={<ListRoom />} />
        <Route path="/room" exact element={<RoomDetail />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
