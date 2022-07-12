import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "./slideHostel.scss";

SlideRoom.propTypes = {
  hostels: PropTypes.object,
};

function SlideRoom({ hostels }) {
  console.log("list room page: ", hostels);
  return (
    <div className="SlideRoom">
      <h3>Another Hostel</h3>
      <div className="SlideRoom_item w-md-100">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {hostels.data?.map((hostel) => (
            <SwiperSlide key={hostel.id}>
              <div className="infor">
                <div className="image">
                  <img src="./images/show1.jfif" className="img-fluid" />
                  <div className="icons">
                    <a href="#">
                      <i className="fa fa-user" /> by {hostel.account.name}
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="h3">
                    <h3>{hostel.name}</h3>
                  </div>

                  <p>{hostel.address}</p>

                  {hostel.roomTypes.map((roomType) => (
                    <div className="d-flex" key={roomType.id}>
                      <span className="mr-auto">{roomType.acreage} m2</span>
                      <span>{roomType.price} VNĐ</span>
                    </div>
                  ))}

                  <div className="col-12 text-center">
                    <Link to="/listRoom" className="btn">
                      View room
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideRoom;
