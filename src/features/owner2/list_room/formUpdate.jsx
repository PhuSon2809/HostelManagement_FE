import SaveIcon from "@mui/icons-material/Save";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getRoomTypes, newRoomImage, updateRoomImage, updateRoomInfo } from "../../../redux/actions/ownerRoom";
import { storage } from "../../../Firebase/firebase";

FormUpdateRoom.propTypes = {};

function FormUpdateRoom({ room }) {

  // Hide inpput of Media
  const Input = styled("input")({
    display: "none",
  });
  const inputRef = useRef();
  const [inputImage, setInputImage] = useState([]);

  // state of obj to push to firebase
  const [strgImg, setStrgImg] = useState([]);

  console.log("inputImage: ", inputImage);

  console.log("room: ", room);

  let navigate = useNavigate();
  const current = useSelector((state) => state.login.infoUser);
  const roomtypes = useSelector((state) => state.ownerRoom.roomTypes);

  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomTypes(room?.hostel?.id));
  }, [room?.hostel?.id]);

  useEffect(() => {
    if (room != null) {
      setName(room.name);
      setType(room.roomType?.id);
    }
  }, [room]);

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

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
      const storageRef = ref(storage, `/Rooms/${strgImg[i].name}`);
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

  const handleUpdateRoom = async () => {
    await uploadAndGetLinkImg();
    try {
      const updateRoom = {
        id: room.id,
        name: name,
        roomTypeId: type,
        hostelId: room.hostel.id,
        status: true,
      };
      const newRoomImg = {
        id: "string",
        url: imagesLink[0],
        hostelId: room.hostel.id,
        roomId: room.id
      }
      dispatch(updateRoomInfo(room.id, updateRoom));
      dispatch(newRoomImage(room.id, newRoomImg));
      console.log("newRoomImg: ", newRoomImg);
      await Swal.fire(
        "Update hostel successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      console.log("Failed update hostel: ", error);
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <form>
      <Card sx={{ marginBottom: "10px" }}>
        <CardHeader title={`Room ${room.name}`} />
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
            {room.images?.map((img, index) => (
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
        <TextField
          type="text"
          sx={{ mb: 2 }}
          value={name}
          fullWidth
          name="name"
          onChange={handleOnChangeName}
        />
        {/* <TextField
          type="text"
          sx={{ mb: 2 }}
          value={address}
          fullWidth
          name="address"
          onChange={handleOnChangeAddress}
        /> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Room type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            value={type}
            // value={type}
            label="Type"
            onChange={handleChangeType}
          >
            {roomtypes?.map((roomtype, index) => (
              <MenuItem value={roomtype.id}>{roomtype.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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

      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "center" }}
      >
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
        <Button variant="contained" onClick={handleUpdateRoom}>
          <SaveIcon />
          <span>Save</span>
        </Button>
        <Button
          variant="outlined"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(`/owner/list_room`)}
        >
          <SettingsBackupRestoreIcon />
          <span>Back</span>
        </Button>
      </div>
    </form>
  );
}

export default FormUpdateRoom;
