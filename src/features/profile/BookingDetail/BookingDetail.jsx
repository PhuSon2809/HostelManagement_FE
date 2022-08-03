import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Tooltip } from "reactstrap";
import Swal from "sweetalert2";
import BookingAPI from "../../../apis/bookingApi";
import formatDate from "../../../utils/formatDate";
import DialogBooking from "../dialogBooking/DialogBooking";
import "./bookingDetail.scss";

BookingDetail.propTypes = {
  booking: PropTypes.object,
  index: PropTypes.number,
};

function BookingDetail({ booking, index, reload }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const handleDeleteBooking = async () => {
    try {
      await BookingAPI.deleteBooking(booking.id);

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
        <a href="#" id="TooltipExample" className="nav-link p-0">
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
        >
          <CancelIcon />
        </IconButton>
        <DialogBooking
          booking={booking}
          handleDeleteBooking={handleDeleteBooking}
        />
      </td>
    </tr>
  );
}

export default BookingDetail;
