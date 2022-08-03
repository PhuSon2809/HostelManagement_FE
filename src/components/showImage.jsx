import { CardMedia, Dialog, DialogContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";



ShowImage.propTypes = {
    // images: PropTypes.array,
};

function ShowImage({ images }) {

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');

    const handleClickOpenImage = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            {
                images?.length > 0 ? <div onClick={handleClickOpenImage}  >
                    <img width="100%" src={images && images[0]?.url} alt="" />
                    {
                        images?.length > 1 &&
                        <Typography>
                            {images?.length - 1}+
                        </Typography>
                    }
                </div> : <div  >
                    <img src={images && images[0]?.url} alt="" />
                    <Typography>No imgage</Typography>
                </div>
            }

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >

                <DialogContent>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {images?.map((img, index) => (

                            <SwiperSlide  key={index}>
                                <CardMedia
                                    sx={{
                                        width: "600px",
                                        width: "auto",
                                        height: "600px",
                                        maxHeight: "600px",
                                    }}
                                   height="700" component="img" src={img?.url}></CardMedia>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </DialogContent>
            </Dialog>
        </>

    );
}

export default ShowImage;