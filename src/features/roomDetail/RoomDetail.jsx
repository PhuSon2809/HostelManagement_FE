import React from "react";
import PropTypes from "prop-types";
import RoomImage from "./roomImage/RoomImage";
import Menu from "./menu/Menu";
import Overview from "./overview/Overview";
import Host from "./host/Host";
import AnotherRoom from "./slideRoom/SlideRoom";
import Utilities from "./utilities/Utilities";

RoomDetail.propTypes = {};

function RoomDetail(props) {
  return (
    <div className="containers">
      <div className="row">
        <RoomImage />
      </div>
      <div className="row">
        <Menu />
      </div>
      <div className="row">
        <div className="col-12 col-md-9 p-0 order-last order-md-first">
          <Overview />
          <Utilities />
        </div>
        <div className="col-12 col-md-3 p-0 order-first">
          <Host />
        </div>
      </div>
      <div className="row">
        <AnotherRoom />
      </div>
    </div>
  );
}

export default RoomDetail;
