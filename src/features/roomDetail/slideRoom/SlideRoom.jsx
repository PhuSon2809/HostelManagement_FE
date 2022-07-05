import React, { useState } from "react";
import PropTypes from "prop-types";
import "./slideRoom.scss";
import { Link } from "react-router-dom";

AnotherRoom.propTypes = {};

function AnotherRoom(props) {
  return (
    <div className="anotherRoom" id="anotherRoom">
      <div className="another">
        <h3>Another Room</h3>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <div className="rooms row">
            <div className="col-12 col-md-5">
              <div className="image">
                <img src="./images/room1.png" className="img-fluid img1" />
                <img src="./images/room2.png" className="img-fluid img2" />
              </div>
            </div>
            <div className="col-12 col-md-7 pl-0">
              <div className="content mt-2 mt-md-0">
                <h3>Deluxe Queen Room With Street View</h3>
                <p>1 Bedroom / 1 Bathroom / Wifi / Kitchen</p>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half" />
                <div className="house-price">
                  <p>30 m2</p>
                  <p>Thanh pho Ho Chi Minh</p>
                  <p className="red">
                    &amp; 100 <span>/ day</span>
                  </p>
                </div>
                <div className="text-center text-md-left">
                  <Link to="/room" className="btn">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="btn-group mt-2 mb-2 m-auto"
          role="group"
          aria-label="First group"
        >
          <button type="button" className="btn">
            <i className="fa fa-arrow-left" />
          </button>
          <button type="button" className="btn">
            1
          </button>
          <button type="button" className="btn">
            2
          </button>
          <button type="button" className="btn">
            3
          </button>
          <button type="button" className="btn">
            <i className="fa fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnotherRoom;
