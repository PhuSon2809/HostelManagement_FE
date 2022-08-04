import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Dialog, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import Swal from "sweetalert2";
import BookingAPI from "../../../apis/bookingApi";
import formatDate from "../../../utils/formatDate";
import "./bookingDetail.scss";

BookingDetail.propTypes = {
  booking: PropTypes.object,
  index: PropTypes.number,
};

function BookingDetail({ booking, index, reload }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [bookingClicked, setBookingClicked] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClose = () => {
    setOpenConfirm(false);
  };

  console.log("bookingClicked: ", bookingClicked);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleOnClickDelete = (bookingClk) => {
    setBookingClicked(bookingClk);
    setOpenConfirm(true);
    console.log("bookingId onClick: ", bookingClk);
  };

  const handleDeleteBooking = async () => {
    try {
      await BookingAPI.deleteBooking(booking.id);
      setOpenConfirm(false);
      await Swal.fire(
        "Delete successfully",
        "Click Button to continute!",
        "success"
      );
      reload();
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <tr className="bookingDetail">
      <th scope="row">{index + 1}</th>
      <td>
        <a href="#" id="TooltipExample" className="nav-link p-0" style={{color: "#1b3453"}}>
          {booking.room.hostel.account.name}
        </a>
        <Tooltip isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
          {booking.room.hostel.account.phone}
        </Tooltip>
      </td>
      <td>{booking.room.hostel.name}</td>
      <td>{booking.room.name}</td>
      <td>{formatDate(booking.bookingDate)}</td>
      <td>{formatDate(booking.meetingDate)}</td>
      {booking.room.status ? <td>Booked</td> : <td>Cancel</td>}

      <td className="p-0">
        <IconButton
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="mt-1"
          onClick={() => handleOnClickDelete(booking)}
        >
          <CancelIcon />
        </IconButton>
      </td>

      <Dialog
        open={openConfirm}
        onClose={handleClose}
        fullWidth="true"
        maxWidth="md"
        sx={{ height: "700px", padding: "100px" }}
      >
        <div className="dialog">
          <Box sx={{ padding: "30px" }}>
            <div className="modal-header text-center">
              <h3 className="modal-title" id="exampleModalLongTitle">
                Booking
              </h3>
            </div>
            <div className="modal-body">
              <div className="row ml-1">
                <div className="col-12 col-md-6">
                  <div className="row mb-1">
                    <div className="col-5">
                      <p>
                        <i className="fa fa-user" /> <span>Owner:</span>
                      </p>
                    </div>
                    <div className="col-7">
                      {bookingClicked?.room?.hostel.account.name}
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-5">
                      <p>
                        <i className="fa fa-phone" /> <span>Phone:</span>
                      </p>
                    </div>
                    <div className="col-7">
                      {bookingClicked?.room?.hostel.account.phone}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="row mb-1">
                    <div className="col-5">
                      <p>
                        <i className="fa fa-home" /> <span>Hostel:</span>
                      </p>
                    </div>
                    <div className="col-7">
                      {bookingClicked?.room?.hostel?.name}
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-5">
                      <p>
                        <i className="fa fa-bed" /> <span>Room:</span>
                      </p>
                    </div>
                    <div className="col-7">{bookingClicked?.room?.name}</div>
                  </div>
                </div>
              </div>
              <div className="row ml-1 mb-1">
                <div className="col-4">
                  <p>
                    <i className="fa fa-calendar" /> <span>Booking Date:</span>
                  </p>
                </div>
                <div className="col-7">{formatDate(bookingClicked.bookingDate)}</div>
              </div>
              <div className="row ml-1 mb-1">
                <div className="col-4">
                  <p>
                    <i className="fa fa-calendar" />
                    <span> Meeting Date:</span>
                  </p>
                </div>
                <div className="col-7">{formatDate(bookingClicked.meetingDate)}</div>
              </div>
            </div>
            <div className="modal-footer pt-0 pb-0">
              <p className="m-auto">Do you want delete booking?</p>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancle
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteBooking}
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </Box>
        </div>
      </Dialog>

      {/* <DialogBooking
        booking={booking}
        handleDeleteBooking={handleDeleteBooking}
      /> */}
    </tr>
  );
}

export default BookingDetail;
