import axiosClient from "./axiosClient";

const BookingAPI = {
  async getBookingById(id) {
    const data = await axiosClient.getWithId("/Bookings", id);
    return data;
  },
};

export default BookingAPI;