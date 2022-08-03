import SaveIcon from '@mui/icons-material/Save';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { Box, Button, Card, CardHeader, ImageList, ImageListItem, CardMedia, IconButton, TextField, styled } from '@mui/material/';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { newHostelImage, updateHostelInfo } from '../../../redux/actions/ownerHostel';
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import { Navigation, Pagination } from "swiper";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { storage } from "../../../Firebase/firebase";
// import EditPrize from './edit';

FormUpdateHostel.propTypes = {

};


function FormUpdateHostel({ hostel }) {

      // Hide inpput of Media
  const Input = styled("input")({
    display: "none",
  });
  const inputRef = useRef();
  const [inputImage, setInputImage] = useState([]);

  // state of obj to push to firebase
  const [strgImg, setStrgImg] = useState([]);

  console.log("inputImage: ", inputImage);

    let navigate = useNavigate();
    const current = useSelector((state) => state.login.infoUser);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        if (hostel != null) {
            setName(hostel.name)
            setAddress(hostel.address)
        }
    }, [hostel])


    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }
    const handleOnChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    // Choose image and
  const handleChoose = (event) => {
    inputRef.current.click();
  };
  // const storage = getStorage();
  // Display selected iamge
  const handleFileChange = (event) => {
    let image = [];
    let storageImage = [];
    for (let i = 0; i < event.target.files.length; i++) {
      if (
        event.target.files[i].type === "image/png" ||
        event.target.files[i].type === "image/jpeg" ||
        event.target.files[i].type === "image/jpg" ||
        event.target.files[i].type === "image/gif"
      ) {
        image.push(URL.createObjectURL(event.target.files[i]));
        storageImage.push(event.target.files[i]);
      }
    }
    setStrgImg(storageImage);
    setInputImage(image);
  };
  let imagesLink = [];
  const uploadAndGetLinkImg = async () => {
    console.log("objImage: ", strgImg);
    for (let i = 0; i < strgImg.length; i++) {
      const storageRef = ref(storage, `/Hostels/${strgImg[i].name}`);
      console.log(strgImg[i].name)
      await uploadBytes(storageRef, strgImg[i]);
      // get link from database to download
      await getDownloadURL(storageRef)
        .then((url) => {
          imagesLink.push(url);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  // handle deleted iamge
  const handleDeleteSelectedSource = () => {
    setInputImage([]);
  };



    const handleUpdateHostel = async () => {
        await uploadAndGetLinkImg();
        try {
            const updateHostel = {
                id: hostel.id,
                name: name,
                address: address,
                accountId: current.id,
                status: true,
            }
            const newHostelImg = {
                id: "string",
                url: imagesLink[0],
                hostelId: hostel.id,
              }
            dispatch(updateHostelInfo(hostel.id, updateHostel))
            dispatch(newHostelImage(newHostelImg))
            await Swal.fire(
                'Update hostel successfully',
                'Click button to continute!',
                'success'
            )
        } catch (error) {
            console.log('Failed update hostel: ', error);
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    return (
        <form>
            <Card sx={{ marginBottom: "10px" }}>
        <CardHeader title={`Hostel ${hostel.name}`} />
        <Box
          sx={{
            width: "700px",
            height: "500px",
            margin: "0 auto",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            // navigation
            slidesPerView={1}
            // pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {hostel.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <CardMedia
                  component="img"
                  src={img?.url}
                  sx={{ height: "100%", width: "100%" }}
                ></CardMedia>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>
            <div className="form-group">
                <TextField type="text" sx={{ mb: 2 }} value={name} fullWidth name='name' onChange={handleOnChangeName} />
                <TextField type="text" sx={{ mb: 2 }} value={address} fullWidth name='address' onChange={handleOnChangeAddress} />
                {/* <TextField type="text" sx={{ mb: 2 }} value={status} fullWidth name='status' onChange={handleOnChangeStatus} /> */}
            </div>
            {inputImage.length ? (
        <Card
          variant="outlined"
          sx={{ padding: "10px", marginTop: 2, position: "relative" }}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {inputImage.map((image, index) => (
              // console.log(source),
              <div key={index} className="image-item">
                <ImageListItem key={index}>
                  <img src={image} alt={"image"} loading="lazy" />
                </ImageListItem>
              </div>
            ))}
          </ImageList>
          <IconButton onClick={handleDeleteSelectedSource}>
            <CloseIcon />
          </IconButton>
        </Card>
      ) : (
        <></>
      )}
            <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* INPUT AND BUTTON TO FILL MEDIA */}
        <label htmlFor="contained-button-file">
          <Input
            accept="image/* "
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            aria-label="upload picture"
            onClick={handleChoose}
            component="span"
            endIcon={<PhotoCamera />}
          >
            Photo
          </Button>
        </label>
                <Button variant="contained" onClick={handleUpdateHostel}>
                    <SaveIcon />
                    <span>Save</span>
                </Button>
                <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={() => navigate(`/owner/list_hostel`)}>
                    <SettingsBackupRestoreIcon />
                    <span>Back</span>
                </Button>
            </div>
        </form>
    );
}

export default FormUpdateHostel;