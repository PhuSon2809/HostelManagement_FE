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
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  // const currentUser = JSON.parse(window.localStorage.getItem("accounts"));
  // const isCurrentUser = JSON.parse(window.localStorage.getItem("accounts"))?.roleId === 2;
  // const isCurrentAdmin = window.localStorage.getItem("accounts")?.roleId === 1;
  // const isCurrentLandlord = window.localStorage.getItem("accounts")?.roleId === 3;
  const currentUser = useSelector((state) => state.login.infoUser.roleId);
  console.log("currentUser main: ", currentUser);

  return (
    <>
      {/* <>
        <Routes>
          <Route path="/" exact element={<Authenticated />} />
        </Routes>
      </> */}
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
          {/* <Route path="/home" exact element={<Home />} /> */}

          {/* <Route
            path="/hostel"
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <Hostel />
              ) : (
                <Authenticated />
              )
            }
          />
          <Route
            path="/listRoom"
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <ListRoom />
              ) : (
                <Authenticated />
              )
            }
          />

          <Route
            path="/room"
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <RoomDetail />
              ) : (
                <Authenticated />
              )
            }
          />
          <Route
            path="/profile"
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <Profile />
              ) : (
                <Authenticated />
              )
            }
          />
          <Route
            path="/owner/*" 
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <Owner />
              ) : (
                <Authenticated />
              )
            }
          />
          <Route
            path="/booking" 
            exact
            element={
              (currentUser && currentUser["roleId"] === 1) ||
              (currentUser && currentUser["roleId"] === 2) ||
              (currentUser && currentUser["roleId"] === 3) ? (
                <Booking />
              ) : (
                <Authenticated />
              )
            }
          /> */}

          {/* <Route path="/hostel" exact element={<Hostel />} />
          <Route path="/listRoom" exact element={<ListRoom />} /> */}
          {/* <Route path="/room" exact element={<RoomDetail />} /> */}
          {/* <Route path="/profile" exact element={<Profile />} /> */}
          {/* <Route path="/owner/*" exact element={<Owner />} /> */}
          {/* <Route path="/booking" exact element={<Booking />} /> */}
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Main;
