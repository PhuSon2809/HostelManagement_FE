import axiosClient from "./axiosClient";

const BookingAPI = {
  async getBookingById(id) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWithId(`/Bookings?accountId=${id}`);
      return data;
    }
  },

  async createNewBooking(data) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const res = await axiosClient.post("/Bookings", data);
      return res;
    }
  },

  async deleteBooking(id) {
    console.log("Booking id: ", id);
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const res = await axiosClient.deleteWithId("/Bookings", id);
      return res;
    }
  },
};

export default BookingAPI;
