import React from "react";
import "./carousel.scss";

function Carousel(props) {
  return (
    <div id="myCarousel" className="carousel" data-ride="carousel">
      <ol className="carousel-indicators">
        <li className="active" data-target="#myCarousel" data-slide-to={0} />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./images/slide1.webp"
            alt="First slide"
            className="d-block w-100"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Flast Hostel</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#hostel" className="btn">Booking Now</a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./images/slide2.webp"
            alt="Second slide"
            className="d-block w-100"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Dark Hostel</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#hostel" className="btn">Booking Now</a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./images/slide3.webp"
            alt="Third slide"
            className="d-block w-100"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Pool Hostel</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#hostel" className="btn">Booking Now</a>
          </div>
        </div>
      </div>
      <a
        href="#myCarousel"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        href="#myCarousel"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
