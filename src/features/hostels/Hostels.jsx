import React, { useState } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/Banner";
import ListTitle from "./listTitle/ListTitle";
import ListBox from "./listBox/BoxContent";
import ListType from "./listType/ListType";

Hostel.propTypes = {};

function Hostel(props) {

  return (
    <div>
      <Banner />
      <div className=" mt-5 mb-5">
        <div className="containers">
          <div className="row">
            <ListTitle />
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-9 order-last order-md-first">
              <ListBox />
            </div>
            <div className="col-12 col-md-3 order-first">
              <ListType />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
