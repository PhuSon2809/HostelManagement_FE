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
import {
  getRoomByAccountId,
  getRoomTypes,
  newRoomImage,
  updateRoomImage,
  updateRoomInfo,
} from "../../../redux/actions/ownerRoom";
import { storage } from "../../../Firebase/firebase";
import { getHostelById } from "../../../redux/actions/ownerHostel";
import { updateBillInfo } from "../../../redux/actions/ownerBill";

FormUpdateBill.propTypes = {};

function FormUpdateBill({ bill }) {
  console.log("bill: ", bill);

  let navigate = useNavigate();
  const current = useSelector((state) => state.login.infoUser);
  const hostel = useSelector((state) => state.ownerHostel.hostel);
  const listRoom = useSelector((state) => state.ownerRoom.rooms);

  console.log("listRoom: ", listRoom);

  const [service, setService] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 8,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHostelById(bill.room?.hostel?.id));
    dispatch(getRoomByAccountId(current.id, bill.room?.hostel?.id, filters));
  }, [bill?.room?.hostel?.id]);

  useEffect(() => {
    if (bill != null) {
      setService(bill.service?.id);
      setRoom(bill.room?.id);
      setDate(bill.date);
      setQuantity(bill.quantity);
      setPrice(bill.price);
      setTotal(bill.total);
      // setType(room.roomType?.id);
    }
  }, [bill]);

  const handleChangeService = (event) => {
    setService(event.target.value);
  };
  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleOnChangeTotal = (event) => {
    setTotal(event.target.value);
  };

  const handleUpdateBill = async () => {
    try {
      const updateBill = {
        id: bill.id,
        serviceId: service,
        date: date,
        roomId: room,
        quantity: quantity,
        price: price,
        total: total,
        status: true,
      };
      dispatch(updateBillInfo(bill.id, updateBill));
      console.log("updateBill: ", updateBill);
      await Swal.fire(
        "Update bill successfully",
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
      <div className="form-group">
        {/* <FormControl fullWidth>
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
        </FormControl> */}

        {/* SERVICE INPUT */}
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <InputLabel id="demo-simple-select-label">Bill's Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={service}
            label="Bill's Service"
            onChange={handleChangeService}
          >
            {hostel.services?.map((svc, index) => (
              <MenuItem key={index} value={svc.id}>
                {svc.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* ROOM INPUT */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={room}
            label="Room"
            onChange={handleChangeRoom}
          >
            {listRoom?.map((room, index) => (
              <MenuItem key={index} value={room.id}>
                {room.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* DATE TIME FIELD */}
        <FormControl fullWidth>
          <TextField
            value={date}
            id="datetime-local"
            type="datetime-local"
            name="createDate"
            label="Create Date"
            onChange={handleChangeDate}
          ></TextField>
        </FormControl>

        {/* QUANTITY */}
        <TextField
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          value={quantity}
          name="quantity"
          onChange={handleOnChangeQuantity}
        />

        {/* PRICE */}
        <TextField
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          value={price}
          name="price"
          onChange={handleOnChangePrice}
        />

        {/* TOTAL */}
        <TextField
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          value={total}
          name="total"
          onChange={handleOnChangeTotal}
        />
      </div>

      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" onClick={handleUpdateBill}>
          <SaveIcon />
          <span>Save</span>
        </Button>
        <Button
          variant="outlined"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(`/owner/bill`)}
        >
          <SettingsBackupRestoreIcon />
          <span>Back</span>
        </Button>
      </div>
    </form>
  );
}

export default FormUpdateBill;
