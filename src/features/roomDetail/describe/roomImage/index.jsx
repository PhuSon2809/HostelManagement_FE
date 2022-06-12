import PropTypes from 'prop-types';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./roomImage.scss";

RoomImage.propTypes = {

};

function RoomImage(props) {
    return (
        <div className='roomImage'>
            <div className='slideImage'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="./images/room1.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room2.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room3.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room4.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room1.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room2.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room3.png" alt className="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/room4.png" alt className="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default RoomImage;