import React from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/Banner";
import ShowRoom from "./showRoom/ShowRoom";
import ListOption from "./listOption/ListOption";
import SlideRoom from "./slideHostel/SlideHostel";

ListRoom.propTypes = {};

function ListRoom(props) {
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
          <SlideRoom />
        </div>
      </div>
    </div>
  );
}

export default ListRoom;
