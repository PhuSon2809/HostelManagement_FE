import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";

import "./slideHostel.scss";
import HostelDetail from "../hostelDetail/HostelDetail";

SlideHostel.propTypes = {
  hostels: PropTypes.array,
};

function SlideHostel({ hostels }) {
  return (
    <div className="SlideHostel">
      <h3>Another Hostel</h3>
      <div className="SlideHostel_item w-md-100">
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
          {hostels?.map((hostel) => (
            <SwiperSlide key={hostel.id}>
              <HostelDetail hostel={hostel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideHostel;
