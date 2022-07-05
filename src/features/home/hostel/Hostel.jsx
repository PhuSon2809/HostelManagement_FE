import React from "react";
import PropTypes from "prop-types";
import "./hostel.scss";
import { Link } from "react-router-dom";

Hostel.propTypes = {
  hostels: PropTypes.array,
};

function Hostel({ hostels, rooms }) {
  console.log("hostels props: ", hostels);
  console.log("rooms props: ", rooms);

  return (
    <div className="hostel" id="hostel">
      <div className="row row-content align-self-center head">
        <div className="col-12 col-md-3">
          <h3>Hostels</h3>
        </div>
        <div className="col col-md align-self-center">
          <p>
            Among going manor who did. Do ye is celebrated it sympathize
            considered. May ecstatic did surprise elegance the ignorant age. Own
            her miss cold last. It so numerous if he outlived disposal. How but
            sons mrs lady when. Her especially are unpleasant out.
          </p>
        </div>
      </div>

      <div className="box-content">
        {/* {hostels.map((hostel) => { */}
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>GRean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="d-flex">
              <p className="mr-auto">Kali, America. </p>
              <span>10USD</span>
            </div>
            <div className="col-12 text-center">
              <Link to="/listRoom" className="btn">
                View room
              </Link>
            </div>
          </div>
        </div>

        {/* })} */}
      </div>

      <div className="col-12 text-center list_more">
        <Link to="/hostel" className="btn">
          View more
        </Link>
      </div>
    </div>
  );
}

export default Hostel;
