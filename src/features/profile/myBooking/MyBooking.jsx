import React, { useEffect, useState } from "react";
import "./myBooking.scss";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import BookingAPI from "../../../apis/bookingApi";

function MyBooking(props) {
  const current = useSelector((state) => state.login.infoUser);
  console.log(current.id);
  const [bookings, setBookings] = useState([]);

  const fetchData = async () => {
    const bookingApi = await BookingAPI.getBookingById(current.id);
    setBookings(bookingApi.data);
    console.log("bookings: ", bookings);
  };

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log("Fail to get bookings");
    }
  }, [current.id])

  return (
    <div className="myBooking">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Hostel</th>
            <th>Room</th>
            <th>Booking date</th>
            <th>Meeting date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MyBooking;
