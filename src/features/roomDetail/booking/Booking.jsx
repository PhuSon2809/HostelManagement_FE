import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  FormFeedback,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import BookingAPI from "../../../apis/bookingApi";
import formatDate from "../../../utils/formatDate";
import "./booking.scss";

Booking.propTypes = {};

function Booking({ toggle, modal, roomDetail }) {
  const current = useSelector((state) => state.login.infoUser);
  const currentDate = new Date();

  const monthFormat =
    currentDate.getMonth() < 10
      ? `0${currentDate.getMonth() + 1}`
      : currentDate.getMonth() + 1;
  const dayFormat =
    currentDate.getDay() < 10
      ? `0${currentDate.getDay()}`
      : currentDate.getDay();
  const hoursFormat =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : currentDate.getHours();
  const minuteFormat =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : currentDate.getMinutes();
  const secondFormat =
    currentDate.getSeconds() < 10
      ? `0${currentDate.getSeconds()}`
      : currentDate.getSeconds();

  const currentDateFormat = `${currentDate.getFullYear()}-${monthFormat}-${dayFormat}T${hoursFormat}:${minuteFormat}:${secondFormat}.${currentDate.getMilliseconds()}Z`;

  const [meetingDateError, setMeetingDateError] = useState("");
  const [meetingDate, setMeetingDate] = useState("2022-08-11T19:30");

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("e: ", e.target.value);
    const inputNew = {
      ...meetingDate,
      name: value,
    };
    setMeetingDate(inputNew.name);
  };

  const handleSubmitBooking = async () => {
    if (meetingDateError === "") {
      try {
        const newBooking = {
          id: "id",
          accountId: current.id,
          roomId: roomDetail.id,
          bookingDate: currentDateFormat,
          meetingDate: meetingDate,
        };
        const response = await BookingAPI.createNewBooking(newBooking);
        console.log("newBooking: ", newBooking);
        Swal.fire(
          "New Booking successfully",
          "Click button to continute!",
          "success"
        );
      } catch (error) {
        console.log("faild to create booking: ", error);
        Swal.fire({
          icon: "error",
          title: "The room has been booked.",
          text: "Please book another room.",
        });
      }
      toggle();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Meeting date must after Booking date.",
      });
    }
  };

  const handleValidate = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "meetingDate") {
      if (value.length === 0) {
        setMeetingDateError("Please choose date want to meeting.");
      } else if (currentDate > new Date(meetingDate)) {
        setMeetingDateError("Meeting date must after Booking date.");
      } else {
        setMeetingDateError("");
      }
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          close={
            <button className="close m-0" onClick={toggle}>
              &times;
            </button>
          }
        >
          <i className="fa fa-book" /> Booking Meeting
        </ModalHeader>
        <ModalBody>
          <div className="row mb-3 mr-1 ml-1">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              className="mySwiper"
            >
              {roomDetail.images?.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.url} alt="slide" className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row ml-1">
            <div className="col-12 col-md-6">
              <div className="row mb-1">
                <div className="col-5">
                  <p>
                    <i className="fa fa-user" /> <span>User:</span>
                  </p>
                </div>
                <div className="col-7">{current.name}</div>
              </div>
              <div className="row mb-1">
                <div className="col-5">
                  <p>
                    <i className="fa fa-phone" /> <span>Phone:</span>
                  </p>
                </div>
                <div className="col-7">{current.phone}</div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="row mb-1">
                <div className="col-5">
                  <p>
                    <i className="fa fa-home" /> <span>Hostel:</span>
                  </p>
                </div>
                <div className="col-7">{roomDetail.hostel?.name}</div>
              </div>
              <div className="row mb-1">
                <div className="col-5">
                  <p>
                    <i className="fa fa-bed" /> <span>Room:</span>
                  </p>
                </div>
                <div className="col-7">{roomDetail.name}</div>
              </div>
            </div>
          </div>
          <div className="row ml-1 mb-1">
            <div className="col-4">
              <p>
                <i className="fa fa-calendar" /> <span>Booking Date:</span>
              </p>
            </div>
            <div className="col-7">{formatDate(currentDate)}</div>
          </div>
          <div className="row ml-1 mb-1">
            <div className="col-4">
              <p>
                <i className="fa fa-calendar" />
                <span>Meeting Date:</span>
              </p>
            </div>
            <div className="col-7">
              <FormGroup>
                <Input
                  type="datetime-local"
                  id="meetingDate"
                  name="meetingDate"
                  placeholder="meetingDate"
                  value={meetingDate}
                  onChange={handleOnChange}
                  valid={meetingDateError === ""}
                  invalid={meetingDateError !== ""}
                  onBlur={handleValidate}
                />
                <FormFeedback>{meetingDateError}</FormFeedback>
              </FormGroup>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmitBooking}>
            Booking
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Booking;
