import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./features/home/Home";
import Hostels from "./features/hostels/Hostels";
import ListRoom from "./features/listRoom/ListRoom";
import RoomDetail from "./features/roomDetail/RoomDetail";
import Profile from "./features/profile/Profile";
import Owner from "./features/owner/index";
import Booking from "./features/booking";
import Authenticated from "./features/authenticated";

function Main() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" exact element={<Authenticated />} />
        </Routes>
      </>
      <div>
        <header>
          <Header />
        </header>
        <Routes>
          {/* <Route path="/" exact element={<Authenticated />} /> */}
          <Route path="/home" exact element={<Home />} />
          <Route path="/hostel" exact element={<Hostels />} />
          <Route path="/listRoom/:hostelId" exact element={<ListRoom />} />
          <Route path="/room/:roomId/:hostelId" exact element={<RoomDetail />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/owner/*" exact element={<Owner />} />
          <Route path="/booking" exact element={<Booking />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Main;
