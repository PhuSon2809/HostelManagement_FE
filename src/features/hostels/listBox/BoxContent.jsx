import React from "react";
import PropTypes from "prop-types";
import "./boxContent.scss";
import { Link } from "react-router-dom";

ListBox.propTypes = {};

function ListBox(props) {
  return (
    <div>
      <div className="box-content justify-content-center">
        <div className="infor">
          <div className="image">
            <img src="./images/show1.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin
              </a>
            </div>
          </div>
          <div className="content">
            <h3>King Hostel</h3>
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
            <img src="./images/show2.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>King Hostel</h3>
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
            <img src="./images/show3.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>King Hostel</h3>
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
            <img src="./images/show4.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>King Hostel</h3>
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
            <img src="./images/show5.jfif" alt className="img-fluid" />
            <div className="icons">
              <a href="#">
                <i className="fa fa-user" /> by admin{" "}
              </a>
            </div>
          </div>
          <div className="content">
            <h3>King Hostel</h3>
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
            <h3>King Hostel</h3>
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
            <h3>King Hostel</h3>
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
            <h3>King Hostel</h3>
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
      </div>

      <div className="btn-group mt-4" role="group" aria-label="First group">
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
          4
        </button>
      </div>
    </div>
  );
}

export default ListBox;
