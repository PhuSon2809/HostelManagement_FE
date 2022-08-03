import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import BookingAPI from "../../../apis/bookingApi";
import BookingDetail from "../BookingDetail/BookingDetail";
import "./bookingList.scss";

function BookingList(props) {
  const current = useSelector((state) => state.login.infoUser);
  const [bookings, setBookings] = useState([]);
  const [reload, setReload] = useState(false);

  const fetchData = async () => {
    const bookingApi = await BookingAPI.getBookingById(current.id);
    setBookings(bookingApi.data);
    console.log("bookings: ", bookingApi);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get bookings");
    }
  }, [current.id, reload]);

  return (
    <div className="bookingList">
      {bookings?.length <= 0 ? (
        <h2 className="Opps">
          <span>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70 }} />
            Opps
          </span>{" "}
          - You have no have another booking
        </h2>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Owner</th>
              <th>Hostel</th>
              <th>Room</th>
              <th>Booking date</th>
              <th>Meeting date</th>
              <th>Status</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingDetail
                key={booking.id}
                booking={booking}
                index={index}
                reload={() => setReload(!reload)}
              />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default BookingList;
