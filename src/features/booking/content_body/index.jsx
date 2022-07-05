import React from "react";
import PropTypes from "prop-types";
import "./content_body.scss";
import useForm from "../../../components/Hooks/useForm";

Content_body.prototype = {};

function Content_body() {
  const formLogin = () => {
    // console.log('Call back function when form submitted!');
    console.log("Form values", values);
  };
  const { handleChange, errors, values, handleSubmit } = useForm(formLogin);

  return (
    <div className="container-fluid mt-0 ml-0 content-body row">
      <div id="booking" className="col-12 col-xl-4">
        <div>
          <div className="row">
            <div className="booking-form">
              <div className="form-header">
                <h1>Welcome, Full Name</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="fullName"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                  <span className="form-label">Full name</span>
                  {errors.fullName && <p>{errors.fullName}</p>}
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input class="form-control" type="date" required />
                      <span className="form-label">Booking Date</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input class="form-control" type="date" />
                      <span className="form-label">Meeting Date</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input class="form-control" type="time" required />
                      <span className="form-label">Meeting Time</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                      />
                      <span className="form-label">Email</span>
                      {errors.email && <p>{errors.email}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        placeholder="Enter you phone"
                        onChange={handleChange}
                      />
                      <span className="form-label">Phone</span>
                      {errors.phone && <p>{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <button className="submit-btn">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="content-right col-12 col-xl-4 align-self-center">
        <i className="fa fa-image">Here is your room images</i>
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657"
                alt="Room Images"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657"
                alt="Room Images"
              />
            </div>
          </div>

          <ol className="carousel-indicators">
            <li
              data-target="#mycarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#mycarousel" data-slide-to="1"></li>
          </ol>
          <a
            class="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <p>
          <strong>Address: </strong>
        </p>
      </div>
    </div>
  );
}
export default Content_body;
