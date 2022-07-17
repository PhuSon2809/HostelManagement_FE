import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./imageSlider.scss";

ImageSlider.propTypes = {
  images: PropTypes.array,
};

function ImageSlider({ imageList }) {
  return (
    <div className="imageSlider">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageList?.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="slide" className="img-fluid"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
