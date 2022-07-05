import React from "react";
import PropTypes from "prop-types";
import Dashboard from "./dashboard";
import ListUser from "./content_right/list_user";
import ListRoom from "./content_right/list_room";
import Bill from "./content_right/bill";
import Create_Room from "./content_right/create_room";
import Create_Hostel from "./content_right/create_hostel";
import Profile from "./profile";
import Edit from "./profile/edit_owner";
import "./owner.scss";
import $ from "jquery";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

Owner.propTypes = {};
$(function ($) {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

function Owner(props) {
  return (
    <div className="row w-100 d-flex">
      <div className="col col-md-2">
        <Dashboard />
      </div>
      <div className="col-12 col-sm-12 col-md mt-5 offset-1 offset-sm-0">
        <Routes>
          <Route path="/" exact element={<Profile />} />
          <Route path="/list_user" exact element={<ListUser />} />
          <Route path="/list_room" exact element={<ListRoom />} />
          <Route path="/bill" exact element={<Bill />} />
          <Route path="/create_hostel" exact element={<Create_Hostel />} />
          <Route path="/create_room" exact element={<Create_Room />} />
          <Route path="/profile/*" exact element={<Profile />} />
          <Route path="/profile/edit" exact element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default Owner;
