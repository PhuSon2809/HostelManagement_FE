import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LockIcon from "@mui/icons-material/Lock";
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from "@mui/material/CircularProgress";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Swal from "sweetalert2";
import "../Layout/css/owner.css";
import {
  deleteBooking,
  getListBooking,
  updateBooking,
} from "../../../redux/actions/ownerBooking";
import formatDate from "../../../utils/formatDate";
import Delete from "@mui/icons-material/Delete";

BookingManagement.prototype = {};

function BookingManagement() {
  const current = useSelector((state) => state.login.infoUser);
  // const listBills = useSelector((state) => state.ownerBill);
  const listBooking = useSelector((state) => state.ownerBooking.bookings);
  const totalRecord = useSelector((state) => state.ownerBooking.totalRecord);
  console.log("listBooking: ", listBooking);

  // CUT TEXT
  const truncate = (input) => {
    if (input.length > 19) {
      return input.substring(0, 70) + "...";
    } else {
      return input;
    }
  };

  const [filters, setFilters] = useState({
    pageIndex: 1,
    pageSize: 8,
  });

  const dispatch = useDispatch();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [bookingClicked, setBookingClicked] = useState({});

  useEffect(() => {
    dispatch(getListBooking(current.id, filters));
  }, []);

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const handleOpenConfirmDelete = (booking) => {
    setOpenConfirm(true);
    setBookingClicked(booking);
  };

  const handleDeleteBooking = async () => {
    console.log("bookingClicked: ", bookingClicked);
    try {
      dispatch(deleteBooking(bookingClicked.id, current.id));
      setOpenConfirm(false);
      await Swal.fire(
        "Delete booking successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something wrong!",
      });
    }
  };

  const handleUpdateBooking = async (booking) => {
    try {
      const newBooking = {
        id: booking.id,
        accountId: current.id,
        roomId: booking.room.id,
        bookingDate: booking.bookingDate,
        meetingDate: booking.meetingDate,
        status: true,
      };
      dispatch(updateBooking(booking.id, newBooking, current.id));
      await Swal.fire(
        "Update booking successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something wrong!",
      });
    }
  };

  const handlePageChange = (e, page) => {
    //     const newFilter = {
    //         pageIndex: page,
    //         pageSize: 8,
    //     }
    //     dispatch(getRoomByAccountId(current.id, newFilter));
    //     setFilters(prevFilters => ({
    //         ...prevFilters,
    //         pageIndex: page
    //     }))
  };

  return (
    <>
      <div className="title-page mb-5">
        <ManageAccountsIcon />
        <span>Booking Management</span>
      </div>

      <div className="row">
        {/* <div className="card-box"> */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Hostel's name</th>
                <th>Room's name</th>
                <th>Booking date</th>
                <th>Meeting date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listBooking &&
                listBooking.map((booking, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{booking.room.hostel.name}</td>
                    <td>{booking.room.name}</td>
                    <td>{formatDate(booking.bookingDate)}</td>
                    <td>{formatDate(booking.meetingDate)}</td>
                    {/* <td>{formatDate(booking.bookingDate)}</td>
                        <td>{formatDate(booking.meetingDate)}</td> */}
                    <td>
                      {booking.status ? (
                        <label className="label label-active">
                          {booking.status}
                        </label>
                      ) : (
                        <label className="label label-disabled">
                          {booking.status}
                        </label>
                      )}
                    </td>

                    {/* <td>{bill.room.hostel.name}</td>
                        <td>{bill.room.name}</td>
                        <td>{bill.service.name}</td>
                        <td>{bill.quantity}</td>
                        <td>{bill.price}</td>
                        <td>{bill.total}</td>
   */}
                    <td>
                      <a
                        className="btn btn-edit"
                        style={{backgroundColor: '#007bff !important'}}
                        onClick={() => handleUpdateBooking(booking)}
                      >
                        <Tooltip title="Edit">
                          <DoneIcon />
                        </Tooltip>
                      </a>
                      <a
                        className="btn btn-disable"
                        onClick={() => handleOpenConfirmDelete(booking)}
                      >
                        <Tooltip title="Delete booking">
                          <Delete />
                        </Tooltip>
                      </a>
                    </td>
                  </tr>
                ))}

              {listBooking.length < 1 && (
                <tr>
                  <td colSpan="7">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={Math.ceil(totalRecord / filters.pageSize)}
              // color="secondary"
              page={filters.pageIndex}
              onChange={handlePageChange}
            />
          </Box>
        </div>
        {/* </div>  */}
      </div>
      {/* <Pagination sx={{display: 'flex', justifyContent: 'center'}}
        count={Math.ceil(totalRecord / filters.pageSize)}
        // color="secondary"
        page={filters.pageIndex}
        onChange={handlePageChange}
        /> */}

      <Dialog open={openConfirm} onClose={handleClose}>
        <DialogTitle
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          Are you sure to delete {bookingClicked.name}
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <ShowImage images={bookingClicked?.images} /> */}
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteBooking}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default BookingManagement;
