import React from "react";
import PropTypes from "prop-types";
import "./listType.scss";

ListType.propTypes = {};

function ListType(props) {
  return (
    <div className="listType mb-4">
      <div className="title">
        <h2>Select Location</h2>
      </div>
      <div className="sidebar p-3">
        <h3>Property Type</h3>
        <div className="filter">
          <input type="checkbox" />
          <p>House</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>Hostel</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>Flat</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>Villa</p> <span>(0)</span>
        </div>
        <div className="filter">
          <input type="checkbox" />
          <p>Guest Suite</p> <span>(0)</span>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="filter">
            <input type="checkbox" />
            <p>Air Conditioning</p> <span>(0)</span>
          </div>
          <div className="filter">
            <input type="checkbox" />
            <p>Wifi</p> <span>(0)</span>
          </div>
          <div className="filter">
            <input type="checkbox" />
            <p>Gym</p> <span>(0)</span>
          </div>
          <div className="filter">
            <input type="checkbox" />
            <p>Pool</p> <span>(0)</span>
          </div>
          <div className="filter">
            <input type="checkbox" />
            <p>Kitchen</p> <span>(0)</span>
          </div>
        </div>
        <div className="text-center">
          <a
            className="btn"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            View more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListType;
